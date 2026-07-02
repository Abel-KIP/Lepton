"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Wrench, Headphones, BadgeDollarSign } from "lucide-react";

const badges = [
  { icon: MapPin, label: "Nairobi Based" },
  { icon: Wrench, label: "Professional Installation" },
  { icon: Headphones, label: "24/7 Fast Support" },
  { icon: BadgeDollarSign, label: "Affordable Solutions" },
];

const stats = [
  { end: 500, suffix: "+", label: "Projects Completed" },
  { end: 8, suffix: "+", label: "Years Experience" },
  { end: 1200, suffix: "+", label: "Happy Clients" },
  { end: 3500, suffix: "+", label: "Systems Installed" },
];

function AnimatedNumber({ end, suffix }: { end: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const inc = Math.ceil(end / 55);
    const id = setInterval(() => {
      cur = Math.min(cur + inc, end);
      setVal(cur);
      if (cur >= end) clearInterval(id);
    }, 25);
    return () => clearInterval(id);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function TrustSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="trust" ref={ref} className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#0a0a0a 0%,#111 100%)" }} />
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(212,175,55,0.12) 0%, transparent 60%)" }} />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        {/* Badges row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {badges.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="glass-gold rounded-full flex items-center gap-2.5 px-5 py-2.5"
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#D4AF37,#F5E070)" }}
              >
                <Icon size={13} className="text-[#0a0a0a]" />
              </div>
              <span className="text-sm text-white/80 font-medium whitespace-nowrap">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map(({ end, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="relative glass rounded-2xl p-7 text-center overflow-hidden group hover-lift border border-white/5 hover:border-gold/30 transition-colors"
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: "radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)" }}
              />
              <p className="font-display text-4xl xl:text-5xl font-bold text-gradient mb-1.5 relative z-10">
                <AnimatedNumber end={end} suffix={suffix} />
              </p>
              <p className="text-white/40 text-sm tracking-wide relative z-10">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
