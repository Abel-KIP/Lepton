"use client";
import { useState, useEffect } from "react";
import { Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
          style={{ background: "#0a0a0a" }}
        >
          {/* Animated ring */}
          <div className="relative w-24 h-24 mb-8">
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ border: "2px solid rgba(212,175,55,0.15)" }}
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: "2px solid transparent",
                borderTopColor: "#D4AF37",
                borderRightColor: "#F5E070",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#D4AF37,#F5E070)" }}
              >
                <Shield className="text-[#0a0a0a]" size={22} />
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="shimmer font-display text-2xl font-bold tracking-widest"
          >
            LEPTON
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/30 text-xs tracking-[0.4em] mt-2 uppercase"
          >
            Technologies
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
