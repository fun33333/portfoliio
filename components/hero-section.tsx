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
    <section className="relative min-h-screen bg-[#0a1515] flex flex-col overflow-hidden" style={{backgroundImage: 'none'}}>
      {/* Clean solid background - no patterns */}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10"
      >
        <Header />
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="px-4 md:px-24 py-16 w-full">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center ">
            {/* Left Column: Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-10"
            >
              {/* Heading - Match reference exactly */}
              <div className="space-y-8">
                <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[80px] font-lastica leading-[0.85] tracking-tight">
                  <div className="text-white mb-2">IMAGINATION</div>
                  <div className="text-primary relative">
                    CREATIVITY &
                    <div className="absolute -bottom-2 left-0 w-32 h-0.5 bg-primary"></div>
                  </div>
                  <div className="text-white relative">
                    INNOVATION
                    <div className="absolute -bottom-2 left-0 w-40 h-0.5 bg-white"></div>
                  </div>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl pt-4">
                  We help startups and businesses build modern digital products — from sleek websites to intelligent automation tools.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex flex-wrap gap-4">
                <Link href="#contact-section">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 group"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Trusted By Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="pt-6"
              >
                <div className="text-white text-lg font-normal">
                  Trusted By <span className="text-primary font-semibold">Idara Al Khair</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Large Wireframe Hand - Clean Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden md:flex items-center justify-center relative"
            >
              {/* Wireframe Hand Container - Much Larger */}
              <div className="relative w-full max-w-[700px] aspect-square flex items-center justify-center">
                {/* Main Wireframe Hand Image - Larger */}
                <Image
                  src="/Untitled design (3).png"
                  alt="Wireframe Hand"
                  width={700}
                  height={700}
                  className="object-contain"
                />
              </div>

              {/* Robot Icon - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-8 right-8 w-16 h-16 rounded-full overflow-hidden border-2 border-primary/50 shadow-2xl"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/Technology startup (1).mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full animate-pulse"></div>
              </motion.div>
            </motion.div>

            {/* Mobile Visual - Show on small screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="md:hidden flex flex-col items-center space-y-6 mt-8"
            >
              {/* Mobile Wireframe Hand - Clean */}
              <div className="relative w-80 h-80">
                <Image
                  src="/Untitled design (3).png"
                  alt="Wireframe Hand"
                  width={320}
                  height={320}
                  className="object-contain"
                />
              </div>

              {/* Mobile Video */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/Technology startup (1).mp4" type="video/mp4" />
                </video>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f1b1b] to-transparent z-10" />
    </section>
  )
}
