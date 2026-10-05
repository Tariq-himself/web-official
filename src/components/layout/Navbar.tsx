"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { type Dictionary, type Locale } from "@/i18n";
import LanguageToggle from "./LanguageToggle";

interface NavbarProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Navbar({ dict, locale }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: dict.nav.studio, href: "#studio" },
    { label: dict.nav.work, href: "#work" },
    { label: dict.nav.process, href: "#process" },
    { label: dict.nav.contact, href: "#contact" },
  ];

  return (
    <motion.header
      initial={shouldReduceMotion ? { opacity: 1 } : { y: -100 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#1a1a1a]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between" aria-label="Main navigation">
        <a
          href="#hero"
          className="text-lg md:text-xl font-bold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md px-1"
        >
          Websiteable
        </a>

        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[#888] hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md px-1 py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <LanguageToggle locale={locale} pathname={pathname} />
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-white/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            {dict.nav.startProject}
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
