"use client"

import { motion } from "framer-motion"
import { Cpu, Code, Palette, Server, Wrench, HeadphonesIcon } from "lucide-react"

type ServiceCardProps = {
  title: string
  description: string
  icon: any
  index: number
  gradient: string
}

const ServiceCard = ({ title, description, icon: Icon, index, gradient }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative"
  >
    <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-3xl`} />
    
    <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
      {/* Icon Container */}
      <div className={`w-16 h-16 rounded-2xl ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-8 h-8 text-white" />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed flex-grow">
        {description}
      </p>

      {/* Hover Arrow */}
      <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-sm font-semibold mr-2">Learn more</span>
        <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </motion.div>
)

export function BentoSection() {
  const services = [
    {
      title: "AI Automation",
      description: "Intelligent automation tools to streamline your business processes with cutting-edge AI technology and machine learning solutions.",
      icon: Cpu,
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites and applications built with the latest technologies, frameworks, and best practices for optimal performance.",
      icon: Code,
      gradient: "bg-gradient-to-br from-primary to-primary-dark"
    },
    {
      title: "Graphic Design",
      description: "Creative visual solutions for your brand identity, marketing campaigns, and digital assets that stand out and engage your audience.",
      icon: Palette,
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      title: "DevOps Solutions",
      description: "Seamless deployment, infrastructure management, and CI/CD pipelines for scalable, reliable, and secure applications.",
      icon: Server,
      gradient: "bg-gradient-to-br from-orange-500 to-red-500"
    },
    {
      title: "Custom Solutions",
      description: "Tailored digital solutions designed specifically for your unique business requirements, challenges, and growth objectives.",
      icon: Wrench,
      gradient: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      title: "24/7 Support",
      description: "Dedicated technical support and maintenance to ensure your digital solutions run smoothly around the clock with minimal downtime.",
      icon: HeadphonesIcon,
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-600"
    },
  ]

  return (
    <section className="relative w-full py-20 md:py-28 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      {/* Decorative Blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              What We Offer
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Our Core Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to transform your business and drive sustainable growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
