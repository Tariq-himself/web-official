"use client";

import { motion } from "framer-motion";
import { type Dictionary, type Locale } from "@/i18n";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface SectionProps {
  dict: Dictionary;
  locale: Locale;
}

const serviceVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

export default function Services({ dict }: SectionProps) {
  const services = [dict.services.mobile, dict.services.websites, dict.services.products];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <AnimatedSection>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-16 md:mb-24">
            {dict.services.heading}
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={serviceVariants}
              className="group border-t border-[#1a1a1a] pt-8 hover:border-[#333] transition-colors duration-300"
            >
              <span className="block text-xs text-[#444] font-mono mb-4">
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
