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
import { TechBorder } from "@/components/ui/tech-border"



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
  headline: string
  subHeadline: string
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
    headline: "Automate Your Business Work With AI",
    subHeadline: "Save time, reduce errors, and improve customer experience.",
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
    headline: "Build Your Digital Presence With Premium Web Apps",
    subHeadline: "High-performance, scalable systems that convert visitors into clients.",
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
    headline: "Craft A Unique Visual Identity For Your Brand",
    subHeadline: "Logos, brand guides, and creative visuals that tell your story.",
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
    headline: "Streamline Your Product Lifecycle With SaaS Cloud",
    subHeadline: "Automated pipelines and secure cloud infrastructure for modern apps.",
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
    headline: "Tailor-Made Software Built For Innovation",
    subHeadline: "Solving specific business challenges with proprietary custom tech.",
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
    headline: "Reliable Support To Keep Your Systems Running",
    subHeadline: "Immediate technical assistance and proactive maintenance 24/7.",
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

  // Auto-rotate tabs every 3 seconds
  useEffect(() => {
    if (!isDesktop) return;

    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = services.findIndex((s) => s.id === current);
        const nextIndex = (currentIndex + 1) % services.length;
        return services[nextIndex].id;
      });
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval);
  }, [activeTab, isDesktop]);

  return (
    <section
      className="relative w-full overflow-hidden py-16 md:py-32"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <TechBorder />

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-[#F8FAFA] to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,36,35,0.02),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(to right, #0F2423 1px, transparent 1px), linear-gradient(to bottom, #0F2423 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1700px] mx-auto px-4 md:px-12 lg:px-24">
        {/* Main Section Heading */}
        <div className="mb-20 md:mb-32 pt-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-primary" />
            <span className="text-[#0F2423]/40 font-mono text-xs md:text-sm uppercase tracking-[0.5em] font-bold">
              Core Expertise
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <h2 className="text-7xl md:text-9xl font-raleway font-bold text-[#0F2423] tracking-tighter leading-[0.8]">
              SERVICES<span className="text-primary font-light">.</span>
            </h2>

            <p className="max-w-[400px] text-[#0F2423]/50 font-raleway text-lg md:text-xl font-medium leading-relaxed mb-4">
              Pushing the boundaries of what's possible with cutting-edge technology and innovative design.
            </p>
          </motion.div>
        </div>

        {/* Dynamic Header Section */}
        <div className="mb-16 md:mb-24 min-h-[250px]">
          <AnimatePresence mode="wait">
            {services.map((service, index) => (
              activeTab === service.id && (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 rounded-lg bg-[#0F2423]/5 border border-[#0F2423]/10">
                      <service.icon className="w-5 h-5 text-[#0F2423]" />
                    </div>
                    <h1 className="text-xl md:text-2xl font-lastica text-[#0F2423] uppercase tracking-wider">
                      {service.title}
                    </h1>
                    <div className="ml-auto font-mono text-[#0F2423]/10 text-2xl font-bold">0{index + 1}</div>
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-raleway font-light text-[#0F2423] mb-6 leading-tight">
                    {service.headline.split(' ').map((word, i) => (
                      <span key={i} className={i === 1 || i === 2 ? "font-bold" : ""}>{word} </span>
                    ))}
                  </h2>
                  <p className="text-[#0F2423]/60 text-lg md:text-2xl font-raleway max-w-3xl font-medium">
                    {service.subHeadline}
                  </p>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {isDesktop ? (
          <div className="bg-white border border-[#0F2423]/5 rounded-[48px] overflow-hidden h-[850px] shadow-[0_40px_80px_-15px_rgba(15,36,35,0.08)] flex">
            {/* Expanded Content Area */}
            <div className="flex-1 relative bg-[#FBFCFC]">
              <AnimatePresence mode="wait">
                {services.map((service) => (
                  activeTab === service.id && (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex flex-col p-6 md:p-10 gap-6"
                    >
                      {/* Top Illustration Area - Compact version */}
                      <div className="w-full flex flex-col items-center justify-center relative min-h-[300px] shrink-0">
                        <div className="relative w-full max-w-[650px] aspect-[16/9] md:aspect-[25/9]  bg-white  flex items-center justify-center p-6 group overflow-hidden shadow-sm">
                          <div className="relative z-10 w-full h-full transition-all duration-700 group-hover:scale-105">
                            {service.animationData ? (
                              <Lottie animationData={service.animationData} loop={true} className="w-full h-full" />
                            ) : (
                              <img src={service.image} alt={service.title} className="w-full h-full object-contain filter drop-shadow-2xl" />
                            )}
                          </div>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,36,35,0.03),transparent_70%)]" />
                        </div>

                        {/* Status Message */}
                        <div className="mt-4 flex items-center gap-3 px-5 py-2 rounded-full bg-[#0F2423]/5 border border-[#0F2423]/5 border-dashed">
                          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                          <p className="text-[#0F2423]/50 font-mono text-[11px] uppercase tracking-widest font-bold">Exploring {service.title}</p>
                        </div>
                      </div>

                      {/* Bottom Service Cards Area - Horizontal Compact layout */}
                      <div className="w-full flex flex-col gap-4">
                        {service.subItems.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative flex items-center p-5 md:p-6 rounded-[32px] border border-[#0F2423]/5 bg-white shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(15,36,35,0.06)] hover:scale-[1.01] transition-all duration-500 overflow-hidden"
                          >
                            {/* Left: Icon */}
                            <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#0F2423]/5 border border-[#0F2423]/5 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/10">
                              <service.icon className="w-7 h-7 text-[#0F2423] group-hover:text-primary transition-colors" />
                            </div>

                            {/* Center: Content */}
                            <div className="ml-6 flex-1 min-w-0">
                              <h3 className="text-xl font-bold text-[#0F2423] font-raleway tracking-tight mb-0.5 truncate">
                                {item.title}
                              </h3>
                              <p className="text-[#0F2423]/40 text-sm font-raleway font-medium truncate">
                                {item.description}
                              </p>
                            </div>

                            {/* Right: CTA Button */}
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="shrink-0 ml-6 px-7 py-3 rounded-full bg-[#0F2423] text-white font-mono text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-[#0F2423]/10 hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2"
                            >
                              <span>See How It Works</span>
                              <span className="text-base">→</span>
                            </motion.button>

                            {/* Subtle Reveal Glow */}
                            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>

            {/* Pillar Navigation */}
            <div className="w-[400px] md:w-[500px] border-l border-[#0F2423]/5 flex bg-white overflow-hidden">
              {services.map((service, index) => {
                const isActive = activeTab === service.id;
                return (
                  <motion.div
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`flex-1 border-r border-[#0F2423]/5 last:border-0 relative cursor-pointer group transition-all duration-500 ${isActive ? 'bg-[#0F2423]' : 'hover:bg-[#F8FAFA]'}`}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-between py-16 transition-all duration-500">
                      <div className={`p-3 rounded-2xl transition-all duration-500 scale-110 ${isActive ? 'bg-white text-[#0F2423]' : 'bg-[#0F2423]/5 text-[#0F2423]/40 group-hover:text-[#0F2423] group-hover:bg-[#0F2423]/10'}`}>
                        <service.icon className="w-6 h-6" />
                      </div>
                      <h3 className={`[writing-mode:vertical-rl] -rotate-180 text-lg font-mono uppercase tracking-[0.4em] font-bold transition-all duration-500 whitespace-nowrap ${isActive ? 'text-white' : 'text-[#0F2423]/30 group-hover:text-[#0F2423]'}`}>
                        {service.title}
                      </h3>
                      <span className={`font-mono text-xs font-bold tracking-tighter transition-colors duration-500 ${isActive ? 'text-white/40' : 'text-[#0F2423]/20'}`}>0{index + 1}</span>
                    </div>
                    {isActive && (
                      <motion.div layoutId="activePillarWhite" className="absolute inset-y-0 left-0 w-1 bg-primary" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : (
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
          </div>
        )}
      </div>
    </section>
  )
}
