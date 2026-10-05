"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { type Dictionary, type Locale, locales } from "@/i18n";
import LanguageToggle from "./LanguageToggle";

interface NavbarProps {
  dict: Dictionary;
  locale: Locale;
}

export default function Navbar({ dict, locale }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: dict.nav.studio, href: "#studio" },
    { label: dict.nav.work, href: "#work" },
    { label: dict.nav.process, href: "#process" },
    { label: dict.nav.contact, href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#1a1a1a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#hero"
          className="text-lg md:text-xl font-bold tracking-tight text-white"
        >
          Websiteable
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#888] hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <LanguageToggle locale={locale} pathname={pathname} />
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-white/90 transition-colors duration-200"
          >
            {dict.nav.startProject}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
