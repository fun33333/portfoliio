"use client"

import { motion } from "framer-motion"
import AiCodeReviews from "./bento/ai-code-reviews"
import RealtimeCodingPreviews from "./bento/real-time-previews"
import OneClickIntegrationsIllustration from "./bento/one-click-integrations-illustration"
import MCPConnectivityIllustration from "./bento/mcp-connectivity-illustration"
import EasyDeployment from "./bento/easy-deployment"
import ParallelCodingAgents from "./bento/parallel-agents"

const BentoCard = ({ title, description, Component, index }) => (
  <motion.div
    className="card-hover glass-card overflow-hidden rounded-2xl border border-white/10 flex flex-col justify-start items-start relative group"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{
      y: -12,
      scale: 1.02,
      boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(59, 130, 246, 0.15)",
    }}
  >
    {/* Tech corner indicators */}
    <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-primary/40 group-hover:border-primary transition-colors duration-300"></div>
    <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-primary/40 group-hover:border-primary transition-colors duration-300"></div>

    <div className="self-stretch p-8 flex flex-col justify-start items-start gap-4 relative z-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-3">
        <motion.h3
          className="text-foreground text-xl font-tech font-semibold leading-7"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-primary font-mono text-sm mr-3">//</span>
          {title}
        </motion.h3>
        <p className="text-muted-foreground font-tech text-base leading-relaxed">{description}</p>
      </div>
    </div>

    <div className="self-stretch h-80 relative -mt-2 z-10 overflow-hidden">
      <Component />
    </div>

    {/* Hover glow effect */}
    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
  </motion.div>
)

export function BentoSection() {
  const cards = [
    {
      title: "AI Automation Solutions",
      description:
        "Intelligent automation tools to streamline your business processes with cutting-edge AI technology.",
      Component: AiCodeReviews,
    },
    {
      title: "Web Development",
      description:
        "Modern, responsive websites and applications built with the latest technologies and best practices.",
      Component: RealtimeCodingPreviews,
    },
    {
      title: "Graphic Design",
      description: "Creative visual solutions for your brand identity and marketing campaigns that stand out.",
      Component: OneClickIntegrationsIllustration,
    },
    {
      title: "DevOps & Deployment",
      description: "Seamless deployment and infrastructure management for scalable, reliable applications.",
      Component: MCPConnectivityIllustration,
    },
    {
      title: "Custom Solutions",
      description: "Tailored digital solutions designed specifically for your unique business requirements.",
      Component: ParallelCodingAgents,
    },
    {
      title: "24/7 Support",
      description: "Dedicated technical support to ensure your digital solutions run smoothly around the clock.",
      Component: EasyDeployment,
    },
  ]

  return (
    <section className="w-full section-padding container-padding flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full relative flex flex-col justify-start items-start content-spacing">
        {/* Background tech grid */}
        <div className="absolute inset-0 tech-grid opacity-20"></div>

        <motion.div
          className="self-stretch flex flex-col justify-center items-center gap-8 z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col justify-start items-center gap-6 text-center max-w-4xl">
            <motion.h2
              className="text-foreground text-4xl md:text-5xl lg:text-6xl font-tech font-bold leading-tight"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-mono">&lt;</span>
              Core Services
              <span className="text-primary font-mono">/&gt;</span>
            </motion.h2>
            <p className="text-muted-foreground text-lg md:text-xl font-tech leading-relaxed">
              Four specialized domains where technology meets creativity to deliver exceptional digital solutions that
              drive business growth and innovation.
            </p>
          </div>
        </motion.div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-gap z-10 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <BentoCard key={card.title} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
