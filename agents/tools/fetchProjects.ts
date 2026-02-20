// agents/tools/fetchProjects.ts
import { tool } from '@openai/agents';
import { z } from 'zod';
import { getChunksByCategory } from '@/lib/portfolio-content';

export const fetchProjectsTool = tool({
  name: 'fetch_projects',
  description:
    'Return a list of Quadgentics projects including web development, SaaS, and graphic design projects',
  parameters: z.object({}),
  async execute() {
    const projectChunks = getChunksByCategory('projects');

    // Extract project information from chunks
    const projects = projectChunks.map((chunk, index) => {
      const text = chunk.text;
      // Parse project info from text (format: "ProjectName - description. Visit: URL")
      const nameMatch = text.match(/^(\w+(?:\s+\w+)*)/);
      const urlMatch = text.match(/https?:\/\/[^\s]+/);
      const typeMatch = chunk.metadata.projectType || 'Project';

      return {
        id: chunk.id,
        name: nameMatch ? nameMatch[1] : 'Project',
        url: urlMatch ? urlMatch[0] : '#',
        description: text.split(' - ')[1]?.split('. Visit:')[0] || text,
        category: chunk.metadata.projectType || 'Web Development',
        link: urlMatch ? urlMatch[0] : '#',
      };
    });

    return {
      total: projects.length,
      projects,
      message: `We have ${projects.length} featured projects showcasing our expertise in web development, SaaS, and graphic design.`,
    };
  },
});
