"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

const faqData = [
  {
    question: "What is Quadgentics and who is it for?",
    answer:
      "Quadgentics is an AI-powered development platform designed for developers, teams, and organizations who want to accelerate their coding workflow. It's perfect for both individual developers looking to enhance their productivity and teams seeking seamless collaboration tools.",
  },
  {
    question: "How does Quadgentics's AI code review work?",
    answer:
      "Our AI analyzes your code in real-time, providing intelligent suggestions for improvements, catching potential bugs, and ensuring best practices. It learns from your coding patterns and adapts to your team's standards, making code reviews faster and more consistent.",
  },
  {
    question: "Can I integrate Quadgentics with my existing tools?",
    answer:
      "Yes! Quadgentics offers one-click integrations with popular development tools including GitHub, GitLab, VS Code, Slack, and many more. Our MCP connectivity allows you to easily manage and configure server access across your entire development stack.",
  },
  {
    question: "What's included in the free plan?",
    answer:
      "The free plan includes real-time code suggestions, basic integrations, single MCP server connection, up to 2 AI coding agents, and Vercel deployments with Quadgentics branding. It's perfect for individual developers getting started.",
  },
  {
    question: "How do parallel coding agents work?",
    answer:
      "Our parallel coding agents can work on different parts of your codebase simultaneously, solving complex problems faster than traditional single-threaded approaches. You can launch multiple agents to handle different tasks like bug fixes, feature development, and code optimization concurrently.",
  },
  {
    question: "Is my code secure with Quadgentics?",
    answer:
      "Absolutely. We use enterprise-grade security measures including end-to-end encryption, secure data transmission, and compliance with industry standards. Your code never leaves your secure environment without your explicit permission, and we offer on-premises deployment options for enterprise customers.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}

const FAQItem = ({ question, answer, isOpen, onToggle, index }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <motion.div
      className={`w-full glass-card shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-xl outline outline-1 outline-border outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer group`}
      onClick={handleClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{
        y: -5,
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2), 0 0 15px rgba(59, 130, 246, 0.1)",
      }}
    >
      <div className="w-full px-6 py-4 pr-5 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-lg font-tech font-medium leading-6 break-words group-hover:text-primary transition-colors duration-300">
          {question}
        </div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-muted-foreground-dark transition-all duration-500 ease-out ${isOpen ? "rotate-180 scale-110 text-primary" : "rotate-0 scale-100"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-6 transition-all duration-500 ease-out ${isOpen ? "pb-4 pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"}`}
        >
          <div className="text-foreground/80 text-base font-tech font-normal leading-6 break-words">{answer}</div>
        </div>
      </div>
    </motion.div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 relative flex flex-col justify-center items-center">
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <motion.div
          className="text-center mb-12 md:mb-16 space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
            <motion.h2
          className="w-full max-w-[600px] mx-auto text-foreground text-3xl md:text-4xl lg:text-5xl font-tech font-semibold leading-tight mb-4"
          whileInView={{ scale: [0.9, 1] }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
          <p className="text-base md:text-lg text-muted-foreground font-tech max-w-3xl mx-auto leading-relaxed">
          Everything you need to know about Quadgentics and how it can transform your development workflow
          </p>
        </motion.div>
      <div className="w-full max-w-[800px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            {...faq}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
