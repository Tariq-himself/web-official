"use client";

import { type Dictionary, type Locale } from "@/i18n";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface FooterProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Footer({ dict, locale }: FooterProps) {
  return (
    <footer className="border-t border-[#1a1a1a] py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              {dict.footer.brand}
            </div>
            <p className="text-[#666] text-sm leading-relaxed max-w-sm">
              {dict.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#888] uppercase tracking-wider mb-4">
              {dict.footer.navigate}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#studio" className="text-sm text-[#666] hover:text-white transition-colors">
                  {dict.nav.studio}
                </a>
              </li>
              <li>
                <a href="#work" className="text-sm text-[#666] hover:text-white transition-colors">
                  {dict.nav.work}
                </a>
              </li>
              <li>
                <a href="#process" className="text-sm text-[#666] hover:text-white transition-colors">
                  {dict.nav.process}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-[#666] hover:text-white transition-colors">
                  {dict.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[#888] uppercase tracking-wider mb-4">
              {dict.footer.contact}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#contact" className="text-sm text-[#666] hover:text-white transition-colors">
                  {dict.footer.startProject}
                </a>
              </li>
              <li className="text-sm text-[#666]">
                {dict.footer.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#444]">{dict.footer.copyright}</p>
          <p className="text-xs text-[#444]">{dict.footer.credits}</p>
        </div>
      </div>
    </footer>
  );
}
