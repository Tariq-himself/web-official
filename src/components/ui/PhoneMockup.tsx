"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
}

export default function PhoneMockup({
  children,
  className = "",
}: PhoneMockupProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      className={`relative mx-auto w-[260px] h-[520px] rounded-[40px] bg-[#111] border-[3px] border-[#222] shadow-2xl overflow-hidden ${className}`}
      whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute top-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 w-[120px] h-[28px] bg-[#111] rounded-b-[16px] z-10" aria-hidden="true" />
      <div className="w-full h-full rounded-[36px] overflow-hidden bg-[#0d0d0d]">
        {children}
      </div>
    </motion.div>
  );
}
