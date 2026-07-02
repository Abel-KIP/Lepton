"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { getWhatsAppUrl, getCallUrl, IMAGES } from "@/lib/utils";
import { Phone, MessageCircle, Shield } from "lucide-react";

export default function CtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ minHeight: "60vh" }}>
      {/* Full-bleed image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.city}
          alt="Secure Your Property"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={80}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.82) 100%)",
          }}
        />
        {/* Gold vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 120%, rgba(212,175,55,0.2) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Gold line top */}
      <div className="absolute top-0 inset-x-0 gold-line" />

      <div className="relative max-w-5xl mx-auto px-5 lg:px-10 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
            style={{ background: "rgba(212,175,55,0.12)", border: "1px solid rgba(212,175,55,0.3)" }}
          >
            <Shield size={13} className="text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-medium tracking-widest uppercase">
              Get Protected Today
            </span>
          </div>

          <h2
            className="font-display font-bold text-white leading-tight mb-6 text-glow"
            style={{ fontSize: "clamp(2.2rem,5vw,4rem)" }}
          >
            Secure Your Property
            <br />
            With The <span className="text-gradient">Latest Technology</span>
          </h2>

          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join 1,200+ satisfied clients across Nairobi. Get your free consultation today — no obligation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getCallUrl()}
              className="flex items-center justify-center gap-2.5 px-9 py-4 rounded-full font-semibold text-white text-base transition-all hover:scale-105 glass border border-white/15 hover:border-white/30"
            >
              <Phone size={18} /> Call Now
            </a>
            <a
              href={getWhatsAppUrl(
                "Hello Lepton Technologies, I would like to secure my property. Please contact me."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-9 py-4 rounded-full font-semibold text-[#0a0a0a] text-base transition-all hover:scale-105 glow-gold"
              style={{ background: "linear-gradient(135deg,#D4AF37,#F5E070)" }}
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2.5 px-9 py-4 rounded-full font-semibold text-[#D4AF37] text-base transition-all hover:scale-105 border border-gold/40 hover:border-gold/70"
            >
              Request Free Consultation
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 gold-line" />
    </section>
  );
}
