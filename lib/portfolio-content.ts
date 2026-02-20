// lib/portfolio-content.ts
// Structured portfolio content for RAG indexing

export interface PortfolioChunk {
  id: string;
  category: 'about' | 'projects' | 'skills' | 'services' | 'contact';
  text: string;
  metadata: {
    section: string;
    [key: string]: string | number;
  };
}

export const portfolioChunks: PortfolioChunk[] = [
  // ABOUT SECTION
  {
    id: 'about-1',
    category: 'about',
    text: `Quadgentics is a modern software house dedicated to helping startups and businesses build exceptional digital products. From AI automation to stunning web designs, we bring your vision to life with cutting-edge technology and creative excellence.`,
    metadata: { section: 'about', type: 'description' },
  },
  {
    id: 'about-2',
    category: 'about',
    text: `We are Mission-Driven, building digital solutions that transform businesses. We believe in creating technology that makes a real impact.`,
    metadata: { section: 'about', highlight: 'Mission-Driven' },
  },
  {
    id: 'about-3',
    category: 'about',
    text: `We prioritize Innovation First, where cutting-edge technology meets creative design. Our team stays ahead of industry trends to deliver the best solutions.`,
    metadata: { section: 'about', highlight: 'Innovation First' },
  },
  {
    id: 'about-4',
    category: 'about',
    text: `Our Expert Team consists of talented professionals dedicated to your success. We have the expertise across all modern technology stacks and design disciplines.`,
    metadata: { section: 'about', highlight: 'Expert Team' },
  },

  // PROJECTS SECTION
  {
    id: 'project-1',
    category: 'projects',
    text: `Moonbeam - A cutting-edge web application built with modern web technologies. Visit: https://gomoonbeam.com`,
    metadata: { section: 'projects', projectName: 'Moonbeam', projectType: 'Web Development' },
  },
  {
    id: 'project-2',
    category: 'projects',
    text: `Cursor - A SaaS platform designed for productivity and collaboration. Visit: https://cursor.so`,
    metadata: { section: 'projects', projectName: 'Cursor', projectType: 'SaaS' },
  },
  {
    id: 'project-3',
    category: 'projects',
    text: `Rogue - A comprehensive graphics design and branding platform. Visit: https://userogue.com`,
    metadata: { section: 'projects', projectName: 'Rogue', projectType: 'Graphic Design' },
  },
  {
    id: 'project-4',
    category: 'projects',
    text: `Editorially - A web-based content creation and management tool. Visit: https://editorially.org`,
    metadata: { section: 'projects', projectName: 'Editorially', projectType: 'Web Development' },
  },
  {
    id: 'project-5',
    category: 'projects',
    text: `Editrix AI - An AI-powered SaaS solution for content editing and optimization. Visit: https://editrix.ai`,
    metadata: { section: 'projects', projectName: 'Editrix AI', projectType: 'SaaS' },
  },
  {
    id: 'project-6',
    category: 'projects',
    text: `Pixel Perfect - A design system and graphics creation platform for teams. Visit: https://app.pixelperfect.quest`,
    metadata: { section: 'projects', projectName: 'Pixel Perfect', projectType: 'Graphic Design' },
  },

  // SERVICES SECTION
  {
    id: 'service-ai-automation',
    category: 'services',
    text: `AI Automation Services - We provide smart workflows and intelligent bots to automate repetitive tasks and save your team valuable time. Our AI automation capabilities include WhatsApp Bots for 24/7 automated customer interaction, Workflow Automation to streamline your business operations, and AI Integrations to empower your software with Large Language Models.`,
    metadata: { section: 'services', serviceName: 'AI Automation' },
  },
  {
    id: 'service-web-dev',
    category: 'services',
    text: `Web Development Services - We develop eye-catching, high-performance websites that strengthen your digital presence and convert visitors into customers. Our services include Frontend Development for clean, responsive, and interactive UIs, Backend Systems for robust and scalable server architectures, and E-Commerce solutions to scale your business with online stores.`,
    metadata: { section: 'services', serviceName: 'Web Development' },
  },
  {
    id: 'service-graphic-design',
    category: 'services',
    text: `Graphic Design Services - We craft unique visual identities that tell your story and resonate with your target audience. Our design services include Logo Design for memorable icons that define your brand, Brand Guidelines for consistent voice and visuals company-wide, and Visual Assets creation for high-quality graphics for all platforms.`,
    metadata: { section: 'services', serviceName: 'Graphic Design' },
  },
  {
    id: 'service-saas',
    category: 'services',
    text: `SaaS Cloud Services - We streamline your development lifecycle with automated pipelines and cloud infrastructure management. Our services include CI/CD Pipelines for faster automated releases, Cloud Infrastructure for scalable and secure cloud environments, and Containerization with Docker and Kubernetes orchestration.`,
    metadata: { section: 'services', serviceName: 'SaaS' },
  },
  {
    id: 'service-custom',
    category: 'services',
    text: `Custom Solutions - We provide tailor-made software solutions designed to solve your specific business challenges and drive innovation. Our custom services include Software Consulting for expert guidance, Custom CRM/ERP systems for efficient business management, and API Development to connect your applications seamlessly.`,
    metadata: { section: 'services', serviceName: 'Custom Solutions' },
  },
  {
    id: 'service-support',
    category: 'services',
    text: `24/7 Support Services - We provide round-the-clock technical assistance and maintenance to ensure your systems are always running smoothly. Our support includes Help Desk for immediate technical troubleshooting, App Maintenance with regular updates and security patches, and Site Monitoring for proactive uptime and health checks.`,
    metadata: { section: 'services', serviceName: '24/7 Support' },
  },

  // SKILLS SECTION
  {
    id: 'skills-1',
    category: 'skills',
    text: `Frontend Development: React, Next.js, Vue.js, TypeScript, Tailwind CSS, Framer Motion, responsive design, and modern UI/UX patterns.`,
    metadata: { section: 'skills', skillCategory: 'Frontend' },
  },
  {
    id: 'skills-2',
    category: 'skills',
    text: `Backend Development: Node.js, Python, Express.js, FastAPI, databases (SQL/NoSQL), API design, microservices architecture, and cloud deployment.`,
    metadata: { section: 'skills', skillCategory: 'Backend' },
  },
  {
    id: 'skills-3',
    category: 'skills',
    text: `AI & Machine Learning: LLM integration, OpenAI/Gemini APIs, prompt engineering, RAG systems, chatbots, automation, and data analysis.`,
    metadata: { section: 'skills', skillCategory: 'AI/ML' },
  },
  {
    id: 'skills-4',
    category: 'skills',
    text: `DevOps & Cloud: Docker, Kubernetes, CI/CD pipelines, AWS, Google Cloud, infrastructure as code, monitoring, and scalability.`,
    metadata: { section: 'skills', skillCategory: 'DevOps' },
  },
  {
    id: 'skills-5',
    category: 'skills',
    text: `Design: UI/UX design, branding, graphic design, design systems, Figma, prototyping, and visual identity creation.`,
    metadata: { section: 'skills', skillCategory: 'Design' },
  },

  // CONTACT SECTION
  {
    id: 'contact-1',
    category: 'contact',
    text: `Contact Quadgentics for project inquiries, consultations, or partnership opportunities. We're available 24/7 to discuss your project needs.`,
    metadata: { section: 'contact', type: 'general' },
  },
  {
    id: 'contact-2',
    category: 'contact',
    text: `Email us at hello@quadgentics.com for business inquiries, support requests, or to schedule a consultation with our team.`,
    metadata: { section: 'contact', type: 'email', contactType: 'business' },
  },
  {
    id: 'contact-3',
    category: 'contact',
    text: `Follow Quadgentics on social media and connect with us for updates, portfolio showcases, and industry insights.`,
    metadata: { section: 'contact', type: 'social', contactType: 'social-media' },
  },
  {
    id: 'contact-4',
    category: 'contact',
    text: `Schedule a free consultation with our team to discuss your project requirements and how we can help transform your vision into reality.`,
    metadata: { section: 'contact', type: 'consultation', contactType: 'booking' },
  },
];

// Helper function to get chunks by category
export function getChunksByCategory(category: PortfolioChunk['category']): PortfolioChunk[] {
  return portfolioChunks.filter(chunk => chunk.category === category);
}

// Helper function to search chunks by keyword
export function searchChunks(keyword: string): PortfolioChunk[] {
  const lowerKeyword = keyword.toLowerCase();
  return portfolioChunks.filter(
    chunk =>
      chunk.text.toLowerCase().includes(lowerKeyword) ||
      Object.values(chunk.metadata).some(
        value => String(value).toLowerCase().includes(lowerKeyword)
      )
  );
}
