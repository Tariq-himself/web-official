import { getDictionary, type Locale } from "@/i18n";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Studio from "@/components/sections/Studio";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar dict={dict} locale={locale} />
      <Hero dict={dict} locale={locale} />
      <Studio dict={dict} locale={locale} />
      <Services dict={dict} locale={locale} />
      <Work dict={dict} locale={locale} />
      <Process dict={dict} locale={locale} />
      <Contact dict={dict} locale={locale} />
      <Footer dict={dict} locale={locale} />
    </main>
  );
}
