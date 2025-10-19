// agents/tools/fetchProjects.ts
import { tool } from '@openai/agents';
import { z } from 'zod';

export const fetchProjectsTool = tool({
  name: 'fetch_projects',
  description: 'Return a list of project objects for embedding as iframes or cards',
  parameters: z.object({}),
  async execute() {
    // TODO: replace with DB or config in production
    return [
      {
        id: 'proj-1',
        url: 'https://project1.vercel.app',
        title: 'Resume Builder',
        description: 'Interactive resume builder demo',
      },
      {
        id: 'proj-2',
        url: 'https://project2.vercel.app',
        title: 'WhatsApp Automator',
        description: 'Automation prototype',
      },
    ];
  },
});
