type Props = {
  title: string;
  subtitle: string;
  author: string;
  role: string;
  date: string;
  readTime: string;
};

export default function ArticleHeader({
  title,
  subtitle,
  author,
  role,
  date,
  readTime,
}: Props) {
  return (
    <div className="space-y-8">
      <div className="flex gap-3 text-xs tracking-[0.25em] uppercase text-[#b26f6f] font-medium">
        <span>Technology & Society</span>
        <span>•</span>
        <span>The Big Picture</span>
      </div>

      <div className="space-y-6">
        <h1 className="text-[72px] leading-[0.95] tracking-[-0.04em] font-serif text-[#111827] max-w-5xl">
          {title}
        </h1>

        <p className="text-[32px] leading-relaxed text-stone-500 max-w-4xl">
          {subtitle}
        </p>
      </div>

      <div className="flex justify-between items-end border-b border-stone-200 pb-10">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 text-lg">
            EH
          </div>

          <div>
            <p className="font-semibold text-stone-900">{author}</p>
            <p className="text-stone-500 text-sm">{role}</p>
          </div>
        </div>

        <div className="text-right text-stone-400 text-sm space-y-1">
          <p>{date}</p>
          <p>{readTime}</p>
        </div>
      </div>
    </div>
  );
}