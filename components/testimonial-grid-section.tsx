"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "The real-time code suggestions from Quadgentics feel like having a senior engineer reviewing every line of code as you write. The accuracy of its recommendations has improved our overall code quality, reduced review time.",
    name: "Annette Black",
    company: "Sony",
    avatar: "/images/avatars/annette-black.png",
    type: "large-teal",
  },
  {
    quote:
      "Integrating Quadgentics into our stack was smooth, and the MCP server connections saved us days of configuration work",
    name: "Dianne Russell",
    company: "McDonald's",
    avatar: "/images/avatars/dianne-russell.png",
    type: "small-dark",
  },
  {
    quote:
      "Quadgentics’s multi-agent coding feature has been a game changer. We’re fixing complex bugs in hours instead of spending entire sprints on them.",
    name: "Cameron Williamson",
    company: "IBM",
    avatar: "/images/avatars/cameron-williamson.png",
    type: "small-dark",
  },
  {
    quote:
      "We no longer juggle multiple tools. Quadgentics brought all our integrations together in one place, which simplified our entire workflow.",
    name: "Robert Fox",
    company: "MasterCard",
    avatar: "/images/avatars/robert-fox.png",
    type: "small-dark",
  },
  {
    quote:
      "We started with the free plan just to test it out, but within a week we upgraded to Pro. Now, we can’t imagine coding without it",
    name: "Darlene Robertson",
    company: "Ferrari",
    avatar: "/images/avatars/darlene-robertson.png",
    type: "small-dark",
  },
  {
    quote:
      "Collaborative coding feels effortless now. With Quadgentics’s real-time previews, pair programming has become faster and more productive.",
    name: "Cody Fisher",
    company: "Apple",
    avatar: "/images/avatars/cody-fisher.png",
    type: "small-dark",
  },
  {
    quote:
      "Deploying on Vercel with Quadgentics was not just simple, it felt seamless. We went from coding to seeing our changes live in minutes without worrying about build pipelines or configuration issues.",
    name: "Albert Flores",
    company: "Louis Vuitton",
    avatar: "/images/avatars/albert-flores.png",
    type: "large-light",
  },
]

const TestimonialCard = ({ quote, name, company, avatar, type, index }) => {
  const isLargeCard = type.startsWith("large")
  const avatarSize = isLargeCard ? 64 : 48
  const avatarBorderRadius = isLargeCard ? "rounded-2xl" : "rounded-xl"
  const padding = isLargeCard ? "p-8" : "p-6"

  let cardClasses = `flex flex-col justify-between items-start overflow-hidden rounded-2xl shadow-[0px_2px_4px_rgba(0,0,0,0.08)] relative ${padding} card-hover`
  let quoteClasses = ""
  let nameClasses = ""
  let companyClasses = ""
  let backgroundElements = null
  let cardHeight = ""
  const cardWidth = "w-full"

  if (type === "large-teal") {
    cardClasses += " bg-primary"
    quoteClasses += " text-primary-foreground text-2xl md:text-3xl font-tech font-medium leading-8 md:leading-10"
    nameClasses += " text-primary-foreground text-lg font-tech font-normal leading-6"
    companyClasses += " text-primary-foreground/60 text-base font-tech font-normal leading-6"
    cardHeight = "h-[502px]" // Keep fixed height for visual consistency in grid
    backgroundElements = (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/images/large-card-background.svg')", zIndex: 0 }}
      />
    )
  } else if (type === "large-light") {
    cardClasses += " glass-card"
    quoteClasses += " text-foreground text-2xl md:text-3xl font-tech font-medium leading-8 md:leading-10"
    nameClasses += " text-foreground text-lg font-tech font-normal leading-6"
    companyClasses += " text-muted-foreground text-base font-tech font-normal leading-6"
    cardHeight = "h-[502px]" // Keep fixed height for visual consistency in grid
    backgroundElements = (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/images/large-card-background.svg')", zIndex: 0 }}
      />
    )
  } else {
    cardClasses += " glass-card"
    quoteClasses += " text-foreground/80 text-base md:text-lg font-tech font-normal leading-6 md:leading-7"
    nameClasses += " text-foreground text-base font-tech font-normal leading-[22px]"
    companyClasses += " text-muted-foreground text-sm font-tech font-normal leading-[22px]"
    cardHeight = "h-[280px]" // Adjusted for better content fit
  }

  return (
    <motion.div
      className={`${cardClasses} ${cardWidth} ${cardHeight} border border-white/10`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.2)",
      }}
    >
      {backgroundElements}
      <div className={`relative z-10 font-normal break-words ${quoteClasses}`}>{quote}</div>
      <div className="relative z-10 flex justify-start items-center gap-4">
        <Image
          src={avatar || "/placeholder.svg"}
          alt={`${name} avatar`}
          width={avatarSize}
          height={avatarSize}
          className={`w-${avatarSize / 4} h-${avatarSize / 4} ${avatarBorderRadius} border-2 border-primary/20`}
          style={{ border: "1px solid rgba(255, 255, 255, 0.08)" }}
        />
        <div className="flex flex-col justify-start items-start gap-1">
          <div className={nameClasses}>{name}</div>
          <div className={companyClasses}>{company}</div>
        </div>
      </div>
    </motion.div>
  )
}

export function TestimonialGridSection() {
  return (
    <section className="w-full section-padding container-padding overflow-hidden flex flex-col justify-start">
      <motion.div
        className="self-stretch py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-foreground text-4xl md:text-5xl lg:text-6xl font-tech font-semibold leading-tight mb-4"
          whileInView={{ scale: [0.9, 1] }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-mono">&lt;</span>
          Coding Made Effortless
          <span className="text-primary font-mono">/&gt;</span>
        </motion.h2>
        <p className="self-stretch text-muted-foreground text-lg md:text-xl font-tech font-medium leading-relaxed max-w-3xl">
          {"Hear how developers ship products faster, collaborate seamlessly,"} <br />{" "}
          {"and build with confidence using Quadgentics's powerful AI tools"}
        </p>
      </motion.div>
      <div className="w-full pt-0.5 pb-4 md:pb-6 lg:pb-10 flex flex-col md:flex-row justify-center items-start grid-gap max-w-[1100px] mx-auto">
        <div className="flex-1 flex flex-col justify-start items-start grid-gap">
          <TestimonialCard {...testimonials[0]} index={0} />
          <TestimonialCard {...testimonials[1]} index={1} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start grid-gap">
          <TestimonialCard {...testimonials[2]} index={2} />
          <TestimonialCard {...testimonials[3]} index={3} />
          <TestimonialCard {...testimonials[4]} index={4} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start grid-gap">
          <TestimonialCard {...testimonials[5]} index={5} />
          <TestimonialCard {...testimonials[6]} index={6} />
        </div>
      </div>
    </section>
  )
}
