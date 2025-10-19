// app/api/agent/route.ts
import { NextResponse } from 'next/server';
import { portfolioAgent } from '@/agents/portfolio-agent';
import { run } from '@openai/agents';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    // Streaming conversational text
      const result = await run(portfolioAgent, message, { stream: true });
      if (!result || typeof result.toTextStream !== 'function') {
        return NextResponse.json(
          { error: 'Agent did not return a stream' },
          { status: 500 }
        );
      }
      const nodeStream = result.toTextStream({ compatibleWithNodeStreams: true });
      // Convert Node.js Readable to Web ReadableStream
      const webStream = new ReadableStream({
        async pull(controller) {
          for await (const chunk of nodeStream) {
            controller.enqueue(typeof chunk === 'string' ? new TextEncoder().encode(chunk) : chunk);
          }
          controller.close();
        },
      });
      return new Response(webStream, {
        headers: { 'Content-Type': 'text/event-stream' },
      });
    
  } catch (err: any) {
    console.error('API agent error', err);
    return NextResponse.json({ error: err?.message ?? String(err) }, { status: 500 });
  }
}
