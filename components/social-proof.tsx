"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function SocialProof() {
  return (
    <section className="self-stretch py-16 flex flex-col justify-center items-center gap-8 overflow-hidden container-padding">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-primary font-tech font-semibold text-sm tracking-wider uppercase mb-2">
          // Trusted by Industry Leaders
        </h3>
        <p className="text-muted-foreground font-tech text-base">
          Fast-growing startups choose Quadgentics for digital transformation
        </p>
      </motion.div>

      <div className="self-stretch grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="card-hover glass-card p-4 rounded-xl border border-white/10 group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
            }}
          >
            <Image
              src={`/logos/logo0${i + 1}.svg`}
              alt={`Company Logo ${i + 1}`}
              width={120}
              height={40}
              className="w-full max-w-[120px] h-auto object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
