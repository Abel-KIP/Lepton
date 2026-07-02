"use client";
import { useState, useEffect } from "react";
import { Shield, Menu, X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppUrl, getCallUrl } from "@/lib/utils";

const nav = [
  { label: "Services", href: "#services" },
  { label: "We Serve", href: "#sectors" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-nav" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div
              className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105"
            >
              {/* Using /public/logo.png */}
              <img
                src="/logo"
                alt="Lepton"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-lg text-white tracking-wide">
                LEPTON
              </span>
              <span className="text-[10px] text-gold/60 tracking-[0.3em] uppercase">
                Technologies
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getCallUrl()}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white/70 hover:text-white border border-white/10 hover:border-white/30 transition-all"
            >
              <Phone size={14} /> Call
            </a>
            <a
              href={getWhatsAppUrl(
                "Hello Lepton Technologies, I would like a free consultation."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-[#0a0a0a] transition-all hover:scale-105 glow-gold-sm"
              style={{ background: "linear-gradient(135deg,#D4AF37,#F5E070)" }}
            >
              <MessageCircle size={14} /> WhatsApp Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-18 inset-x-0 z-40 glass-nav border-t border-gold/10 px-5 py-6 flex flex-col gap-1 lg:hidden"
          >
            {nav.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-white/70 hover:text-white text-base transition-colors border-b border-white/5 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 mt-4">
              <a
                href={getCallUrl()}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gold/30 text-gold text-sm font-medium"
              >
                <Phone size={15} /> Call Now
              </a>
              <a
                href={getWhatsAppUrl(
                  "Hello Lepton Technologies, I would like a free consultation."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[#0a0a0a] text-sm font-semibold"
                style={{ background: "linear-gradient(135deg,#D4AF37,#F5E070)" }}
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
