// lib/ai-sdk.ts
import { OpenAIChatCompletionsModel, setTracingDisabled } from '@openai/agents';
import OpenAI from 'openai';

setTracingDisabled(true);

// Determine which AI provider to use based on env vars
const getAIConfig = () => {
  const hasOpenAI = !!process.env.OPENAI_API_KEY;
  const hasGemini = !!process.env.GEMINI_API_KEY;

  if (hasOpenAI) {
    return {
      provider: 'openai' as const,
      apiKey: process.env.OPENAI_API_KEY,
      baseURL: 'https://api.openai.com/v1',
      model: 'gpt-4o-mini',
    };
  }

  if (hasGemini) {
    return {
      provider: 'gemini' as const,
      apiKey: process.env.GEMINI_API_KEY,
      baseURL: process.env.GEMINI_BASE_URL || 'https://generativelanguage.googleapis.com/v1beta/openai/',
      model: 'gemini-2.0-flash',
    };
  }

  // Fallback for build time
  return {
    provider: 'gemini' as const,
    apiKey: 'build-placeholder-key',
    baseURL: process.env.GEMINI_BASE_URL || 'https://generativelanguage.googleapis.com/v1beta/openai/',
    model: 'gemini-2.0-flash',
  };
};

const aiConfig = getAIConfig();

// Create OpenAI client (works for both OpenAI and Gemini APIs)
export const openaiClient = new OpenAI({
  apiKey: aiConfig.apiKey,
  baseURL: aiConfig.baseURL,
});

// Create embedding client (same client, will use appropriate API)
export const embeddingClient = openaiClient;

// Create the model for the agent
export const model = new OpenAIChatCompletionsModel(
  openaiClient,
  aiConfig.model
);

export const currentProvider = aiConfig.provider;

