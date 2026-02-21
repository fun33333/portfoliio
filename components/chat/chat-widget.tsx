'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Send, ChevronLeft, Menu, RefreshCcw, Mail, Bell, BellOff, Home, MessageCircle } from 'lucide-react';
import { ChatBubble } from './ui/chat-bubble';
import { ChatInput } from './ui/chat-input';
import { nanoid } from 'nanoid';
import { Block } from '@/lib/contentFormatter';
import { Msg } from '@/types/chat';

interface ChatSession {
    id: string;
    name: string;
    lastMsg: string;
    time: string;
    messages: Msg[];
}

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [view, setView] = useState<'home' | 'messages' | 'chat'>('home');
    const [activeSessionId, setActiveSessionId] = useState<string>(nanoid());
    const [messages, setMessages] = useState<Msg[]>([
        {
            id: nanoid(),
            role: 'assistant',
            content: "Hi! I'm here to help. Ask me anything.",
        },
    ]);
    const [sessions, setSessions] = useState<ChatSession[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const listRef = useRef<HTMLDivElement>(null);

    // Sync current messages to sessions array whenever messages change
    useEffect(() => {
        if (messages.length > 1 || (messages.length === 1 && messages[0].role === 'user')) {
             setSessions(prev => {
                const lastMsg = messages[messages.length - 1]?.content || '';
                const sessionIndex = prev.findIndex(s => s.id === activeSessionId);
                
                const sessionData = {
                    id: activeSessionId,
                    name: 'Support Chat',
                    lastMsg: lastMsg.length > 40 ? lastMsg.substring(0, 40) + '...' : lastMsg,
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    messages: [...messages]
                };

                if (sessionIndex !== -1) {
                    const newSessions = [...prev];
                    newSessions[sessionIndex] = sessionData;
                    // Move to top
                    const item = newSessions.splice(sessionIndex, 1)[0];
                    return [item, ...newSessions];
                } else {
                    return [sessionData, ...prev];
                }
            });
        }
    }, [messages, activeSessionId]);

    useEffect(() => {
        if (view === 'chat' && listRef.current) {
            listRef.current.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages.length, isLoading, view]);

    const toggleOpen = () => setIsOpen(!isOpen);

    const handleEndChat = () => {
        setMessages([{
            id: nanoid(),
            role: 'assistant',
            content: "Hi! I'm here to help. Ask me anything.",
        }]);
        setActiveSessionId(nanoid());
        setIsMenuOpen(false);
    };

    const handleNewChat = () => {
        handleEndChat();
        setView('chat');
    };

    const loadSession = (session: ChatSession) => {
        setActiveSessionId(session.id);
        setMessages(session.messages);
        setView('chat');
    };

    const handleEmailTranscript = () => {
        // Mock email logic
        alert("Transcript sent to your email!");
        setIsMenuOpen(false);
    };

    async function sendMessage(text: string) {
        if (!text?.trim()) return;

        const userMsg: Msg = {
            id: nanoid(),
            role: 'user',
            content: text,
        };

        const assistantId = nanoid();

        // Add user message and placeholder for assistant
        setMessages((prev) => [
            ...prev,
            userMsg,
            {
                id: assistantId,
                role: 'assistant',
                content: '',
            },
        ]);

        setIsLoading(true);

        try {
            // Call the agent API with streaming
            const response = await fetch('/api/agent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: text,
                    messages: [...messages, userMsg], // Include conversation history
                }),
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.statusText}`);
            }

            if (!response.body) {
                throw new Error('No response body');
            }

            // Handle streaming response
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let fullContent = '';

            while (true) {
                const { done, value } = await reader.read();

                if (done) break;

                // Decode the chunk and add to content
                const chunk = decoder.decode(value, { stream: true });
                fullContent += chunk;

                // Update the assistant message with accumulated content
                setMessages((prev) =>
                    prev.map((m) =>
                        m.id === assistantId
                            ? { ...m, content: fullContent }
                            : m
                    )
                );
            }

            // Final decode to ensure all data is processed
            const finalChunk = decoder.decode();
            if (finalChunk) {
                fullContent += finalChunk;
                setMessages((prev) =>
                    prev.map((m) =>
                        m.id === assistantId
                            ? { ...m, content: fullContent }
                            : m
                    )
                );
            }
        } catch (error) {
            console.error('Error sending message:', error);

            // Show error message
            const errorMsg =
                error instanceof Error
                    ? error.message
                    : 'Failed to get response from the server';

            setMessages((prev) =>
                prev.map((m) =>
                    m.id === assistantId
                        ? {
                              ...m,
                              content: `Sorry, I encountered an error: ${errorMsg}. Please try again.`,
                          }
                        : m
                )
            );
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end pointer-events-none font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-4 w-[350px] sm:w-[380px] h-[600px] max-h-[80vh] bg-[#0E0E1C] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden pointer-events-auto backdrop-blur-md"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary/90 to-primary-dark/90 p-5 relative shrink-0 text-white flex items-center justify-between">
                            {view !== 'home' && (
                                <button
                                    onClick={() => setView(view === 'chat' ? 'messages' : 'home')}
                                    className="hover:bg-white/20 rounded-full p-1 transition mr-2"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                            )}
                            <div className="flex flex-col items-center justify-center flex-1 pr-6">
                                <h2 className="text-xl font-bold mb-1">
                                    {view === 'home' ? 'Hi there 👋' : view === 'messages' ? 'Messages' : 'Support Chat'}
                                </h2>
                                <p className="text-white/80 text-xs text-center px-4">
                                    {view === 'home'
                                        ? 'Need help? Search our help center or start a chat.'
                                        : view === 'messages' ? 'View your recent conversations' : 'We typically reply in a few minutes.'}
                                </p>
                            </div>
                            {view === 'chat' && (
                                <div className="relative">
                                    <button
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                        className="hover:bg-white/20 rounded-full p-1 transition ml-2"
                                    >
                                        <Menu size={24} />
                                    </button>
                                    <AnimatePresence>
                                        {isMenuOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                                                className="absolute right-0 top-full mt-2 w-48 bg-[#1C1F3C] border border-white/10 rounded-xl shadow-xl overflow-hidden z-50 backdrop-blur-md"
                                            >
                                                <button
                                                    onClick={handleEndChat}
                                                    className="w-full text-left px-4 py-3 text-sm text-white hover:bg-white/5 flex items-center gap-2 transition"
                                                >
                                                    <RefreshCcw size={16} className="text-gray-400" />
                                                    End Chat
                                                </button>
                                                <button
                                                    onClick={handleEmailTranscript}
                                                    className="w-full text-left px-4 py-3 text-sm text-white hover:bg-white/5 flex items-center gap-2 transition border-t border-white/5"
                                                >
                                                    <Mail size={16} className="text-gray-400" />
                                                    Email Transcript
                                                </button>
                                                <button
                                                    onClick={() => setIsMuted(!isMuted)}
                                                    className="w-full text-left px-4 py-3 text-sm text-white hover:bg-white/5 flex items-center gap-2 transition border-t border-white/5"
                                                >
                                                    {isMuted ? <BellOff size={16} className="text-gray-400" /> : <Bell size={16} className="text-gray-400" />}
                                                    {isMuted ? 'Unmute' : 'Mute'} Notifications
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 bg-[#0E0E1C] relative flex flex-col min-h-0">
                            {view === 'home' ? (
                                <div className="p-6 space-y-4 overflow-y-auto">
                                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition cursor-pointer group">
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="font-semibold text-white">Help Center</h3>
                                        </div>
                                        <div className="relative">
                                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                            <div className="w-full bg-[#1C1F3C] border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-gray-400">
                                                Search for answers...
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        onClick={handleNewChat}
                                        className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition cursor-pointer flex justify-between items-center group"
                                    >
                                        <div>
                                            <h3 className="font-semibold text-white">New Conversation</h3>
                                            <p className="text-sm text-gray-400 mt-1">Start a chat with our AI agent</p>
                                        </div>
                                        <Send className="text-primary group-hover:translate-x-1 transition-transform" size={20} />
                                    </div>

                                    {sessions.length > 0 && (
                                        <div>
                                            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">Recent Activity</h3>
                                            <div className="space-y-3">
                                                {sessions.map((conv) => (
                                                    <div
                                                        key={conv.id}
                                                        onClick={() => loadSession(conv)}
                                                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition cursor-pointer border border-transparent hover:border-white/10 group"
                                                    >
                                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                                            <MessageCircle size={20} />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex justify-between items-center">
                                                                <h4 className="text-sm font-medium text-white group-hover:text-primary transition-colors">{conv.name}</h4>
                                                                <span className="text-[10px] text-gray-500">{conv.time}</span>
                                                            </div>
                                                            <p className="text-xs text-gray-400 truncate">{conv.lastMsg}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : view === 'messages' ? (
                                <div className="p-6 space-y-6 overflow-y-auto">
                                    <div>
                                        <h3 className="text-sm font-medium text-white/50 mb-3 uppercase tracking-wider text-[10px]">Start a new chat</h3>
                                        <div
                                            onClick={handleNewChat}
                                            className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-primary/50 transition cursor-pointer flex justify-between items-center group"
                                        >
                                            <div>
                                                <h3 className="font-semibold text-white">New Conversation</h3>
                                                <p className="text-xs text-gray-400 mt-1">We typically reply in a few minutes</p>
                                            </div>
                                            <Send className="text-primary group-hover:translate-x-1 transition-transform" size={20} />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-medium text-white/50 mb-3 uppercase tracking-wider text-[10px]">Recent</h3>
                                        <div className="space-y-2">
                                            {sessions.map((conv: ChatSession) => (
                                                <div
                                                    key={conv.id}
                                                    onClick={() => loadSession(conv)}
                                                    className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition cursor-pointer flex justify-between items-center group"
                                                >
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex justify-between items-center mb-1">
                                                            <h4 className="font-medium text-white text-sm">{conv.name}</h4>
                                                            <span className="text-[10px] text-gray-500 whitespace-nowrap">{conv.time}</span>
                                                        </div>
                                                        <p className="text-xs text-gray-400 truncate pr-4">{conv.lastMsg}</p>
                                                    </div>
                                                    <ChevronLeft size={16} className="text-gray-600 group-hover:text-primary transition-colors rotate-180" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div
                                        ref={listRef}
                                        onWheel={(e) => e.stopPropagation()} /* keep wheel scrolling inside widget */
                                        className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                                    >
                                        {messages.map((m) => (
                                            <ChatBubble key={m.id} role={m.role} content={m.content} html={m.html} blocks={m.blocks} />
                                        ))}
                                        {isLoading && (
                                            <div className="text-xs text-gray-500 pl-4 animate-pulse">Typing...</div>
                                        )}
                                    </div>
                                    <div className="p-3 border-t border-white/10 bg-[#0E0E1C]">
                                        <ChatInput
                                            placeholder="Type a message..."
                                            onSubmit={sendMessage}
                                        />
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Bottom Navigation */}
                        <div className="bg-[#0E0E1C] border-t border-white/10 flex justify-around items-center py-2 shrink-0">
                            <button
                                onClick={() => setView('home')}
                                className={`flex flex-col items-center gap-1 transition-colors ${view === 'home' ? 'text-primary' : 'text-gray-500 hover:text-white'}`}
                            >
                                <Home size={24} />
                            </button>
                            <button
                                onClick={() => setView('messages')}
                                className={`flex flex-col items-center gap-1 transition-colors ${view === 'messages' || view === 'chat' ? 'text-primary' : 'text-gray-500 hover:text-white'}`}
                            >
                                <MessageCircle size={24} />
                            </button>
                        </div>

                        <div className="py-2 text-center bg-[#0E0E1C] border-t border-white/10 text-[10px] text-gray-500">
                            Powered by Quadgentics AI
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={toggleOpen}
                className="pointer-events-auto h-16 w-16 rounded-full bg-gradient-to-r from-primary to-accent-teal shadow-[0_0_20px_rgba(45,175,167,0.4)] flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-300 relative group overflow-hidden"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X size={28} strokeWidth={3} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="w-full h-full relative"
                        >
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/Technology.mp4" type="video/mp4" />
                            </video>
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </div>
    );
}
