"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate(${e.clientX - 160}px, ${e.clientY - 160}px)`;
    };
    window.addEventListener("mousemove", fn, { passive: true });
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed pointer-events-none z-[9999] w-80 h-80 rounded-full hidden lg:block will-change-transform"
      style={{
        background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)",
        transition: "transform 0.12s ease-out",
      }}
    />
  );
}
