<!--
Sync Impact Report:
Version: 1.0.0 (Initial Constitution)
Modified Principles: N/A (New document)
Added Sections: 
  - UI/UX Excellence
  - SEO Optimization
  - Engineering Best Practices
  - Scalability & Maintainability
  - Business Alignment
  - AI Chatbot Integration
  - Performance Standards
  - Security Requirements
Removed Sections: N/A
Templates Requiring Updates:
  - ✅ plan-template.md (Constitution Check section aligns with principles)
  - ✅ spec-template.md (Requirements section aligns with principles)
  - ✅ tasks-template.md (Task categorization aligns with principles)
Follow-up TODOs: None
-->

# Quadgentics Portfolio Constitution

## Core Principles

### I. UI/UX Excellence (NON-NEGOTIABLE)

All user-facing interfaces MUST adhere to modern design standards with accessibility as a core requirement. This principle ensures the website delivers exceptional user experience while being inclusive and performant.

**Requirements:**
- **Accessibility**: MUST achieve WCAG 2.1 AA compliance minimum. All interactive elements must be keyboard navigable, have proper ARIA labels, and maintain sufficient color contrast ratios (4.5:1 for normal text, 3:1 for large text).
- **Design System**: MUST maintain a consistent design system with reusable components. All UI components must be documented, versioned, and follow a single source of truth for styling (e.g., Tailwind CSS configuration, component library).
- **Responsive Design**: MUST be fully responsive across all device sizes (mobile: 320px+, tablet: 768px+, desktop: 1024px+). Layouts must adapt gracefully without horizontal scrolling or content overflow.
- **Performance**: MUST achieve fast load times with Core Web Vitals targets: LCP < 2.5s, FID < 100ms, CLS < 0.1. Navigation between pages MUST feel instant (< 200ms perceived latency).
- **User Feedback**: MUST provide clear visual feedback for all user interactions (hover states, loading indicators, error messages, success confirmations).

**Rationale**: A professional portfolio website's credibility depends on user experience. Poor UX directly impacts conversion rates, user trust, and business outcomes. Accessibility ensures legal compliance and expands audience reach.

### II. SEO Optimization (NON-NEGOTIABLE)

All pages MUST be optimized for search engine discovery and ranking. This principle ensures maximum visibility and organic traffic growth.

**Requirements:**
- **Semantic HTML**: MUST use semantic HTML5 elements with proper heading hierarchy (h1 → h2 → h3). Each page MUST have exactly one h1 tag.
- **Metadata**: MUST include comprehensive metadata for every page: unique title tags (50-60 chars), meta descriptions (150-160 chars), Open Graph tags (og:title, og:description, og:image, og:url), and Twitter Card tags.
- **Structured Data**: MUST implement JSON-LD structured schema markup (Organization, WebSite, Person, Article/BlogPosting where applicable) following Schema.org vocabulary.
- **Server-Side Rendering**: MUST use Next.js SSR or Static Site Generation (SSG) for all public pages to ensure content is crawlable and indexable. Dynamic routes MUST use `getStaticPaths` with `fallback: 'blocking'` or `getServerSideProps` as appropriate.
- **URL Structure**: MUST use clean, descriptive URLs with hyphens (e.g., `/projects/ai-dashboard` not `/projects?id=1`). All URLs MUST be lowercase and human-readable.
- **Sitemap & Robots**: MUST maintain an automatically generated sitemap.xml and robots.txt. Sitemap MUST be submitted to Google Search Console and Bing Webmaster Tools.
- **Image Optimization**: MUST use Next.js Image component with proper alt text for all images. Images MUST be optimized (WebP format preferred) and lazy-loaded where appropriate.

**Rationale**: SEO directly impacts organic traffic and lead generation. Without proper SEO, the website remains invisible to potential clients and partners, limiting business growth.

### III. Engineering Best Practices (NON-NEGOTIABLE)

All code MUST follow industry-standard practices for quality, maintainability, and reliability. This principle ensures long-term project sustainability and reduces technical debt.

**Requirements:**
- **TypeScript**: MUST use TypeScript for all source code. Strict mode MUST be enabled. No `any` types allowed without explicit justification and `@ts-expect-error` comments.
- **Spec-Driven Development**: MUST follow GitHub Spec-Kit workflow: specification → plan → tasks → implementation. All features MUST have a spec document before implementation begins.
- **Code Quality**: MUST use ESLint with Next.js recommended rules and Prettier for code formatting. Pre-commit hooks MUST enforce linting and formatting. All code MUST pass linting before merge.
- **Testing**: MUST maintain unit tests (Jest) and integration tests (React Testing Library) for all critical user flows and business logic. Test coverage MUST be ≥ 80% for services and utilities, ≥ 60% for components. All tests MUST pass before deployment.
- **CI/CD Pipeline**: MUST have automated CI/CD pipeline with Dockerized builds. Pipeline MUST include: linting, type checking, test execution, build verification, and health checks. Failed pipelines MUST block deployment.
- **Code Review**: All pull requests MUST be reviewed by at least one team member. Reviews MUST verify constitution compliance, test coverage, and code quality standards.

**Rationale**: Engineering best practices prevent bugs, reduce maintenance costs, and enable team scalability. Spec-driven development ensures alignment and reduces miscommunication.

### IV. Scalability & Maintainability

The codebase MUST be structured for long-term growth and easy maintenance. This principle ensures the project remains manageable as it scales.

**Requirements:**
- **Modular Architecture**: MUST follow clear separation of concerns: pages → components → services → utilities → types. Each module MUST have a single responsibility. Shared logic MUST be extracted to reusable utilities or services.
- **Environment Variables**: MUST use environment variables for all configuration (API keys, feature flags, environment-specific settings). `.env.example` MUST document all required variables. Production secrets MUST NEVER be committed to version control.
- **Documentation**: MUST maintain documentation-first approach. All public APIs, components, and services MUST have JSDoc comments. README.md MUST include setup instructions, architecture overview, and contribution guidelines.
- **Dependency Management**: MUST keep dependencies up-to-date and audit for security vulnerabilities monthly. Major version upgrades MUST be tested in staging before production deployment.
- **Error Handling**: MUST implement comprehensive error handling with user-friendly error messages. All errors MUST be logged with appropriate context. Production errors MUST be monitored (e.g., Sentry integration).

**Rationale**: Scalable architecture prevents technical debt accumulation and enables team productivity. Documentation ensures knowledge transfer and onboarding efficiency.

### V. Business Alignment

All features and content MUST align with business objectives of showcasing software products/services and generating leads. This principle ensures the website serves its primary business purpose.

**Requirements:**
- **Product Showcase**: MUST clearly showcase software products/services with detailed descriptions, case studies, and live demos where applicable. Each product MUST have a dedicated page with clear value propositions.
- **Conversion Optimization**: Landing pages MUST be optimized for conversions with clear CTAs (Call-to-Actions), minimal friction, and compelling value propositions. Contact forms MUST be simple and accessible.
- **Analytics Integration**: MUST integrate Google Analytics 4 (GA4) or equivalent analytics platform. MUST track key events: page views, form submissions, CTA clicks, chatbot interactions, and user journeys.
- **Content Strategy**: All content MUST be professional, concise, and aligned with brand voice. Content MUST be reviewed for accuracy and relevance quarterly.
- **Lead Generation**: Contact forms and chatbot MUST capture lead information securely. Lead data MUST be stored in compliance with privacy regulations (GDPR/CCPA where applicable).

**Rationale**: The website's primary purpose is business growth. Without clear product showcasing and conversion optimization, the website fails to deliver business value.

### VI. AI Chatbot Integration (OpenAI Agents SDK)

The AI chatbot MUST provide professional customer support while maintaining security and performance standards. This principle ensures effective lead generation and customer engagement.

**Requirements:**
- **SDK Integration**: MUST use OpenAI Agents SDK (`@openai/agents`) for chatbot functionality. Chatbot MUST be integrated seamlessly into the website with accessible UI components.
- **Tone & Voice**: Chatbot responses MUST follow company tone: professional, helpful, and concise. Responses MUST avoid jargon and be user-friendly.
- **Multilingual Support**: Chatbot MUST support English and Urdu Roman (Roman Urdu) for local audience. Language detection MUST be automatic based on user input, with manual language selection option.
- **Security**: MUST NOT store sensitive user data in chatbot sessions. All user queries MUST be sanitized before processing. API keys MUST be stored securely as environment variables.
- **Fallback Handling**: When queries exceed chatbot scope or complexity, MUST provide clear fallback to human support (contact form, email, or scheduling link). Fallback message MUST be professional and helpful.
- **Performance**: Chatbot API calls MUST be optimized for speed (< 2s response time). Responses MUST be cached where appropriate (e.g., FAQ answers). Chatbot UI MUST not block page rendering or cause layout shifts.
- **Error Handling**: Chatbot MUST handle API failures gracefully with user-friendly error messages. Network timeouts MUST be handled with retry logic (max 2 retries).

**Rationale**: AI chatbot enhances user engagement and provides 24/7 support, directly impacting lead generation and customer satisfaction. Security and performance are critical for user trust.

## Performance Standards

**Core Web Vitals Targets:**
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

**Additional Metrics:**
- Time to First Byte (TTFB): < 600ms
- First Contentful Paint (FCP): < 1.8s
- Total Blocking Time (TBT): < 200ms
- Speed Index: < 3.4s

**Monitoring**: Performance metrics MUST be monitored in production using tools like Vercel Analytics, Google PageSpeed Insights, or Lighthouse CI. Performance regressions MUST be addressed within 1 sprint.

## Security Requirements

**Data Protection:**
- All user inputs MUST be sanitized to prevent XSS attacks.
- API endpoints MUST validate and sanitize all inputs.
- Sensitive data (API keys, tokens) MUST NEVER be exposed in client-side code.

**Authentication & Authorization:**
- Admin/authenticated routes (if any) MUST use secure authentication (NextAuth.js or equivalent).
- Session management MUST follow security best practices (httpOnly cookies, CSRF protection).

**Dependencies:**
- Security vulnerabilities in dependencies MUST be addressed within 48 hours of discovery.
- Automated dependency scanning MUST be part of CI/CD pipeline.

## Development Workflow

**Branch Strategy:**
- Feature branches: `[###-feature-name]` format
- Main branch: `main` (protected, requires PR approval)
- All changes MUST go through pull request process

**Commit Standards:**
- Commits MUST follow conventional commit format: `type(scope): description`
- Types: feat, fix, docs, style, refactor, test, chore
- Example: `feat(chatbot): add multilingual support for Urdu Roman`

**Deployment:**
- All deployments MUST be automated via CI/CD
- Staging environment MUST be used for testing before production
- Production deployments MUST include health checks and rollback capability

## Governance

**Constitution Authority:**
This constitution supersedes all other development practices and standards. Any deviation from these principles MUST be documented with justification and approved by the project lead.

**Amendment Process:**
1. Proposed amendments MUST be documented in a GitHub issue or discussion
2. Amendments require review and approval from project stakeholders
3. Approved amendments MUST update this document with version bump
4. Version changes follow semantic versioning:
   - **MAJOR**: Backward incompatible changes or principle removals
   - **MINOR**: New principles or significant expansions
   - **PATCH**: Clarifications, typo fixes, non-semantic refinements

**Compliance Review:**
- All pull requests MUST verify constitution compliance
- Quarterly reviews MUST assess adherence and identify improvement areas
- Violations MUST be addressed before merge approval

**Complexity Justification:**
Any architectural decision that increases complexity (e.g., additional services, new patterns) MUST be justified in the implementation plan with:
- Why the complexity is needed
- What simpler alternatives were considered and rejected
- How the complexity will be managed

**Version**: 1.0.0 | **Ratified**: 2025-01-27 | **Last Amended**: 2025-01-27
