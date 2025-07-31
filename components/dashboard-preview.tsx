"use client"

import { motion } from "framer-motion"
import { TerminalAnimation } from "./terminal-animation"

export function DashboardPreview() {
  return (
    <motion.div
      className="w-[calc(100vw-32px)] md:w-[1160px]"
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-200px" }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2,
      }}
    >
      <motion.div
        className="relative backdrop-blur-xl bg-gradient-to-br from-background/30 to-background/10 rounded-2xl p-4 shadow-2xl border border-white/20"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Holographic border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 p-px">
          <div className="w-full h-full rounded-2xl bg-background/20 backdrop-blur-xl"></div>
        </div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <TerminalAnimation />
        </motion.div>

        {/* Animated corner accents */}
        {[
          { top: "10px", left: "10px" },
          { top: "10px", right: "10px" },
          { bottom: "10px", left: "10px" },
          { bottom: "10px", right: "10px" },
        ].map((position, index) => (
          <motion.div
            key={index}
            className="absolute w-4 h-4 border-2 border-primary/60"
            style={{
              ...position,
              borderRadius: index % 2 === 0 ? "0 0 4px 0" : "0 0 0 4px",
            }}
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
