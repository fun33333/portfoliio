"use client"

import { useState } from "react"
import { Check, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

// Pricing Data Types
type PlanFeature = string;

interface PricingPlan {
  name: string;
  price: string;
  subtitle: string;
  features: PlanFeature[];
  timePeriod: string;
  isBestSeller?: boolean;
}

interface PricingCategory {
  id: string;
  label: string;
  plans: PricingPlan[];
}

const pricingData: PricingCategory[] = [
  {
    id: "web-design",
    label: "Web",
    plans: [
      {
        name: "Starter",
        subtitle: "Perfect for individuals and small businesses looking to establish a professional online presence.",
        price: "$699",
        timePeriod: "15 days delivery",
        features: [
          "48 to 72 hours TAT",
          "100% Unique Design",
          "Mobile Responsive",
          "Basic CMS Support",
          "14-Day Money Back",
          "Standard Support"
        ]
      },
      {
        name: "Professional",
        subtitle: "Ideal for growing businesses that need advanced features, better performance, and ongoing support.",
        price: "$1199",
        isBestSeller: true,
        timePeriod: "20 days delivery",
        features: [
          "10 Unique Pages",
          "Advanced CMS Panel",
          "SEO Optimization",
          "Custom Animations",
          "14-Day Money Back",
          "Priority Support"
        ]
      },
      {
        name: "Enterprise",
        subtitle: "Best suited for large organizations and enterprises requiring custom solutions, scalability, and dedicated support.",
        price: "$2999",
        timePeriod: "Custom Timeline",
        features: [
          "Unlimited Pages",
          "Custom Web Systems",
          "High-End Visuals",
          "API Integrations",
          "Full Risk-Free Policy",
          "24/7 Dedicated Support"
        ]
      }
    ]
  },
  {
    id: "saas",
    label: "SaaS",
    plans: [
      {
        name: "Basic",
        subtitle: "Perfect for startups building their first specialized software solution.",
        price: "$1499",
        timePeriod: "25 days delivery",
        features: [
          "User Management",
          "Basic Analytics",
          "Admin Dashboard",
          "Secure Login/Signup",
          "14-Day Money Back",
          "Standard Support"
        ]
      },
      {
        name: "Standard",
        subtitle: "Tailored for scaling SaaS products requiring security and performance.",
        price: "$2499",
        isBestSeller: true,
        timePeriod: "40 days delivery",
        features: [
          "Role-Based Access",
          "Real-time Data Viz",
          "Advanced Auth",
          "Payment Integration",
          "14-Day Money Back",
          "Priority Support"
        ]
      },
      {
        name: "Scale",
        subtitle: "High-performance infrastructure for enterprise-grade SaaS environments.",
        price: "$4499",
        timePeriod: "Custom Timeline",
        features: [
          "Complex Data Modeling",
          "Predictive Analytics",
          "Custom Workflows",
          "Unlimited Integrations",
          "Full Risk-Free Policy",
          "24/7 Dedicated Support"
        ]
      }
    ]
  },
  {
    id: "ai",
    label: "AI",
    plans: [
      {
        name: "Pilot",
        subtitle: "Ideal for companies testing AI efficiency in specific workflows.",
        price: "$1999",
        timePeriod: "20 days delivery",
        features: [
          "AI Chatbot Intro",
          "Model Setup",
          "FAQ Automation",
          "Data Analysis",
          "14-Day Money Back",
          "Standard Support"
        ]
      },
      {
        name: "Growth",
        subtitle: "Advanced AI agents and model fine-tuning for growing startups.",
        price: "$3999",
        isBestSeller: true,
        timePeriod: "35 days delivery",
        features: [
          "Advanced AI Agents",
          "Model Fine-tuning",
          "Workflow Scripts",
          "NLP Solutions",
          "14-Day Money Back",
          "Priority Support"
        ]
      },
      {
        name: "Enterprise",
        subtitle: "Complete AI transformation for large-scale data and automation.",
        price: "$8999",
        timePeriod: "Custom Timeline",
        features: [
          "Custom LLM Training",
          "On-Premise Deployment",
          "Advanced Security",
          "Real-time Processing",
          "Full Risk-Free Policy",
          "24/7 Dedicated Support"
        ]
      }
    ]
  }
];

export function PricingSection() {
  const [activeTab, setActiveTab] = useState("web-design");

  const activeCategory = pricingData.find(cat => cat.id === activeTab) || pricingData[0];

  return (
    <section className="w-full section-padding container-padding bg-white relative overflow-hidden flex flex-col items-center">
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-lastica text-[#172222] leading-[1.1] mb-8">
            SIMPLE, SCALABLE <br />
            <span className="text-primary/60 font-mono block text-3xl md:text-5xl mt-2">PRICING PLANS</span>
          </h2>
          <p className="text-[#172222]/60 font-raleway text-lg border-b border-gray-100 pb-10">
            Simple, scalable pricing for businesses at every stage. Whether you're just starting out or scaling fast, we have a plan that fits your goals and budget.
          </p>
        </motion.div>

        {/* Trust Signals Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm font-bold text-[#172222] ml-2">5.0 Rating</span>
          </div>
          <p className="text-[#172222]/60 font-raleway text-sm uppercase tracking-widest font-bold">Trusted by 50+ businesses worldwide</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {pricingData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`relative px-8 py-3 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 border ${activeTab === category.id
                ? "bg-primary text-white border-primary shadow-[0_10px_20px_rgba(45,175,167,0.2)]"
                : "bg-transparent text-[#172222]/60 border-gray-200 hover:border-primary/50 hover:text-primary"
                }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 w-full">
          <AnimatePresence mode="wait">
            {activeCategory.plans.map((plan, index) => {
              const isProfessional = plan.name === "Professional" || plan.name === "Standard" || plan.name === "Growth";
              return (
                <motion.div
                  key={`${activeCategory.id}-${plan.name}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col p-10 rounded-[48px] border-[1.5px] transition-all duration-700 bg-white group ${isProfessional
                    ? 'border-primary ring-4 ring-primary/5 scale-105 z-20 shadow-[0_40px_80px_-15px_rgba(45,175,167,0.2)]'
                    : 'border-gray-100 scale-100 z-10 hover:border-primary/40 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)]'
                    }`}
                >
                  {isProfessional && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                      <motion.span
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="bg-primary text-white text-[10px] font-bold uppercase tracking-[0.3em] px-8 py-2.5 rounded-full shadow-xl shadow-primary/20 whitespace-nowrap"
                      >
                        Most Popular
                      </motion.span>
                    </div>
                  )}

                  {/* Top Section */}
                  <div className="mb-10 text-center md:text-left">
                    <div className="inline-block px-4 py-1.5 bg-gray-50 rounded-full border border-gray-100 mb-6 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-500">
                      <p className="text-primary font-bold text-[10px] uppercase tracking-widest leading-none">{plan.name} Tier</p>
                    </div>
                    <div className="flex items-baseline justify-center md:justify-start gap-1 mb-4">
                      <span className="text-5xl md:text-6xl font-bold text-[#172222] tracking-tighter">{plan.price}</span>
                      <span className="text-[#172222]/30 text-xs font-bold uppercase tracking-widest ml-1">Fixed</span>
                    </div>
                    <p className="text-[#172222]/60 font-raleway text-sm md:text-base leading-relaxed font-medium min-h-[48px]">
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-gray-100 mb-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-12">
                    <ul className="space-y-5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-[15px] text-[#172222]/80 group-hover:text-[#172222] transition-colors font-medium font-raleway">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                            <Check size={12} className="text-primary group-hover:text-white transition-colors" />
                          </div>
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Section */}
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <Button className={`w-full py-8 rounded-[24px] text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 relative overflow-hidden group/btn ${isProfessional
                      ? 'bg-primary text-white hover:bg-[#172222] shadow-[0_20px_40px_-10px_rgba(45,175,167,0.4)]'
                      : 'bg-[#172222] text-white hover:bg-primary'
                      }`}>
                      <span className="relative z-10">Get Exact Quote</span>
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                    </Button>
                    <div className="flex items-center justify-center gap-2 mt-6">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <p className="text-[10px] text-[#172222]/50 uppercase tracking-[0.25em] font-bold font-mono">
                        {plan.timePeriod}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Custom Plan Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-[#172222]/60 font-raleway">
            Need a custom solution tailored to your specific needs?
            <button className="text-primary font-bold ml-1 hover:underline">Let's talk.</button>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
