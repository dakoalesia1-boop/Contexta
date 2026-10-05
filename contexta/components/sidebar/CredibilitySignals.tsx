import { ScanSearch, ChevronDown } from "lucide-react";

export default function CredibilitySignals({
  signals,
}: any) {
  return (
    <div className="border-t border-stone-200 py-6">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <ScanSearch className="w-4 h-4 text-[#6f85c6]" />

          <h2 className="text-sm tracking-[0.2em] uppercase text-[#6f85c6] font-medium">
            Credibility Signals
          </h2>
        </div>

        <ChevronDown className="w-4 h-4 text-stone-400" />
      </div>

      <div className="space-y-8">
        {signals.map((signal: any) => (
          <div
            key={signal.label}
            className="grid grid-cols-3 items-center"
          >
            <p className="text-stone-500 text-lg">
              {signal.label}
            </p>

            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className={`w-2 h-6 rounded-full ${
                    item <= signal.level
                      ? "bg-[#8ea6de]"
                      : "bg-stone-200"
                  }`}
                ></div>
              ))}
            </div>

            <p className="text-[#6f85c6] text-right text-lg font-medium">
              {signal.value}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-stone-400 text-sm">
        Contextual indicators, not a verdict on truth.
      </p>
    </div>
  );
}