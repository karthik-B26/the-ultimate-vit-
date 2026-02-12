"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className={`glass-card p-4 ${className}`}
    >
      {children}
    </motion.article>
  );
}
