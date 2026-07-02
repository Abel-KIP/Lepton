"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { getWhatsAppUrl, getCallUrl, IMAGES } from "@/lib/utils";
import { Phone, MessageCircle, ChevronDown, Play } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 30 });
  const parallaxX = useTransform(smoothX, [0, 1], [-25, 25]);
  const parallaxY = useTransform(smoothY, [0, 1], [-15, 15]);

  // Particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const pts = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.2 + 0.3,
      a: Math.random() * 0.5 + 0.1,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      // Draw connections
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(212,175,55,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,175,55,${p.a})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative w-full min-h-[70vh] md:min-h-screen overflow-hidden" id="hero">
      {/* Full bleed background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ x: parallaxX, y: parallaxY, scale: 1.08 }}
      >
        <Image
          src={IMAGES.hero}
          alt="Advanced CCTV Security System"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Layered overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.75) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 15% 50%, rgba(212,175,55,0.18) 0%, transparent 55%)",
        }}
      />

      {/* Particle network */}
      <canvas ref={canvasRef} className="hidden md:block absolute inset-0 pointer-events-none z-[2]" />

      {/* Scan line decoration */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-40"
        style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-[70vh] md:min-h-screen flex flex-col justify-center px-4 md:px-16 xl:px-24 max-w-screen-2xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          className="flex items-center gap-2 mb-8"
        >
          <div className="glass-gold rounded-full px-4 py-1.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase">
              Nairobi, Kenya — Est. 2016
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.0, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="font-display font-bold leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
          >
            Advanced Security
            <br />
            <span className="text-gradient text-glow">Solutions</span>
            <br />
            <span className="text-white/90">For Homes &</span>
            <br />
            <span className="text-white/90">Businesses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.7 }}
            className="text-white/55 text-base lg:text-xl leading-relaxed mb-8 max-w-full sm:max-w-xl"
          >
            Professional CCTV, Alarm and Door Access Control Systems
            designed to protect what matters most.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.4, duration: 0.7 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <a
              href="#contact"
              className="group relative flex items-center gap-2 px-4 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-[#0a0a0a] text-base transition-all hover:scale-105 overflow-hidden"
              style={{ background: "linear-gradient(135deg,#D4AF37,#F5E070)" }}
            >
              <span className="relative z-10">Get a Free Consultation</span>
            </a>
            <a
              href={getWhatsAppUrl(
                "Hello Lepton Technologies, I would like a free consultation about your security systems."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-base transition-all hover:scale-105 glass border border-gold/25 hover:border-gold/50"
            >
              <MessageCircle size={18} className="text-[#D4AF37]" /> WhatsApp Us
            </a>
            <a
              href={getCallUrl()}
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-[#D4AF37] text-base transition-all hover:scale-105 border border-gold/30 hover:border-gold/60"
            >
              <Phone size={18} /> Call Now
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.6, duration: 0.7 }}
            className="hidden sm:flex flex-wrap gap-8"
          >
            {[
              { target: 500, l: "Projects", suffix: "+" },
              { target: 8, l: "Years", suffix: "+" },
              { target: 1200, l: "Clients", suffix: "+" },
              { target: 3500, l: "Systems", suffix: "+" },
            ].map(({ target, l, suffix }) => (
              <div key={l}>
                <p className="font-display text-2xl font-bold text-gradient">
                  <AnimatedCounter target={target} suffix={suffix} />
                </p>
                <p className="text-white/40 text-xs tracking-wider uppercase mt-0.5">{l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — small animated access control item (one at a time) */}
        <motion.div
          className="absolute right-8 xl:right-20 top-1/2 -translate-y-1/2 hidden xl:block w-72"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            opacity: { delay: 3.8, duration: 0.9, ease: [0.23, 1, 0.32, 1] },
            x: { delay: 3.8, duration: 0.9, ease: [0.23, 1, 0.32, 1] },
          }}
        >
          <div className="glass rounded-2xl overflow-hidden border border-gold/20">
            {/* Item image */}
            <div className="relative h-44">
              <Image
                src={IMAGES.fingerprint}
                alt="Access Control"
                fill
                className="object-cover"
                sizes="288px"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }} />
              <div className="absolute bottom-3 left-3">
                <span className="text-xs text-[#D4AF37] font-medium tracking-wider uppercase">Featured</span>
                <p className="text-white font-semibold text-sm mt-0.5">Fingerprint Access Systems</p>
              </div>
            </div>

            {/* Quote CTA as before */}
            <div className="px-4 py-3 flex items-center justify-between">
              <div>
                <p className="text-white/50 text-xs">Starting from</p>
                <p className="text-[#D4AF37] font-bold text-sm">Get Free Quote</p>
              </div>
              <a
                href={getWhatsAppUrl(
                  "Hello Lepton Technologies, I would like to get a quote for Fingerprint Access Systems."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0a0a0a]"
                style={{ background: "linear-gradient(135deg,#D4AF37,#F5E070)" }}
              >
                Enquire
              </a>
            </div>
          </div>

          <div className="float-delay-1 glass rounded-2xl p-4 mt-4 border border-gold/15 flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(212,175,55,0.15)" }}
            >
              <Play size={16} className="text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-white text-xs font-semibold">Live Monitoring</p>
              <p className="text-white/40 text-xs mt-0.5">24/7 Remote Access</p>
            </div>
            <div className="ml-auto w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#trust"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/30 hover:text-[#D4AF37] transition-colors"
      >
        <span className="text-[10px] tracking-[0.35em] uppercase">Discover</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
