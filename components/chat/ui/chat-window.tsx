// components/chat/ui/chat-window.tsx

'use client';

import { useRef, useEffect } from 'react';
import { ChatBubble } from "./chat-bubble";
import { ChatInput } from './chat-input';
import { cn } from '@/lib/utils';
import { Msg } from '@/types/chat';


export function ChatWindow({
  messages,
  onSend,
  isLoading,
  title,
  subtitle,
}: {
  messages: Msg[];
  onSend: (text: string) => void;
  isLoading?: boolean;
  title?: string;
  subtitle?: string;
}) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages.length, isLoading]);

  return (
    <div className="min-h-[calc(100dvh-4rem)] w-full max-w-4xl mx-auto px-4 py-6">
      <div className="rounded-3xl border border-border/20 bg-gradient-to-b from-background/90 to-background/60 backdrop-blur-xl shadow-lg">
        <header className="p-6 border-b border-border/20">
          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-foreground flex items-center gap-3">
            <span className="inline-block h-3 w-3 rounded-full bg-primary animate-pulse" />
            {title ?? 'Agentic Portfolio'}
          </h1>
          {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
        </header>

        <div
          ref={listRef}
          className={cn(
            'px-4 md:px-6 py-6 space-y-4 overflow-y-auto max-h-[70dvh]',
            'scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent'
          )}
        >
          {messages.map((m) => (
            <ChatBubble key={m.id} role={m.role} content={m.content} html={m.html} />
          ))}
          {isLoading && (
            <div className="flex items-center gap-2 text-muted-foreground pl-3">
              <div className="typing-dots">
                <span />
                <span />
                <span />
              </div>
              generating…
            </div>
          )}
        </div>

        <div className="p-4 md:p-6 border-t border-border/20">
          <ChatInput
            placeholder="Ask for About, Services, Projects…"
            onSubmit={(t) => onSend(t)}
          />
          <p className="text-[11px] text-muted-foreground mt-2">
            Pro tip: say “show projects with iframes” or “render services as 3 neon cards”.
          </p>
        </div>
      </div>
    </div>
  );
}
