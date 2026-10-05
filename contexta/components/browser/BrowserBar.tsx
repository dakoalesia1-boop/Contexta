export default function BrowserBar() {
  return (
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
  );
}