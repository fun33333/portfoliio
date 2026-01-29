"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { TechBorder } from "./ui/tech-border"

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
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`)
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`)
  }

  return (
    <motion.div
      className={`group w-full overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer mb-4`}
      onClick={onToggle}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className={`relative p-8 transition-all duration-500 flex flex-col ${isOpen
          ? "bg-[#172222] border-[#172222] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)]"
          : "bg-[#172222]/5 border-[#172222]/5 hover:bg-[#172222] hover:border-[#172222] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
          } border rounded-2xl backdrop-blur-md`}
      >
        <div className="flex justify-between items-center gap-6">
          <span className={`text-base md:text-lg font-raleway font-bold transition-colors duration-500 ${isOpen ? "text-white" : "text-[#172222]/80 group-hover:text-white"
            }`}>
            {question}
          </span>
          <div className={`shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-primary text-white rotate-180 shadow-lg shadow-primary/20" : "bg-[#172222]/10 text-[#172222]/40 border border-[#172222]/10 group-hover:bg-primary group-hover:text-white group-hover:border-primary"
            }`}>
            <ChevronDown size={20} />
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 24 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="text-white/70 font-raleway font-medium text-sm md:text-base leading-relaxed pb-2 border-t border-white/10 pt-4">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(45,175,167,0.08),transparent_50%)]" />
      </div>
    </motion.div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white">
      <TechBorder className="top-0 left-0" />
      <TechBorder className="bottom-0 right-0 rotate-180" />
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Internal Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,175,167,0.15),transparent_70%)]" />

        {/* Dynamic Shining Highlight */}
        <motion.div
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-x-12 opacity-30"
        />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'linear-gradient(to right, #2EADA7 1px, transparent 1px), linear-gradient(to bottom, #2EADA7 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Standardized Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 backdrop-blur-md"
          >
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-primary">
              + FREQUENTLY ASKED
            </span>
          </motion.div>

          <motion.h2
            className="max-w-4xl text-3xl font-bold leading-[1.1] tracking-tighter text-[#172222] md:text-5xl lg:text-6xl font-lastica uppercasemax-w-4xl text-3xl font-bold leading-6 tracking-tight  md:text-4xl lg:text-5xl font-lastica uppercase"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            HAVE <span className="text-primary italic">QUESTIONS?</span> <br />
            <span className="text-[#172222]/20 font-mono">WE HAVE ANSWERS</span>
          </motion.h2>

          <motion.p
            className="mt-8 max-w-2xl text-base md:text-lg text-[#172222]/60 font-raleway font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Everything you need to know about our services and how we can help your business
            grow in the digital landscape.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              isOpen={openIndex === index}
              onToggle={() => toggleItem(index)}
              index={index}
            />
          ))}
        </div>

        {/* Support CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-[#172222]/40 font-raleway font-medium mb-6">
            Still have questions? We're here to help.
          </p>
          <button className="group relative inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-primary hover:text-primary-light transition-colors">
            Contact Support Team
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

