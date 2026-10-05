"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type Dictionary, type Locale } from "@/i18n";

interface SectionProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Process({ dict }: SectionProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const steps = [dict.process.discover, dict.process.design, dict.process.build, dict.process.ship];

  return (
    <section id="process" className="py-32 md:py-48 px-6 md:px-12" aria-label="Our process">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium text-[#666] uppercase tracking-[0.2em] mb-6"
        >
          {dict.process.label}
        </motion.p>

        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-16 md:mb-24"
        >
          {dict.process.heading}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : i * 0.12, ease: [0.25, 0.4, 0.25, 1] as const }}
              className="group"
            >
              <span className="block text-xs text-[#444] font-mono mb-4" aria-hidden="true">
                {step.number}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
