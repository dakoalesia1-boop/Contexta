type Props = {
  content: string;
};

export default function ArticleBody({ content }: Props) {
  return (
    <div className="mt-10 text-[20px] leading-[2] text-stone-700 whitespace-pre-line max-w-4xl">
      {content}
    </div>
  );
}