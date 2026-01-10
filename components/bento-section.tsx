"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Lottie from "lottie-react"
import webDevAnimation from "../assets/Web Development.json"
import aiAutomationAnimation from "../assets/Ai-Automation.json"
import graphicDesignAnimation from "../assets/Graphic-design.json"
import saasAnimation from "../assets/Saas.json"
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
  image: string
  description: string
  subItems: ServiceSubItem[]
  animationData?: any
}

const services: Service[] = [
  {
    id: "ai-automation",
    title: "AI Automation",
    icon: Cpu,
    image: "/illustrations/ai-automation.png",
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
    ],
    animationData: aiAutomationAnimation
  },
  {
    id: "web-development",
    title: "Web Development",
    icon: Monitor,
    image: "/illustrations/web-design.png",
    description: "Developing eye-catching, high-performance websites that strengthen your digital presence and convert visitors into customers.",
    subItems: [
      {
        title: "Frontend Development",
        description: "Clean, responsive, and interactive UIs.",
        cta: "READ NOW"
      },
      {
        title: "Backend Systems",
        description: "Robust and scalable server architectures.",
        cta: "CHECK NOW"
      },
      {
        title: "E-Commerce",
        description: "Scale your business with online stores.",
        cta: "CHECK NOW"
      }
    ],
    animationData: webDevAnimation
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    icon: Palette,
    image: "/illustrations/branding.png",
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
    ],
    animationData: graphicDesignAnimation
  },
  {
    id: "devops-solutions",
    title: "SaaS",
    icon: Workflow,
    image: "/illustrations/devops.png",
    description: "Streamline your development lifecycle with automated pipelines and cloud infrastructure management.",
    subItems: [
      {
        title: "CI/CD Pipelines",
        description: "Automate delivery for faster releases.",
        cta: "READ NOW"
      },
      {
        title: "Cloud Infrastructure",
        description: "Scalable and secure cloud environments.",
        cta: "CHECK NOW"
      },
      {
        title: "Containerization",
        description: "Docker & Kubernetes orchestration.",
        cta: "CHECK NOW"
      }
    ],
    animationData: saasAnimation
  },
  {
    id: "custom-solutions",
    title: "Custom Solutions",
    icon: Layers,
    image: "/illustrations/custom-solutions.png",
    description: "Tailor-made software solutions designed to solve your specific business challenges and drive innovation.",
    subItems: [
      {
        title: "Software Consulting",
        description: "Expert guidance for your tech stacks.",
        cta: "READ NOW"
      },
      {
        title: "Custom CRM/ERP",
        description: "Manage your business more efficiently.",
        cta: "CHECK NOW"
      },
      {
        title: "API Development",
        description: "Connect your applications seamlessly.",
        cta: "CHECK NOW"
      }
    ]
  },
  {
    id: "support-24-7",
    title: "24/7 Support",
    icon: MessageSquare,
    image: "/illustrations/digital-marketing.png", // Reusing for now as placeholder for support
    description: "Round-the-clock technical assistance and maintenance to ensure your systems are always running smoothly.",
    subItems: [
      {
        title: "Help Desk",
        description: "Immediate technical troubleshooting.",
        cta: "READ NOW"
      },
      {
        title: "App Maintenance",
        description: "Regular updates and security patches.",
        cta: "CHECK NOW"
      },
      {
        title: "Site Monitoring",
        description: "Proactive uptime and health checks.",
        cta: "CHECK NOW"
      }
    ]
  }
]

export function BentoSection() {
  const [activeTab, setActiveTab] = useState(services[0].id)

  return (
    <section className="relative w-full min-h-[600px] py-16 px-6 md:px-12 lg:px-24 bg-white overflow-hidden font-tech flex flex-col justify-center">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(to right, #2dafa711 1px, transparent 1px), linear-gradient(to bottom, #2dafa711 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto">
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
              className="text-4xl md:text-5xl lg:text-5xl font-lastica text-foreground leading-[0.9] uppercase tracking-tighter"
            >
              What we offer <span className="text-primary opacity-60">for you</span>
            </motion.h2>
          </div>
          <div className="max-w-md lg:max-w-xl pb-0 px-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground font-inter lg:text-xl text-sm md:text-lg leading-relaxed font-medium"
            >
              Discover growth with our customized IT solutions. As a trusted web design agency, global organizations rely on us for the best software, services, and brand success.
            </motion.p>
          </div>
        </div>

        {/* Accordion Panels Layout - Fixed Height for Stability */}
        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[700px] gap-3 px-4">
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
              className={`relative group cursor-pointer overflow-hidden rounded-[40px] transition-colors duration-700 ${activeTab === service.id
                ? "bg-[#fafdfd] shadow-[0_30px_60px_-15px_rgba(45,175,167,0.1)]"
                : "bg-white hover:bg-[#f8fffe]"
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
                      <div className="p-4 rounded-2xl bg-primary text-white group-hover:bg-[#172222] transition-all duration-300">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <span className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-[0.5em] font-black text-primary group-hover:text-[#172222] transition-colors text-[10px] whitespace-nowrap">
                        {service.title}
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="h-full w-full p-8 md:p-12 lg:p-16 flex flex-col justify-between overflow-hidden"
                  >
                    <div>
                      {/* Title, Description & Image Container */}
                      <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                        <div className="flex-1">
                          <h3 className="text-3xl md:text-4xl lg:text-5xl font-lastica text-foreground uppercase tracking-tighter leading-[0.85] mb-6">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed font-medium">
                            {service.description}
                          </p>
                        </div>

                        <div className="relative shrink-0">
                          <div className="w-32 h-32 md:w-48 md:h-48 lg:w-72 lg:h-72 rounded-[40px]  flex items-center justify-center overflow-hidden">
                            {service.animationData ? (
                              <Lottie
                                animationData={service.animationData}
                                loop={true}
                                className="w-full h-full"
                              />
                            ) : (
                              <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sub-item Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mt-0 relative z-10 [perspective:1000px]">
                      {service.subItems.map((item, idx) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover={{
                            y: -15,
                            rotateX: 10,
                            rotateY: -10,
                            transition: { duration: 0.4, ease: "easeOut" }
                          }}
                          style={{ transformStyle: "preserve-3d" }}
                          transition={{ delay: 0.4 + (idx * 0.1) }}
                          className="group/card p-8 rounded-[40px] bg-white border border-primary/10 backdrop-blur-sm hover:shadow-[20px_40px_60px_-15px_rgba(45,175,167,0.2),inset_0_1px_1px_rgba(255,255,255,1)] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-500 flex flex-col items-center text-center relative overflow-visible"
                        >
                          {/* Subtle Card Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[40px]" />
                          <h4 className="text-foreground font-raleway font-bold text-xl mb-3 uppercase tracking-tight">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground font-raleway text-xs mb-6 flex-grow leading-relaxed font-medium">
                            {item.description}
                          </p>
                          <button className="group/btn relative overflow-hidden text-[10px] font-raleway font-bold tracking-[1.5px] uppercase text-primary hover:text-white transition-colors duration-500 py-3 px-8 rounded-full border border-primary/20 relative z-10 [transform:translateZ(40px)]">
                            <span className="absolute inset-0 bg-primary -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                            <span className="relative z-10">{item.cta}</span>
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
