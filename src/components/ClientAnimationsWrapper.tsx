"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ClientAnimationsWrapperProps {
  children: ReactNode;
}

export default function ClientAnimationsWrapper({ children }: ClientAnimationsWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
