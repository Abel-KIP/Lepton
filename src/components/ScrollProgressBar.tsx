"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * ScrollProgressBar: Shows scroll progress as a bar at the top of the page.
 */
export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F5E070] z-50"
      style={{ width: `${progress}%` }}
      initial={{ width: "0%" }}
      transition={{ duration: 0.1, ease: "linear" }}
    />
  );
}
