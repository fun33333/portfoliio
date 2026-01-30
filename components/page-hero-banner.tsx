"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface PageHeroBannerProps {
    title: string
    subtitle?: string
    description: string
    imagePath: string
    ctaText?: string
    ctaLink?: string
    badge?: string
}

export function PageHeroBanner({
    title,
    subtitle,
    description,
    imagePath,
    ctaText,
    ctaLink,
    badge
}: PageHeroBannerProps) {
    return (
        <section className="relative w-full min-h-[70vh] md:min-h-[80vh] overflow-hidden bg-gradient-to-br from-[#0A1515] via-[#0f1f1f] to-[#0A1515]">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(46,173,167,0.15),transparent_60%)]" />
                <div className="absolute inset-0 opacity-[0.03]">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, #2EADA7 1px, transparent 1px), linear-gradient(to bottom, #2EADA7 1px, transparent 1px)",
                            backgroundSize: "70px 70px"
                        }}
                    />
                </div>
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-12 lg:px-24 py-20 md:py-32">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* LEFT: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="order-2 lg:order-1"
                    >
                        {/* Badge */}
                        {badge && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block mb-6"
                            >
                                <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary font-mono text-xs md:text-sm font-bold uppercase tracking-wider">
                                    {badge}
                                </span>
                            </motion.div>
                        )}

                        {/* Subtitle */}
                        {subtitle && (
                            <motion.h4
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-primary font-mono text-[10px] md:text-[11px] tracking-[0.5em] uppercase mb-4 md:mb-6 font-bold"
                            >
                                {subtitle}
                            </motion.h4>
                        )}

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-lastica text-white leading-[0.95] uppercase tracking-tighter mb-6 md:mb-8"
                        >
                            {title}
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-white/70 text-base md:text-lg lg:text-xl leading-relaxed font-raleway font-medium mb-10 max-w-2xl"
                        >
                            {description}
                        </motion.p>

                        {/* CTA Button */}
                        {ctaText && ctaLink && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <Link href={ctaLink}>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group relative px-8 py-4 bg-primary text-white font-raleway font-bold text-sm md:text-base uppercase tracking-wider rounded-full overflow-hidden shadow-lg hover:shadow-primary/50 transition-all duration-300"
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            {ctaText}
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </motion.button>
                                </Link>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* RIGHT: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="relative aspect-square lg:aspect-[4/3] w-full">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-3xl opacity-50" />

                            {/* Image Container */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative z-10 w-full h-full flex items-center justify-center"
                            >
                                <Image
                                    src={imagePath}
                                    alt={title}
                                    width={800}
                                    height={800}
                                    className="w-full h-full object-contain drop-shadow-2xl"
                                    priority
                                />
                            </motion.div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                            <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Wave Divider */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </section>
    )
}
