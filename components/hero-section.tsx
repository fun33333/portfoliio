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
    <section className="flex flex-col items-center text-center relative mx-auto rounded-2xl overflow-hidden my-6 py-0 container-padding w-full h-[500px] md:w-[1220px] md:h-[700px] lg:h-[850px] md:px-0">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Header />
        </motion.div>
      </div>

      {/* Tech floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`tech-${i}`}
            className="absolute text-primary/20 font-mono text-xs"
            style={{
              left: `${5 + i * 6}%`,
              top: `${15 + (i % 5) * 18}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 4 + i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            {["01", "10", "11", "00", ">>", "<<", "&&", "||", "{}", "[]"][i % 10]}
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 content-spacing mb-12 max-w-5xl mt-28 md:mt-36 lg:mt-44 container-padding">
        <motion.h1
          className="text-foreground text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-tech font-bold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Smart Digital Solutions for <span className="text-primary">Modern Businesses</span>
        </motion.h1>

        <motion.div
          className="text-muted-foreground text-lg md:text-xl lg:text-2xl font-tech leading-relaxed max-w-3xl mx-auto mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="mb-3">Specializing in</p>
          <motion.span
            key={currentKeyword}
            className="inline-block text-primary font-bold text-2xl md:text-3xl font-mono"
            initial={{ opacity: 0, y: 20, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.5 }}
          >
            {keywords[currentKeyword]}
          </motion.span>
          <p className="mt-3">with cutting-edge technology solutions that transform your business.</p>
        </motion.div>
      </div>

      {/* Clean CTAs */}
      <motion.div
        className="relative z-10 flex flex-col sm:flex-row gap-6 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="https://vercel.com/home" target="_blank" rel="noopener noreferrer">
            <Button className="btn-tech bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-xl font-tech font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">
              Get Started Today
            </Button>
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="#projects-section">
            <Button
              variant="outline"
              className="btn-tech border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary px-10 py-4 rounded-xl font-tech font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-background/10"
            >
              View Projects
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
