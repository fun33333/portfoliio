"use client"

import { Twitter, Github, Linkedin, ArrowRight, Mail, Phone, MapPin, ArrowUp, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"

export function FooterSection() {
  const [isHovered, setIsHovered] = useState<string | null>(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter", color: "#1DA1F2" },
    { icon: Github, href: "#", label: "GitHub", color: "#ffffff" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "#0077B5" }
  ]

  const footerLinks = {
    services: [
      { name: "AI Automation", href: "/services" },
      { name: "Web Development", href: "/services" },
      { name: "Graphic Design", href: "/services" },
      { name: "SaaS Solutions", href: "/services" },
      { name: "Cloud Infrastructure", href: "/services" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Expertise", href: "/about" },
      { name: "Portfolio", href: "/projects" },
      { name: "Careers", href: "#" },
      { name: "Partner Program", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "SLA Agreement", href: "#" }
    ]
  }

  return (
    <footer className="relative w-full overflow-hidden bg-[#050A0A] text-white pt-20">
      {/* --- Aesthetic Background Elements --- */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(45,175,167,0.05) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-12 lg:px-24">
        {/* --- Top Section: Branding & Newsletter --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 border-b border-white/5 pb-24">
          <div className="lg:col-span-5 flex flex-col gap-8">
            <Link href="/" className="inline-block group">
              <span className="text-3xl md:text-4xl font-lastica uppercase tracking-tighter flex items-center transition-all duration-500 group-hover:tracking-normal">
                QUAD<span className="text-primary italic group-hover:not-italic group-hover:text-white transition-all duration-300">GEN</span>TICS
                <div className="ml-2 w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-all" />
              </span>
            </Link>

            <p className="text-white/60 text-lg md:text-xl font-raleway font-medium leading-relaxed max-w-md">
              Engineering the digital frontier with disruptive AI solutions and elite software craftsmanship.
              We don't just build software; we architect the future.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 overflow-hidden relative group"
                  whileHover={{ y: -5 }}
                  onMouseEnter={() => setIsHovered(social.label)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <social.icon size={20} className="relative z-10 group-hover:text-black transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-8">
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.4em] text-primary flex items-center gap-2">
                <span className="w-4 h-[1px] bg-primary/40" />
                Expertise
              </h3>
              <ul className="flex flex-col gap-4">
                {footerLinks.services.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="navbar-header-span w-fit text-white/40 hover:text-white text-base font-raleway transition-all duration-300 flex items-center group">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.4em] text-primary flex items-center gap-2">
                <span className="w-4 h-[1px] bg-primary/40" />
                Company
              </h3>
              <ul className="flex flex-col gap-4">
                {footerLinks.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="navbar-header-span w-fit text-white/40 hover:text-white text-base font-raleway transition-all duration-300 flex items-center group">
                    
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.4em] text-primary flex items-center gap-2">
                <span className="w-4 h-[1px] bg-primary/40" />
                Network
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">Global Support</span>
                  <a href="mailto:solutions@quadgentics.com" className="navbar-header-span w-fit text-white/80 hover:text-primary transition-colors font-mono text-sm">solutions@quadgentics.com</a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">Headquarters</span>
                  <p className="text-white/60 text-sm leading-relaxed font-raleway">
                    123 Innovation Drive, <br />
                    Suite 400, <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Middle Section: Newsletter Call to Action --- */}
        <div className="relative group overflow-hidden rounded-[32px] border border-white/10 bg-[#0A1515] p-12 mb-24">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-700" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-lastica uppercase mb-4 leading-tight">
                Stay Ahead of the <br /> <span className="text-primary italic">Curve.</span>
              </h2>
              <p className="text-white/50 text-base md:text-lg font-raleway">
                Subscribe to our strategic insights and stay updated with the latest in AI and enterprise engineering.
              </p>
            </div>

            <form className="w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group/input">
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all font-mono text-sm"
                />
                <button className="absolute right-2 top-2 bottom-2 px-6 rounded-xl bg-primary text-black font-bold uppercase tracking-wider text-xs hover:bg-white transition-all duration-300 flex items-center gap-2 group/btn">
                  Join Elite
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
              <p className="mt-4 text-[10px] font-mono text-white/20 uppercase tracking-widest">No spam. Only high-signal intelligence.</p>
            </form>
          </div>
        </div>

        {/* --- Bottom Bar: Copyright & Aesthetic Large Text --- */}
        <div className="flex flex-col items-center gap-12 pb-12">
          {/* Huge Branding Background Text */}
          <div className="relative w-full flex justify-center py-8 pointer-events-none select-none overflow-hidden">
            <h1 className="text-[12vw] font-lastica text-white/[0.02] leading-none whitespace-nowrap">
              QUADGENTICS
            </h1>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050A0A] to-transparent z-10" />
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 relative z-20">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.2em]">
                &copy; {new Date().getFullYear()} — Engineering Excellence.
              </p>
              <div className="flex gap-6">
                {footerLinks.legal.map((link) => (
                  <Link key={link.name} href={link.href} className="text-white/20 hover:text-white font-mono text-[10px] uppercase tracking-widest transition-colors">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <motion.button
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-2"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <ArrowUp size={20} className="text-white/40 group-hover:text-primary transition-all" />
              </div>
              <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Back to Top</span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}


