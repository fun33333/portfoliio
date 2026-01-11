"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform, MotionValue } from "framer-motion"
import Lottie from "lottie-react"
import Lenis from 'lenis'
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
  color: string
}

const services: Service[] = [
  {
    id: "ai-automation",
    title: "AI Automation",
    icon: Cpu,
    image: "/illustrations/ai-automation.png",
    description: "Smart workflows and intelligent bots to automate repetitive tasks and save your team valuable time.",
    color: "#BBACAF",
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
    color: "#977F6D",
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
    color: "#C2491D",
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
    color: "#B62429",
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
    color: "#88A28D",
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
    color: "#050505",
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
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    // Check initially
    checkDesktop()

    // Add listener
    window.addEventListener('resize', checkDesktop)

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      window.removeEventListener('resize', checkDesktop)
      lenis.destroy()
    }
  }, [])

  return (
    <section className="relative w-full bg-white font-tech">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'linear-gradient(to right, #2dafa711 1px, transparent 1px), linear-gradient(to bottom, #2dafa711 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto">
        {/* Header - Fixed */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8 px-4 md:px-12 lg:px-24 pt-16">
          <div className="max-w-2xl">
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
              className="text-3xl md:text-5xl lg:text-5xl font-lastica text-foreground leading-[0.9] uppercase tracking-tighter"
            >
              What we offer <span className="text-primary opacity-60">for you</span>
            </motion.h2>
          </div>
          <div className="max-w-md lg:max-w-xl pb-0">
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

        {isDesktop ? (
          /* Desktop: Horizontal Accordion */
          <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[700px] gap-3 px-4 md:px-12 lg:px-24 pb-16">
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
                className={`relative group cursor-pointer overflow-hidden rounded-[24px] lg:rounded-[40px] transition-colors duration-700 w-full lg:w-auto ${activeTab === service.id
                  ? "bg-[#fafdfd] shadow-[0_30px_60px_-15px_rgba(45,175,167,0.1)]"
                  : "bg-white hover:bg-[#f8fffe] border border-transparent hover:border-primary/5"
                  }`}
              >
                <AnimatePresence initial={false} mode="wait">
                  {activeTab !== service.id ? (
                    /* Collapsed View */
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
                    /* Expanded View */
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                      className="h-full w-full p-6 md:p-10 lg:p-12 xl:p-16 flex flex-col overflow-hidden" // Removed justify-between to allow natural flow
                    >
                      <div>
                        {/* Title, Description & Image Container */}
                        <div className="mb-8 md:mb-10 flex flex-col xl:flex-row items-center justify-between gap-8 md:gap-12 text-center xl:text-left">
                          <div className="flex-1 w-full relative z-10">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-lastica text-foreground uppercase tracking-tighter leading-[0.9] mb-4 md:mb-6 break-words">
                              {service.title}
                            </h3>
                            <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed font-medium mx-auto xl:mx-0">
                              {service.description}
                            </p>
                          </div>

                          <div className="relative shrink-0 w-full md:w-auto flex justify-center xl:justify-end mt-4 xl:mt-0 px-4 md:px-0">
                            <div className="w-40 h-40 md:w-52 md:h-52 lg:w-56 lg:h-56 xl:w-72 xl:h-72 rounded-[30px] flex items-center justify-center overflow-hidden">
                              {service.animationData ? (
                                <Lottie
                                  animationData={service.animationData}
                                  loop={true}
                                  className="w-full h-full"
                                  rendererSettings={{
                                    preserveAspectRatio: 'xMidYMid meet'
                                  }}
                                />
                              ) : (
                                <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Sub-item Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 xl:gap-6 mt-auto relative z-10 [perspective:1000px]">
                        {service.subItems.map((item, idx) => (
                          <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{
                              y: -5,
                              transition: { duration: 0.2 }
                            }}
                            transition={{ delay: 0.3 + (idx * 0.1) }}
                            className="group/card p-5 md:p-6 xl:p-8 rounded-[24px] xl:rounded-[36px] bg-white border border-primary/10 backdrop-blur-sm shadow-sm transition-all duration-300 flex flex-col items-center text-center relative overflow-visible h-full justify-between"
                          >
                            <div>
                              <h4 className="text-foreground font-raleway font-bold text-base md:text-xl mb-2 uppercase tracking-tight">
                                {item.title}
                              </h4>
                              <p className="text-muted-foreground font-raleway text-xs md:text-sm mb-4 flex-grow leading-relaxed font-medium">
                                {item.description}
                              </p>
                            </div>
                            <button className="text-[10px] md:text-xs font-raleway font-bold tracking-[1.5px] uppercase text-primary hover:text-primary/70 transition-colors py-2">
                              {item.cta} &rarr;
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
        ) : (
          /* Mobile: Sticky Scroll Stack (Lenis Friendly) */
          <div className="relative w-full pb-20 px-4">
            {services.map((service, i) => (
              <MobileCard key={service.id} i={i} {...service} progress={undefined} range={[i * 0.25, 1]} targetScale={1 - ((services.length - i) * 0.05)} total={services.length} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function MobileCard({ i, title, description, icon: Icon, image, animationData, subItems, color, range, targetScale, total }: any) {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  // Scale down as the card moves up (sticky phase) being covered by next ones
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  // Calculate dynamic top offset so they stack visibly with a title bar
  const topOffset = 80 + (i * 25);

  return (
    <div ref={container} className="h-[80vh] flex items-start justify-center sticky top-0" style={{ top: topOffset }}>
      <motion.div
        style={{
          scale,
          top: 0,
          transformOrigin: "top center"
        }}
        className="flex flex-col relative w-full rounded-[30px] border border-primary/10 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden bg-white"
      >
        {/* Card Header */}
        <div className="p-6 flex items-center justify-between border-b border-primary/5 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-raleway uppercase tracking-wide text-foreground">{title}</h3>
          </div>
          <span className="text-sm font-mono text-muted-foreground/40 font-bold">0{i + 1}</span>
        </div>

        {/* Card Content */}
        <div className="flex-1 p-6 flex flex-col justify-between bg-white relative">
          <div className="mb-4">
            <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-6">{description}</p>

            <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-gray-50/50 mb-6 flex items-center justify-center border border-dashed border-gray-200">
              {animationData ? (
                <Lottie
                  animationData={animationData}
                  loop={true}
                  className="w-full h-full p-4"
                  rendererSettings={{
                    preserveAspectRatio: 'xMidYMid meet'
                  }}
                />
              ) : (
                <img src={image} alt={title} className="w-full h-full object-contain p-8" />
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {subItems.map((item: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors border border-gray-100/50 cursor-pointer group">
                <span className="text-xs font-bold font-raleway uppercase text-foreground/80">{item.title}</span>
                <span className="text-[10px] text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">EXPLORE &rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
