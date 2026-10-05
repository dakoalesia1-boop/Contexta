import { Sparkles, X } from "lucide-react";

import HistoricalContext from "./HistoricalContext";
import NarrativeEvolution from "./NarrativeEvolution";
import CredibilitySignals from "./CredibilitySignals";

export default function ContextaPanel({
  article,
  open,
  setOpen,
}: any) {
  return (
    <div
      className={`fixed top-40 right-10 w-[420px] bg-white border border-stone-200 rounded-[32px] shadow-2xl transition-all duration-500 overflow-hidden z-40 ${
        open
          ? "translate-x-0 opacity-100"
          : "translate-x-[120%] opacity-0"
      }`}
    >
      <div className="p-8">

        <div className="flex justify-between items-start mb-8">

          <div className="flex gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#eef2ff] flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#5b7be4]" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-3xl font-semibold text-[#111827]">
                  Contexta
                </h1>

                <div className="text-[10px] tracking-[0.15em] uppercase bg-stone-100 text-stone-400 px-2 py-1 rounded-md">
                  Beta
                </div>
              </div>

              <p className="text-stone-400 text-lg">
                See the bigger picture.
              </p>
            </div>
          </div>

          <button onClick={() => setOpen(false)}>
            <X className="w-5 h-5 text-stone-400" />
          </button>
        </div>

        <div className="bg-[#f7f9ff] border border-[#edf1ff] rounded-2xl p-4 flex justify-between items-center mb-10">
          <p className="text-[#6f85c6] text-sm">
            ✓ Context reconstructed
          </p>

          <p className="text-[10px] tracking-[0.2em] uppercase text-stone-400">
            Demo
          </p>
        </div>

        <div className="mb-10">
          <p className="text-xs tracking-[0.25em] uppercase text-stone-400 mb-5">
            Beyond the headline
          </p>

          <p className="text-[28px] leading-relaxed text-stone-500">
            Every story has a longer story.
            <br />
            Here’s what connects the dots.
          </p>
        </div>

        <HistoricalContext timeline={article.timeline} />

        <NarrativeEvolution narrative={article.narrative} />

        <CredibilitySignals signals={article.signals} />

        <div className="pt-6 border-t border-stone-200 flex items-center justify-between text-sm text-stone-400 mt-6">
          <p>✦ Less noise. More understanding.</p>

          <div className="w-2 h-2 rounded-full bg-[#6f85c6]"></div>
        </div>

      </div>
    </div>
  );
}