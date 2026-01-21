"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ExternalLink, Github, Layers, Zap, Database, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Web Design" | "Logo Design" | "Branding Design";
  description: string;
  image: string;
  tech: string[];
  link: string;
  stats?: string;
}

const projects: Project[] = [
  {
    id: "kiffu-restaurant",
    title: "Kiffu Restaurant",
    subtitle: "Premium Dining Experience",
    category: "Web Design",
    description: "A complete multi-page restaurant website with menu management and online reservations.",
    image: "/images/restaurant3-opt.jpg",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "#",
  },
  {
    id: "sales-iq",
    title: "SalesIQ",
    subtitle: "AI-Powered Sales Analytics",
    category: "Logo Design",
    description: "Machine learning algorithms that predict customer behavior and automate lead scoring pipelines.",
    image: "/images/restaurant3-opt.jpg",
    tech: ["Python", "TensorFlow", "FastAPI", "Next.js"],
    link: "#",
    stats: "98% Accuracy",
  },
  {
    id: "med-assist",
    title: "MedAssist",
    subtitle: "Healthcare Management System",
    category: "Logo Design",
    description: "HIPAA-compliant mobile application for streaming patient management and telemedicine coordination.",
    image: "/images/restaurant3-opt.jpg",
    tech: ["React Native", "Firebase", "Node.js", "WebRTC"],
    link: "#",
    stats: "20k+ Active Users",
  },
  {
    id: "edustream",
    title: "EduStream",
    subtitle: "LMS for Modern Universities",
    category: "Web Design",
    description: "Comprehensive learning management system reducing administrative workload by 70% automatically.",
    image: "/images/restaurant3-opt.jpg",
    tech: ["Next.js", "GraphQL", "Supabase", "Tailwind"],
    link: "#",
  },
];

const categories = ["All", "Web Design", "Logo Design", "Branding Design"];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="relative w-full py-24 md:py-32 px-4 overflow-hidden ">
      {/* Dynamic Background Elements */}
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#e91e63]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#e91e63]/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12px] font-bold tracking-[0.2em] text-[#e91e63] uppercase font-raleway"
          >
            Recent Projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 font-lastica"
          >
            Our latest <span className="font-extrabold">case studies</span>
          </motion.h2>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`pb-4 text-sm font-semibold transition-all duration-500 ease-in-out relative font-raleway ${activeCategory === category
                ? "text-white"
                : "text-gray-400 hover:text-white"
                }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative card-item"
            >
              <div
                className="relative h-[600px] w-full overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                {/* Project Thumbnail Area */}
                <div className="relative card-item-img overflow-hidden bg-[#0a1014]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full"
                  />

                  {/* View More Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <div className="border border-white px-6 py-2 text-white text-sm font-medium bg-white/10 backdrop-blur-sm">
                      View More
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-white text-lg font-bold group-hover:text-white transition-colors font-raleway">
                    {project.title}
                  </h3>
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
          <p className="text-gray-400 mb-6 font-raleway">Ready to build something similar?</p>
          <Button
            size="lg"
            className="bg-primary hover:bg-teal-400 text-white font-semibold font-raleway rounded-full px-8 shadow-[0_0_25px_rgba(45,175,167,0.4)] hover:shadow-[0_0_40px_rgba(45,175,167,0.6)] transition-all duration-300 hover:-translate-y-1"
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
