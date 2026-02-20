// agents/tools/ragSearch.ts
// RAG search tool for the portfolio agent

import { tool } from '@openai/agents';
import { z } from 'zod';
import { queryPinecone } from '@/lib/rag';

export const ragSearchTool = tool({
  name: 'search_portfolio_content',
  description:
    'Search the portfolio knowledge base for relevant content and information about projects, services, skills, and contact information',
  parameters: z.object({
    query: z
      .string()
      .describe('The search query to find relevant portfolio content'),
  }),
  async execute({ query }) {
    try {
      const results = await queryPinecone(query, 5);

      if (results.length === 0) {
        return 'No relevant content found in the portfolio knowledge base for your query.';
      }

      // Format results for the agent
      const formattedResults = results
        .map((text, index) => `${index + 1}. ${text}`)
        .join('\n\n');

      return `Found relevant portfolio content:\n\n${formattedResults}`;
    } catch (error) {
      console.error('Error in RAG search:', error);
      return 'Sorry, I encountered an error while searching the knowledge base. Please try again.';
    }
  },
});
