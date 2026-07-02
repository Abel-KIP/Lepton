"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl, IMAGES } from "@/lib/utils";

const sectors = [
  {
    label: "Schools & Universities",
    desc: "Perimeter CCTV, access control on gates and labs, fire alarms and panic buttons — keeping students and staff safe.",
    img: IMAGES.school,
    msg: "Hello Lepton Technologies, I need security solutions for a school / university.",
    span: "col-span-1 row-span-2",
  },
  {
    label: "Hospitals & Clinics",
    desc: "Secure restricted areas, monitor patient zones and control staff access with biometric systems.",
    img: IMAGES.hospital,
    msg: "Hello Lepton Technologies, I need security solutions for a hospital or clinic.",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Homes & Villas",
    desc: "Smart CCTV, motion sensors, alarm systems and smart locks for complete home protection.",
    img: IMAGES.house,
    msg: "Hello Lepton Technologies, I need home security solutions.",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Industries & Factories",
    desc: "Heavy-duty outdoor cameras, perimeter alarms and time-attendance systems for large industrial sites.",
    img: IMAGES.industry,
    msg: "Hello Lepton Technologies, I need security solutions for an industrial / factory site.",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Churches & Places of Worship",
    desc: "Discreet CCTV coverage, access control and emergency alarm systems that respect the environment.",
    img: IMAGES.church,
    msg: "Hello Lepton Technologies, I need security solutions for a church or place of worship.",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Estates & Gated Communities",
    desc: "Boom gates, RFID vehicle access, intercom systems and estate-wide CCTV networks.",
    img: IMAGES.estate,
    msg: "Hello Lepton Technologies, I need security solutions for a gated estate or community.",
    span: "col-span-2 row-span-1",
  },
  {
    label: "Cities, Towns & Public Spaces",
    desc: "Wide-area surveillance networks, traffic cameras and smart city security infrastructure.",
    img: IMAGES.town,
    msg: "Hello Lepton Technologies, I need security solutions for a city / town public space.",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Offices & Corporate Buildings",
    desc: "Multi-floor CCTV, biometric access, visitor management and 24/7 monitoring for corporate premises.",
    img: IMAGES.office,
    msg: "Hello Lepton Technologies, I need security solutions for an office or corporate building.",
    span: "col-span-1 row-span-1",
  },
  {
    label: "Warehouses & Logistics",
    desc: "High-coverage camera arrays, motion sensors and alarm systems for large storage facilities.",
    img: IMAGES.warehouse,
    msg: "Hello Lepton Technologies, I need security solutions for a warehouse or logistics site.",
    span: "col-span-1 row-span-1",
  },
];

export default function SectorsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="sectors" ref={ref} className="relative py-24 overflow-hidden" style={{ background: "#0d0d0d" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 100% 50%, rgba(212,175,55,0.06) 0%, transparent 55%)" }} />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-10"
        >
          <p className="text-[#D4AF37] text-xs font-semibold tracking-[0.4em] uppercase mb-3">Who We Serve</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)" }}>
              We Secure <span className="text-gradient">Every Space</span>
            </h2>
            <p className="text-white/35 text-sm max-w-xs leading-relaxed">
              From a single home to an entire city — Lepton Technologies delivers the right security system for every environment.
            </p>
          </div>
        </motion.div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {sectors.map(({ label, desc, img, msg, span }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className={`group relative rounded-2xl overflow-hidden border border-white/6 hover:border-gold/30 transition-all cursor-default ${
                // Make first card span 2 rows on large screens
                i === 0 ? "lg:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <Image
                src={img}
                alt={label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-108"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                quality={80}
              />

              {/* Gradient overlay — heavier at bottom */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.1) 100%)" }}
              />
              {/* Hover tint */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: "linear-gradient(to top, rgba(212,175,55,0.18) 0%, transparent 60%)" }}
              />

              {/* Content */}
              <div className="absolute bottom-0 inset-x-0 p-4">
                <h3 className="font-display text-sm lg:text-base font-bold text-white mb-1.5 leading-tight">
                  {label}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                  {desc}
                </p>
                <a
                  href={getWhatsAppUrl(msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-semibold text-[#0a0a0a] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  style={{ background: "linear-gradient(135deg,#D4AF37,#F5E070)" }}
                >
                  <MessageCircle size={11} /> Get a Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip — scrolling sector names */}
        <div
          className="mt-10 overflow-hidden"
          style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)" }}
        >
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...sectors, ...sectors].map(({ label }, i) => (
              <span key={i} className="flex items-center gap-3 text-white/20 text-sm whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 flex-shrink-0" />
                {label}
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
