import en from "./dictionaries/en.json";
import ar from "./dictionaries/ar.json";

const dictionaries = { en, ar };

export type Locale = "en" | "ar";
export type Dictionary = typeof en;

export const locales: Locale[] = ["en", "ar"];
export const defaultLocale: Locale = "en";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function isRTL(locale: Locale): boolean {
  return locale === "ar";
}
