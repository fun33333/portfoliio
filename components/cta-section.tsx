"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 relative flex flex-col justify-center items-center overflow-visible">
      <div className="absolute inset-0 top-[-90px]">
        <svg
          className="w-full h-full"
          viewBox="0 0 1388 825"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <mask
            id="mask0_182_1049"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="269"
            y="27"
            width="850"
            height="493"
          >
            <rect x="269.215" y="27.4062" width="849.57" height="492.311" fill="url(#paint0_linear_182_1049)" />
          </mask>
          <g mask="url(#mask0_182_1049)">
            <g filter="url(#filter0_f_182_1049)">
              <ellipse
                cx="694"
                cy="-93.0414"
                rx="670.109"
                ry="354.908"
                fill="url(#paint1_radial_182_1049)"
                fillOpacity="0.8"
              />
            </g>
            <ellipse cx="694" cy="-91.5385" rx="670.109" ry="354.908" fill="url(#paint2_linear_182_1049)" />
            <ellipse cx="694" cy="-93.0414" rx="670.109" ry="354.908" fill="url(#paint3_linear_182_1049)" />
          </g>
          <defs>
            <filter
              id="filter0_f_182_1049"
              x="-234.109"
              y="-705.949"
              width="1856.22"
              height="1225.82"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="129" result="effect1_foregroundBlur_182_1049" />
            </filter>
            <linearGradient
              id="paint0_linear_182_1049"
              x1="1118.79"
              y1="273.562"
              x2="269.215"
              y2="273.562"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="hsl(var(--background))" stopOpacity="0" />
              <stop offset="0.2" stopColor="hsl(var(--background))" stopOpacity="0.8" />
              <stop offset="0.8" stopColor="hsl(var(--background))" stopOpacity="0.8" />
              <stop offset="1" stopColor="hsl(var(--background))" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_182_1049"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(683.482 245.884) rotate(-3.78676) scale(469.009 248.4)"
            >
              <stop offset="0.1294" stopColor="hsl(var(--primary-dark))" />
              <stop offset="0.2347" stopColor="hsl(var(--primary))" />
              <stop offset="0.3" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </radialGradient>
            <linearGradient
              id="paint2_linear_182_1049"
              x1="694"
              y1="-446.446"
              x2="694"
              y2="263.369"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_182_1049"
              x1="694"
              y1="-447.949"
              x2="694"
              y2="261.866"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="hsl(var(--background))" />
              <stop offset="1" stopColor="hsl(var(--background))" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <motion.div
        className="relative z-10 flex flex-col justify-start items-center space-y-6 md:space-y-8 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-foreground text-3xl md:text-4xl lg:text-5xl font-tech font-semibold leading-tight mb-4"
          whileInView={{ scale: [0.9, 1] }}
          transition={{ duration: 0.6 }}
        >
          Ready to Transform Your Business?
        </motion.h2>
        <p className="text-muted-foreground text-base md:text-lg font-tech font-medium leading-relaxed max-w-3xl">
          Join the businesses that trust Quadgentics for their digital transformation. Let's build something amazing
          together with our creative and modern solutions.
        </p>
        <Link href="#contact-section">
          <Button
            className="px-8 py-3 bg-primary hover:bg-primary/90 text-white text-base md:text-lg font-tech font-medium rounded-full transition-all duration-300"
            size="lg"
          >
            Start Your Project
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}
