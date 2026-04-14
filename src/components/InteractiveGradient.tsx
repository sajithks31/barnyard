"use client";

import { useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function InteractiveGradient() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out mouse movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Orange Blob */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-orange/20 rounded-full blur-[120px]"
      />
      {/* Yellow Blob */}
      <motion.div
        style={{
          x: useSpring(mouseX, { stiffness: 30, damping: 15 }),
          y: useSpring(mouseY, { stiffness: 30, damping: 15 }),
        }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent-yellow/10 rounded-full blur-[150px]"
      />
    </div>
  );
}
