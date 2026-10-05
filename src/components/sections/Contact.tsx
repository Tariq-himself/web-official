"use client";

import { type Dictionary, type Locale } from "@/i18n";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface SectionProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Contact({ dict }: SectionProps) {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto text-center">
        <AnimatedSection>
          <p className="text-xs font-medium text-[#666] uppercase tracking-[0.2em] mb-8">
            {dict.contact.label}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black leading-[0.95] tracking-tighter text-white mb-8 whitespace-pre-line">
            {dict.contact.heading}
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-base md:text-lg text-[#666] max-w-xl mx-auto mb-12 leading-relaxed">
            {dict.contact.description}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <a
            href="https://form.typeform.com/to/mE6RauzG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 text-base font-semibold text-black bg-white rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105"
          >
            {dict.contact.cta}
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
