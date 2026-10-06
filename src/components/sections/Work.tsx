"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { type Dictionary, type Locale } from "@/i18n";
import PhoneMockup from "@/components/ui/PhoneMockup";

interface SectionProps {
  dict: Dictionary;
  locale: Locale;
}

function MethodScreen() {
  return (
    <div className="w-full h-full bg-[#0d0d0d] flex flex-col">
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <div className="text-[11px] text-white font-medium">9:41</div>
        <div className="w-[100px] h-[22px] bg-black rounded-[11px]" />
        <div className="text-[11px] text-white font-medium">Method</div>
      </div>
      <div className="px-4 pt-4 flex-1 flex flex-col">
        <div className="text-white text-[18px] font-bold mb-0.5 leading-tight">Focused training.</div>
        <div className="text-white text-[18px] font-bold mb-3 leading-tight">No noise.</div>
        <div className="bg-[#1a1a1a] rounded-2xl p-3 mb-2">
          <div className="text-[#666] text-[9px] mb-1 uppercase tracking-wider">Week 3 · Day 2</div>
          <div className="text-white text-[11px] font-semibold mb-1.5">Today</div>
          <div className="text-white text-[13px] font-bold mb-1">Push Day</div>
          <div className="text-[9px] text-[#555] mb-2">Chest · Shoulders · Triceps</div>
          <div className="w-full h-[5px] bg-[#2a2a2a] rounded-full overflow-hidden mb-1">
            <div className="h-full w-[60%] bg-white rounded-full" />
          </div>
          <div className="flex justify-between">
            <span className="text-[8px] text-[#666]">60% done</span>
            <span className="text-[8px] text-[#666]">Rest 1:15</span>
          </div>
        </div>
        <div className="space-y-1.5 flex-1">
          <div className="flex items-center gap-2 text-[9px] text-white">
            <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[7px]">✓</span>
            <span>Barbell Bench Press 4 × 8</span>
          </div>
          <div className="flex items-center gap-2 text-[9px] text-white">
            <span className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center text-[7px]">✓</span>
            <span>Incline Dumbbell Press 3 × 10</span>
          </div>
          <div className="flex items-center gap-2 text-[9px] text-black">
            <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center text-[7px] font-bold">▶</span>
            <span className="font-medium">Cable Fly 3 × 12</span>
          </div>
          <div className="flex items-center gap-2 text-[9px] text-[#555]">
            <span className="w-4 h-4 rounded-full bg-transparent border border-[#333]" />
            <span>Overhead Press 4 × 8</span>
          </div>
          <div className="flex items-center gap-2 text-[9px] text-[#555]">
            <span className="w-4 h-4 rounded-full bg-transparent border border-[#333]" />
            <span>Triceps Rope 3 × 15</span>
          </div>
        </div>
        <div className="flex gap-4 py-3 border-t border-[#1a1a1a] mt-auto">
          {["Program", "Performance", "Profile"].map((tab) => (
            <div key={tab} className="flex flex-col items-center gap-1">
              <div className="w-4 h-4 rounded bg-[#333]" />
              <span className="text-[7px] text-[#666]">{tab}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ThresholdScreen() {
  return (
    <div className="w-full h-full bg-[#0d0d0d] flex flex-col">
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <div className="text-[11px] text-white font-medium">9:41</div>
        <div className="w-[100px] h-[22px] bg-black rounded-[11px]" />
        <div className="text-[11px] text-white font-medium">Threshold</div>
      </div>
      <div className="px-4 pt-4 flex-1 flex flex-col">
        <div className="text-white text-[18px] font-bold mb-3 leading-tight">Built for athletes.</div>
        <div className="bg-[#1a1a1a] rounded-2xl p-3 mb-3">
          <div className="text-[#666] text-[9px] mb-2 uppercase tracking-wider">Pre-season</div>
          <div className="text-white text-[32px] font-black mb-2 leading-none">82</div>
          <div className="text-[9px] text-[#555] mb-3">Speed & Power</div>
          <div className="flex gap-4 mb-3">
            <div>
              <div className="text-[8px] text-[#666]">Explosiveness</div>
              <div className="text-white text-[12px] font-bold">82</div>
            </div>
            <div>
              <div className="text-[8px] text-[#666]">Strength</div>
              <div className="text-white text-[12px] font-bold">74</div>
            </div>
            <div>
              <div className="text-[8px] text-[#666]">Conditioning</div>
              <div className="text-white text-[12px] font-bold">68</div>
            </div>
          </div>
          <div className="flex gap-1 items-end h-10">
            {[30, 50, 40, 70, 55, 80, 45].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                <div className="w-full bg-white/15 rounded-sm" style={{ height: `${h}%` }} />
                <span className="text-[5px] text-[#444]">{["M","T","W","T","F","S","S"][i]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[9px] text-[#666]">Weekly load</span>
          <span className="text-[9px] text-green-400 font-medium">+12% ↑</span>
        </div>
        <div className="flex gap-4 py-3 border-t border-[#1a1a1a] mt-auto">
          {["Program", "Performance", "Profile"].map((tab) => (
            <div key={tab} className="flex flex-col items-center gap-1">
              <div className="w-4 h-4 rounded bg-[#333]" />
              <span className="text-[7px] text-[#666]">{tab}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RedactScreen() {
  return (
    <div className="w-full h-full bg-[#0d0d0d] flex flex-col">
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <div className="text-[11px] text-white font-medium">9:41</div>
        <div className="w-[100px] h-[22px] bg-black rounded-[11px]" />
        <div className="text-[11px] text-white font-medium">Redact AI</div>
      </div>
      <div className="px-4 pt-4 flex-1 flex flex-col">
        <div className="text-white text-[18px] font-bold mb-0.5 leading-tight">Capture · Redact · Copy</div>
        <div className="text-[9px] text-[#555] mb-3">On-device</div>
        <div className="bg-[#1a1a1a] rounded-2xl p-3 mb-3 flex-1">
          <div className="text-[8px] text-[#666] mb-2">Captured screen</div>
          <div className="text-[9px] text-white/60 leading-relaxed">
            Dear <span className="bg-white/20 text-white/40 px-0.5 rounded text-[8px]">Sarah Chen</span>, following our call, Q3 revenue reported by <span className="bg-white/20 text-white/40 px-0.5 rounded text-[8px]">Bloomberg</span> reached <span className="bg-white/20 text-white/40 px-0.5 rounded text-[8px]">$2.4M</span> ahead of the filing.
          </div>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full border-2 border-white/60 border-t-white animate-spin" />
          <span className="text-[8px] text-[#666]">Detecting sensitive data...</span>
        </div>
        <button className="w-full bg-white text-black text-[10px] font-medium py-2 rounded-xl mb-3">Copy redacted text</button>
        <div className="grid grid-cols-4 gap-1.5">
          {["ChatGPT", "Claude", "Gemini", "Grok"].map((ai) => (
            <div key={ai} className="bg-[#1a1a1a] rounded-lg py-1.5 text-center">
              <div className="text-[7px] text-white">{ai}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NawartoScren() {
  return (
    <div className="w-full h-full bg-[#0d0d0d] flex flex-col">
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <div className="text-[11px] text-white font-medium">9:41</div>
        <div className="w-[100px] h-[22px] bg-black rounded-[11px]" />
        <div className="text-[11px] text-white font-medium">Nawarto</div>
      </div>
      <div className="px-4 pt-4 flex-1 flex flex-col">
        <div className="text-white text-[18px] font-bold mb-0.5 leading-tight">You&apos;re Invited</div>
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#222] rounded-2xl p-3 mb-3 border border-[#2a2a2a]">
          <div className="text-[#888] text-[8px] mb-0.5">online</div>
          <div className="text-[#666] text-[7px] mb-2 uppercase tracking-wider">TODAY</div>
          <div className="text-white text-[11px] font-semibold mb-0.5">Layla & Omar</div>
          <div className="text-white text-[13px] font-bold mb-1">Wedding Celebration</div>
          <div className="text-[9px] text-[#666]">Friday, 8:00 PM</div>
          <div className="text-[9px] text-[#666]">The Ritz-Carlton, Riyadh</div>
        </div>
        <div className="flex gap-2 mb-3">
          <button className="flex-1 bg-white text-black text-[10px] font-medium py-2 rounded-xl">Going</button>
          <button className="flex-1 bg-[#1a1a1a] text-[#666] text-[10px] py-2 rounded-xl border border-[#2a2a2a]">Can&apos;t make it</button>
        </div>
        <div className="bg-[#1a1a1a] rounded-2xl p-3">
          <div className="flex justify-between items-center">
            <span className="text-[8px] text-[#666]">12:04</span>
            <span className="text-[8px] text-[#666]">Live RSVP tracker</span>
          </div>
          <div className="flex justify-between mt-2">
            <div className="text-center">
              <div className="text-green-400 text-[12px] font-bold">142</div>
              <div className="text-[7px] text-[#666]">Going</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 text-[12px] font-bold">18</div>
              <div className="text-[7px] text-[#666]">Pending</div>
            </div>
            <div className="text-center">
              <div className="text-red-400 text-[12px] font-bold">6</div>
              <div className="text-[7px] text-[#666]">Regrets</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work({ dict }: SectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const screens = [MethodScreen, ThresholdScreen, RedactScreen, NawartoScren];
  const shouldReduceMotion = useReducedMotion() ?? false;

  const works = [
    dict.work.method,
    dict.work.threshold,
    dict.work.redact,
    dict.work.nawarto,
  ];

  const ActiveScreen = screens[activeIndex];

  return (
    <section id="work" className="py-32 md:py-48 px-6 md:px-12" aria-label="Selected work">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium text-[#666] uppercase tracking-[0.2em] mb-6"
        >
          {dict.work.label}
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {dict.work.heading}
          </h2>
          <p className="text-base text-[#666] mb-16 md:mb-24 max-w-xl">
            {dict.work.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
              >
                <p className="text-xs font-mono text-[#444] mb-3" aria-hidden="true">
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

            <div className="flex gap-3 mt-10" role="tablist" aria-label="Project selector">
              {works.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`View project ${i + 1}: ${works[i].title}`}
                  className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                    i === activeIndex
                      ? "w-12 bg-white"
                      : "w-6 bg-[#333] hover:bg-[#555]"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.4 }}
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
