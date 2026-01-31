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
      className="relative w-full font-tech overflow-visible p-10"
      style={{ background: 'linear-gradient(273deg,rgba(118, 245, 224, 1) 3%, rgba(194, 237, 237, 1) 43%, rgba(255, 255, 255, 1) 58%)' }}
    >
      <TechBorder />
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
          /* Desktop: Vertical Header Accordion (The "Contact Page" style requested) */
          <div className="flex w-full h-[800px] overflow-hidden rounded-[10px] border border-white/10 bg-[#0A1515] shadow-2xl">
            {services.map((service, index) => {
              const isActive = activeTab === service.id;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={false}
                  animate={{
                    flex: isActive ? 16 : 1,
                    backgroundColor: isActive ? "#0A1515" : "hsl(var(--accent-teal))",
                  }}
                  whileHover={{
                    backgroundColor: isActive ? "#0A1515" : "#112222", // Dark hover state for inactive tabs
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.32, 0.72, 0.35, 1.02]
                  }}
                  onClick={() => setActiveTab(service.id)}
                  className={`relative h-full flex-shrink-0 cursor-pointer overflow-hidden border-r border-[#0A1515]/20 last:border-0 group ${isActive ? "z-10" : "transition-all"}`}
                >
                  {/* Collapsed Vertical Header */}
                  <div
                    className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                  >
                    <div className="h-full w-full flex flex-col items-center justify-center gap-4 py-4">
                      {/* Icon at top */}
                      <div className="p-2 bg-black/10 rounded-xl text-[#172222]">
                        <service.icon className="w-5 h-5" />
                      </div>

                      {/* Vertical Title */}
                      <h2 className="flex-1 [writing-mode:vertical-rl] -rotate-180 text-xl font-mono text-[#172222] uppercase tracking-widest flex items-center justify-center whitespace-nowrap font-bold group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h2>

                      {/* Number at bottom */}
                      <span className="font-mono text-[#172222]/70 text-xs font-bold">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="absolute inset-0 w-full h-full bg-[#0A1515] flex flex-col"
                      >
                        {/* Header Bar */}
                        <div className="flex items-center justify-between p-8 border-b border-white/10 bg-white/5">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 text-primary">
                              <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-lastica text-white uppercase tracking-tighter">
                              {service.title}
                            </h3>
                          </div>
                          <span className="text-primary font-mono text-xl font-bold bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
                            0{index + 1}
                          </span>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-1 p-8 grid grid-cols-12 gap-8 overflow-hidden">
                          {/* Left: Description & Sub-items */}
                          <div className="col-span-7 flex flex-col gap-8 overflow-y-auto pr-4 custom-scrollbar">
                            <p className="text-white/70 text-lg font-raleway font-medium leading-relaxed">
                              {service.description}
                            </p>

                            <div className="grid gap-4">
                              {service.subItems.map((item, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.3 + (idx * 0.1) }}
                                  className="group/item flex items-center justify-between p-12 rounded-2xl border border-white/10 bg-[#0f1b1b] hover:border-primary/40 transition-all cursor-default shadow-lg"
                                >
                                  <div>
                                    <h4 className="text-white font-bold font-raleway uppercase text-2xl mb-1 tracking-wide">{item.title}</h4>
                                    <p className="text-white/50 text-xs font-medium uppercase tracking-wider">{item.description}</p>
                                  </div>
                                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover/item:border-primary group-hover/item:text-primary transition-colors bg-white/5">
                                    <span className="text-lg">→</span>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Right: Illustration */}
                          <div className="col-span-5 relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
                            {service.animationData ? (
                              <Lottie
                                animationData={service.animationData}
                                loop={true}
                                className="w-full h-full p-8"
                              />
                            ) : (
                              <img src={service.image} alt={service.title} className="w-full h-full object-contain p-8" />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
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
