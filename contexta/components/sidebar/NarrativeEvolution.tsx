import { ChartNoAxesCombined, ChevronDown } from "lucide-react";

export default function NarrativeEvolution({
  narrative,
}: any) {
  return (
    <div className="border-t border-stone-200 py-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <ChartNoAxesCombined className="w-4 h-4 text-[#6f85c6]" />

          <h2 className="text-sm tracking-[0.2em] uppercase text-[#6f85c6] font-medium">
            Narrative Evolution
          </h2>
        </div>

        <ChevronDown className="w-4 h-4 text-stone-400" />
      </div>

      <div className="bg-[#f8faff] rounded-2xl p-5 mb-6">
        <div className="flex gap-6 text-sm mb-6 text-stone-500">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#5b7be4]"></div>
            <span>Regulation & labor</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#d68b8b]"></div>
            <span>Innovation</span>
          </div>
        </div>

        <div className="relative h-40">
          <svg viewBox="0 0 400 120" className="w-full h-full">
            <path
              d="M0 100 C60 90, 100 70, 150 60 S240 40, 300 30 S360 10, 400 20"
              fill="none"
              stroke="#5b7be4"
              strokeWidth="4"
              strokeLinecap="round"
            />

            <path
              d="M0 30 C60 20, 100 40, 150 50 S240 70, 300 80 S360 90, 400 95"
              fill="none"
              stroke="#d68b8b"
              strokeWidth="4"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <p className="text-stone-500 leading-relaxed text-lg">
        {narrative}
      </p>

      <div className="flex gap-3 mt-6 flex-wrap">
        <div className="bg-[#eef2ff] text-[#5b7be4] text-sm px-4 py-2 rounded-xl">
          Narrative Resurfacing
        </div>

        <div className="bg-[#f9ecec] text-[#d68b8b] text-sm px-4 py-2 rounded-xl">
          High Political Engagement
        </div>
      </div>
    </div>
  );
}