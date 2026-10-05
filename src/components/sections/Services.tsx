"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type Dictionary, type Locale } from "@/i18n";

interface SectionProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Services({ dict }: SectionProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const services = [dict.services.mobile, dict.services.websites, dict.services.products];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12" aria-label="Services">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-16 md:mb-24"
        >
          {dict.services.heading}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : i * 0.15, ease: [0.25, 0.4, 0.25, 1] as const }}
              className="group border-t border-[#1a1a1a] pt-8 hover:border-[#333] transition-colors duration-300"
            >
              <span className="block text-xs text-[#444] font-mono mb-4" aria-hidden="true">
                {service.number}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed mb-6">
                {service.description}
              </p>
              <p className="text-xs text-[#444] font-mono leading-relaxed">
                {service.tags}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
