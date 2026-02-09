import { useRef, useState, useEffect } from 'react';
import { Paperclip, Smile, ThumbsUp, Send } from 'lucide-react';
import dynamic from 'next/dynamic';

const EmojiPicker = dynamic(() => import('emoji-picker-react'), {
  ssr: false,
  loading: () => <div className="w-[300px] h-[400px] bg-[#1C1F3C] flex items-center justify-center text-white/50 border border-white/10 rounded-xl">Loading Picker...</div>
});
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function ChatInput({
  placeholder,
  onSubmit,
}: {
  placeholder?: string;
  onSubmit: (text: string) => void;
}) {
  const [val, setVal] = useState('');
  const [mounted, setMounted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSend = () => {
    if (val.trim()) {
      onSubmit(val);
      setVal('');
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onSubmit(`[Attached File: ${file.name}]`);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const onEmojiClick = (emojiData: any) => {
    setVal((prev) => prev + emojiData.emoji);
  };

  return (
    <div className="flex flex-col gap-3">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <div className="flex items-center gap-3 bg-white/[0.03] rounded-2xl px-5 py-3 border border-white/5 focus-within:border-primary/40 focus-within:bg-white/[0.05] transition-all duration-300 shadow-inner group">
        <input
          className="flex-1 bg-transparent text-white placeholder-white/20 outline-none text-sm font-medium py-1 selection:bg-primary/30"
          placeholder={placeholder ?? 'Initialize command sequence...'}
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSend();
            }
          }}
        />
        <div className="flex items-center gap-2">
          {val.trim() ? (
            <>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className="p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                    title="Insert emoji"
                  >
                    <Smile size={20} />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="p-0 border-none bg-transparent shadow-2xl z-[10001] w-auto" side="top" align="end">
                  {mounted && (
                    <EmojiPicker
                      theme={'dark' as any}
                      onEmojiClick={onEmojiClick}
                      width={300}
                      height={400}
                    />
                  )}
                </PopoverContent>
              </Popover>
              <button
                onClick={handleSend}
                className="p-2.5 bg-primary text-black rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(45,175,167,0.4)] group-focus-within:shadow-[0_0_30px_rgba(45,175,167,0.6)]"
                title="Send message"
              >
                <Send size={18} fill="currentColor" />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => onSubmit('👍')}
                className="p-2 text-white/30 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                title="Add reaction"
              >
                <ThumbsUp size={18} />
              </button>
              <button
                onClick={handleFileClick}
                className="p-2 text-white/30 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                title="Attach file"
              >
                <Paperclip size={18} />
              </button>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className="p-2 text-white/30 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                    title="Insert emoji"
                  >
                    <Smile size={18} />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="p-0 border-none bg-transparent shadow-2xl z-[10001] w-auto" side="top" align="end">
                  {mounted && (
                    <EmojiPicker
                      theme={'dark' as any}
                      onEmojiClick={onEmojiClick}
                      width={300}
                      height={400}
                    />
                  )}
                </PopoverContent>
              </Popover>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

