"use client"

import { Twitter, Github, Linkedin, ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function FooterSection() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#0A1515] text-white">
      {/* --- Combined CTA Section --- */}
      <div className="relative w-full py-24 md:py-32 px-4 md:px-8 border-b border-white/5 bg-[#0f1b1b]">
        {/* Background Elements (From CTA) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(45,175,167,0.15),transparent_70%)]" />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: 'linear-gradient(to right, #2EADA7 1px, transparent 1px), linear-gradient(to bottom, #2EADA7 1px, transparent 1px)',
              backgroundSize: '80px 80px'
            }}
          />
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Heading & Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left"
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 backdrop-blur-md">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-primary">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-lastica uppercase leading-[1.1] tracking-tighter mb-8">
              READY TO <span className="text-primary italic">TRANSFORM</span> <br />
              <span className="text-white/20">YOUR BUSINESS?</span>
            </h2>

            <p className="text-white/60 text-lg font-raleway font-medium leading-relaxed max-w-xl mb-10">
              Join the forward-thinking businesses that trust Quadgentics for their digital evolution.
              Let's engineer your brand's future with elite, bespoke software solutions.
            </p>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative isolation-auto inline-flex items-center gap-4 overflow-hidden rounded-full bg-white/10 px-8 py-4 text-white transition-all shadow-xl hover:shadow-2xl backdrop-blur-md border border-white/10 hover:border-primary/50"
              >
                <span className="relative z-10 text-sm font-bold uppercase tracking-wider">
                  Start Your Journey
                </span>
                <div className="relative z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center transition-transform duration-500 group-hover:rotate-[-45deg]">
                  <ArrowRight size={16} className="text-black" />
                </div>
              </motion.button>
            </Link>
          </motion.div>

          {/* Right: Mini Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:ml-auto bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl shadow-2xl"
          >
            <h3 className="text-2xl font-lastica text-white mb-2">Detailed Inquiry</h3>
            <p className="text-white/40 text-sm mb-8">Fill out the form below to start your project discussion.</p>

            <form className="flex flex-col gap-5">
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-primary uppercase tracking-widest ml-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all font-raleway"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-primary uppercase tracking-widest ml-1">Email</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all font-raleway"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-primary uppercase tracking-widest ml-1">Project Details</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your vision..."
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all font-raleway resize-none"
                />
              </div>

              <button className="mt-2 w-full bg-primary hover:bg-white text-black font-bold uppercase tracking-widest py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group">
                Send Request
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* --- Existing Footer Links --- */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 py-20">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 flex-grow">
            {/* Services */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-primary">Services</h3>
              <div className="flex flex-col gap-4">
                {[
                  "AI Automation", "Web Development", "Graphic Design",
                  "DevOps Solutions", "Custom Platforms"
                ].map((item) => (
                  <Link key={item} href="#services-section" className="text-white/60 hover:text-white font-raleway font-medium transition-colors text-base hover:translate-x-1 duration-300 inline-block">
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
                  <Link key={item} href={item === "Our Team" ? "#about-section" : "#"} className="text-white/60 hover:text-white font-raleway font-medium transition-colors text-base hover:translate-x-1 duration-300 inline-block">
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-primary">Contact Us</h3>
              <div className="flex flex-col gap-6">
                <a href="mailto:hello@quadgentics.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-white/40 font-mono mb-1">EMAIL US</span>
                    <span className="text-white/80 font-medium group-hover:text-primary transition-colors">hello@quadgentics.com</span>
                  </div>
                </a>

                <a href="tel:+15551234567" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-white/40 font-mono mb-1">CALL US</span>
                    <span className="text-white/80 font-medium group-hover:text-primary transition-colors">+1 (555) 123-4567</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-white/40 font-mono mb-1">VISIT US</span>
                    <span className="text-white/80 font-medium group-hover:text-primary transition-colors">123 Innovation Dr,<br />New York, NY 10001</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-primary">Newsletter</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Subscribe to get the latest news and updates about our journey.
              </p>
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-all w-full"
                />
                <button className="bg-primary text-black font-bold text-xs uppercase tracking-widest py-3 rounded-lg hover:bg-white transition-colors duration-300">
                  Subscribe
                </button>
              </form>
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

