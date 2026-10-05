"use client";

import { type Dictionary, type Locale } from "@/i18n";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface SectionProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Studio({ dict }: SectionProps) {
  return (
    <section id="studio" className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <AnimatedSection>
          <p className="text-xs font-medium text-[#666] uppercase tracking-[0.2em] mb-6">
            {dict.studio.label}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              {dict.studio.heading.split(".")[0]}.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-[#888] leading-relaxed">
                {dict.studio.heading}
              </p>
              <div className="pt-4">
                <p className="text-xs font-medium text-[#666] uppercase tracking-[0.2em]">
                  {dict.studio.whatWeDo}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
