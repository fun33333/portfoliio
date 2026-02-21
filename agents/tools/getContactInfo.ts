// agents/tools/getContactInfo.ts
// Contact information tool for the portfolio agent

import { tool } from '@openai/agents';
import { z } from 'zod';

export const getContactInfoTool = tool({
  name: 'get_contact_info',
  description:
    'Get contact information and ways to reach Quadgentics for inquiries, partnerships, or support',
  parameters: z.object({}),
  async execute() {
    return {
      company: 'Quadgentics',
      description: 'A modern software house dedicated to building exceptional digital products',
      contact: {
        email: 'info@quadgentics.com',
        support: '24/7 Support Available',
        website: 'https://quadgentics.com',
      },
      services: [
        'AI Automation',
        'Web Development',
        'Graphic Design',
        'SaaS Solutions',
        'Custom Software',
        '24/7 Technical Support',
      ],
      availability: 'Available for consultations, partnerships, and project inquiries',
      message:
        'Feel free to reach out to discuss your project needs. Our team is ready to help transform your vision into reality.',
    };
  },
});
