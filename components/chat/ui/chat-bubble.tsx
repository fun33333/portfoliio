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
    <div className={`w-full flex ${isUser ? 'justify-end' : 'justify-start'} group/bubble`}>
      <div
        className={[
          'max-w-[85%] md:max-w-[70%] rounded-[1.5rem] px-6 py-4 text-sm leading-relaxed transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 zoom-in-95',
          isUser
            ? 'bg-gradient-to-br from-primary/25 via-primary/10 to-primary/5 text-white border border-primary/20 shadow-[0_8px_30px_rgba(45,175,167,0.1)] rounded-tr-none hover:shadow-[0_8px_40px_rgba(45,175,167,0.2)]'
            : 'bg-white/[0.03] text-gray-200 border border-white/5 shadow-xl backdrop-blur-md rounded-tl-none hover:bg-white/[0.05]',
        ].join(' ')}
      >
        <div className="flex flex-col gap-2">
          {blocks ? (
            <div className="max-w-full space-y-4">
              <RenderBlocks blocks={blocks} />
            </div>
          ) : html ? (
            <div
              className="prose prose-invert max-w-none prose-p:leading-relaxed prose-headings:text-white prose-a:text-primary hover:prose-a:underline transition-all"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
            />
          ) : (
            <div className="whitespace-pre-wrap leading-relaxed">
              <ReactMarkdown
                components={{
                  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                  a: ({ href, children }) => <a href={href} className="text-primary hover:underline font-medium">{children}</a>,
                  code: ({ children }) => <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs font-mono">{children}</code>
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          )}

          <div className={`text-[10px] mt-2 opacity-0 group-hover/bubble:opacity-40 transition-opacity duration-300 font-mono flex items-center gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
            <span>{isUser ? 'SENT' : 'RECEIVED'}</span>
            <span className="w-1 h-1 rounded-full bg-current opacity-50" />
            <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
