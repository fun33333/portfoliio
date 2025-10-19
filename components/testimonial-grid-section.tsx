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

// TypeScript types add kar diye gaye hain taake linting error door ho jaayein.
// TypeScript types have been added to fix the linting errors.

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  avatar: string;
  type: string;
  index: number;
}

const TestimonialCard = ({
  quote,
  name,
  company,
  avatar,
  type,
  index,
}: TestimonialCardProps) => {
  const isLargeCard = type.startsWith("large");
  const avatarSize = isLargeCard ? 64 : 48;
  const avatarBorderRadius = isLargeCard ? "rounded-2xl" : "rounded-xl";
  const padding = isLargeCard ? "p-8" : "p-6";

  let cardClasses = `flex flex-col justify-between items-start overflow-hidden rounded-2xl shadow-[0px_2px_4px_rgba(0,0,0,0.08)] relative ${padding} card-hover`
  let quoteClasses = ""
  let nameClasses = ""
  let companyClasses = ""
  let backgroundElements = null
  let cardHeight = ""
  const cardWidth = "w-full"

  // Responsive heights for cards - Dark theme optimized
  if (type === "large-teal") {
    cardClasses += " bg-primary"
    quoteClasses += " text-primary-foreground text-xl md:text-2xl lg:text-3xl font-tech font-medium leading-7 md:leading-9"
    nameClasses += " text-primary-foreground text-base md:text-lg font-tech font-normal leading-6"
    companyClasses += " text-primary-foreground/60 text-sm md:text-base font-tech font-normal leading-6"
    cardHeight = "h-[340px] sm:h-[400px] md:h-[502px]"
    backgroundElements = (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/images/large-card-background.svg')", zIndex: 0 }}
      />
    )
  } else if (type === "large-light") {
    cardClasses += " bg-[#1a2f2f] border-primary/20"
    quoteClasses += " text-dark-foreground text-xl md:text-2xl lg:text-3xl font-tech font-medium leading-7 md:leading-9"
    nameClasses += " text-dark-foreground text-base md:text-lg font-tech font-normal leading-6"
    companyClasses += " text-dark-muted text-sm md:text-base font-tech font-normal leading-6"
    cardHeight = "h-[340px] sm:h-[400px] md:h-[502px]"
    backgroundElements = (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/images/large-card-background.svg')", zIndex: 0 }}
      />
    )
  } else {
    cardClasses += " bg-[#1a2f2f] border-primary/20"
    quoteClasses += " text-dark-muted text-sm md:text-base font-tech font-normal leading-6 md:leading-7"
    nameClasses += " text-dark-foreground text-sm md:text-base font-tech font-normal leading-[22px]"
    companyClasses += " text-dark-muted/70 text-xs md:text-sm font-tech font-normal leading-[22px]"
    cardHeight = "h-[180px] sm:h-[220px] md:h-[280px]"
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
      <div className="relative z-10 flex justify-start items-center gap-4 mt-4">
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
    <section className="w-full py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 overflow-hidden flex flex-col justify-start">
      <motion.div
        className="self-stretch py-6 md:py-8 flex flex-col justify-center items-center gap-6 md:gap-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
            <motion.h2
          className="text-dark-foreground text-3xl md:text-4xl lg:text-5xl font-tech font-semibold leading-tight mb-4"
          whileInView={{ scale: [0.9, 1] }}
          transition={{ duration: 0.6 }}
        >
          Client Success Stories
        </motion.h2>
        <p className="self-stretch text-dark-muted text-base md:text-lg font-tech font-medium leading-relaxed max-w-3xl">
          {"Hear how businesses transform their digital presence with our innovative solutions,"} <br />{" "}
          {"delivering exceptional results and driving growth"}
        </p>
      </motion.div>
      <div className="w-full pt-0.5 pb-4 md:pb-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1100px] mx-auto">
        {/* Column 1 */}
        <div className="flex flex-col justify-start items-start gap-4">
          <TestimonialCard {...testimonials[0]} index={0} />
          <TestimonialCard {...testimonials[1]} index={1} />
        </div>
        {/* Column 2 */}
        <div className="flex flex-col justify-start items-start gap-4">
          <TestimonialCard {...testimonials[2]} index={2} />
          <TestimonialCard {...testimonials[3]} index={3} />
          <TestimonialCard {...testimonials[4]} index={4} />
        </div>
        {/* Column 3 */}
        <div className="flex flex-col justify-start items-start gap-4">
          <TestimonialCard {...testimonials[5]} index={5} />
          <TestimonialCard {...testimonials[6]} index={6} />
        </div>
      </div>
    </section>
  )
}
