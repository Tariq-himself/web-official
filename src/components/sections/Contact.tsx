"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type Dictionary, type Locale } from "@/i18n";

interface SectionProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Contact({ dict }: SectionProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12" aria-label="Contact">
      <div className="max-w-[1400px] mx-auto text-center">
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium text-[#666] uppercase tracking-[0.2em] mb-8"
        >
          {dict.contact.label}
        </motion.p>

        <motion.h2
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-white mb-8 whitespace-pre-line"
        >
          {dict.contact.heading}
        </motion.h2>

        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-[#666] max-w-xl mx-auto mb-12 leading-relaxed"
        >
          {dict.contact.description}
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://form.typeform.com/to/mE6RauzG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 text-base font-semibold text-black bg-white rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            {dict.contact.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
