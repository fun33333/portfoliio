"use client"

import { Twitter, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function FooterSection() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#0A1515] text-white pt-24 pb-12">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(45,175,167,0.15),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'linear-gradient(to right, #2EADA7 1px, transparent 1px), linear-gradient(to bottom, #2EADA7 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col gap-8 max-w-sm">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <span className="text-3xl md:text-4xl font-lastica uppercase tracking-tighter">
                Quad<span className="text-primary italic">gen</span>tics
              </span>
            </motion.div>

            <p className="text-white/50 text-base md:text-lg font-raleway font-medium leading-relaxed">
              Engineering the digital frontier with disruptive AI solutions and elite software craftsmanship.
              Built for those who demand excellence.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 hover:text-primary hover:bg-white/10 border border-white/5 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-20 flex-grow">
            {/* Services */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-primary">Services</h3>
              <div className="flex flex-col gap-4">
                {[
                  "AI Automation", "Web Development", "Graphic Design",
                  "DevOps Solutions", "Custom Platforms"
                ].map((item) => (
                  <Link key={item} href="#services-section" className="text-white/60 hover:text-white font-raleway font-medium transition-colors text-base">
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-primary">Company</h3>
              <div className="flex flex-col gap-4">
                {[
                  "About Us", "Our Team", "Portfolio", "Careers", "Contact"
                ].map((item) => (
                  <Link key={item} href={item === "Our Team" ? "#about-section" : "#"} className="text-white/60 hover:text-white font-raleway font-medium transition-colors text-base">
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-primary">Connect</h3>
              <div className="flex flex-col gap-4">
                {[
                  "Knowledge Base", "Community", "Support Center", "API Docs"
                ].map((item) => (
                  <Link key={item} href="#" className="text-white/60 hover:text-white font-raleway font-medium transition-colors text-base">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 font-mono text-[10px] uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Quadgentics — All Rights Reserved
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-white/30 hover:text-white font-mono text-[10px] uppercase tracking-widest transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/30 hover:text-white font-mono text-[10px] uppercase tracking-widest transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

