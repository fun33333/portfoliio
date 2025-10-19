// components/chat/ui/chat-bubble.tsx
'use client';

import DOMPurify from 'isomorphic-dompurify';
import RenderBlocks from '@/components/RenderBlocks';
import { Block } from '@/lib/contentFormatter';
import ReactMarkdown from 'react-markdown';
export function ChatBubble({
  role,
  content,
  html,
  blocks,
}: {
  role: 'user' | 'assistant' | 'system';
  content?: string;
  html?: string;
  blocks?: Block[];
}) {
  const isUser = role === 'user';

  return (
    <div className={`w-full flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={[
          'max-w-[90%] md:max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed',
          isUser
            ? 'bg-[#1C1F3C]/80 text-[#F8F8F8] border border-white/10 shadow-[0_0_24px_rgba(0,255,247,0.2)]'
            : 'bg-white/5 text-[#F8F8F8] border border-white/10 shadow-[0_0_24px_rgba(162,89,255,0.2)]',
        ].join(' ')}
      >
        {blocks ? (
          <div className="max-w-full">
            <RenderBlocks blocks={blocks} />
          </div>
        ) : html ? (
          <div
            className="prose prose-invert max-w-none prose-headings:text-[#F8F8F8] prose-a:text-[#A259FF]"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
          />
        ) : (
          <div className="whitespace-pre-wrap">
            {/* {content} */}
          <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
