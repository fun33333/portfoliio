"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Quote } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const testimonials = [
  {
    quote:
      "The real-time code suggestions from Quadgentics feel like having a senior engineer reviewing every line of code as you write. The accuracy of its recommendations has improved our overall code quality, reduced review time.",
    name: "Annette Black",
    company: "Sony",
    avatar: "/images/avatars/annette-black.png",
    type: "large",
  },
  {
    quote:
      "Integrating Quadgentics into our stack was smooth, and the MCP server connections saved us days of configuration work",
    name: "Dianne Russell",
    company: "McDonald's",
    avatar: "/images/avatars/dianne-russell.png",
    type: "small",
  },
  {
    quote:
      "Quadgentics’s multi-agent coding feature has been a game changer. We’re fixing complex bugs in hours instead of spending entire sprints on them.",
    name: "Cameron Williamson",
    company: "IBM",
    avatar: "/images/avatars/cameron-williamson.png",
    type: "small",
  },
  {
    quote:
      "We no longer juggle multiple tools. Quadgentics brought all our integrations together in one place, which simplified our entire workflow.",
    name: "Robert Fox",
    company: "MasterCard",
    avatar: "/images/avatars/robert-fox.png",
    type: "small",
  },
  {
    quote:
      "We started with the free plan just to test it out, but within a week we upgraded to Pro. Now, we can’t imagine coding without it",
    name: "Darlene Robertson",
    company: "Ferrari",
    avatar: "/images/avatars/darlene-robertson.png",
    type: "small",
  },
  {
    quote:
      "Collaborative coding feels effortless now. With Quadgentics’s real-time previews, pair programming has become faster and more productive.",
    name: "Cody Fisher",
    company: "Apple",
    avatar: "/images/avatars/cody-fisher.png",
    type: "small",
  },
  {
    quote:
      "Deploying on Vercel with Quadgentics was not just simple, it felt seamless. We went from coding to seeing our changes live in minutes without worrying about build pipelines or configuration issues.",
    name: "Albert Flores",
    company: "Louis Vuitton",
    avatar: "/images/avatars/albert-flores.png",
    type: "large",
  },
  {
    quote:
      "The automated documentation feature is a lifesaver. It keeps our docs up to date with the code, so we never have to worry about stale information.",
    name: "Jenny Wilson",
    company: "Google",
    avatar: "/images/avatars/jenny-wilson.png",
    type: "small",
  },
  {
    quote:
      "I was skeptical at first, but the AI agents are incredibly smart. They handle the boilerplate so I can focus on the logic.",
    name: "Kristin Watson",
    company: "Facebook",
    avatar: "/images/avatars/kristin-watson.png",
    type: "small",
  },
]

interface TestimonialCardProps {
  quote: string
  name: string
  company: string
  avatar: string
  type: string
  index: number
}

const TestimonialCard = ({ quote, name, company, avatar, type, index }: TestimonialCardProps) => {
  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[32px] p-6 md:p-8 transition-all duration-700 hover:shadow-[0_20px_50px_-15px_rgba(45,175,167,0.3)] w-full mb-8`}
    >
      {/* Glass Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl transition-all duration-500 group-hover:from-white/[0.12]" />

      {/* Border Gradient */}
      <div className="absolute inset-0 rounded-[32px] border border-white/10 transition-colors duration-500 group-hover:border-primary/40" />

      {/* Decorative Quote Mark */}
      <div className="absolute -right-2 -top-2 opacity-[0.03] transition-all duration-700 group-hover:opacity-10 group-hover:scale-110 group-hover:-rotate-12 text-primary">
        <Quote size={120} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex items-center gap-1.5">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.5 }}
              className="h-1.5 w-1.5 rounded-full bg-primary/60"
            />
          ))}
        </div>

        <p className="font-raleway font-medium leading-relaxed tracking-wide text-white/90 text-sm md:text-[15px] italic">
          "{quote}"
        </p>
      </div>

      <div className="relative z-10 mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-white/20 shadow-xl group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(45,175,167,0.4)] transition-all duration-500">
          <img
            src={avatar || "/placeholder.svg"}
            alt={`${name} avatar`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <h4 className="font-raleway text-sm md:text-base font-bold text-white tracking-tight truncate">{name}</h4>
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary/70 mt-0.5">{company}</p>
        </div>
      </div>
    </div>
  )
}

// Kinetic Column Component
const KineticColumn = ({
  items,
  speed = 50,
  direction = "up",
  className = ""
}: {
  items: typeof testimonials,
  speed?: number,
  direction?: "up" | "down",
  className?: string
}) => {
  // Triple items for infinite loop stability
  const columnItems = [...items, ...items, ...items]

  return (
    <div className={`relative flex-1 overflow-visible ${className}`}>
      <motion.div
        initial={{ y: direction === "up" ? "0%" : "-66.66%" }}
        animate={{ y: direction === "up" ? "-66.66%" : "0%" }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex flex-col px-2"
      >
        {columnItems.map((item, idx) => (
          <TestimonialCard
            key={`${item.name}-${idx}`}
            {...item}
            index={idx}
          />
        ))}
      </motion.div>
    </div>
  )
}

export function TestimonialGridSection() {
  // Distribute testimonials into 3 columns
  const col1 = testimonials.slice(0, 3)
  const col2 = testimonials.slice(3, 6)
  const col3 = testimonials.slice(6, 9)

  return (
    <section className="relative w-full overflow-hidden py-24 md:py-32 bg-[#081616]">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Internal Glows */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,175,167,0.08),transparent_70%)]" /> */}

        {/* Dynamic Shining Highlight */}
        <motion.div
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0  skew-x-12 opacity-50"
        />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(to right, #2EADA7 1px, transparent 1px), linear-gradient(to bottom, #2EADA7 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-md"
          >
            <style>{`
              @keyframes spotlight-swing {
                0% { clip-path: ellipse(40px 40px at -5% 50%); }
                50% { clip-path: ellipse(40px 40px at 50% 50%); }
                100% { clip-path: ellipse(40px 40px at 105% 50%); }
              }
              .spotlight-text {
                position: relative;
                color: rgba(45, 175, 167, 0.2) !important;
                display: inline-block;
              }
              .spotlight-text::before {
                content: attr(data-text);
                position: absolute;
                inset: 0;
                background: linear-gradient(90deg, #f70000, #f89200, #f8f501, #038f00, #0168f8, #a200f7);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent !important;
                animation: spotlight-swing 4s infinite alternate ease-in-out;
                pointer-events: none;
                white-space: nowrap;
              }
            `}</style>
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span
              className="spotlight-text text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.3em]"
              data-text="Success Stories"
            >
              Success Stories
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-7xl font-lastica text-white leading-[1.1] mb-8 uppercase"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            TRUSTED BY <span className="text-primary italic">TOP-TIER</span> <br />
            <span className="text-primary/60 font-mono block text-3xl md:text-5xl mt-2">ENGINEERING TEAMS</span>
          </motion.h2>

          <motion.p
            className="mt-8 max-w-2xl text-base md:text-lg text-white/50 font-raleway font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Join thousands of developers who are shipping faster and with fewer bugs.
            Experience the next generation of AI-powered development.
          </motion.p>
        </div>

        {/* Kinetic Columns Grid */}
        <div
          className="relative mx-auto flex gap-4 md:gap-8 max-w-[1400px] h-[700px] md:h-[900px] overflow-hidden"
        >
          {/* Gradient Masks
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0B0B0F] via-[#0B0B0F]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/80 to-transparent z-20 pointer-events-none" /> */}

          {/* Columns */}
          <div className="hidden lg:block flex-1">
            <KineticColumn items={col1} speed={60} direction="up" />
          </div>
          <div className="hidden md:block flex-1">
            <KineticColumn items={col2} speed={75} direction="down" />
          </div>
          <div className="block flex-1">
            <KineticColumn items={[...col1, ...col2, ...col3]} speed={65} direction="up" className="md:hidden" />
            <div className="hidden md:block h-full">
              <KineticColumn items={col3} speed={68} direction="up" />
            </div>
          </div>
        </div>

        {/* Bottom CTA with Premium Button */}
        <motion.div
          className="mt-24 flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <button className="group relative isolation-auto inline-flex items-center gap-4 overflow-hidden rounded-full bg-white px-10 py-5 text-black transition-all hover:scale-105">
            <span className="relative z-10 text-sm md:text-base font-bold uppercase tracking-wider">
              Explore All Stories
            </span>
            <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-500 group-hover:translate-x-2" />

            {/* Animated Shine Effect */}
            {/* <div className="absolute inset-0 -z-10 translate-x-[-100%] bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" /> */}
          </button>
        </motion.div>
      </div>
    </section>
  )
}

