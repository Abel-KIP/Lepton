"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { IMAGES } from "@/lib/utils";

const gallery = [
  { id: 1, label: "CCTV — Office Complex, Westlands", cat: "CCTV", img: IMAGES.office, tall: true },
  { id: 2, label: "Alarm System — Residential Villa, Karen", cat: "Alarm", img: IMAGES.house, tall: false },
  { id: 3, label: "Biometric Access — Corporate HQ", cat: "Access", img: IMAGES.biometric, tall: false },
  { id: 4, label: "4K Camera Array — Warehouse, Industrial Area", cat: "CCTV", img: IMAGES.warehouse, tall: true },
  { id: 5, label: "Smart Home Alarm — Lavington Villa", cat: "Alarm", img: IMAGES.house, tall: false },
  { id: 6, label: "Face Recognition — School, Kilimani", cat: "Access", img: IMAGES.access1, tall: false },
  { id: 7, label: "PTZ System — Parking Facility", cat: "CCTV", img: IMAGES.cctv2, tall: false },
  { id: 8, label: "Fire Alarm — Restaurant, CBD", cat: "Alarm", img: IMAGES.fire_alarm, tall: true },
  { id: 9, label: "RFID Access — Hospital, Upperhill", cat: "Access", img: IMAGES.fingerprint, tall: false },
  { id: 10, label: "Control Room — Corporate HQ", cat: "CCTV", img: IMAGES.control_room, tall: false },
  { id: 11, label: "Perimeter Alarm — Factory", cat: "Alarm", img: IMAGES.security_guard, tall: false },
  { id: 12, label: "Smart Lock — Luxury Apartment", cat: "Access", img: IMAGES.smart_lock, tall: false },
];

const filters = ["All", "CCTV", "Alarm", "Access"];

export default function GallerySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [filter, setFilter] = useState("All");
  const [lb, setLb] = useState<(typeof gallery)[0] | null>(null);

  const items = filter === "All" ? gallery : gallery.filter((g) => g.cat === filter);

  return (
    <section id="gallery" ref={ref} className="relative py-24 overflow-hidden" style={{ background: "#0a0a0a" }}>
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse at 70% 30%, rgba(212,175,55,0.08) 0%, transparent 55%)" }} />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <p className="text-[#D4AF37] text-xs font-semibold tracking-[0.4em] uppercase mb-3">Our Work</p>
            <h2
              className="font-display font-bold text-white"
              style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)" }}
            >
              Project <span className="text-gradient">Gallery</span>
            </h2>
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="flex gap-2 flex-wrap"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  filter === f
                    ? "text-[#0a0a0a]"
                    : "glass text-white/50 hover:text-white border border-white/8"
                }`}
                style={filter === f ? { background: "linear-gradient(135deg,#D4AF37,#F5E070)" } : {}}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          <AnimatePresence>
            {items.map(({ id, label, img, tall }, i) => (
              <motion.div
                key={id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="break-inside-avoid mb-4 group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ height: tall ? 340 : 220 }}
                onClick={() => setLb(gallery.find((g) => g.id === id)!)}
              >
                <Image
                  src={img}
                  alt={label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(0,0,0,0.55)" }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="glass-gold rounded-full p-3">
                    <ZoomIn size={20} className="text-[#D4AF37]" />
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-medium">{label}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lb && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
            onClick={() => setLb(null)}
          >
            <motion.div
              initial={{ scale: 0.88, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.88, y: 20 }}
              transition={{ ease: [0.23, 1, 0.32, 1] }}
              className="relative w-full max-w-3xl rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                <Image src={lb.img} alt={lb.label} fill className="object-cover" sizes="800px" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent 50%)" }} />
                <div className="absolute bottom-5 left-6">
                  <p className="text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-1">{lb.cat}</p>
                  <p className="text-white font-semibold text-lg">{lb.label}</p>
                </div>
              </div>
              <button
                className="absolute top-4 right-4 w-9 h-9 glass rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
                onClick={() => setLb(null)}
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
