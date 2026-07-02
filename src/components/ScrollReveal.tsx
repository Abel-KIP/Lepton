import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

/**
 * ScrollReveal: Animates children when they scroll into view.
 * Respects prefers-reduced-motion.
 */
export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: ScrollRevealProps) {
  const prefersReduced = useReducedMotion();

  const directionVariants = {
    up: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
  };

  const { initial, animate } = directionVariants[direction];

  return (
    <motion.div
      initial={prefersReduced ? animate : initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: prefersReduced ? 0 : 0.6,
        delay: prefersReduced ? 0 : delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
