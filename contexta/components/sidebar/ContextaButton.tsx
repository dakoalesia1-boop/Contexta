import { Sparkles } from "lucide-react";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function ContextaButton({ open, setOpen }: Props) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="fixed top-24 right-10 z-50 bg-white border border-[#d7def4] shadow-sm rounded-2xl px-6 py-4 flex items-center gap-3 hover:shadow-md transition-all"
    >
      <Sparkles className="w-5 h-5 text-[#5b7be4]" />

      <span className="font-medium text-[#5b7be4]">
        Contexta
      </span>

      <div className="w-2 h-2 rounded-full bg-[#5b7be4]"></div>
    </button>
  );
}