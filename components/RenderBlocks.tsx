// components/RenderBlocks.tsx
import TextBlock from './blocks/TextBlock';
import ImageBlock from './blocks/ImageBlock';
import IframeBlock from './blocks/IframeBlock';
import CardGridBlock from './blocks/CardGridBlock';
import ListBlock from './blocks/ListBlock';
import { Block } from '@/lib/contentFormatter';
import { ArrowUpRight } from 'lucide-react';

export default function RenderBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((b, idx) => {
        if (b.type === 'text') return <TextBlock key={idx} content={b.content} />;
        if (b.type === 'image') return <ImageBlock key={idx} src={b.url} alt={b.alt || ''} />;
        if (b.type === 'iframe') return <IframeBlock key={idx} url={b.url} />;
        if (b.type === 'card-grid') return <CardGridBlock key={idx} items={b.items} />;
        if (b.type === 'list') return <ListBlock key={idx} items={b.items} />;
        if (b.type === 'reference')
          return (
            <div key={idx} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-white/40 font-mono tracking-widest uppercase">External Link</span>
                <span className="text-white font-medium group-hover:text-primary transition-colors">{b.title}</span>
              </div>
              <a
                href={b.url}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 text-primary hover:bg-primary hover:text-black transition-all"
              >
                <ArrowUpRight size={16} />
              </a>
            </div>
          );
        return null;
      })}
    </div>
  );
}
