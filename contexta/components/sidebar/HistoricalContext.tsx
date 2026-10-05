import { Clock3, ChevronDown } from "lucide-react";

export default function HistoricalContext({
  timeline,
}: any) {
  return (
    <div className="border-t border-stone-200 py-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <Clock3 className="w-4 h-4 text-[#6f85c6]" />

          <h2 className="text-sm tracking-[0.2em] uppercase text-[#6f85c6] font-medium">
            Historical Context
          </h2>
        </div>

        <ChevronDown className="w-4 h-4 text-stone-400" />
      </div>

      <div className="space-y-6">
        {timeline.map((item: any) => (
          <div key={item.year} className="flex gap-5">
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full border-2 border-[#c6d2f7]"></div>
              <div className="w-[1px] h-16 bg-[#dbe4ff]"></div>
            </div>

            <div>
              <p className="text-[#5b7be4] font-semibold mb-2">
                {item.year}
              </p>

              <p className="text-stone-500 leading-relaxed text-sm max-w-[240px]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}