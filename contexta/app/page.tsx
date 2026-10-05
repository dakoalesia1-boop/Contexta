"use client";

import { useState } from "react";
import {
  Sparkles,
  Clock3,
  ChevronDown,
  ShieldCheck,
  LineChart,
  BrainCircuit,
  X,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [open, setOpen] = useState(true);

  const [sections, setSections] = useState({
    history: true,
    narrative: true,
    credibility: true,
  });

  const toggleSection = (
    section: keyof typeof sections
  ) => {
    setSections({
      ...sections,
      [section]: !sections[section],
    });
  };

  return (
    <main className="min-h-screen bg-[#f6f5f3] text-[#111827]">

      {/* TOP BROWSER BAR */}
      <div className="h-14 bg-[#f5f5f4] border-b border-stone-200 flex items-center px-5 justify-between">

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-300"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
          <div className="w-3 h-3 rounded-full bg-green-300"></div>
        </div>

        <div className="bg-white border border-stone-200 rounded-xl px-6 py-2 text-sm text-stone-500 w-[500px] text-center shadow-sm">
          thecurrent.example / technology / european-ai-regulation
        </div>

        <div className="text-xs tracking-[0.2em] text-stone-400">
          FICTIONAL DEMO
        </div>
      </div>

      {/* FLOATING CONTEXTA BUTTON */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-24 right-10 z-50 bg-white border border-[#d7def4] shadow-sm rounded-2xl px-6 py-4 flex items-center gap-3 hover:shadow-md transition-all"
        >
          <Sparkles className="w-5 h-5 text-[#5b7be4]" />

          <span className="font-medium text-[#5b7be4]">
            Contexta
          </span>

          <div className="w-2 h-2 rounded-full bg-[#5b7be4]"></div>
        </button>
      )}

      {/* MAIN LAYOUT */}
      <div className="flex">

        {/* ARTICLE */}
        <div className="flex-1 px-12 py-16 max-w-[980px]">

          <div className="flex gap-3 text-xs tracking-[0.25em] uppercase text-[#b26f6f] font-medium mb-10">
            <span>Technology & Society</span>
            <span>•</span>
            <span>The Big Picture</span>
          </div>

          <h1 className="text-[72px] leading-[0.95] tracking-[-0.04em] font-serif text-[#111827] max-w-5xl">
            European AI Regulation Sparks Global Controversy
          </h1>

          <p className="text-[32px] leading-relaxed text-stone-500 max-w-4xl mt-8">
            Europe is drawing new boundaries for artificial intelligence.
            The rest of the world is debating where they should end.
          </p>

          <div className="flex justify-between items-end border-b border-stone-200 pb-10 mt-14">

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 text-lg">
                EH
              </div>

              <div>
                <p className="font-semibold text-stone-900">
                  Elena Hartwell
                </p>

                <p className="text-stone-500 text-sm">
                  Technology & policy correspondent
                </p>
              </div>

            </div>

            <div className="text-right text-stone-400 text-sm space-y-1">
              <p>October 5, 2026</p>
              <p>8 min read</p>
            </div>

          </div>

          <div className="mt-12 text-[20px] leading-[2] text-stone-700 whitespace-pre-line max-w-4xl">
            The European Union announced a new framework introducing stricter
            regulations for artificial intelligence systems operating within
            member states.

            {"\n\n"}

            Supporters argue the legislation improves transparency, public
            accountability, and consumer protection. Critics claim the rules
            may slow innovation and create barriers for startups and open-source
            AI development.

            {"\n\n"}

            Technology companies expressed concern about compliance costs,
            while policymakers defended the need for stronger oversight as AI
            systems become more integrated into society.

            {"\n\n"}

            Public discussion online has intensified around themes of privacy,
            labor displacement, and the balance between innovation and
            regulation.
          </div>

        </div>

        {/* CONTEXTA PANEL */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-[460px] min-h-screen border-l border-stone-200 bg-[#fbfbfa] px-8 py-10 sticky top-0 overflow-y-auto"
            >

              {/* HEADER */}
              <div className="flex items-start justify-between mb-8">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-[#eef3ff] flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#5b7be4]" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-[34px] font-semibold tracking-[-0.03em] text-[#1e293b]">
                        Contexta
                      </h2>

                      <span className="text-[10px] px-2 py-1 rounded-full bg-stone-100 text-stone-400 tracking-[0.2em] uppercase">
                        Beta
                      </span>
                    </div>

                    <p className="text-stone-400 text-sm mt-1">
                      See the bigger picture.
                    </p>
                  </div>

                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="text-stone-400 hover:text-stone-600 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

              </div>

              {/* STATUS */}
              <div className="bg-[#f4f7ff] rounded-xl px-5 py-4 flex justify-between items-center mb-10">

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#5b7be4]"></div>

                  <span className="text-[#5b7be4] text-sm">
                    Context reconstructed
                  </span>
                </div>

                <span className="text-[10px] tracking-[0.2em] text-stone-400 uppercase">
                  Demo
                </span>

              </div>

              {/* INTRO */}
              <div className="mb-10 pb-10 border-b border-stone-200">

                <p className="text-[11px] tracking-[0.25em] uppercase text-stone-400 mb-5">
                  Beyond The Headline
                </p>

                <p className="text-[30px] leading-relaxed text-stone-600 tracking-[-0.03em]">
                  Every story has a longer story.
                  Here’s what connects the dots.
                </p>

              </div>

              {/* HISTORICAL CONTEXT */}
              <div className="border-b border-stone-200 py-6">

                <button
                  onClick={() => toggleSection("history")}
                  className="flex justify-between items-center w-full mb-6"
                >

                  <div className="flex items-center gap-3">
                    <Clock3 className="w-4 h-4 text-[#6f85c6]" />

                    <h2 className="text-sm tracking-[0.2em] uppercase text-[#6f85c6] font-medium">
                      Historical Context
                    </h2>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 transition-transform duration-300 ${
                      sections.history ? "rotate-180" : ""
                    }`}
                  />

                </button>

                {sections.history && (
                  <div className="space-y-6 animate-in fade-in duration-300">

                    <div className="flex gap-5">

                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full border-2 border-[#c6d2f7]"></div>

                        <div className="w-[1px] h-16 bg-[#dbe4ff]"></div>
                      </div>

                      <div>
                        <p className="text-[#5b7be4] font-semibold mb-2">
                          2024
                        </p>

                        <p className="text-stone-500 leading-relaxed text-sm max-w-[240px]">
                          Initial AI transparency proposals introduced
                        </p>
                      </div>

                    </div>

                    <div className="flex gap-5">

                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full border-2 border-[#c6d2f7]"></div>
                      </div>

                      <div>
                        <p className="text-[#5b7be4] font-semibold mb-2">
                          2025
                        </p>

                        <p className="text-stone-500 leading-relaxed text-sm max-w-[240px]">
                          Debates around open-source AI intensified
                        </p>
                      </div>

                    </div>

                  </div>
                )}

              </div>

              {/* NARRATIVE EVOLUTION */}
              <div className="border-b border-stone-200 py-8">

                <button
                  onClick={() => toggleSection("narrative")}
                  className="flex justify-between items-center w-full mb-6"
                >

                  <div className="flex items-center gap-3">
                    <LineChart className="w-4 h-4 text-[#6f85c6]" />

                    <h2 className="text-sm tracking-[0.2em] uppercase text-[#6f85c6] font-medium">
                      Narrative Evolution
                    </h2>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 transition-transform duration-300 ${
                      sections.narrative ? "rotate-180" : ""
                    }`}
                  />

                </button>

                {sections.narrative && (
                  <div className="animate-in fade-in duration-300">

                    <div className="relative h-[140px] bg-[#f8faff] rounded-2xl overflow-hidden mb-6">

                      <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 400 140"
                        fill="none"
                      >
                        <path
                          d="M0 110 C80 100, 100 70, 160 80 C220 90, 260 40, 320 50 C360 55, 390 20, 400 25"
                          stroke="#5b7be4"
                          strokeWidth="4"
                          fill="none"
                        />

                        <path
                          d="M0 40 C80 50, 120 70, 180 60 C250 50, 300 90, 400 100"
                          stroke="#d08a8a"
                          strokeWidth="4"
                          strokeDasharray="8 8"
                          fill="none"
                        />
                      </svg>

                    </div>

                    <p className="text-stone-500 leading-relaxed text-[17px]">
                      Public discussion shifted from innovation concerns
                      toward labor displacement and regulation over
                      the last 18 months.
                    </p>

                    <div className="flex gap-3 mt-6 flex-wrap">

                      <span className="px-4 py-2 rounded-xl bg-[#eef3ff] text-[#5b7be4] text-sm">
                        Narrative Resurfacing
                      </span>

                      <span className="px-4 py-2 rounded-xl bg-[#fff1f1] text-[#c78080] text-sm">
                        High Political Engagement
                      </span>

                    </div>

                  </div>
                )}

              </div>

              {/* CREDIBILITY SIGNALS */}
              <div className="py-8">

                <button
                  onClick={() => toggleSection("credibility")}
                  className="flex justify-between items-center w-full mb-8"
                >

                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-[#6f85c6]" />

                    <h2 className="text-sm tracking-[0.2em] uppercase text-[#6f85c6] font-medium">
                      Credibility Signals
                    </h2>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 transition-transform duration-300 ${
                      sections.credibility ? "rotate-180" : ""
                    }`}
                  />

                </button>

                {sections.credibility && (
                  <div className="animate-in fade-in duration-300">

                    <div className="space-y-6">

                      {[
                        ["Emotional Language", "High", 4],
                        ["Primary Sources", "Limited", 1],
                        ["Narrative Recurrence", "Repeated", 4],
                        ["Context Completeness", "Medium", 2],
                      ].map(([label, value, level]) => (
                        <div
                          key={label}
                          className="flex justify-between items-center"
                        >

                          <span className="text-stone-500">
                            {label}
                          </span>

                          <div className="flex items-center gap-5">

                            <div className="flex gap-1">
                              {[1, 2, 3, 4].map((i) => (
                                <div
                                  key={i}
                                  className={`w-2 h-5 rounded-full ${
                                    i <= Number(level)
                                      ? "bg-[#8fa3df]"
                                      : "bg-stone-200"
                                  }`}
                                ></div>
                              ))}
                            </div>

                            <span className="text-[#5b7be4] w-[70px] text-right">
                              {value}
                            </span>

                          </div>

                        </div>
                      ))}

                    </div>

                    <div className="mt-10 pt-6 border-t border-stone-200 flex items-center gap-2 text-sm text-stone-400">

                      <BrainCircuit className="w-4 h-4" />

                      <span>
                        Less noise. More understanding.
                      </span>

                    </div>

                  </div>
                )}

              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </main>
  );
}