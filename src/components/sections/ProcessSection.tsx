"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { IMAGES } from "@/lib/utils";

const steps = [
  { n: "01", label: "Consultation", desc: "We listen to your security concerns and goals." },
  { n: "02", label: "Site Survey", desc: "Our team visits to assess your property's needs." },
  { n: "03", label: "System Design", desc: "A custom security plan designed specifically for you." },
  { n: "04", label: "Installation", desc: "Fast, clean installation by certified professionals." },
  { n: "05", label: "Testing & QA", desc: "Full testing, calibration and quality assurance." },
  { n: "06", label: "Ongoing Support", desc: "Maintenance, upgrades and 24/7 emergency support." },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="process" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.control_room}
          alt="Security Control Room"
          fill
          className="object-cover"
          sizes="100vw"
          quality={70}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.85) 100%)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-[#D4AF37] text-xs font-semibold tracking-[0.4em] uppercase mb-3">
            How It Works
          </p>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)" }}
          >
            Our <span className="text-gradient">Process</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map(({ n, label, desc }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="group glass rounded-2xl p-7 border border-white/6 hover:border-gold/25 transition-all hover-lift relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: "radial-gradient(ellipse at top left, rgba(212,175,55,0.07) 0%, transparent 60%)" }}
              />
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-bold text-[#0a0a0a] text-sm transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg,#D4AF37,#F5E070)" }}
                >
                  {n}
                </div>
                <div className="relative z-10">
                  <h3 className="font-display text-lg font-bold text-white mb-1.5">{label}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
