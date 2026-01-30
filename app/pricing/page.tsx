"use client"

import { PageHeroBanner } from "@/components/page-hero-banner"
import { PricingSection } from "@/components/pricing-section"
import { FooterSection } from "@/components/footer-section"
import { motion } from "framer-motion"
import { Check, HelpCircle } from "lucide-react"

const faqs = [
    {
        question: "Can I switch plans later?",
        answer: "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
    },
    {
        question: "Is there a setup fee?",
        answer: "No setup fees! All our plans include free onboarding and setup assistance."
    },
    {
        question: "Do you offer custom enterprise solutions?",
        answer: "Yes! Contact us for custom enterprise packages tailored to your specific needs."
    },
    {
        question: "What's your refund policy?",
        answer: "We offer a 30-day money-back guarantee on all plans. No questions asked."
    }
]

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Banner */}
            <PageHeroBanner
                title="Pricing Plans"
                subtitle="TRANSPARENT PRICING"
                description="Choose the perfect plan for your business. No hidden fees, no surprises. Scale as you grow with flexible pricing options."
                imagePath="/images/project_banner.png"
                ctaText="Contact Sales"
                ctaLink="/contact"
                badge="30-Day Money Back"
            />

            {/* Pricing Section - Light Background */}
            <section className="relative py-20 md:py-32 bg-white">
                <PricingSection />
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
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-lastica text-white leading-[1.1] uppercase tracking-tighter mb-6">
                            Plan <span className="text-primary">Comparison</span>
                        </h2>
                        <p className="text-white/70 text-lg md:text-xl font-raleway max-w-3xl mx-auto">
                            Compare features across all plans to find the perfect fit
                        </p>
                    </motion.div>

                    {/* Comparison Table */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="overflow-x-auto"
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
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-lastica text-[#172222] leading-[1.1] uppercase tracking-tighter mb-6">
                            Pricing <span className="text-primary">FAQs</span>
                        </h2>
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
