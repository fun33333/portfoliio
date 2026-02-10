"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Target, Users, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const highlights = [
    {
        icon: Target,
        title: "Mission-Driven",
        description: "Building digital solutions that transform businesses"
    },
    {
        icon: Zap,
        title: "Innovation First",
        description: "Cutting-edge technology meets creative design"
    },
    {
        icon: Users,
        title: "Expert Team",
        description: "Talented professionals dedicated to your success"
    }
]

export function AboutSection() {
    return (
        <section className="relative w-full py-20 md:py-32 overflow-hidden bg-[#0A1515]">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(46,173,167,0.1),transparent_50%)]" />
                <div className="absolute inset-0 opacity-[0.02]">
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

            <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="text-primary font-mono text-[10px] md:text-[11px] tracking-[0.5em] uppercase mb-4 md:mb-6 font-bold">
                            ABOUT QUADGENTICS
                        </h4>
                        <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-lastica text-white leading-[1.1] uppercase mb-6">
                            WE BUILD THE <br />
                            <span
                                className="spotlight-header text-primary/60 font-mono block text-3xl md:text-5xl mt-2 italic shadow-primary/20"
                                data-text="FUTURE"
                            >
                                FUTURE
                            </span>
                        </h2>
                        <p className="text-white/70 text-base md:text-lg lg:text-xl leading-relaxed font-raleway font-medium mb-8">
                            Quadgentics is a modern software house dedicated to helping startups and businesses
                            build exceptional digital products. From AI automation to stunning web designs,
                            we bring your vision to life with cutting-edge technology and creative excellence.
                        </p>

                        {/* Highlights */}
                        <div className="space-y-4 mb-10">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-raleway font-bold text-lg mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-white/60 text-sm font-raleway">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                        >
                            <Link href="/about">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative px-8 py-4 bg-primary text-white font-raleway font-bold text-sm md:text-base uppercase tracking-wider rounded-full overflow-hidden shadow-lg hover:shadow-primary/50 transition-all duration-300"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Learn More About Us
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-square  overflow-hidden">
                            <Image
                                src="/images/about-sec.png"
                                alt="About Quadgentics"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1515] via-transparent to-transparent opacity-60" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
