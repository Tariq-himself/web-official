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
      className={`relative mx-auto w-[280px] h-[560px] rounded-[44px] bg-[#111] border-[3px] border-[#222] shadow-[0_25px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.03)] overflow-hidden ${className}`}
      whileHover={shouldReduceMotion ? {} : { y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute top-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 w-[100px] h-[22px] bg-black rounded-b-[12px] z-10" aria-hidden="true" />
      <div className="absolute bottom-2 start-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-[#333] rounded-full z-10" aria-hidden="true" />
      <div className="w-full h-full rounded-[40px] overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
}
