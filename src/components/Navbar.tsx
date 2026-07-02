"use client";
import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppUrl, getCallUrl } from "@/lib/utils";

const nav = [
  { label: "Services", href: "#services", num: "01" },
  { label: "We Serve", href: "#sectors", num: "02" },
  { label: "Why Us", href: "#why-us", num: "03" },
  { label: "Gallery", href: "#gallery", num: "04" },
  { label: "Testimonials", href: "#testimonials", num: "05" },
  { label: "Contact", href: "#contact", num: "06" },
];

// Animated hamburger bars
function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="w-6 h-5 flex flex-col justify-between cursor-pointer">
      <motion.span
        animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="block h-0.5 w-full bg-white origin-center"
      />
      <motion.span
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
        className="block h-0.5 w-full bg-white"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="block h-0.5 w-full bg-white origin-center"
      />
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-nav" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" onClick={close}>
            <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105">
              <img src="/logo" alt="Lepton" className="w-full h-full object-cover" loading="eager" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-lg text-white tracking-wide">LEPTON</span>
              <span className="text-[10px] text-gold/60 tracking-[0.3em] uppercase">Technologies</span>
            </div>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-white/60 hover:text-white transition-colors duration-200 tracking-wide">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={getCallUrl()} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white/70 hover:text-white border border-white/10 hover:border-white/30 transition-all">
              <Phone size={14} /> Call
            </a>
            <a
              href={getWhatsAppUrl("Hello Lepton Technologies, I would like a free consultation.")}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-[#0a0a0a] transition-all hover:scale-105 glow-gold-sm"
              style={{ background: "linear-gradient(135deg,#D4AF37,#F5E070)" }}
            >
              <MessageCircle size={14} /> WhatsApp Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors z-[60] relative"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <HamburgerIcon open={open} />
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={close}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80vw] max-w-sm flex flex-col lg:hidden"
              style={{
                background: "linear-gradient(160deg, rgba(10,10,10,0.98) 0%, rgba(18,14,6,0.99) 100%)",
                borderLeft: "1px solid rgba(212,175,55,0.15)",
              }}
            >
              {/* Gold accent line top */}
              <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />

              {/* Header inside drawer */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4">
                <div className="flex flex-col leading-none">
                  <span className="font-display font-bold text-base text-white tracking-wide">LEPTON</span>
                  <span className="text-[9px] text-gold/50 tracking-[0.3em] uppercase">Technologies</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                </div>
              </div>

              {/* Divider */}
              <div className="mx-6 h-px bg-white/5" />

              {/* Nav links */}
              <nav className="flex-1 flex flex-col justify-center px-6 gap-1">
                {nav.map((l, i) => (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    onClick={close}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="group flex items-center gap-4 py-4 border-b border-white/5 last:border-0"
                  >
                    <span className="text-[10px] text-gold/30 font-mono w-5 group-hover:text-gold/70 transition-colors">{l.num}</span>
                    <span className="text-xl font-display font-semibold text-white/70 group-hover:text-white transition-colors tracking-wide">
                      {l.label}
                    </span>
                    <motion.span
                      className="ml-auto text-gold/0 group-hover:text-gold/60 transition-colors text-lg"
                    >
                      →
                    </motion.span>
                  </motion.a>
                ))}
              </nav>

              {/* Bottom CTA strip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="px-6 pb-8 pt-4 flex flex-col gap-3"
              >
                <div className="h-px bg-white/5 mb-1" />
                <a
                  href={getWhatsAppUrl("Hello Lepton Technologies, I would like a free consultation.")}
                  target="_blank" rel="noopener noreferrer"
                  onClick={close}
                  className="flex items-center justify-center gap-2.5 py-3.5 rounded-2xl text-sm font-semibold text-[#0a0a0a]"
                  style={{ background: "linear-gradient(135deg,#D4AF37,#F5E070)" }}
                >
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
                <a
                  href={getCallUrl()}
                  onClick={close}
                  className="flex items-center justify-center gap-2.5 py-3.5 rounded-2xl text-sm font-medium text-gold border border-gold/25"
                >
                  <Phone size={16} /> Call Now
                </a>
                <p className="text-center text-white/20 text-[10px] tracking-widest uppercase mt-1">Nairobi, Kenya — Est. 2016</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
