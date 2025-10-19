// lib/ai-sdk.ts
import { OpenAIChatCompletionsModel, setTracingDisabled } from '@openai/agents';
import OpenAI from 'openai';

setTracingDisabled(true);


export const openaiClient = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: process.env.GEMINI_BASE_URL,
});


export const model = new OpenAIChatCompletionsModel(
  openaiClient,
  "gemini-2.0-flash" // example model name
);
// Not necessary to create Agent here if agents are defined in agents/*.ts
// Keep this file for shared helpers if you want.

