import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * TiltCard: 3D tilt effect on mouse move over card.
 * Pointer follows the mouse to create depth effect.
 */
export function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotY = ((x - centerX) / centerX) * 8;
    const rotX = ((centerY - y) / centerY) * 8;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 400, damping: 40 }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
