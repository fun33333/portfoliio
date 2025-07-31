"use client"
import { Button } from "@/components/ui/button"
import { Header } from "./header"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentKeyword, setCurrentKeyword] = useState(0)
  const keywords = ["AI Automation", "Web Development", "Graphic Design", "DevOps Solutions"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % keywords.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="flex flex-col items-center text-center relative mx-auto rounded-2xl overflow-hidden my-6 py-0 px-4 w-full h-[400px] md:w-[1220px] md:h-[600px] lg:h-[810px] md:px-0">
      {/* Header positioned at top of hero container */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Header />
        </motion.div>
      </div>

      {/* Floating futuristic elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Data streams */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-primary/40 to-transparent"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 100, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Circuit trails */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`circuit-${i}`}
            className="absolute w-2 h-2 rounded-full bg-primary/60"
            style={{
              left: `${15 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2 + i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Code symbols */}
        {["</>", "{}", "[]", "()"].map((symbol, i) => (
          <motion.div
            key={`symbol-${i}`}
            className="absolute text-primary/30 font-mono text-sm"
            style={{
              left: `${20 + i * 20}%`,
              top: `${25 + (i % 2) * 50}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 space-y-4 md:space-y-5 lg:space-y-6 mb-6 md:mb-7 lg:mb-9 max-w-md md:max-w-[500px] lg:max-w-[588px] mt-16 md:mt-[120px] lg:mt-[160px] px-4">
        <motion.h1
          className="text-foreground text-3xl md:text-4xl lg:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Smart Digital Solutions for{" "}
          <span className="bg-gradient-to-r from-primary via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Modern Businesses
          </span>
        </motion.h1>

        <motion.div
          className="text-muted-foreground text-base md:text-base lg:text-lg font-medium leading-relaxed max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="mb-2">From</p>
          <motion.span
            key={currentKeyword}
            className="inline-block text-primary font-semibold text-xl"
            initial={{ opacity: 0, y: 20, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -20, rotateX: 90 }}
            transition={{ duration: 0.5 }}
          >
            {keywords[currentKeyword]}
          </motion.span>
          <p className="mt-2">to cutting-edge technology solutions that transform your business.</p>
        </motion.div>
      </div>

      {/* Dual CTAs */}
      <motion.div
        className="relative z-10 flex flex-col sm:flex-row gap-4 items-center"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="https://vercel.com/home" target="_blank" rel="noopener noreferrer">
            <Button className="relative bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-white hover:shadow-xl hover:shadow-primary/30 px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 overflow-hidden group">
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-purple-500/80 to-pink-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="#services-section">
            <Button
              variant="outline"
              className="relative border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:shadow-lg hover:shadow-primary/20 px-8 py-3 rounded-full font-semibold text-base transition-all duration-300 backdrop-blur-sm bg-background/10"
            >
              See Services
              <motion.div
                className="absolute inset-0 border-2 border-primary/30 rounded-full"
                initial={{ scale: 1, opacity: 0 }}
                whileHover={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
