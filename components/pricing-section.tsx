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
        name: "Startup",
        subtitle: "Web Package",
        price: "$699",
        timePeriod: "15 days time period",
        features: [
          "48 to 72 hours TAT",
          "100% Satisfaction Guarantee",
          "100% Unique Design Guarantee",
          "100% Money Back Guarantee *",
          "Mobile Responsive will be Additional $200*",
          "CMS will be Additional $250*"
        ]
      },
      {
        name: "Professional",
        subtitle: "Web Package",
        price: "$1199",
        timePeriod: "15 days time period",
        features: [
          "10 Unique Pages Website",
          "CMS / Admin Panel Support",
          "8 Stock images",
          "5 Banner Designs",
          "1 jQuery Slider Banner",
          "FREE Google Friendly Sitemap"
        ]
      },
      {
        name: "Elite",
        subtitle: "Web Package",
        price: "$1799",
        isBestSeller: true,
        timePeriod: "25 days time period",
        features: [
          "Upto 15 Unique Pages Website",
          "Conceptual and Dynamic Website",
          "Mobile Responsive",
          "Online Reservation/Appointment Tool (Optional)",
          "Online Payment Integration (Optional)",
          "Custom Forms"
        ]
      },
      {
        name: "Corporate",
        subtitle: "Web Package",
        price: "$2999",
        timePeriod: "30 days time period",
        features: [
          "15 to 20 Pages Website",
          "Custom Made, Interactive, Dynamic & High End Design",
          "Custom WP (or) Custom PHP Development",
          "1 jQuery Slider Banner",
          "Up to 10 Custom Made Banner Designs",
          "10 Stock Images"
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
        subtitle: "SaaS Package",
        price: "$1499",
        timePeriod: "25 days time period",
        features: [
          "User Management",
          "Basic Analytics & Reporting",
          "Admin Panel",
          "Secure Login/Signup",
          "Data Export (CSV/PDF)",
          "Email Notifications"
        ]
      },
      {
        name: "Standard",
        subtitle: "SaaS Package",
        price: "$2499",
        isBestSeller: true,
        timePeriod: "40 days time period",
        features: [
          "Role-Based Access Control",
          "Real-time Data Visualization",
          "Advanced Charting Library",
          "API Integrations (Up to 3)",
          "Activity Logs",
          "Dark/Light Mode Setup"
        ]
      },
      {
        name: "Premium",
        subtitle: "SaaS Package",
        price: "$4499",
        timePeriod: "55 days time period",
        features: [
          "Complex Data Modeling",
          "Predictive Analytics (AI)",
          "Custom Workflow Engine",
          "Unlimited API Integrations",
          "White Labeling",
          "Priority Support"
        ]
      },
      {
        name: "Enterprise",
        subtitle: "SaaS Package",
        price: "$7999",
        timePeriod: "75 days time period",
        features: [
          "Microservices Architecture",
          "Scalable Cloud Infrastructure",
          "High-Frequency Data Processing",
          "Machine Learning Modules",
          "Audit Trails & Compliance",
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
        subtitle: "AI Package",
        price: "$1999",
        timePeriod: "20 days time period",
        features: [
          "Basic AI Chatbot Integration",
          "Pre-trained Model Setup",
          "Automated FAQ Responses",
          "Basic Data Analysis",
          "Email Support"
        ]
      },
      {
        name: "Growth",
        subtitle: "AI Package",
        price: "$3999",
        timePeriod: "35 days time period",
        isBestSeller: true,
        features: [
          "Advanced AI Agents",
          "Custom Model Fine-tuning",
          "Workflow Automation Scripts",
          "Sentiment Analysis Tools",
          "Priority API Access"
        ]
      },
      {
        name: "Scale",
        subtitle: "AI Package",
        price: "$6999",
        timePeriod: "50 days time period",
        features: [
          "Custom Predictive Models",
          "Computer Vision Integration",
          "Natural Language Processing",
          "Real-time AI Processing",
          "Dedicated AI Engineer Support"
        ]
      },
      {
        name: "Enterprise",
        subtitle: "AI Package",
        price: "$11999",
        timePeriod: "90 days time period",
        features: [
          "Full-Scale AI Transformation",
          "Custom LLM Training",
          "On-Premise Deployment Options",
          "Advanced Security & Compliance",
          "24/7 Monitoring & Optimization"
        ]
      }
    ]
  },
  {
    id: "logo",
    label: "Logo",
    plans: [
      {
        name: "Basic",
        subtitle: "Logo Package",
        price: "$99",
        timePeriod: "2 days time period",
        features: [
          "3 Custom Logo Design Concepts",
          "1 Designer",
          "3 Revisions",
          "48 To 72 Hours TAT",
          "100% Satisfaction Guarantee",
          "100% Unique Design Guarantee"
        ]
      },
      {
        name: "Startup",
        subtitle: "Logo Package",
        price: "$179",
        isBestSeller: true,
        timePeriod: "4 days time period",
        features: [
          "2 Designers",
          "Unlimited Revisions",
          "48 To 72 Hours TAT",
          "100% Satisfaction Guarantee",
          "100% Unique Design Guarantee",
          "100% Money Back Guarantee*"
        ]
      },
      {
        name: "Professional",
        subtitle: "Logo Package",
        price: "$249",
        isBestSeller: true,
        timePeriod: "7 days time period",
        features: [
          "Unlimited Logo Design Concepts",
          "By 4 Industry Based Designers",
          "UNLIMITED Revisions",
          "FREE MS Electronic Letterhead",
          "FREE Custom Stationery Design",
          "48 To 72 Hours TAT"
        ]
      },
      {
        name: "Identity",
        subtitle: "Logo Package",
        price: "$399",
        timePeriod: "7 days time period",
        features: [
          "Unlimited Logo Concepts (8 Designers)",
          "FREE Icon Design",
          "FREE Unlimited Revisions",
          "Turnaround Time 2-3 Business Days",
          "1 Stationery Design Set",
          "Email Signature Included"
        ]
      }
    ]
  }
];

export function PricingSection() {
  const [activeTab, setActiveTab] = useState("web-design");

  const activeCategory = pricingData.find(cat => cat.id === activeTab) || pricingData[0];

  return (
    <section className="w-full section-padding container-padding bg-[#0A1515] relative overflow-hidden flex flex-col items-center">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(45, 175, 167, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(45, 175, 167, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Marketing Header */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
              30-Day Money Back
            </div>
            <h3 className="text-primary font-mono text-sm tracking-[0.2em] mb-2 uppercase">
              Transparent Pricing
            </h3>
            <h2 className="text-5xl md:text-7xl font-lastica text-white leading-none mb-6 relative">
              PRICING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/20">PLANS</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-lg mb-8 font-light leading-relaxed">
              Choose the perfect plan for your business. No hidden fees, no surprises. Scale as you grow with flexible pricing options.
            </p>
            <Button className="group relative px-8 py-6 bg-primary text-[#0A1515] hover:bg-white hover:text-[#0A1515] rounded-full text-sm font-bold tracking-widest transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                CONTACT SALES
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Button>
          </motion.div>

          {/* Right Column: Abstract Tech Visual (Code-based, No Images) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[400px] flex items-center justify-center perspective-[1000px]"
          >
            {/* Floating Elements mimicking the reference image abstractly */}
            <div className="relative w-64 h-80 preserve-3d transform rotate-y-[-20deg] rotate-x-[10deg]">

              {/* Back Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 rounded-full blur-[80px]" />

              {/* Card 1 (Back) */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-[-40px] w-48 h-64 bg-[#112222]/90 border border-primary/20 rounded-xl backdrop-blur-md p-4 shadow-2xl transform translate-z-[-20px] flex flex-col gap-3"
              >
                <div className="w-full h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-lg border border-white/5" />
                <div className="w-3/4 h-2 bg-white/10 rounded-full" />
                <div className="w-1/2 h-2 bg-white/10 rounded-full" />
                <div className="mt-auto w-full flex justify-between">
                  <div className="w-8 h-8 rounded-full bg-primary/20" />
                  <div className="w-16 h-8 rounded-md bg-primary/10" />
                </div>
              </motion.div>

              {/* Card 2 (Middle) */}
              <motion.div
                animate={{ y: [15, -15, 15] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-[-20px] w-52 h-72 bg-[#162a2a]/95 border border-primary/30 rounded-xl backdrop-blur-md p-5 shadow-2xl transform translate-z-[20px] flex flex-col gap-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="w-8 h-8 rounded-full border border-primary/50 flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full transition-opacity opacity-50 animate-pulse" />
                  </div>
                  <div className="w-16 h-2 bg-primary/20 rounded-full" />
                </div>
                <div className="space-y-2">
                  <div className="w-full h-8 bg-white/5 rounded border-l-2 border-primary" />
                  <div className="w-full h-8 bg-white/5 rounded border-l-2 border-primary/30" />
                  <div className="w-full h-8 bg-white/5 rounded border-l-2 border-primary/10" />
                </div>
                <div className="mt-auto pt-4 border-t border-white/5 grid grid-cols-2 gap-2">
                  <div className="h-10 bg-primary/10 rounded" />
                  <div className="h-10 bg-primary/5 rounded" />
                </div>
              </motion.div>

              {/* Card 3 (Front - Hero) */}
              <motion.div
                animate={{ y: [-5, 5, -5], rotateX: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 right-10 w-44 h-28 bg-[#0A1515] border border-primary shadow-[0_0_30px_rgba(45,175,167,0.3)] rounded-xl p-4 flex flex-col justify-center items-center gap-2 transform translate-z-[50px]"
              >
                <div className="text-center">
                  <div className="text-primary text-xs font-mono uppercase tracking-widest mb-1">Growth</div>
                  <div className="text-2xl font-bold text-white">+124%</div>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "80%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>

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
                ? "bg-primary text-black border-primary shadow-[0_0_20px_rgba(45,175,167,0.4)]"
                : "bg-transparent text-white/60 border-white/10 hover:border-primary/50 hover:text-white"
                }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <AnimatePresence mode="wait">
            {activeCategory.plans.map((plan, index) => (
              <motion.div
                key={`${activeCategory.id}-${plan.name}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`relative flex flex-col bg-[#0F1B1B] border border-white/10 p-6 rounded-2xl group hover:border-primary/50 hover:shadow-[0_0_30px_rgba(45,175,167,0.1)] transition-all duration-300 ${plan.isBestSeller ? 'border-primary/40 shadow-[0_0_20px_rgba(45,175,167,0.15)]' : ''}`}
              >
                {plan.isBestSeller && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <span className="bg-primary text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                      Best Seller
                    </span>
                  </div>
                )}

                {/* Top Section */}
                <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{plan.name}</h3>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono">{plan.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary font-mono">{plan.price}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="flex-grow space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-white/70 group-hover:text-white transition-colors">
                      <div className="mt-1 min-w-[14px]">
                        <Circle size={8} className="fill-primary text-primary" />
                      </div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Section */}
                <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-4">
                  <Button className="w-full bg-transparent border border-white/20 hover:bg-primary hover:text-black hover:border-primary text-white font-mono uppercase tracking-widest text-xs py-5 transition-all duration-300 group-hover:scale-105">
                    Enquire Now
                  </Button>
                  <p className="text-center text-[10px] text-white/30 uppercase tracking-wider font-mono">
                    {plan.timePeriod}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
