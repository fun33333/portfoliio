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
  // Kinetic layout: cards are usually smaller/simpler, but we keep our premium design.
  // We remove the fixed height constraints to let them flow in the column naturally

  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 md:p-8 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] w-full mb-6`}
    >
      {/* Glass Background Layer - Updated to match Plan */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md transition-all duration-500" />

      {/* Border Gradient - Updated hover to primary/50 */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 transition-colors duration-500 group-hover:border-primary/50" />

      {/* Decorative Quote Mark */}
      <div className="absolute -right-4 -top-4 opacity-5 transition-opacity duration-500 group-hover:opacity-10">
        <Quote size={80} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4 md:gap-6">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-primary/40" />
          ))}
        </div>

        <p className={`font-tech font-light leading-relaxed tracking-wide text-white/90 text-sm md:text-base`}>
          "{quote}"
        </p>
      </div>

      <div className="relative z-10 mt-6 flex items-center gap-4 border-t border-white/10 pt-4 md:pt-6">
        <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-full border border-white/20 shadow-inner group-hover:border-primary/50 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-500">
          <Image
            src={avatar || "/placeholder.svg"}
            alt={`${name} avatar`}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-tech text-sm md:text-base font-semibold text-white tracking-wide">{name}</h4>
          <p className="font-tech text-xs md:text-sm text-white/50">{company}</p>
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
  // Duplicate items to ensure smooth loop
  const columnItems = [...items, ...items, ...items]

  return (
    <div className={`relative flex-1 overflow-hidden h-[800px] ${className}`}>
      <motion.div
        initial={{ y: direction === "up" ? "0%" : "-50%" }}
        animate={{ y: direction === "up" ? "-50%" : "0%" }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex flex-col"
      >
        {columnItems.map((item, idx) => (
          <TestimonialCard
            key={`${item.name}-${idx}`}
            {...item}
            index={idx}
          />
        ))}
      </motion.div>

      {/* Gradient Masks for smooth fade in/out at top/bottom */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0B0B0F] to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0B0F] to-transparent z-20 pointer-events-none" />
    </div>
  )
}

export function TestimonialGridSection() {
  // Distribute testimonials into 3 columns
  const col1 = testimonials.slice(0, 3)
  const col2 = testimonials.slice(3, 6)
  const col3 = testimonials.slice(6, 9)

  return (
    <section className="relative w-full overflow-hidden py-24 md:py-32 bg-[#0B0B0F] text-white">
      {/* Section Background Theme Gradient - Matches "Success Stories" theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 pointer-events-none" />

      {/* Background Ambient Glows - Adjusted for dark theme */}
      <div className="absolute left-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-primary/20 blur-[100px]" />
      <div className="absolute right-[10%] bottom-[20%] h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-[100px]" />

      <div className="container relative mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-sm font-semibold uppercase tracking-wider text-transparent">
              Success Stories
            </span>
          </motion.div>

          <motion.h2
            className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Trusted by World-Class <br />
            <span className="text-white/40">Engineering Teams</span>
          </motion.h2>

          <motion.p
            className="mt-6 max-w-2xl text-lg text-white/60"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of developers who are shipping faster and with fewer bugs.
            See what the community is saying about Quadgentics.
          </motion.p>
        </div>

        {/* Kinetic Columns Grid */}
        <div
          className="mx-auto flex gap-6 md:gap-8 max-w-[1400px] h-[600px] md:h-[800px] overflow-hidden"
          style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" }}
        >
          {/* Desktop: 3 columns. Tablet: 2 columns. Mobile: 1 column logic usually handled by hidden classes or media queries */}

          <div className="hidden lg:block flex-1">
            <KineticColumn items={col1} speed={45} direction="up" />
          </div>
          <div className="hidden md:block flex-1">
            {/* Middle column usually moves opposite or same but slower/faster */}
            <KineticColumn items={col2} speed={55} direction="down" />
          </div>
          <div className="block flex-1">
            {/* On mobile we just show one column, or we merge all items. For now let's show col1+col2+col3 mixed or just col3 for diversity if 3 cols */}
            <KineticColumn items={[...col1, ...col2, ...col3]} speed={50} direction="up" className="md:hidden" />
            <div className="hidden md:block h-full">
              <KineticColumn items={col3} speed={48} direction="up" />
            </div>
          </div>
        </div>

        {/* Bottom CTA with Premium Button */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <button className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-black transition-all hover:scale-105 hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            <span className="relative z-10 text-base font-semibold tracking-wide">
              Read More Success Stories
            </span>
            <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

            {/* Subtle Gradient Glow inside button on hover */}
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </button>
        </motion.div>

      </div>
    </section>
  )
}
