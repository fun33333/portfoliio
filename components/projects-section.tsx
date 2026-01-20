"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ExternalLink, Github, Layers, Zap, Database, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Web Apps" | "Mobile Apps" | "AI / Automation" | "SaaS";
  description: string;
  image: string;
  tech: string[];
  link: string;
  stats?: string;
}

const projects: Project[] = [
  {
    id: "fin-track",
    title: "FinTrack",
    subtitle: "Financial Intelligence Platform",
    category: "SaaS",
    description: "Real-time financial insights platform processing over $50M in monthly transactions for enterprise clients.",
    image: "/placeholder.svg?height=600&width=800&text=Fintech+Dashboard+UI",
    tech: ["React", "Node.js", "AWS", "PostgreSQL"],
    link: "#",
    stats: "+45% Efficiency",
  },
  {
    id: "sales-iq",
    title: "SalesIQ",
    subtitle: "AI-Powered Sales Analytics",
    category: "AI / Automation",
    description: "Machine learning algorithms that predict customer behavior and automate lead scoring pipelines.",
    image: "/placeholder.svg?height=600&width=800&text=AI+Analytics+Dashboard",
    tech: ["Python", "TensorFlow", "FastAPI", "Next.js"],
    link: "#",
    stats: "98% Accuracy",
  },
  {
    id: "med-assist",
    title: "MedAssist",
    subtitle: "Healthcare Management System",
    category: "Mobile Apps",
    description: "HIPAA-compliant mobile application for streaming patient management and telemedicine coordination.",
    image: "/placeholder.svg?height=600&width=800&text=Healthcare+Mobile+App",
    tech: ["React Native", "Firebase", "Node.js", "WebRTC"],
    link: "#",
    stats: "20k+ Active Users",
  },
  {
    id: "edustream",
    title: "EduStream",
    subtitle: "LMS for Modern Universities",
    category: "Web Apps",
    description: "Comprehensive learning management system reducing administrative workload by 70% automatically.",
    image: "/placeholder.svg?height=600&width=800&text=Education+Platform+UI",
    tech: ["Next.js", "GraphQL", "Supabase", "Tailwind"],
    link: "#",
  },
];

const categories = ["All", "Web Apps", "Mobile Apps", "AI / Automation", "SaaS"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="relative w-full py-24 md:py-32 px-4 overflow-hidden bg-[#030706]">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Our Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto font-light"
          >
            Real-world solutions built for real businesses. scaling from startups to enterprise-level infrastructure.
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-sm ${activeCategory === category
                ? "bg-teal-500/10 border-teal-500/50 text-teal-400 shadow-[0_0_20px_rgba(45,212,191,0.2)]"
                : "bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/10"
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className="relative h-full bg-[#0a1014]/80 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden hover:border-teal-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(45,212,191,0.1)] hover:-translate-y-2"
              >
                {/* Browser Frame Visual */}
                <div className="bg-[#05090c] border-b border-white/5 p-3 flex items-center gap-2">
                  <div className="flex gap-1.5 ml-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                  </div>
                  <div className="mx-auto text-[10px] text-gray-600 font-mono bg-white/5 px-3 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.category}
                  </div>
                </div>

                {/* Project Thumbnail Area */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-900 to-black group-hover:via-gray-900 transition-all">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1014] via-transparent to-transparent opacity-90" />

                  {/* Floating Stats Badge */}
                  {project.stats && (
                    <div className="absolute top-20 right-4 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg">
                      <span className="text-teal-400 text-xs font-bold">{project.stats}</span>
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 relative -mt-12">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors drop-shadow-md">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-medium text-teal-400/80 uppercase tracking-wider">{project.subtitle}</span>
                  </div>

                  <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-2 shadow-black drop-shadow-sm">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags - Moved below description */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase text-teal-300/90 bg-teal-950/50 border border-teal-500/20 rounded-md shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <a
                      href={project.link}
                      className="w-full inline-flex items-center justify-end gap-2 text-sm font-medium text-white group-hover:text-teal-400 transition-colors"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-6">Ready to build something similar?</p>
          <Button
            size="lg"
            className="bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-full px-8 shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] transition-all"
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
