"use client";

import { motion } from "framer-motion";
import { type Dictionary, type Locale } from "@/i18n";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface SectionProps {
  dict: Dictionary;
  locale: Locale;
}

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

export default function Process({ dict }: SectionProps) {
  const steps = [dict.process.discover, dict.process.design, dict.process.build, dict.process.ship];

  return (
    <section id="process" className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <AnimatedSection>
          <p className="text-xs font-medium text-[#666] uppercase tracking-[0.2em] mb-6">
            {dict.process.label}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-16 md:mb-24">
            {dict.process.heading}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={stepVariants}
              className="group"
            >
              <span className="block text-xs text-[#444] font-mono mb-4">
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
