"use client";

import { useRouter } from "next/navigation";
import { type Locale, locales } from "@/i18n";

interface LanguageToggleProps {
  locale: Locale;
  pathname: string;
}

export default function LanguageToggle({ locale, pathname }: LanguageToggleProps) {
  const router = useRouter();

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath || `/${newLocale}`);
  };

  return (
    <button
      onClick={toggleLocale}
      className="px-3 py-1.5 text-xs font-semibold rounded-full border border-[#333] text-[#888] hover:text-white hover:border-[#555] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      aria-label="Toggle language"
    >
      {locale === "en" ? "عربي" : "EN"}
    </button>
  );
}
