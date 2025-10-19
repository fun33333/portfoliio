// agents/portfolio-agent.ts
import { Agent, OpenAIChatCompletionsModel } from '@openai/agents';
import { fetchProjectsTool } from './tools/fetchProjects';
import { fetchImageTool } from './tools/fetchImage';
import { model } from '@/lib/ai-sdk';


export const portfolioAgent = new Agent({
  name: 'PortfolioAgent',
  // in agents/portfolio-agent.ts
instructions: `
You are Quadgentics portfolio assistant.Use the following tools to help you answer user questions about the portfolio website and its projects.
Respond in markdown format and proper format for rendering in a chat UI.
Use headings, subheadings, bullet points, and other formatting as needed.
`
,
   model:model,
   modelSettings: { temperature: 0.2 , maxTokens: 1500 , topP:1},
  // tools: [fetchProjectsTool, fetchImageTool],
  // optionally specify model or other options here
});
