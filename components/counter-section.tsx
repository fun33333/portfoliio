"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Box } from "lucide-react"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

function Counter({ end, duration = 2, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * (end - startValue) + startValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

const stats = [
  {
    icon: Box,
    value: 195,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: Box,
    value: 204,
    suffix: "k+",
    label: "Projects Completed",
  },
  {
    icon: Box,
    value: 41,
    suffix: "+",
    label: "Business Partners",
  },
  {
    icon: Box,
    value: 29,
    suffix: "%",
    label: "Satisfaction Guaranteed",
  }
]

export function CounterSection() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #2EADA7 1px, transparent 1px), linear-gradient(to bottom, #2EADA7 1px, transparent 1px)",
            backgroundSize: "70px 70px"
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-12 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-primary font-mono text-[10px] md:text-[11px] tracking-[0.5em] uppercase mb-4 font-bold">
            OUR ACHIEVEMENTS
          </h4>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-lastica text-foreground leading-[1.1] uppercase mb-8">
            NUMBERS THAT <span className="text-primary italic">SPEAK</span> <br />
            <span className="text-primary/60 font-mono block text-3xl md:text-5xl mt-2">FOR OUR SUCCESS</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative  bg-gradient-to-br from-[#0a1515] via-[#0f1b1b] to-[#050a0a] rounded-3xl p-8 md:p-10 overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 shadow-xl group-hover:shadow-primary/5">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                  className="relative mb-6"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all duration-500">
                    <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                </motion.div>

                {/* Number */}
                <div className="relative mb-3">
                  <h3
                    className="text-5xl md:text-6xl lg:text-6xl  font-bold tracking-tight text-primary font-tech"
                  >
                    <Counter end={stat.value} suffix={stat.suffix} prefix={stat.suffix === "%" ? "" : "+"} />
                  </h3>
                </div>

                {/* Label */}
                <p className="text-white/70 text-sm md:text-base font-raleway font-medium uppercase tracking-wide">
                  {stat.label}
                </p>

                {/* Decorative Element */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
