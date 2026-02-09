"use client"
import { Button } from "@/components/ui/button"
import { Header } from "./header"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

// Custom typing hook
function useTypingEffect(text: string, speed: number = 100, startDelay: number = 1000) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    let currentIndex = 0

    const startTyping = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1))
        currentIndex++
        timeout = setTimeout(startTyping, speed)
      } else {
        setIsComplete(true)
      }
    }

    timeout = setTimeout(startTyping, startDelay)

    return () => clearTimeout(timeout)
  }, [text, speed, startDelay])

  return { displayedText, isComplete }
}

export function HeroSection() {
  const { displayedText, isComplete } = useTypingEffect("Scalable Software", 80, 1200)
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
        <div className="px-6 md:px-24 py-12 md:py-16 w-full">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center pt-20 md:pt-10">
            {/* Left Column: Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="space-y-4 md:space-y-6">
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

                <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-lastica leading-[1.1] md:leading-[0.9] tracking-tight font-black uppercase">
                  <div className="text-primary">We Build</div>
                  <div className="text-white font-mono break-words">
                    {displayedText}
                    {!isComplete && (
                      <span className="inline-block w-[3px] h-[0.8em] bg-primary ml-1 animate-pulse" />
                    )}
                  </div>
                  <div className="text-primary italic">for the Future</div>
                </h1>

                {/* Service Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-x-3 gap-y-2 text-primary font-mono text-xs md:text-base font-bold"
                >
                  <span>AI</span>
                  <span className="text-white/30">•</span>
                  <span>Web</span>
                  <span className="text-white/30">•</span>
                  <span>Mobile</span>
                  <span className="text-white/30">•</span>
                  <span>Cloud</span>
                  <span className="text-white/30">•</span>
                  <span>Automation</span>
                </motion.div>

                <p className="text-sm md:text-lg lg:text-xl text-white/60 font-raleway font-medium leading-relaxed max-w-2xl">
                  We design and develop high-performance digital products using modern technologies and scalable architectures.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center sm:items-start">
                <Link href="/contact" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative isolation-auto inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-8 py-4 text-white transition-all shadow-xl hover:shadow-[0_0_30px_rgba(45,175,167,0.4)] w-full sm:w-auto"
                  >
                    <span className="relative z-10 text-sm md:text-base font-bold uppercase tracking-wider font-raleway">
                      Get Free Consultation
                    </span>
                    <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                    <div className="absolute inset-0 -z-10 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />
                  </motion.button>
                </Link>

                <Link href="/projects" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-8 py-4 rounded-full border border-white/20 hover:border-primary/50 text-white font-raleway font-bold text-sm md:text-base uppercase tracking-wider transition-all hover:bg-white/5 w-full sm:w-auto"
                  >
                    View Case Studies
                  </motion.button>
                </Link>
              </div>

              {/* Stats Cards */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="grid grid-cols-3 gap-4 pt-4"
              >
                {[
                  { number: "10+", label: "Projects Delivered" },
                  { number: "Modern", label: "Tech Stack" },
                  { number: "Startup &", label: "Enterprise Ready" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <div className="w-5 h-5 rounded-lg bg-primary/30" />
                      </div>
                      <div>
                        <div className="text-primary font-lastica text-lg md:text-xl font-bold leading-tight">
                          {stat.number}
                        </div>
                        <div className="text-white/60 font-raleway text-[10px] md:text-xs font-medium leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div> */}

              {/* Trusted By Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="pt-4 flex items-center gap-4 opacity-60 hover:opacity-100 transition-opacity"
              >
                <div className="h-[1px] w-12 bg-white/20" />
                <div className="text-white/50 font-raleway text-xs md:text-sm">
                  Trusted by startups & organizations
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="flex items-center gap-3"
              >
                <span className="text-primary font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider">
                  Partnered for
                </span>
                <span className="text-primary font-raleway text-sm md:text-base font-bold">
                  IDARA AL KHAIR
                </span>
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

