"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type Dictionary, type Locale } from "@/i18n";

interface FooterProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Footer({ dict }: FooterProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <footer className="border-t border-[#1a1a1a] py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
        >
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              {dict.footer.brand}
            </div>
            <p className="text-[#666] text-sm leading-relaxed max-w-sm">
              {dict.footer.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h4 className="text-sm font-semibold text-[#888] uppercase tracking-wider mb-4">
              {dict.footer.navigate}
            </h4>
            <ul className="space-y-3 list-none m-0 p-0">
              <li>
                <a href="#studio" className="text-sm text-[#666] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md">
                  {dict.nav.studio}
                </a>
              </li>
              <li>
                <a href="#work" className="text-sm text-[#666] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md">
                  {dict.nav.work}
                </a>
              </li>
              <li>
                <a href="#process" className="text-sm text-[#666] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md">
                  {dict.nav.process}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-[#666] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md">
                  {dict.nav.contact}
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h4 className="text-sm font-semibold text-[#888] uppercase tracking-wider mb-4">
              {dict.footer.contact}
            </h4>
            <ul className="space-y-3 list-none m-0 p-0">
              <li>
                <a href="#contact" className="text-sm text-[#666] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md">
                  {dict.footer.startProject}
                </a>
              </li>
              <li className="text-sm text-[#666]">
                {dict.footer.location}
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#444]">{dict.footer.copyright}</p>
          <p className="text-xs text-[#444]">{dict.footer.credits}</p>
        </div>
      </div>
    </footer>
  );
}
