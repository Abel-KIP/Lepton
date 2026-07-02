"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Wrench, Star, Sliders, DollarSign, Zap, HeartHandshake } from "lucide-react";
import { IMAGES } from "@/lib/utils";

const reasons = [
  { icon: Wrench, title: "Professional Installation", desc: "Certified technicians with 8+ years of hands-on experience across Nairobi." },
  { icon: Star, title: "Quality Equipment", desc: "Only premium, industry-tested brands — Hikvision, Dahua, Ajax and more." },
  { icon: Sliders, title: "Customized Solutions", desc: "No cookie-cutter installs. Every system is tailored to your property." },
  { icon: DollarSign, title: "Competitive Pricing", desc: "World-class security at transparent, fair prices. No hidden costs." },
  { icon: Zap, title: "Fast Response", desc: "Same-day site surveys and rapid deployment across Nairobi and beyond." },
  { icon: HeartHandshake, title: "Ongoing Support", desc: "Post-installation maintenance, remote monitoring setup and 24/7 hotline." },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="why-us" ref={ref} className="relative py-24 overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.building}
          alt="Professional Security Installation"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.80) 60%, rgba(0,0,0,0.90) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 0% 50%, rgba(212,175,55,0.12) 0%, transparent 50%)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <p className="text-[#D4AF37] text-xs font-semibold tracking-[0.4em] uppercase mb-3">
              Why Lepton
            </p>
            <h2
              className="font-display font-bold text-white leading-tight"
              style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)" }}
            >
              Why <span className="text-gradient">Choose Us</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="text-white/40 max-w-sm text-sm leading-relaxed lg:text-right"
          >
            Trusted by 1,200+ clients across Nairobi. From homes to hospitals, we secure what matters most.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="group glass rounded-2xl p-7 hover-lift border border-white/5 hover:border-gold/25 transition-colors relative overflow-hidden"
            >
              {/* Corner glow */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                style={{ background: "radial-gradient(circle, rgba(212,175,55,0.25), transparent)" }}
              />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 relative z-10"
                style={{
                  background: "linear-gradient(135deg, rgba(212,175,55,0.18), rgba(212,175,55,0.06))",
                  border: "1px solid rgba(212,175,55,0.3)",
                }}
              >
                <Icon size={22} className="text-[#D4AF37]" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2 relative z-10">{title}</h3>
              <p className="text-white/45 text-sm leading-relaxed relative z-10">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
