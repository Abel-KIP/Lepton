"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { getWhatsAppUrl, getCallUrl, IMAGES } from "@/lib/utils";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";

type Form = { name: string; phone: string; service: string; message: string };

const services = [
  "CCTV Solutions",
  "Alarm Systems",
  "Door Access Control",
  "Multiple Services",
  "Other",
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const onSubmit = (data: Form) => {
    const msg = `Hello Lepton Technologies, I would like information about ${data.service}.\n\nName: ${data.name}\nPhone: ${data.phone}\nMessage: ${data.message || "Please contact me."}`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 overflow-hidden" style={{ background: "#0a0a0a" }}>
      <div className="absolute inset-0 opacity-50" style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(212,175,55,0.07) 0%, transparent 55%)" }} />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-14"
        >
          <p className="text-[#D4AF37] text-xs font-semibold tracking-[0.4em] uppercase mb-3">Get In Touch</p>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)" }}
          >
            Contact <span className="text-gradient">Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left — image + quick contacts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col gap-5"
          >
            {/* Hero image */}
            <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: 280 }}>
              <Image
                src={IMAGES.tech_bg}
                alt="Lepton Technologies Office"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.75))" }} />
              <div className="absolute bottom-5 left-6 right-6">
                <p className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-1">
                  Visit Us
                </p>
                <p className="text-white font-display text-xl font-bold">Lepton Technologies</p>
                <p className="text-white/50 text-sm mt-1 flex items-center gap-1.5">
                  <MapPin size={13} /> Nairobi, Kenya
                </p>
              </div>
            </div>

            {/* Quick contact cards */}
            <a
              href={getCallUrl()}
              className="flex items-center gap-4 glass rounded-2xl p-5 border border-white/6 hover:border-gold/30 transition-all group hover-lift"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                style={{ background: "linear-gradient(135deg,#D4AF37,#F5E070)" }}
              >
                <Phone size={20} className="text-[#0a0a0a]" />
              </div>
              <div>
                <p className="text-white/40 text-xs mb-0.5 uppercase tracking-wider">Call Directly</p>
                <p className="text-white font-semibold text-sm group-hover:text-[#D4AF37] transition-colors">
                  +254 700 000 000
                </p>
              </div>
            </a>

            <a
              href={getWhatsAppUrl(
                "Hello Lepton Technologies, I would like more information about your security services."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass rounded-2xl p-5 border border-white/6 hover:border-green-400/30 transition-all group hover-lift"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
              >
                <MessageCircle size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white/40 text-xs mb-0.5 uppercase tracking-wider">WhatsApp</p>
                <p className="text-white font-semibold text-sm group-hover:text-green-400 transition-colors">
                  Chat Instantly
                </p>
              </div>
            </a>

            <div className="glass rounded-2xl p-5 border border-white/6 flex items-center gap-3">
              <Clock size={16} className="text-[#D4AF37] flex-shrink-0" />
              <div>
                <p className="text-white/70 text-sm">Mon – Sat: <span className="text-white">8:00 AM – 6:00 PM</span></p>
                <p className="text-white/40 text-xs mt-0.5">Emergency support available 24/7</p>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            onSubmit={handleSubmit(onSubmit)}
            className="glass rounded-2xl p-8 border border-white/6 flex flex-col gap-5"
          >
            <h3 className="font-display text-xl font-bold text-white mb-1">Send Us a Message</h3>
            <p className="text-white/40 text-sm mb-2">
              Fill in the form below and we'll respond via WhatsApp instantly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">
                  Your Name *
                </label>
                <input
                  {...register("name", { required: true })}
                  placeholder="Full name"
                  className="w-full rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/25 focus:outline-none transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: errors.name ? "1px solid rgba(239,68,68,0.5)" : "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = errors.name ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.08)")}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">Required</p>}
              </div>
              <div>
                <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">
                  Phone Number *
                </label>
                <input
                  {...register("phone", { required: true })}
                  placeholder="+254 7XX XXX XXX"
                  className="w-full rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/25 focus:outline-none transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: errors.phone ? "1px solid rgba(239,68,68,0.5)" : "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = errors.phone ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.08)")}
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">Required</p>}
              </div>
            </div>

            <div>
              <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">
                Service Interested In *
              </label>
              <select
                {...register("service", { required: true })}
                className="w-full rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition-colors"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: errors.service ? "1px solid rgba(239,68,68,0.5)" : "1px solid rgba(255,255,255,0.08)",
                  colorScheme: "dark",
                }}
              >
                <option value="">Select a service...</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.service && <p className="text-red-400 text-xs mt-1">Required</p>}
            </div>

            <div>
              <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={4}
                placeholder="Tell us about your security needs, property size, or any questions..."
                className="w-full rounded-xl px-4 py-3.5 text-sm text-white placeholder-white/25 focus:outline-none resize-none transition-colors"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "rgba(212,175,55,0.5)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl font-semibold text-[#0a0a0a] text-base transition-all hover:scale-[1.02] glow-gold-sm"
              style={{ background: "linear-gradient(135deg,#D4AF37,#F5E070)" }}
            >
              <MessageCircle size={18} /> Send via WhatsApp
            </button>

            <p className="text-white/25 text-xs text-center">
              No backend. Your message goes directly to our WhatsApp.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
