"use client"
import { Button } from "@/components/ui/button"
import { Header } from "./header"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  // Tech icons data for floating animation - positioned to match reference
  const techIcons = [
    { name: "Etsy", position: "top-8 left-2", delay: 0 },
    { name: "HTML5", position: "top-16 left-6", delay: 0.2 },
    { name: "Python", position: "bottom-20 left-4", delay: 0.4 },
    { name: "React", position: "bottom-10 left-10", delay: 0.6 },
    { name: "Photoshop", position: "top-6 right-4", delay: 0.8 },
    { name: "JavaScript", position: "bottom-16 right-6", delay: 1.0 },
    { name: "Sass", position: "bottom-8 right-12", delay: 1.2 },
    { name: "Next.js", position: "top-14 right-8", delay: 1.4 }
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a1515] via-[#0f1b1b] to-[#0a1515] flex flex-col overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,175,167,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,175,167,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

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
        <div className="container mx-auto px-4 md:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left Column: Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Heading */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-lastica leading-[1.05] tracking-tight">
                  <div className="text-white mb-1">IMAGINATION</div>
                  <div className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent relative mb-1">
                    CREATIVITY &
                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light"></div>
                  </div>
                  <div className="text-white">
                    INNOVATION
                  </div>
                </h1>
                
                <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl pt-2">
                  We help startups and businesses build modern digital products — from sleek websites to intelligent automation tools.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex flex-wrap gap-4">
                <Link href="#contact-section">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-light text-white rounded-lg transition-all duration-300 px-8 py-6 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 group"
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
                className="pt-4"
              >
                <div className="text-white text-base font-normal">
                  Trusted By <span className="text-primary font-semibold">Idara Al Khair</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Wireframe Hand with Tech Icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden md:flex items-center justify-center relative"
            >
              {/* Central Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]" />
              </div>

              {/* Wireframe Hand Container */}
              <div className="relative w-full max-w-[550px] aspect-square">
                {/* Main Wireframe Hand Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/Untitled design (3).png"
                    alt="Wireframe Hand"
                    width={500}
                    height={500}
                    className="object-contain"
                  />
                </div>

                {/* Floating Tech Icons */}
                {techIcons.map((icon, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 1.0 + icon.delay,
                      type: "spring",
                      stiffness: 100
                    }}
                    className={`absolute ${icon.position} px-3 py-2 rounded-lg bg-[#0f1b1b]/80 backdrop-blur-md border border-white/10 shadow-xl hover:bg-[#0f1b1b]/90 transition-all duration-300`}
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -8, 0],
                        rotate: [0, 2, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        delay: icon.delay,
                        ease: "easeInOut"
                      }}
                      className="text-white text-sm font-semibold"
                    >
                      {icon.name}
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Video Element - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-6 right-6 w-20 h-20 rounded-full overflow-hidden border-2 border-primary/50 shadow-2xl"
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
              {/* Mobile Wireframe Hand */}
              <div className="relative w-64 h-64">
                <Image
                  src="/Untitled design (3).png"
                  alt="Wireframe Hand"
                  width={256}
                  height={256}
                  className="object-contain"
                />
                
                {/* Mobile Tech Icons - Simplified */}
                {techIcons.slice(0, 4).map((icon, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.0 + i * 0.2,
                      type: "spring"
                    }}
                    className={`absolute ${i % 2 === 0 ? 'left-2' : 'right-2'} ${i < 2 ? 'top-8' : 'bottom-8'} px-2 py-1 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium`}
                  >
                    {icon.name}
                  </motion.div>
                ))}
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
