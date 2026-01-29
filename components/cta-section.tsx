"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-[#0f1b1b]">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Internal Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(45,175,167,0.15),transparent_70%)]" />

        {/* Dynamic Shining Highlight */}
        <motion.div
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-x-12 opacity-40"
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

      <motion.div
        className="container relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-4 md:px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 backdrop-blur-md"
        >
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-primary">
            GET IN TOUCH
          </span>
        </motion.div>

        <motion.h2
          className="max-w-5xl text-white text-4xl md:text-6xl lg:text-7xl font-lastica uppercase leading-[1.1] tracking-tighter mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          READY TO <span className="text-primary italic">TRANSFORM</span> <br />
          <span className="text-white/20">YOUR BUSINESS?</span>
        </motion.h2>

        <motion.p
          className="text-white/60 text-lg md:text-xl font-raleway font-medium leading-relaxed max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Join the forward-thinking businesses that trust Quadgentics for their digital evolution.
          Let's engineer your brand's future with elite, bespoke software solutions.
        </motion.p>

        <Link href="#contact-section">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative isolation-auto inline-flex items-center gap-4 overflow-hidden rounded-full bg-white/10 px-10 py-5 text-white transition-all shadow-xl hover:shadow-2xl backdrop-blur-md border border-white/10 hover:border-primary/50"
          >
            <span className="relative z-10 text-sm md:text-base font-bold uppercase tracking-wider">
              Start Your Journey
            </span>
            <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center transition-transform duration-500 group-hover:rotate-[-45deg]">
              <ArrowRight size={16} />
            </div>

            {/* Animated Shine Effect */}
            <div className="absolute inset-0 -z-10 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  )
}

