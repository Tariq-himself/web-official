"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type Dictionary, type Locale } from "@/i18n";

interface SectionProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Studio({ dict }: SectionProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <section id="studio" className="py-32 md:py-48 px-6 md:px-12" aria-label="About the studio">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-xs font-medium text-[#666] uppercase tracking-[0.2em] mb-6"
        >
          {dict.studio.label}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.h2
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white"
          >
            {dict.studio.heading.split(".")[0]}.
          </motion.h2>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg text-[#888] leading-relaxed">
              {dict.studio.heading}
            </p>
            <div className="pt-4">
              <p className="text-xs font-medium text-[#666] uppercase tracking-[0.2em]">
                {dict.studio.whatWeDo}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
