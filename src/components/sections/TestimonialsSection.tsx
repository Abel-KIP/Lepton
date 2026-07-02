"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { IMAGES } from "@/lib/utils";

const testimonials = [
  {
    name: "James Mwangi",
    role: "Homeowner · Westlands",
    text: "Lepton installed a complete 4K CCTV system across my property. The work was immaculate, the cameras are crystal clear, and their team was punctual and professional throughout.",
    img: IMAGES.house,
    rating: 5,
  },
  {
    name: "Sarah Odhiambo",
    role: "Business Owner · Karen",
    text: "We needed alarm systems and biometric access control for our office. Lepton delivered exactly what we needed — on time, on budget, with zero headaches.",
    img: IMAGES.office,
    rating: 5,
  },
  {
    name: "Peter Kamau",
    role: "Property Manager · Kilimani",
    text: "Fast response, excellent equipment and they explained everything clearly. Our tenants feel much safer now. I recommend Lepton to anyone serious about security.",
    img: IMAGES.building,
    rating: 5,
  },
  {
    name: "Grace Njoroge",
    role: "School Administrator · Nairobi",
    text: "The face recognition access system has completely transformed our gate security. Parents and staff trust the system and the setup was seamless.",
    img: IMAGES.fingerprint,
    rating: 5,
  },
  {
    name: "David Otieno",
    role: "Warehouse Owner · Industrial Area",
    text: "4K cameras throughout our 10,000sqft facility with live mobile monitoring. Fantastic installation. The quality of service matched the quality of the equipment.",
    img: IMAGES.warehouse,
    rating: 5,
  },
  {
    name: "Mary Wanjiku",
    role: "Villa Owner · Lavington",
    text: "Smart alarm integrated with my phone. I get instant alerts anywhere in the world. Lepton truly delivers premium security — this is what I expected and more.",
    img: IMAGES.house,
    rating: 5,
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="flex-shrink-0 w-80 glass rounded-2xl overflow-hidden border border-white/8 hover:border-gold/25 transition-colors group">
      {/* Image */}
      <div className="relative h-32 w-full overflow-hidden">
        <Image src={t.img} alt={t.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="320px" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))" }} />
        <Quote
          size={28}
          className="absolute bottom-3 right-3 text-[#D4AF37] opacity-60"
          style={{ fill: "rgba(212,175,55,0.15)" }}
        />
      </div>
      {/* Content */}
      <div className="p-5">
        <div className="flex gap-0.5 mb-3">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} size={12} className="text-[#D4AF37]" style={{ fill: "#D4AF37" }} />
          ))}
        </div>
        <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-4">"{t.text}"</p>
        <div>
          <p className="text-white font-semibold text-sm">{t.name}</p>
          <p className="text-[#D4AF37]/60 text-xs mt-0.5">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="testimonials" ref={ref} className="relative py-24 overflow-hidden" style={{ background: "#0d0d0d" }}>
      <div className="absolute inset-0 opacity-50" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.07) 0%, transparent 55%)" }} />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="text-[#D4AF37] text-xs font-semibold tracking-[0.4em] uppercase mb-3">Client Reviews</p>
            <h2
              className="font-display font-bold text-white"
              style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)" }}
            >
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              {[IMAGES.house, IMAGES.office, IMAGES.building, IMAGES.warehouse].map((img, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0d0d0d] overflow-hidden relative">
                  <Image src={img} alt="" fill className="object-cover" sizes="32px" />
                </div>
              ))}
            </div>
            <p className="text-white/40 text-sm">1,200+ happy clients</p>
          </div>
        </motion.div>
      </div>

      {/* Infinite marquee */}
      <div
        className="marquee-container overflow-hidden"
        style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)" }}
      >
        <div className="marquee-track flex gap-5 w-max">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
