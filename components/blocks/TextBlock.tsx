// components/blocks/TextBlock.tsx
export default function TextBlock({ content }: { content: string }) {
  return (
    <p className="text-lg leading-relaxed font-serif text-gray-800">
      {content}
    </p>
  );
}
