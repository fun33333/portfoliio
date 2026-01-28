"use client"
import { Button } from "@/components/ui/button"
import { Header } from "./header"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-[#0a1515] flex flex-col overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Internal Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(45,175,167,0.1),transparent_70%)]" />

        {/* Dynamic Shining Highlight */}
        <motion.div
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 opacity-50"
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

      {/* Main Content */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="px-4 md:px-24 py-16 w-full">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center pt-10">
            {/* Left Column: Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-10"
            >
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-md"
                >
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                  <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-primary">
                    Innovation Lab
                  </span>
                </motion.div>

                <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[84px] font-lastica leading-[0.85] tracking-tight font-black uppercase">
                  <div className="text-white">IMAGINATION</div>
                  <div className="text-primary italic">
                    CREATIVITY &
                  </div>
                  <div className="text-white">
                    INNOVATION
                  </div>
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl text-white/50 font-raleway font-medium leading-relaxed max-w-2xl">
                  We engineer high-performance digital products for elite organizations,
                  transforming complex ecosystems into intuitive user experiences.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="#contact-section">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative isolation-auto inline-flex items-center gap-4 overflow-hidden rounded-full bg-primary px-8 py-4 text-white transition-all shadow-xl hover:shadow-[0_0_30px_rgba(45,175,167,0.4)]"
                  >
                    <span className="relative z-10 text-base font-bold uppercase tracking-wider">
                      Get Started
                    </span>
                    <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                    <div className="absolute inset-0 -z-10 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />
                  </motion.button>
                </Link>

                <Link href="#projects-section">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-8 py-4 rounded-full border border-white/10 hover:border-white/20 text-white font-raleway font-bold uppercase tracking-wider transition-all"
                  >
                    View Portfolio
                  </motion.button>
                </Link>
              </div>

              {/* Trusted By Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="pt-6 flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity"
              >
                <div className="h-[1px] w-12 bg-white/20" />
                <div className="text-white font-raleway font-bold text-lg uppercase tracking-widest">
                  Partnered with <span className="text-primary">Idara Al Khair</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Visual Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden md:flex items-center justify-center relative"
            >
              <div className="relative w-full max-w-[700px] aspect-square flex items-center justify-center">
                <Image
                  src="/Untitled design (3).png"
                  alt="Wireframe Hand"
                  width={700}
                  height={700}
                  className="object-contain drop-shadow-[0_0_50px_rgba(45,175,167,0.2)]"
                  priority
                />
              </div>
            </motion.div>

            {/* Mobile Visual */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="md:hidden flex flex-col items-center space-y-8 mt-12"
            >
              <Image
                src="/Untitled design (3).png"
                alt="Wireframe Hand"
                width={320}
                height={320}
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0b0b0f] to-transparent z-10" />
    </section>
  )
}

