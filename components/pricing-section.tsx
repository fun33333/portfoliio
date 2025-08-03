"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)

  const pricingPlans = [
    {
      name: "Starter",
      monthlyPrice: "$499",
      annualPrice: "$399",
      description: "Perfect for small businesses and startups.",
      features: [
        "Basic website development",
        "Logo and brand identity design",
        "Basic AI automation setup",
        "1 month support",
        "Mobile responsive design",
      ],
      buttonText: "Get Started",
      buttonClass:
        "bg-zinc-300 shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] outline outline-0.5 outline-[#1e29391f] outline-offset-[-0.5px] text-gray-800 text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-zinc-400",
    },
    {
      name: "Professional",
      monthlyPrice: "$1299",
      annualPrice: "$999",
      description: "Ideal for growing businesses.",
      features: [
        "Advanced web development",
        "Complete brand package",
        "AI automation & integration",
        "DevOps setup & deployment",
        "3 months support",
        "SEO optimization",
        "Analytics integration",
      ],
      buttonText: "Choose Pro",
      buttonClass:
        "bg-primary-foreground shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] text-primary text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-primary-foreground/90",
      popular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: "$2999",
      annualPrice: "$2399",
      description: "Complete solutions for large organizations.",
      features: [
        "Custom enterprise solutions",
        "Dedicated project manager",
        "Advanced AI implementations",
        "Full DevOps infrastructure",
        "6 months support & maintenance",
      ],
      buttonText: "Contact Sales",
      buttonClass:
        "bg-secondary shadow-[0px_1px_1px_-0.5px_rgba(16,24,40,0.20)] text-secondary-foreground text-shadow-[0px_1px_1px_rgba(16,24,40,0.08)] hover:bg-secondary/90",
    },
  ]

  return (
    <section className="w-full section-padding container-padding overflow-hidden flex flex-col justify-start items-center">
      <div className="self-stretch relative flex flex-col justify-center items-center gap-2 py-0">
        <motion.div
          className="flex flex-col justify-start items-center gap-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-foreground text-4xl md:text-5xl font-tech font-semibold leading-tight md:leading-[40px] mb-4"
            whileInView={{ scale: [0.9, 1] }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono">&lt;</span>
            Choose Your Service Package
            <span className="text-primary font-mono">/&gt;</span>
          </motion.h2>
          <p className="self-stretch text-muted-foreground text-lg font-tech font-medium leading-tight max-w-3xl">
            Flexible packages designed for startups, growing businesses, and enterprises. <br />
            Get the perfect solution that fits your needs and budget.
          </p>
        </motion.div>
        <motion.div
          className="pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="p-1 bg-muted rounded-xl outline outline-1 outline-[#0307120a] outline-offset-[-1px] flex justify-start items-center gap-2">
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 flex justify-center items-center gap-2 rounded-lg transition-all duration-300 font-tech ${isAnnual ? "bg-accent shadow-md text-accent-foreground" : "text-zinc-400 hover:bg-muted/50"}`}
            >
              <span className="text-center text-sm font-medium leading-tight">Annually</span>
            </button>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 flex justify-center items-center rounded-lg transition-all duration-300 font-tech ${!isAnnual ? "bg-accent shadow-md text-accent-foreground" : "text-zinc-400 hover:bg-muted/50"}`}
            >
              <span className="text-center text-sm font-medium leading-tight">Monthly</span>
            </button>
          </div>
        </motion.div>
      </div>
      <div className="self-stretch flex flex-col md:flex-row justify-start items-start grid-gap mt-12 max-w-[1100px] mx-auto">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            className={`flex-1 p-8 overflow-hidden rounded-2xl flex flex-col justify-start items-start gap-8 relative group ${plan.popular ? "bg-primary shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.10)]" : "glass-card"}`}
            style={plan.popular ? {} : { outline: "1px solid hsl(var(--border))", outlineOffset: "-1px" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
              y: -15,
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(59, 130, 246, 0.2)",
            }}
          >
            {/* Tech corners */}
            <div className="absolute top-4 left-4 w-5 h-5 border-l-2 border-t-2 border-primary/40 group-hover:border-primary transition-colors duration-300"></div>
            <div className="absolute top-4 right-4 w-5 h-5 border-r-2 border-t-2 border-primary/40 group-hover:border-primary transition-colors duration-300"></div>

            <div className="self-stretch flex flex-col justify-start items-start gap-8">
              <div className="self-stretch flex flex-col justify-start items-start gap-8">
                <div
                  className={`w-full h-5 text-lg font-tech font-medium leading-tight ${plan.popular ? "text-primary-foreground" : "text-zinc-200"}`}
                >
                  {plan.name}
                  {plan.popular && (
                    <div className="ml-3 px-3 overflow-hidden rounded-full justify-center items-center gap-2.5 inline-flex py-1 bg-gradient-to-b from-primary-light/50 to-primary-light bg-white shadow-sm">
                      <div className="text-center text-primary-foreground text-xs font-normal leading-tight break-words">
                        Popular
                      </div>
                    </div>
                  )}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="flex justify-start items-center gap-2">
                    <div
                      className={`relative h-12 flex items-center text-4xl font-tech font-bold leading-10 ${plan.popular ? "text-primary-foreground" : "text-zinc-50"}`}
                    >
                      <span className="invisible">{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: isAnnual ? 1 : 0,
                          transform: `scale(${isAnnual ? 1 : 0.8})`,
                          filter: `blur(${isAnnual ? 0 : 4}px)`,
                        }}
                        aria-hidden={!isAnnual}
                      >
                        {plan.annualPrice}
                      </span>
                      <span
                        className="absolute inset-0 flex items-center transition-all duration-500"
                        style={{
                          opacity: !isAnnual ? 1 : 0,
                          transform: `scale(${!isAnnual ? 1 : 0.8})`,
                          filter: `blur(${!isAnnual ? 0 : 4}px)`,
                        }}
                        aria-hidden={isAnnual}
                      >
                        {plan.monthlyPrice}
                      </span>
                    </div>
                    <div
                      className={`text-center text-base font-tech font-medium leading-tight ${plan.popular ? "text-primary-foreground/70" : "text-zinc-400"}`}
                    >
                      /month
                    </div>
                  </div>
                  <div
                    className={`self-stretch text-base font-tech font-medium leading-tight ${plan.popular ? "text-primary-foreground/70" : "text-zinc-400"}`}
                  >
                    {plan.description}
                  </div>
                </div>
              </div>
              <Button
                className={`self-stretch px-6 py-3 rounded-[99px] flex justify-center items-center btn-tech ${plan.buttonClass}`}
              >
                <div className="px-1.5 flex justify-center items-center gap-2">
                  <span
                    className={`text-center text-base font-tech font-medium leading-tight ${plan.name === "Starter" ? "text-gray-800" : plan.name === "Professional" ? "text-primary" : "text-zinc-950"}`}
                  >
                    {plan.buttonText}
                  </span>
                </div>
              </Button>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div
                className={`self-stretch text-base font-tech font-medium leading-tight ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}
              >
                {plan.name === "Starter" ? "Get Started today:" : "Everything in Free +"}
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="self-stretch flex justify-start items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <Check
                        className={`w-full h-full ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"}`}
                        strokeWidth={2}
                      />
                    </div>
                    <div
                      className={`leading-tight font-tech font-normal text-base text-left ${plan.popular ? "text-primary-foreground" : "text-muted-foreground"}`}
                    >
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Hover glow */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
