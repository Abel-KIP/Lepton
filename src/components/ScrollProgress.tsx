"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const fn = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[100] h-[2px]">
      <div
        className="h-full transition-[width] duration-100"
        style={{
          width: `${p}%`,
          background: "linear-gradient(90deg,#D4AF37,#F5E070,#D4AF37)",
        }}
      />
    </div>
  );
}
