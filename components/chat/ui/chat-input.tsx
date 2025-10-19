// components/chat/ui/chat-input.tsx
'use client';

import { useState } from 'react';

export function ChatInput({
  placeholder,
  onSubmit,
}: {
  placeholder?: string;
  onSubmit: (text: string) => void;
}) {
  const [val, setVal] = useState('');
  return (
    <div className="flex items-center gap-2">
      <input
        className="flex-1 bg-[#0E0E1C] text-[#F8F8F8] placeholder-[#9EA5B4] rounded-2xl px-4 py-3 outline-none border border-white/10 focus:border-[#00FFF7]/60 focus:ring-2 focus:ring-[#00FFF7]/20 transition"
        placeholder={placeholder ?? 'Type a message'}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSubmit(val);
            setVal('');
          }
        }}
      />
      <button
        onClick={() => {
          onSubmit(val);
          setVal('');
        }}
        className="rounded-2xl bg-gradient-to-r from-[#A259FF] to-[#FF2DA0] text-white px-5 py-3 text-sm font-semibold shadow-[0_8px_24px_rgba(255,45,160,0.25)] hover:opacity-90 transition"
      >
        Send
      </button>
    </div>
  );
}
