// components/RenderBlocks.tsx
import TextBlock from './blocks/TextBlock';
import ImageBlock from './blocks/ImageBlock';
import IframeBlock from './blocks/IframeBlock';
import { Block } from '@/lib/contentFormatter';

export default function RenderBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((b, idx) => {
        if (b.type === 'text') return <TextBlock key={idx} content={b.content} />;
        if (b.type === 'image') return <ImageBlock key={idx} src={b.url} alt={b.alt || ''} />;
        if (b.type === 'iframe') return <IframeBlock key={idx} url={b.url} />;
        if (b.type === 'reference')
          return (
            <div key={idx} className="p-3 rounded-lg border bg-white/3">
              <a href={b.url} target="_blank" rel="noreferrer" className="text-sm text-[#A259FF] hover:underline">
                {b.title}
              </a>
            </div>
          );
        return null;
      })}
    </div>
  );
}
