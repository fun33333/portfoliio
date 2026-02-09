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

    // Mock response logic
    setTimeout(() => {
      let responseContent = "I'm a frontend-only demo right now, but I can tell you about this portfolio!";
      let responseBlocks: Block[] | undefined;

      const lowerText = text.toLowerCase();

      if (lowerText.includes('project') || lowerText.includes('work')) {
        responseContent = "I've worked on some exciting projects. Here are a few highlights from my portfolio:";
        responseBlocks = [
          {
            type: 'card-grid',
            items: [
              { title: 'AI Analytics Dashboard', description: 'Next.js, Tailwind, Python backend for predictive modeling.', link: '/projects/analytics' },
              { title: 'E-commerce Platform', description: 'Scalable React application with Stripe & Node.js.', link: '/projects/ecommerce' },
              { title: 'Portfolio v3', description: 'The immersive cyber-tech site you are looking at!', link: '/' }
            ]
          }
        ];
      } else if (lowerText.includes('service') || lowerText.includes('help')) {
        responseContent = "I offer specialized services to help brands excel in the digital space:";
        responseBlocks = [
          {
            type: 'list',
            items: [
              '🚀 Custom Web Development (Next.js/React)',
              '🤖 AI Integration & Intelligent Chatbots',
              '🎨 Premium UI/UX Design & Prototyping',
              '⚡ Performance Optimization & SEO'
            ]
          }
        ];
      } else if (lowerText.includes('contact') || lowerText.includes('email') || lowerText.includes('hire')) {
        responseContent = "I'm always open to new opportunities! You can reach me at **contact@quadgentics.io** or use the contact form on the site. Would you like me to show you the contact link?";
        responseBlocks = [
          { type: 'reference', title: 'Contact Page', url: '/contact' }
        ];
      } else if (lowerText.includes('hello') || lowerText.includes('hi')) {
        responseContent = "Hello! I am your AI guide. How can I assist you in exploring this portfolio today?";
      } else if (lowerText.includes('team') || lowerText.includes('about')) {
        responseContent = "Quadgentics is a team of passionate developers and designers focused on building the future of the web.";
        responseBlocks = [
          { type: 'text', content: "We specialize in modern tech stacks and high-performance applications." }
        ];
      }

      setMessages((prev) => [
        ...prev,
        {
          id: nanoid(),
          role: 'assistant',
          content: responseContent,
          blocks: responseBlocks
        }
      ]);
      setIsLoading(false);
    }, 1200 + Math.random() * 800); // Random delay 1.2s - 2.0s
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
