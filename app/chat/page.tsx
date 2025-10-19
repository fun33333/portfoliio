// app/chat/page.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { ChatWindow } from '@/components/chat/ui/chat-window';
import { nanoid } from 'nanoid';
import { Block, formatContent } from '@/lib/contentFormatter';
import { Msg } from '@/types/chat';


export default function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: nanoid(),
      role: 'assistant',
      content:
        "Hi, I'm the Quadgentics portfolio bot. Ask for About, Services, or Projects — I'll render fully-styled sections (cards, iframes, grids) right here.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  async function sendMessage(text: string) {
    if (!text?.trim()) return;
    const uid = nanoid();
    setMessages((m) => [...m, { id: uid, role: 'user', content: text }]);
    setIsLoading(true);

    const resp = await fetch('/api/agent', {
      method: 'POST',
      body: JSON.stringify({ message: text }),
    });
    console.log(resp.status, resp.url);

    if (!resp) {
      setIsLoading(false);
      return;
    }

    const ct = resp.headers.get('content-type') || '';

    // Case A: JSON structured blocks (render request)
    if (ct.includes('application/json')) {
      const json = await resp.json();
      const blocks: Block[] = json.blocks ?? [];
      // push assistant message with blocks
      setMessages((prev) => [...prev, { id: nanoid(), role: 'assistant', blocks }]);
      setIsLoading(false);
      return;
    } else if (ct.includes('text/html')) {
  setIsLoading(false);
  setMessages((prev) => [
    ...prev,
    { id: nanoid(), role: 'assistant', content: 'Server returned HTML error page.' },
  ]);
  return;
}


    // Case B: Streaming plain text
    if (!resp.body) {
      setIsLoading(false);
      return;
    }

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let acc = '';
    // create a draft message so UI shows progressive typing
    const draftId = `draft-${nanoid()}`;
    setMessages((prev) => [...prev, { id: draftId, role: 'assistant', content: '' }]);

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      const chunk = decoder.decode(value, { stream: true });
      acc += chunk;
      setMessages((prev) =>
        prev.map((m) => (m.id === draftId ? { ...m, content: acc } : m))
      );
    }

    // finalize: rename draft id to new id
    setMessages((prev) =>
      prev.map((m) => (m.id === draftId ? { ...m, id: nanoid() } : m))
    );

    setIsLoading(false);
  }

  return (
    <ChatWindow
      messages={messages}
      onSend={sendMessage}
      isLoading={isLoading}
      title="Quadgentics — Agentic Portfolio"
      subtitle="Ask for About • Services • Projects • Team • Pricing • FAQ"
    />
  );
}
