"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, MotionValue, PanInfo } from "framer-motion"
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
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"



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

// Custom Hook for Card Dragging

function SwipeCard({ service, index, activeIndex, onSwipe }: {
  service: Service,
  index: number,
  activeIndex: number,
  onSwipe: () => void
}) {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-200, 200], [-25, 25])
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0])

  // Only the top card is draggable
  const isTop = index === activeIndex
  const isSecond = index === activeIndex + 1
  const isThird = index === activeIndex + 2

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 100) {
      onSwipe()
    }
  }

  // Animation variants for the stack
  const variants = {
    top: { x: 0, scale: 1, y: 0, zIndex: 10, opacity: 1 },
    second: { x: 0, scale: 0.94, y: 15, zIndex: 9, opacity: 0.8 },
    third: { x: 0, scale: 0.88, y: 30, zIndex: 8, opacity: 0.4 },
    hidden: { x: 0, scale: 0.8, y: 45, zIndex: 5, opacity: 0 }
  }

  const status = isTop ? "top" : isSecond ? "second" : isThird ? "third" : "hidden"

  return (
    <motion.div
      style={{ x, rotate, opacity, position: 'absolute', width: '100%' }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      animate={status}
      variants={variants}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="cursor-grab active:cursor-grabbing"
    >
      <div className="p-1 h-[680px]">
        <Card className="h-full border border-white/20 rounded-[32px] overflow-hidden bg-[#0A1515] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)] flex flex-col">
          <CardContent className="p-0 flex flex-col h-full overflow-hidden">
            {/* Header */}
            <div className="shrink-0 p-5 md:p-6 flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-white/5 to-transparent">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary text-white shadow-lg">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-lg md:text-xl font-bold font-raleway uppercase tracking-tight text-white">
                  {service.title}
                </h3>
              </div>
              <span className="text-[10px] md:text-[12px] font-mono text-primary font-bold bg-primary/20 px-3 py-1 rounded-full ring-1 ring-primary/30">
                0{index + 1}
              </span>
            </div>

            {/* Content Body */}
            <div className="p-5 md:p-6 flex flex-col flex-grow overflow-y-auto custom-scrollbar">
              <p className="text-white/70 text-xs md:text-sm font-medium leading-relaxed mb-4 font-raleway">
                {service.description}
              </p>

              <div className="shrink-0 relative w-full aspect-[16/10] md:aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 mb-5 flex items-center justify-center border border-white/10">
                {service.animationData ? (
                  <Lottie
                    animationData={service.animationData}
                    loop={true}
                    className="w-full h-full p-2"
                  />
                ) : (
                  <img src={service.image} alt={service.title} className="w-full h-full object-contain p-4" />
                )}
              </div>

              {/* Sub-items - Dark Theme Glassmorphism */}
              <div className="grid grid-cols-1 gap-2 mt-auto">
                {service.subItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md shadow-sm"
                  >
                    <div className="flex-1">
                      <span className="text-[11px] md:text-[13px] font-bold font-raleway uppercase text-white block mb-0.5">{item.title}</span>
                      <p className="text-[9px] md:text-[10px] text-white/50 tracking-wider font-bold uppercase">{item.description}</p>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                      <span className="text-xs">→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

export function BentoSection() {
  const [activeTab, setActiveTab] = useState(services[0].id)
  const [isDesktop, setIsDesktop] = useState(true)
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0)

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
    <section
      className="relative w-full font-tech overflow-visible"
      style={{ background: 'linear-gradient(273deg,rgba(118, 245, 224, 1) 3%, rgba(194, 237, 237, 1) 43%, rgba(255, 255, 255, 1) 58%)' }}
    >
      {/* Premium Shining Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle Internal Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent_40%)]" />

        {/* Dynamic Shining Highlight */}
        <motion.div
          animate={{
            x: ["-100%", "200%"],
            transition: { duration: 15, repeat: Infinity, ease: "linear" }
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
        />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #2EADA7 1px, transparent 1px), linear-gradient(to bottom, #2EADA7 1px, transparent 1px)', backgroundSize: '70px 70px' }} />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto">
        {/* Header - Refined Responsiveness */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 gap-10 lg:gap-20 px-4 md:px-12 lg:px-24 pt-16">
          <div className="w-full lg:max-w-3xl">
            <motion.h4
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-primary font-mono text-[10px] md:text-[11px] tracking-[0.5em] uppercase mb-4 md:mb-6 font-bold"
            >
              OUR SERVICES
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-lastica text-[#172222] leading-[1.1] md:leading-[1] uppercase tracking-tighter"
            >
              What we offer <br className="hidden sm:block" /> <span className="text-primary">for you</span>
            </motion.h2>
          </div>
          <div className="w-full lg:max-w-xl pb-2">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#172222]/70 font-inter text-sm md:text-lg lg:text-xl leading-relaxed font-medium font-raleway"
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
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }}
                onClick={() => setActiveTab(service.id)}
                className={`relative group cursor-pointer overflow-hidden rounded-[24px] lg:rounded-[40px] transition-all duration-500 w-full lg:w-auto ${activeTab === service.id
                  ? "bg-white/90 backdrop-blur-xl border-2 border-primary/20 shadow-[0_50px_100px_-20px_rgba(45,175,167,0.25)]"
                  : "border-2 border-primary/30 hover:border-primary shadow-lg hover:shadow-2xl"
                  }`}
                style={activeTab !== service.id ? {
                  background: 'linear-gradient(135deg, rgba(46, 173, 167, 0.15) 0%, rgba(255, 255, 255, 0.25) 100%)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                } : undefined}
                onMouseEnter={(e) => {
                  if (activeTab !== service.id) {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(46, 173, 167, 0.85) 0%, rgba(46, 173, 167, 0.65) 100%)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== service.id) {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(46, 173, 167, 0.15) 0%, rgba(255, 255, 255, 0.25) 100%)';
                  }
                }}
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
                      {/* Glass overlay for collapsed state */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/20 to-transparent" />
                        <div className="absolute inset-0 rounded-[24px] lg:rounded-[40px] bg-gradient-to-br from-white/10 via-transparent to-primary/20 opacity-50" />
                      </div>

                      <div className="flex flex-col items-center gap-10 relative z-10">
                        <div className="p-4 rounded-2xl bg-primary/80 text-white backdrop-blur-sm border border-primary/40 group-hover:bg-white group-hover:text-primary transition-all duration-300 shadow-xl">
                          <service.icon className="w-7 h-7" />
                        </div>
                        <span className="[writing-mode:vertical-lr] rotate-180 uppercase tracking-[0.4em] font-black text-primary drop-shadow-md transition-colors text-xs whitespace-nowrap group-hover:text-white font-raleway">
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
                      className="h-full w-full p-6 md:p-10 lg:p-12 xl:p-16 flex flex-col bg-[#0A1515] overflow-hidden" // Removed justify-between to allow natural flow
                    >
                      <div>
                        {/* Title, Description & Image Container */}
                        <div className="mb-8 md:mb-10 flex flex-col xl:flex-row items-center justify-between gap-8 md:gap-12 text-center xl:text-left">
                          <div className="flex-1 w-full relative z-10">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-lastica text-white uppercase tracking-tighter leading-[0.9] mb-4 md:mb-6 break-words">
                              {service.title}
                            </h3>
                            <p className="text-white/70 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed font-medium mx-auto xl:mx-0 font-raleway">
                              {service.description}
                            </p>
                          </div>

                          <div className="relative shrink-0 w-full md:w-auto flex justify-center xl:justify-end mt-4 xl:mt-0 px-4 md:px-0">
                            <div className="w-40 h-40 md:w-52 md:h-52 lg:w-56 lg:h-56 xl:w-72 xl:h-72 bg-[#0A1515] flex items-center justify-center overflow-hidden">
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
                            className="group/card p-5 md:p-6 xl:p-8 rounded-[24px] xl:rounded-[10px] border border-white/30 hover:border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden h-full justify-between"
                            style={{
                              background: 'rgba(255, 255, 255, 0.25)',
                              backdropFilter: 'blur(5px)',
                              WebkitBackdropFilter: 'blur(5px)',
                            }}
                          >
                            {/* Subtle glassmorphism overlay */}
                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                              {/* Top gradient shine */}
                              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/10 to-transparent" />

                              {/* Subtle border glow */}
                              <div className="absolute inset-0 rounded-[24px] xl:rounded-[10px] bg-gradient-to-br from-white/20 via-transparent to-primary/10 opacity-30" />
                            </div>

                            {/* Content with proper z-index */}
                            <div className="relative z-10">
                              <h4 className="text-white font-raleway font-bold text-lg md:text-xl mb-2 uppercase tracking-tight drop-shadow-sm">
                                {item.title}
                              </h4>
                              <p className="text-white/90 font-raleway text-sm md:text-base mb-4 flex-grow leading-relaxed font-medium drop-shadow-sm">
                                {item.description}
                              </p>
                            </div>

                            <button className="relative z-10 text-xs md:text-sm font-raleway font-bold tracking-[1.5px] uppercase text-primary hover:text-white transition-colors py-2 drop-shadow-sm">
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
          /* Mobile & Tablet: Stacking Swipe Cards */
          <div className="relative w-full px-4 h-[750px] pb-40 flex justify-center items-start">
            <div className="relative w-full max-w-[600px] h-[680px] flex justify-center">
              {services.map((service, index) => (
                <SwipeCard
                  key={service.id}
                  service={service}
                  index={index}
                  activeIndex={mobileActiveIndex}
                  onSwipe={() => setMobileActiveIndex((prev) => (prev + 1) % services.length)}
                />
              ))}
            </div>

            {/* Visual Instruction Indicators - Decoupled from card viewport */}
            <div className="absolute bottom-[-30px] left-0 right-0 flex flex-col items-center gap-4 z-20">
              <div className="flex gap-3">
                {services.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2.5 rounded-full transition-all duration-500 ${i === mobileActiveIndex ? "w-10 bg-primary shadow-[0_2_10_rgba(45,175,167,0.4)]" : "w-2.5 bg-primary/20"
                      }`}
                  />
                ))}
              </div>
              <p className="text-[12px] font-bold text-primary uppercase tracking-[0.3em] animate-pulse">
                Swipe cards to explore
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
