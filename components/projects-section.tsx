"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, X, Code, Palette, Server, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  description: string
  category: string
  url: string
  image: string
  tech: string[]
  icon: any
  color: string
}

const projects: Project[] = [
  {
    id: "ai-dashboard",
    title: "AI Analytics Dashboard",
    description: "Real-time analytics dashboard with AI-powered insights and data visualization.",
    category: "AI Automation",
    url: "https://dashboard-template-ai.vercel.app",
    image: "/placeholder.svg?height=300&width=500&text=AI+Dashboard",
    tech: ["React", "TypeScript", "TensorFlow", "D3.js"],
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "ecommerce-platform",
    title: "Modern E-commerce Platform",
    description: "Full-stack e-commerce solution with advanced features and seamless UX.",
    category: "Web Development",
    url: "https://ecommerce-demo-modern.vercel.app",
    image: "/placeholder.svg?height=300&width=500&text=E-commerce+Platform",
    tech: ["Next.js", "Stripe", "Prisma", "Tailwind"],
    icon: Code,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "brand-identity",
    title: "Creative Brand Identity",
    description: "Complete brand identity design with logo, guidelines, and marketing materials.",
    category: "Graphic Design",
    url: "https://brand-showcase-demo.vercel.app",
    image: "/placeholder.svg?height=300&width=500&text=Brand+Identity",
    tech: ["Figma", "Adobe CC", "Framer", "Webflow"],
    icon: Palette,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure Setup",
    description: "Scalable cloud infrastructure with automated deployment and monitoring.",
    category: "DevOps & Deployment",
    url: "https://devops-dashboard-demo.vercel.app",
    image: "/placeholder.svg?height=300&width=500&text=Cloud+Infrastructure",
    tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
    icon: Server,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "mobile-app",
    title: "Cross-Platform Mobile App",
    description: "React Native mobile application with native performance and modern UI.",
    category: "Custom Solutions",
    url: "https://mobile-app-showcase.vercel.app",
    image: "/placeholder.svg?height=300&width=500&text=Mobile+App",
    tech: ["React Native", "Expo", "Firebase", "Redux"],
    icon: Code,
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: "saas-platform",
    title: "SaaS Management Platform",
    description: "Complete SaaS solution with user management, billing, and analytics.",
    category: "Web Development",
    url: "http://localhost:3000/",
    image: "/placeholder.svg?height=300&width=500&text=SaaS+Platform",
    tech: ["Next.js", "Supabase", "Stripe", "Vercel"],
    icon: Cpu,
    color: "from-teal-500 to-green-500",
  },
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState("All")

  const categories = [
    "All",
    "AI Automation",
    "Web Development",
    "Graphic Design",
    "DevOps & Deployment",
    "Custom Solutions",
  ]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  const openProject = (project: Project) => {
    setSelectedProject(project)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  return (
    <section className="w-full py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Background tech grid for dark theme */}
      <div className="absolute inset-0 tech-grid opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-tech font-bold text-dark-foreground mb-6"
            whileInView={{ scale: [0.9, 1] }}
            transition={{ duration: 0.6 }}
          >
            Our Projects
          </motion.h2>
          <p className="text-base md:text-lg text-dark-muted font-tech max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects across different domains.
            <br />
            <span className="text-primary font-mono">Click to interact • Live demos available</span>
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg font-tech font-medium text-sm transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="bg-[#1a2f2f] rounded-2xl border border-primary/20 overflow-hidden cursor-pointer transition-all duration-300"
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(45, 175, 167, 0.3)",
                }}
                onClick={() => openProject(project)}
              >
                {/* Tech corners */}
                <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-primary/50 group-hover:border-primary transition-colors duration-300 z-10"></div>
                <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-primary/50 group-hover:border-primary transition-colors duration-300 z-10"></div>

                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-tech font-semibold rounded-full">
                    {project.category}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div className="bg-white/90 backdrop-blur-sm rounded-full p-3" whileHover={{ scale: 1.1 }}>
                      <ExternalLink className="w-6 h-6 text-primary" />
                    </motion.div>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <motion.h3
                      className="text-xl md:text-2xl font-tech font-bold text-dark-foreground group-hover:text-primary transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>
                    <project.icon className="w-5 h-5 text-primary opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <p className="text-dark-muted font-tech text-sm leading-relaxed">{project.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View project button */}
                  <motion.div className="pt-2" whileHover={{ scale: 1.02 }}>
                    <Button
                      className="w-full bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 hover:border-primary font-tech transition-all duration-300"
                      size="sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Demo
                    </Button>
                  </motion.div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Iframe Modal */}
      {selectedProject && (
        <motion.div
          className="iframe-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeProject}
        >
          <motion.div
            className="iframe-container animate-iframe-load"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Browser header */}
            <div className="iframe-header">
              <div className="iframe-controls">
                <div className="iframe-control close" onClick={closeProject}></div>
                <div className="iframe-control minimize"></div>
                <div className="iframe-control maximize"></div>
              </div>
              <div className="iframe-url">{selectedProject.url}</div>
              <button onClick={closeProject} className="text-gray-500 hover:text-gray-700 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Iframe content */}
            <iframe
              src={selectedProject.url}
              className="w-full h-full border-0"
              title={selectedProject.title}
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
