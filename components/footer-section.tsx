"use client"

import { Twitter, Github, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto container-padding flex flex-col md:flex-row justify-between items-start grid-gap py-10 md:py-[70px]">
      {/* Left Section: Logo, Description, Social Links */}
      <motion.div
        className="flex flex-col justify-start items-start gap-8 p-4 md:p-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex gap-3 items-stretch justify-center">
          <span className="text-foreground text-2xl font-tech font-bold">
            <span className="text-primary">&lt;</span>
            Quadgentics
            <span className="text-primary">/&gt;</span>
          </span>
        </div>
        <p className="text-foreground/90 text-base font-tech leading-[22px] text-left max-w-xs">
          Smart digital solutions for modern businesses, crafted with creativity and precision.
        </p>
        <div className="flex justify-start items-start gap-4">
          <motion.a
            href="#"
            aria-label="Twitter"
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Twitter className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#"
            aria-label="GitHub"
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#"
            aria-label="LinkedIn"
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
        </div>
      </motion.div>
      {/* Right Section: Product, Company, Resources */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 p-4 md:p-0 w-full md:w-auto">
        <motion.div
          className="flex flex-col justify-start items-start gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h3 className="text-muted-foreground text-base font-tech font-medium leading-5">Services</h3>
          <div className="flex flex-col justify-end items-start gap-2">
            <Link
              href="#services-section"
              className="text-foreground text-base font-tech font-normal leading-5 hover:underline hover:text-primary transition-colors"
            >
              AI Automation
            </Link>
            <Link
              href="#services-section"
              className="text-foreground text-base font-tech font-normal leading-5 hover:underline hover:text-primary transition-colors"
            >
              Web Development
            </Link>
            <Link
              href="#services-section"
              className="text-foreground text-base font-tech font-normal leading-5 hover:underline hover:text-primary transition-colors"
            >
              Graphic Design
            </Link>
            <Link
              href="#services-section"
              className="text-foreground text-base font-tech font-normal leading-5 hover:underline hover:text-primary transition-colors"
            >
              DevOps & Deployment
            </Link>
            <Link
              href="#services-section"
              className="text-foreground text-base font-tech font-normal leading-5 hover:underline hover:text-primary transition-colors"
            >
              Custom Solutions
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col justify-start items-start gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-muted-foreground text-base font-tech font-medium leading-5">Company</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <Link
              href="#about-section"
              className="text-foreground text-base font-tech font-normal leading-5 hover:underline hover:text-primary transition-colors"
            >
              About Quadgentics
            </Link>
            <Link
              href="#about-section"
              className="text-foreground text-base font-tech font-normal leading-5 hover:underline hover:text-primary transition-colors"
            >
              Our Team
            </Link>
            <Link
              href="#"
              className="text-foreground text-base font-tech font-normal leading-5 hover:underline hover:text-primary transition-colors"
            >
              Careers
            </Link>
            <Link
              href="#projects-section"
              className="text-foreground text-base font-tech font-normal leading-5 hover:underline hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#contact-section"
              className="text-foreground text-base font-tech font-normal leading-5 hover:underline hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col justify-start items-start gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-muted-foreground text-base font-tech font-medium leading-5">Resources</h3>
          <div className="flex flex-col justify-center items-start gap-2">
            <Link
              href="#"
              className="text-foreground text-base font-tech font-normal leading-5 hover:underline hover:text-primary transition-colors"
            >
              Terms of use
            </Link>
            <Link
              href="#"
              className="text-foreground text-base font-tech font-normal leading-5 hover:underline hover:text-primary transition-colors"
            >
              API Reference
            </Link>
            <Link
              href="#"
              className="text-foreground text-base font-tech font-normal leading-5 hover:underline hover:text-primary transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="#"
              className="text-foreground text-base font-tech font-normal leading-5 hover:underline hover:text-primary transition-colors"
            >
              Community
            </Link>
            <Link
              href="#"
              className="text-foreground text-base font-tech font-normal leading-5 hover:underline hover:text-primary transition-colors"
            >
              Support
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
