"use client"

import { PageHeroBanner } from "@/components/page-hero-banner"
import { PricingSection } from "@/components/pricing-section"
import { FooterSection } from "@/components/footer-section"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, HelpCircle, ArrowRight, Rocket, Handshake, ShoppingCart, Share2 } from "lucide-react"

const faqs = [
    {
        question: "Are there any hidden charges?",
        answer: "No, our pricing is completely transparent. The quoted price includes everything mentioned in the plan description, with no hidden fees or surprise costs."
    },
    {
        question: "What is your refund policy?",
        answer: "We offer a 14-day money-back guarantee. If you are not satisfied with the initial direction or quality of the project, we'll provide a full refund."
    },
    {
        question: "Can I get a custom pricing plan?",
        answer: "Absolutely! We understand that every business has unique needs. If our standard packages don't fit your requirements, we'll create a tailored quote just for you."
    },
    {
        question: "What is the expected timeline for delivery?",
        answer: "Timelines depend on the chosen plan and project complexity, ranging from 15 to 30+ days. We prioritize efficiency without compromising on quality."
    },
    {
        question: "Do you provide support after the project is delivered?",
        answer: "Yes, all our plans include a dedicated post-delivery support period to ensure your solution continues to perform optimally."
    }
]

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Banner */}
            <PageHeroBanner
                title="Pricing Plans That Grow With Your Business"
                subtitle="TRANSPARENT PRICING"
                description="Choose a pricing plan designed for clarity, flexibility, and real business results. No hidden charges, no long-term commitments — just transparent pricing tailored to your needs."
                imagePath="/images/price-img-banner.png"
                ctaText="Get a Free Consultation"
                ctaLink="/contact"
                badge="14-Day Money Back"
            />

            <PricingSection />

            {/* Who Is This For Section */}
            <section className="relative py-24 md:py-32 bg-white overflow-hidden">
                {/* Extremely light gradient background */}
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,36,35,0.08)_0%,rgba(255,255,255,1)_55%,rgba(15,36,35,0.04)_100%)] pointer-events-none" />

                <div className="max-w-[1200px] mx-auto px-4 md:px-12 relative z-10">
                    {/* Centered Heading Section */}
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-7xl font-lastica text-[#0F2423] leading-[1.1] mb-12"
                        >
                            WHO SHOULD <span className="text-primary">CHOOSE</span> <br />
                            <span className="text-primary/60 font-mono block text-3xl md:text-5xl mt-2">THESE PLANS?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-[#0F2423]/60 text-lg md:text-xl font-raleway leading-relaxed max-w-3xl mx-auto"
                        >
                            Our pricing plans are carefully structured to support startups, growing businesses, and enterprises alike. Each plan focuses on delivering maximum value, ensuring you only pay for what truly benefits your business.
                        </motion.p>
                    </div>

                    {/* Cards 2x2 Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: "STARTUPS",
                                desc: "Fast-tracking MVPs and initial brand presence.",
                                icon: <Rocket className="w-8 h-8 text-primary" />,
                            },
                            {
                                title: "AGENCIES",
                                desc: "Scalable technical partnerships for client work.",
                                icon: <Handshake className="w-8 h-8 text-primary" />,
                            },
                            {
                                title: "E-COMMERCE",
                                desc: "High-converting stores designed for growth.",
                                icon: <ShoppingCart className="w-8 h-8 text-primary" />,
                            },
                            {
                                title: "ENTERPRISES",
                                desc: "Custom solutions for complex workflows.",
                                icon: <Share2 className="w-8 h-8 text-primary" />,
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group flex items-center gap-6 bg-white p-6 md:p-8 rounded-[20px] border border-primary/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(45,175,167,0.1)] transition-all duration-300"
                            >
                                {/* Icon Container with Teal Gradient Circle */}
                                <div className="relative flex-shrink-0">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 flex items-center justify-center p-4">
                                        <div className="transform group-hover:scale-110 transition-transform duration-300">
                                            {item.icon}
                                        </div>
                                    </div>
                                    {/* Sublte inner glow effect */}
                                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_15px_rgba(255,255,255,0.5)]" />
                                </div>

                                <div className="flex flex-col">
                                    <h4 className="text-xl font-lastica text-[#0F2423] mb-2">{item.title}</h4>
                                    <p className="text-[#0F2423]/50 font-raleway font-medium leading-normal">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table - Dark Background */}
            <section className="relative py-20 md:py-32 bg-[#0A1515]">
                <div className="max-w-[1600px] mx-auto px-4 md:px-12 lg:px-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-lastica text-white leading-[1.1] uppercase tracking-tighter mb-6">
                            PLAN <br />
                            <span className="text-primary/60 font-mono block text-3xl md:text-5xl mt-2">COMPARISON</span>
                        </h2>
                        <p className="text-white/70 text-lg md:text-xl font-raleway max-w-3xl mx-auto">
                            Compare features across all plans to find the perfect fit
                        </p>
                    </motion.div>

                    {/* Comparison Table - Desktop Only */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:block overflow-x-auto"
                    >
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-4 px-6 text-white/70 font-raleway font-bold uppercase text-sm">
                                        Feature
                                    </th>
                                    <th className="py-4 px-6 text-white font-raleway font-bold uppercase text-sm">
                                        Starter
                                    </th>
                                    <th className="py-4 px-6 text-primary font-raleway font-bold uppercase text-sm">
                                        Professional
                                    </th>
                                    <th className="py-4 px-6 text-white font-raleway font-bold uppercase text-sm">
                                        Enterprise
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { feature: "Projects per month", starter: "2", pro: "10", enterprise: "Unlimited" },
                                    { feature: "Team members", starter: "1", pro: "5", enterprise: "Unlimited" },
                                    { feature: "Storage", starter: "10GB", pro: "100GB", enterprise: "Unlimited" },
                                    { feature: "Support", starter: "Email", pro: "Priority", enterprise: "24/7 Dedicated" },
                                    { feature: "Custom domain", starter: false, pro: true, enterprise: true },
                                    { feature: "Advanced analytics", starter: false, pro: true, enterprise: true },
                                    { feature: "API access", starter: false, pro: true, enterprise: true },
                                    { feature: "White-label", starter: false, pro: false, enterprise: true }
                                ].map((row, index) => (
                                    <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                        <td className="py-4 px-6 text-white/70 font-raleway">
                                            {row.feature}
                                        </td>
                                        <td className="py-4 px-6 text-center text-white/60 font-raleway">
                                            {typeof row.starter === "boolean" ? (
                                                row.starter ? <Check className="w-5 h-5 text-primary mx-auto" /> : "—"
                                            ) : (
                                                row.starter
                                            )}
                                        </td>
                                        <td className="py-4 px-6 text-center text-white font-raleway font-bold">
                                            {typeof row.pro === "boolean" ? (
                                                row.pro ? <Check className="w-5 h-5 text-primary mx-auto" /> : "—"
                                            ) : (
                                                row.pro
                                            )}
                                        </td>
                                        <td className="py-4 px-6 text-center text-white/60 font-raleway">
                                            {typeof row.enterprise === "boolean" ? (
                                                row.enterprise ? <Check className="w-5 h-5 text-primary mx-auto" /> : "—"
                                            ) : (
                                                row.enterprise
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section - Light Background */}
            <section className="relative py-20 md:py-32 bg-white">
                <div className="max-w-[1200px] mx-auto px-4 md:px-12 lg:px-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-lastica text-[#172222] leading-[1.1] uppercase tracking-tighter mb-6">
                            PRICING <br />
                            <span className="text-primary/60 font-mono block text-3xl md:text-5xl mt-2">FAQs</span>
                        </h2>
                        <p className="text-[#172222]/60 text-lg md:text-xl font-raleway max-w-2xl mx-auto">
                            Have questions about our pricing? We’ve answered the most common concerns to help you make a confident decision.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg md:text-xl font-raleway font-bold text-[#172222] mb-2">
                                            {faq.question}
                                        </h3>
                                        <p className="text-[#172222]/70 font-raleway leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Footer */}
            <FooterSection />
        </div>
    )
}
