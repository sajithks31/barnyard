"use client";

import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface VerticalTextProps {
  text: string;
  className?: string;
  delay?: number;
  reverse?: boolean;
}

export default function VerticalText({
  text,
  className,
  delay = 0,
  reverse = false,
}: VerticalTextProps) {
  return (
    <motion.div
      initial={{ x: reverse ? 100 : -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.16, 1, 0.3, 1], // Expo-out easing
      }}
      className={cn(
        "writing-mode-vertical text-orientation-mixed font-bold tracking-tighter select-none whitespace-nowrap",
        className
      )}
    >
      {text.toUpperCase()}
    </motion.div>
  );
}
