"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Monitor,
  Megaphone,
  Palette,
  Code,
  Cpu,
  Layers,
  Target,
  Share2,
  Zap,
  Award,
  BookOpen,
  Image,
  MessageSquare,
  Workflow,
  Brain,
  Box
} from "lucide-react"

type ServiceSubItem = {
  title: string
  description: string
  cta: string
}

type Service = {
  id: string
  title: string
  icon: any
  description: string
  subItems: ServiceSubItem[]
}

const services: Service[] = [
  {
    id: "web-design",
    title: "Web Designing",
    icon: Monitor,
    description: "Developing eye-catching, high-performance websites that strengthen your digital presence and convert visitors into customers.",
    subItems: [
      {
        title: "Web Design",
        description: "Learn more about web design service",
        cta: "READ NOW"
      },
      {
        title: "Web Portfolio",
        description: "Check out our latest web design portfolio",
        cta: "CHECK NOW"
      },
      {
        title: "Web Packages",
        description: "Check out our web design packages",
        cta: "CHECK NOW"
      }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    description: "Discover growth with our customized digital marketing solutions to scale your reach and maximize ROI.",
    subItems: [
      {
        title: "SEO Optimization",
        description: "Rank higher on search engines and attract traffic.",
        cta: "READ NOW"
      },
      {
        title: "Social Media",
        description: "Engage your audience on all major platforms.",
        cta: "CHECK NOW"
      },
      {
        title: "PPC Campaigns",
        description: "Direct targeted leads to your landing pages.",
        cta: "CHECK NOW"
      }
    ]
  },
  {
    id: "branding",
    title: "Branding Design",
    icon: Palette,
    description: "Crafting unique visual identities that tell your story and resonate with your target audience.",
    subItems: [
      {
        title: "Logo Design",
        description: "Memorable icons that define your brand.",
        cta: "READ NOW"
      },
      {
        title: "Brand Guidelines",
        description: "Consistent voice and visuals company wide.",
        cta: "CHECK NOW"
      },
      {
        title: "Visual Assets",
        description: "High-quality graphics for all platforms.",
        cta: "CHECK NOW"
      }
    ]
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    icon: Cpu,
    description: "Smart workflows and intelligent bots to automate repetitive tasks and save your team valuable time.",
    subItems: [
      {
        title: "WhatsApp Bots",
        description: "24/7 automated customer interaction.",
        cta: "READ NOW"
      },
      {
        title: "Workflow Automation",
        description: "Streamline your business operations.",
        cta: "CHECK NOW"
      },
      {
        title: "AI Integrations",
        description: "Empower your software with LLMs.",
        cta: "CHECK NOW"
      }
    ]
  }
]

export function BentoSection() {
  const [activeTab, setActiveTab] = useState(services[0].id)

  return (
    <section className="relative w-full min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden font-tech flex flex-col justify-center">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(to right, #2dafa711 1px, transparent 1px), linear-gradient(to bottom, #2dafa711 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 w-full max-w-[1700px] mx-auto">
        {/* Header - Fixed to User Request */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl px-4">
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-primary font-mono text-[11px] tracking-[0.5em] uppercase mb-6 font-bold"
            >
              OUR SERVICES
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-6xl font-lastica text-foreground leading-[0.9] uppercase tracking-tighter"
            >
              What we offer <span className="text-primary opacity-30">for you</span>
            </motion.h2>
          </div>
          <div className="max-w-md pb-4 px-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-sm md:text-lg leading-relaxed font-medium"
            >
              Discover growth with our customized IT solutions. As a trusted web design agency, global organizations rely on us for the best software, services, and brand success.
            </motion.p>
          </div>
        </div>

        {/* Accordion Panels Layout - Fixed Height for Stability */}
        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[750px] gap-3 px-4">
          {services.map((service) => (
            <motion.div
              key={service.id}
              layout
              initial={false}
              animate={{
                flex: activeTab === service.id ? 12 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 35,
                mass: 1.2
              }}
              onClick={() => setActiveTab(service.id)}
              className={`relative group cursor-pointer overflow-hidden rounded-[40px] border transition-colors duration-700 ${activeTab === service.id
                ? "bg-[#fafdfd] border-primary/20 shadow-[0_30px_60px_-15px_rgba(45,175,167,0.1)]"
                : "bg-white border-primary/5 hover:border-primary/20 hover:bg-[#f8fffe]"
                }`}
            >
              <AnimatePresence initial={false}>
                {activeTab !== service.id ? (
                  /* Vertical Sidebar (Collapsed) */
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="flex flex-col items-center gap-10">
                      <div className="p-4 rounded-2xl bg-primary/[0.05] border border-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Box className="w-6 h-6" />
                      </div>
                      <span className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-[0.5em] font-black text-[#172222]/20 group-hover:text-primary transition-colors text-[10px] whitespace-nowrap">
                        {service.title}
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  /* Expanded Panel */
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="h-full w-full p-8 md:p-16 lg:p-20 flex flex-col justify-between overflow-hidden"
                  >
                    <div>
                      {/* Icon & Title */}
                      <div className="mb-14 flex flex-col md:flex-row items-start gap-8">
                        <div className="relative">
                          <div className="p-6 md:p-8 rounded-[32px] border border-primary/20 bg-primary/10 text-primary shadow-[0_20px_40px_-10px_rgba(45,175,167,0.15)]">
                            <Box className="w-10 h-10 md:w-14 md:h-14" />
                          </div>
                        </div>
                        <div className="mt-2">
                          <h3 className="text-4xl md:text-7xl lg:text-8xl font-lastica text-foreground uppercase tracking-tighter leading-[0.85] mb-8">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground text-lg md:text-2xl max-w-3xl leading-relaxed font-medium">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Sub-item Cards */}
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                      {service.subItems.map((item, idx) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 + (idx * 0.1) }}
                          className="group/card p-10 rounded-[40px] border border-primary/5 bg-white hover:bg-[#f0f9f9] hover:border-primary/20 hover:shadow-[0_20px_40px_-10px_rgba(45,175,167,0.08)] transition-all duration-500 flex flex-col items-center text-center"
                        >
                          <h4 className="text-foreground font-black text-xl mb-4 uppercase tracking-tighter">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground/70 text-sm mb-12 flex-grow leading-relaxed font-semibold">
                            {item.description}
                          </p>
                          <button className="text-[11px] font-black tracking-[0.4em] uppercase text-[#172222]/40 group-hover/card:text-primary transition-all py-3 px-6 border border-primary/10 rounded-full group-hover/card:bg-primary group-hover/card:text-white group-hover/card:shadow-[0_10px_20px_rgba(45,175,167,0.2)]">
                            {item.cta}
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
