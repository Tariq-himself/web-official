"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type Dictionary, type Locale } from "@/i18n";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PhoneMockup from "@/components/ui/PhoneMockup";

interface SectionProps {
  dict: Dictionary;
  locale: Locale;
}

function MethodScreen() {
  return (
    <div className="w-full h-full bg-[#1a1a1a] p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="text-xs text-white font-medium">9:41</div>
        <div className="text-xs text-white font-medium">Method</div>
      </div>
      <div className="text-white text-lg font-bold mb-1">Focused training.</div>
      <div className="text-white text-lg font-bold mb-4">No noise.</div>
      <div className="bg-[#222] rounded-xl p-3 mb-3">
        <div className="text-[#888] text-[10px] mb-1">Week 3 · Day 2</div>
        <div className="text-white text-xs font-medium mb-2">Push Day</div>
        <div className="text-[10px] text-[#666] mb-2">Chest · Shoulders · Triceps</div>
        <div className="w-full h-1.5 bg-[#333] rounded-full overflow-hidden mb-1">
          <div className="h-full w-[60%] bg-white rounded-full" />
        </div>
        <div className="text-[10px] text-[#888]">60% done</div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-[10px] text-white">
          <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">✓</span>
          Barbell Bench Press 4 × 8
        </div>
        <div className="flex items-center gap-2 text-[10px] text-white">
          <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">✓</span>
          Incline Dumbbell Press 3 × 10
        </div>
        <div className="flex items-center gap-2 text-[10px] text-white">
          <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-black font-bold text-[8px]">▶</span>
          Cable Fly 3 × 12
        </div>
      </div>
    </div>
  );
}

function ThresholdScreen() {
  return (
    <div className="w-full h-full bg-[#1a1a1a] p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="text-xs text-white font-medium">9:41</div>
        <div className="text-xs text-white font-medium">Threshold</div>
      </div>
      <div className="text-white text-lg font-bold mb-1">Built for athletes.</div>
      <div className="bg-[#222] rounded-xl p-3 mb-3">
        <div className="text-[#888] text-[10px] mb-2">Pre-season</div>
        <div className="text-white text-2xl font-black mb-3">82</div>
        <div className="text-[10px] text-[#666] mb-2">Speed & Power</div>
        <div className="flex gap-4">
          <div>
            <div className="text-[10px] text-[#888]">Explosiveness</div>
            <div className="text-white text-xs font-bold">82</div>
          </div>
          <div>
            <div className="text-[10px] text-[#888]">Strength</div>
            <div className="text-white text-xs font-bold">74</div>
          </div>
          <div>
            <div className="text-[10px] text-[#888]">Conditioning</div>
            <div className="text-white text-xs font-bold">68</div>
          </div>
        </div>
      </div>
      <div className="flex gap-1 items-end h-8">
        {[30, 50, 40, 70, 55, 80, 45].map((h, i) => (
          <div key={i} className="flex-1 bg-white/20 rounded-sm" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

function RedactScreen() {
  return (
    <div className="w-full h-full bg-[#1a1a1a] p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="text-xs text-white font-medium">9:41</div>
        <div className="text-xs text-white font-medium">Redact AI</div>
      </div>
      <div className="text-white text-lg font-bold mb-1">Capture · Redact · Copy</div>
      <div className="bg-[#222] rounded-xl p-3 mb-3">
        <div className="text-[10px] text-[#888] mb-2">On-device</div>
        <div className="text-[10px] text-white/70 leading-relaxed">
          Dear <span className="bg-white/30 text-white/50 px-1 rounded">Sarah Chen</span>, Q3 revenue reached <span className="bg-white/30 text-white/50 px-1 rounded">$2.4M</span>...
        </div>
      </div>
      <div className="text-[10px] text-[#666] mb-3">Detecting sensitive data...</div>
      <div className="grid grid-cols-4 gap-2">
        {["ChatGPT", "Claude", "Gemini", "Grok"].map((ai) => (
          <div key={ai} className="bg-[#222] rounded-lg p-2 text-center">
            <div className="text-[8px] text-white">{ai}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NawartoScren() {
  return (
    <div className="w-full h-full bg-[#1a1a1a] p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="text-xs text-white font-medium">9:41</div>
        <div className="text-xs text-white font-medium">Nawarto</div>
      </div>
      <div className="text-white text-lg font-bold mb-1">You&apos;re Invited</div>
      <div className="bg-[#222] rounded-xl p-3 mb-3">
        <div className="text-[#888] text-[10px] mb-1">Layla & Omar</div>
        <div className="text-white text-xs font-medium mb-1">Wedding Celebration</div>
        <div className="text-[10px] text-[#666]">Friday, 8:00 PM</div>
        <div className="text-[10px] text-[#666]">The Ritz-Carlton, Riyadh</div>
      </div>
      <div className="flex gap-2 mb-3">
        <div className="flex-1 bg-white text-black text-[10px] font-medium py-1.5 rounded-lg text-center">Going</div>
        <div className="flex-1 bg-[#222] text-[#888] text-[10px] py-1.5 rounded-lg text-center">Can&apos;t make it</div>
      </div>
      <div className="bg-[#222] rounded-xl p-3">
        <div className="flex justify-between text-[10px] mb-1">
          <span className="text-green-400">142 Going</span>
          <span className="text-yellow-400">18 Pending</span>
          <span className="text-red-400">6 Regrets</span>
        </div>
      </div>
    </div>
  );
}

export default function Work({ dict }: SectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const screens = [MethodScreen, ThresholdScreen, RedactScreen, NawartoScren];

  const works = [
    dict.work.method,
    dict.work.threshold,
    dict.work.redact,
    dict.work.nawarto,
  ];

  const ActiveScreen = screens[activeIndex];

  return (
    <section id="work" className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <AnimatedSection>
          <p className="text-xs font-medium text-[#666] uppercase tracking-[0.2em] mb-6">
            {dict.work.label}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {dict.work.heading}
          </h2>
          <p className="text-base text-[#666] mb-16 md:mb-24 max-w-xl">
            {dict.work.subheading}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xs font-mono text-[#444] mb-3">
                  {works[activeIndex].number}
                </p>
                <p className="text-xs text-[#666] uppercase tracking-wider mb-2">
                  {works[activeIndex].platform}
                </p>
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                  {works[activeIndex].title}
                </h3>
                <p className="text-lg text-[#888] mb-4 italic">
                  {works[activeIndex].tagline}
                </p>
                <p className="text-sm text-[#666] leading-relaxed mb-6">
                  {works[activeIndex].description}
                </p>
                <p className="text-xs text-[#444] font-mono leading-relaxed">
                  {works[activeIndex].tags}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-3 mt-10">
              {works.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-12 bg-white"
                      : "w-6 bg-[#333] hover:bg-[#555]"
                  }`}
                  aria-label={`View project ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <PhoneMockup>
                  <ActiveScreen />
                </PhoneMockup>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
