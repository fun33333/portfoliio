// lib/ai-sdk.ts
import { OpenAIChatCompletionsModel, setTracingDisabled } from '@openai/agents';
import OpenAI from 'openai';

setTracingDisabled(true);

// Initialize with proper handling for missing env vars
const getClient = () => {
  const apiKey = process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    console.warn('API key not found. Using placeholder for build.');
    return new OpenAI({
      apiKey: 'build-placeholder-key',
      baseURL: process.env.GEMINI_BASE_URL || 'https://api.openai.com/v1',
    });
  }
  
  return new OpenAI({
    apiKey,
    baseURL: process.env.GEMINI_BASE_URL,
  });
};

export const openaiClient = getClient();


export const model = new OpenAIChatCompletionsModel(
  openaiClient,
  "gemini-2.0-flash" // example model name
);
// Not necessary to create Agent here if agents are defined in agents/*.ts
// Keep this file for shared helpers if you want.

