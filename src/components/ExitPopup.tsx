"use client";
import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/utils";

export default function ExitPopup() {
  const [show, setShow] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (!done && e.clientY < 8) setShow(true);
    };
    const t = setTimeout(() => document.addEventListener("mouseleave", fn), 5000);
    return () => { clearTimeout(t); document.removeEventListener("mouseleave", fn); };
  }, [done]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          onClick={() => { setShow(false); setDone(true); }}
        >
          <motion.div
            initial={{ scale: 0.88, y: 24 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.88, y: 24 }}
            transition={{ ease: [0.23, 1, 0.32, 1], duration: 0.45 }}
            className="glass rounded-3xl p-8 max-w-sm w-full relative border border-gold/25 shadow-2xl"
            style={{ boxShadow: "0 40px 100px rgba(212,175,55,0.15)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => { setShow(false); setDone(true); }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-white/50 hover:text-white transition-colors"
            >
              <X size={14} />
            </button>

            <div className="text-5xl mb-5">🔒</div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Need Security<br />
              <span className="text-gradient">Solutions?</span>
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Chat with our security experts on WhatsApp and get a free consultation today — no obligation.
            </p>
            <a
              href={getWhatsAppUrl("Hello Lepton Technologies, I need security solutions for my property.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { setShow(false); setDone(true); }}
              className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl font-semibold text-[#0a0a0a] transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg,#D4AF37,#F5E070)" }}
            >
              <MessageCircle size={18} /> Chat With Us On WhatsApp
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
