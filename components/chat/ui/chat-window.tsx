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
    <div className="min-h-[calc(100dvh-4rem)] w-full max-w-5xl mx-auto px-4 py-8">
      <div className="rounded-[2.5rem] border border-white/5 bg-[#0A0A14]/90 backdrop-blur-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5),0_0_80px_-20px_rgba(45,175,167,0.2)] overflow-hidden flex flex-col h-[82vh] relative ring-1 ring-white/10 bubble-bg">
        <header className="px-8 py-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02] backdrop-blur-xl sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 shadow-inner">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-black tracking-tight text-white font-lastica">
                {title ?? 'AI Assistant'}
              </h1>
              {subtitle && <p className="text-[10px] md:text-xs text-gray-400 mt-1 font-mono uppercase tracking-[0.2em] opacity-60">{subtitle}</p>}
            </div>
          </div>
          <div className="hidden md:flex gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/30 border border-red-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/30 border border-yellow-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/30 border border-green-500/20" />
          </div>
        </header>

        <div
          ref={listRef}
          onWheel={(e) => e.stopPropagation()} /* ensure wheel events stay inside the chat area */
          className={cn(
            'flex-1 px-6 md:px-10 py-8 space-y-8 overflow-y-auto custom-scrollbar',
            'scrollbar-thin scrollbar-thumb-primary/10 scrollbar-track-transparent'
          )}
        >
          {messages.map((m) => (
            <ChatBubble key={m.id} role={m.role} content={m.content} html={m.html} blocks={m.blocks} />
          ))}
          {isLoading && (
            <div className="flex items-center gap-3 text-muted-foreground pl-4 animate-in fade-in slide-in-from-left-4 duration-500">
              <div className="typing-dots-glow">
                <span />
                <span />
                <span />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-primary/50 uppercase">Neural link processing...</span>
            </div>
          )}
        </div>

        <div className="p-6 md:p-8 bg-gradient-to-t from-[#0A0A14] to-transparent border-t border-white/5">
          <ChatInput
            placeholder="Initialize query protocol..."
            onSubmit={(t) => onSend(t)}
          />
          <div className="flex items-center justify-between mt-4">
            <p className="text-[10px] text-white/30 font-mono tracking-wider">
              SYSTEM STATUS: <span className="text-primary/60">OPERATIONAL</span>
            </p>
            <p className="text-[10px] text-white/20 font-mono italic">
              V3.4.2 // Agentic Interface
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
