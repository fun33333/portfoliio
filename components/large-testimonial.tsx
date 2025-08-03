"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function LargeTestimonial() {
  return (
    <section className="w-full container-padding overflow-hidden flex justify-center items-center section-padding">
      <motion.div
        className="flex-1 flex flex-col justify-start items-start overflow-hidden glass-card rounded-2xl border border-white/10 p-4 md:p-8 lg:p-12 card-hover"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{
          y: -10,
          scale: 1.01,
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3), 0 0 30px rgba(59, 130, 246, 0.2)",
        }}
      >
        <div className="self-stretch flex justify-between items-center">
          <div className="flex-1 px-4 py-8 md:px-12 lg:px-20 md:py-8 lg:py-10 overflow-hidden rounded-lg flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-11">
            <motion.div
              className="w-full max-w-[1024px] text-center text-foreground leading-7 md:leading-10 lg:leading-[64px] font-tech font-medium text-lg md:text-3xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              "Quadgentics delivered exactly what we needed - a perfect blend of creativity and technology that
              transformed our business."
            </motion.div>
            <motion.div
              className="flex justify-start items-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Image
                src="/images/guillermo-rauch.png"
                alt="Client testimonial"
                width={64}
                height={64}
                className="w-16 h-16 relative rounded-full border-2 border-primary/20"
                style={{ border: "1px solid rgba(0, 0, 0, 0.08)" }}
              />
              <div className="flex flex-col justify-start items-start">
                <div className="text-foreground text-lg font-tech font-medium leading-6">Sarah Ahmed</div>
                <div className="text-muted-foreground text-base font-tech font-normal leading-6">CEO, TechCorp</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
