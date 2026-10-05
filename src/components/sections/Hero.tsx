"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type Dictionary, type Locale } from "@/i18n";

interface SectionProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Hero({ dict }: SectionProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <header
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-20"
      role="banner"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]"
        aria-hidden="true"
      />

      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1, ease: [0.25, 0.4, 0.25, 1] }}
        className="text-center max-w-5xl mx-auto relative z-10"
      >
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.3, duration: 0.8 }}
          className="text-xs md:text-sm font-medium text-[#666] uppercase tracking-[0.3em] mb-8"
        >
          Websiteable
        </motion.p>

        <motion.h1
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.5, duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-[clamp(3rem,12vw,10rem)] font-black leading-[0.9] tracking-tighter text-white mb-8"
        >
          {dict.hero.brand}
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.7, duration: 0.8 }}
          className="text-base md:text-lg text-[#888] max-w-2xl mx-auto leading-relaxed mb-12"
        >
          {dict.hero.tagline}
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="px-8 py-3.5 text-sm font-semibold text-[#888] border border-[#333] rounded-full hover:border-white hover:text-white transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
          >
            {dict.hero.ctaWork}
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 text-sm font-semibold text-black bg-white rounded-full hover:bg-white/90 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
          >
            {dict.hero.ctaProject}
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0 : 1.4, duration: 0.8 }}
        className="absolute bottom-12 start-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden="true"
      >
        <span className="text-[10px] text-[#444] uppercase tracking-[0.2em]">
          {dict.hero.scroll}
        </span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#444] to-transparent"
        />
      </motion.div>
    </header>
  );
}
