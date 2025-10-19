// agents/tools/fetchImage.ts
import { tool } from '@openai/agents';
import { z } from 'zod';

export const fetchImageTool = tool({
  name: 'fetch_image',
  description: 'Validate/return image metadata for UI blocks',
  parameters: z.object({
    url: z.string(),
    alt: z.string().optional(),
  }),
  async execute({ url, alt }) {
    // optional: perform HEAD request to validate the image URL
    return { url, alt: alt || 'Image' };
  },
});
