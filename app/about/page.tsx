"use client"

import { PageHeroBanner } from "@/components/page-hero-banner"
import { TeamSection } from "@/components/team-section"
import { CounterSection } from "@/components/counter-section"
import { FooterSection } from "@/components/footer-section"
import { motion } from "framer-motion"
import { Target, Lightbulb, Users, Award } from "lucide-react"

const values = [
    {
        icon: Target,
        title: "Mission-Driven",
        description: "We're committed to delivering exceptional digital solutions that drive real business results."
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Constantly exploring new technologies and methodologies to stay ahead of the curve."
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "We believe in working closely with our clients as partners, not just service providers."
    },
    {
        icon: Award,
        title: "Excellence",
        description: "Quality is at the heart of everything we do, from code to design to customer service."
    }
]

const timeline = [
    {
        year: "2020",
        title: "Foundation",
        description: "Quadgentics was founded with a vision to help startups build exceptional digital products."
    },
    {
        year: "2021",
        title: "Growth",
        description: "Expanded our team and services, delivering 50+ successful projects across multiple industries."
    },
    {
        year: "2022",
        title: "Innovation",
        description: "Launched AI automation services and became a trusted partner for digital transformation."
    },
    {
        year: "2023",
        title: "Scale",
        description: "Reached 100+ clients worldwide and established ourselves as a leading software house."
    },
    {
        year: "2024",
        title: "Future",
        description: "Continuing to innovate and expand our services to meet evolving client needs."
    }
]

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Banner */}
            <PageHeroBanner
                title="About Us"
                subtitle="OUR STORY"
                description="We're Quadgentics, a passionate team of developers, designers, and innovators dedicated to building the future of digital products."
                imagePath="/images/project_banner.png"
                ctaText="Join Our Team"
                ctaLink="/contact"
                badge="Est. 2020"
            />

            {/* Company Story - Light Background */}
            <section className="relative py-20 md:py-32 bg-white">
                <div className="max-w-[1400px] mx-auto px-4 md:px-12 lg:px-24">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-primary font-mono text-[10px] md:text-[11px] tracking-[0.5em] uppercase mb-4 md:mb-6 font-bold">
                                WHO WE ARE
                            </h4>
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-lastica text-[#172222] leading-[1.1] uppercase tracking-tighter mb-6">
                                Building digital <span className="text-primary">excellence</span>
                            </h2>
                            <p className="text-[#172222]/70 text-base md:text-lg leading-relaxed font-raleway mb-6">
                                Quadgentics started with a simple mission: to help startups and businesses build
                                modern digital products that make a real impact. Today, we're a full-service
                                software house trusted by clients worldwide.
                            </p>
                            <p className="text-[#172222]/70 text-base md:text-lg leading-relaxed font-raleway">
                                Our team combines technical expertise with creative vision to deliver solutions
                                that not only meet requirements but exceed expectations. From AI automation to
                                stunning web designs, we bring your ideas to life.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-8"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(46,173,167,0.2),transparent_70%)]" />
                            <div className="relative h-full flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-8xl md:text-9xl font-lastica text-primary mb-4">4+</div>
                                    <div className="text-2xl md:text-3xl font-raleway font-bold text-[#172222]">
                                        Years of Excellence
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values - Dark Background */}
            <section className="relative py-20 md:py-32 bg-[#0A1515]">
                <div className="max-w-[1600px] mx-auto px-4 md:px-12 lg:px-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-lastica text-white leading-[1.1] uppercase tracking-tighter mb-6">
                            Our <span className="text-primary">Values</span>
                        </h2>
                        <p className="text-white/70 text-lg md:text-xl font-raleway max-w-3xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
                                    <value.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-raleway font-bold text-white mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-white/60 font-raleway text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline - Light Background */}
            <section className="relative py-20 md:py-32 bg-white">
                <div className="max-w-[1200px] mx-auto px-4 md:px-12 lg:px-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-lastica text-[#172222] leading-[1.1] uppercase tracking-tighter mb-6">
                            Our <span className="text-primary">Journey</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-8">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-6 md:gap-8"
                            >
                                <div className="shrink-0 w-20 md:w-24 text-right">
                                    <span className="text-3xl md:text-4xl font-lastica text-primary">
                                        {item.year}
                                    </span>
                                </div>
                                <div className="relative flex-1 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 md:p-8">
                                    <h3 className="text-xl md:text-2xl font-raleway font-bold text-[#172222] mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#172222]/70 font-raleway leading-relaxed">
                                        {item.description}
                                    </p>
                                    <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-primary border-4 border-white" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section - Dark Background */}
            <section className="relative py-20 md:py-32 bg-[#0A1515]">
                <TeamSection />
            </section>

            {/* Counter Section - Light Background */}
            <CounterSection />

            {/* Footer */}
            <FooterSection />
        </div>
    )
}
