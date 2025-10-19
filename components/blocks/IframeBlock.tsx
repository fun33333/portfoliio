// components/blocks/IframeBlock.tsx
interface IframeBlockProps {
  url: string;
}

export default function IframeBlock({ url }: IframeBlockProps) {
  return (
    <iframe
      src={url}
      className="w-full h-96 border rounded-lg"
      title="Embedded Content"
    />
  );
}
