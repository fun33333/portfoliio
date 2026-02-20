// app/api/agent/route.ts
import { NextResponse } from 'next/server';
import { portfolioAgent } from '@/agents/portfolio-agent';
import { run } from '@openai/agents';
import { Msg } from '@/types/chat';

export async function POST(req: Request) {
  try {
    const { message, messages } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Build context from conversation history if provided
    let context = '';
    if (Array.isArray(messages) && messages.length > 0) {
      // Format previous messages for context
      context = (messages as Msg[])
        .map(
          msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`
        )
        .join('\n');
      context += '\n\nContinuing conversation...';
    }

    // Combine context with current message
    const fullMessage = context ? `${context}\n\nUser: ${message}` : message;

    // Run agent with streaming
    const result = await run(portfolioAgent, fullMessage, { stream: true });

    if (!result || typeof result.toTextStream !== 'function') {
      return NextResponse.json(
        { error: 'Agent did not return a stream' },
        { status: 500 }
      );
    }

    const nodeStream = result.toTextStream({
      compatibleWithNodeStreams: true,
    });

    // Convert Node.js Readable to Web ReadableStream
    const webStream = new ReadableStream({
      async pull(controller) {
        for await (const chunk of nodeStream) {
          controller.enqueue(
            typeof chunk === 'string'
              ? new TextEncoder().encode(chunk)
              : chunk
          );
        }
        controller.close();
      },
    });

    return new Response(webStream, {
      headers: { 'Content-Type': 'text/event-stream' },
    });
  } catch (err: any) {
    console.error('API agent error', err);
    return NextResponse.json(
      { error: err?.message ?? String(err) },
      { status: 500 }
    );
  }
}
