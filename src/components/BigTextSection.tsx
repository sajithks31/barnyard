"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface BigTextSectionProps {
  text: string;
}

export default function BigTextSection({ text }: BigTextSectionProps) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={sectionRef} className="py-64 overflow-hidden border-y border-white/5 bg-[#030303]">
      <motion.div style={{ x }} className="whitespace-nowrap select-none">
        <h2 className="text-[18vw] font-bold tracking-tighter leading-none text-transparent stroke-white/5 webkit-text-stroke uppercase">
          <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.05)' }}>
            {text} • {text} • {text}
          </span>
        </h2>
      </motion.div>
    </section>
  );
}
