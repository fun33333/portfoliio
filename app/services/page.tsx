"use client"

import { PageHeroBanner } from "@/components/page-hero-banner"
import { BentoSection } from "@/components/bento-section"
import { FooterSection } from "@/components/footer-section"
import { motion } from "framer-motion"
import { Code, Cpu, Palette, Workflow, Layers, MessageSquare } from "lucide-react"

const serviceDetails = [
    {
        icon: Cpu,
        title: "AI Automation",
        description: "Leverage artificial intelligence to automate repetitive tasks and streamline your business operations.",
        features: [
            "WhatsApp & Telegram Bots",
            "Custom AI Chatbots",
            "Workflow Automation",
            "LLM Integration",
            "Data Processing Automation"
        ],
        technologies: ["Python", "OpenAI", "LangChain", "TensorFlow", "FastAPI"]
    },
    {
        icon: Code,
        title: "Web Development",
        description: "Build modern, responsive, and high-performance web applications tailored to your business needs.",
        features: [
            "Custom Web Applications",
            "E-Commerce Solutions",
            "Progressive Web Apps (PWA)",
            "API Development",
            "Database Design"
        ],
        technologies: ["React", "Next.js", "Django", "Node.js", "PostgreSQL"]
    },
    {
        icon: Palette,
        title: "Graphic Design",
        description: "Create stunning visual identities that capture your brand essence and engage your audience.",
        features: [
            "Logo & Brand Identity",
            "UI/UX Design",
            "Marketing Materials",
            "Social Media Graphics",
            "Print Design"
        ],
        technologies: ["Figma", "Adobe XD", "Illustrator", "Photoshop", "After Effects"]
    },
    {
        icon: Workflow,
        title: "SaaS Solutions",
        description: "Develop scalable Software-as-a-Service platforms with modern cloud infrastructure.",
        features: [
            "Multi-tenant Architecture",
            "Subscription Management",
            "Cloud Deployment",
            "CI/CD Pipelines",
            "Monitoring & Analytics"
        ],
        technologies: ["AWS", "Docker", "Kubernetes", "Redis", "Stripe"]
    },
    {
        icon: Layers,
        title: "Custom Solutions",
        description: "Tailor-made software solutions designed specifically for your unique business challenges.",
        features: [
            "CRM/ERP Systems",
            "Business Intelligence",
            "Integration Services",
            "Legacy System Modernization",
            "Technical Consulting"
        ],
        technologies: ["Python", "Django", "React", "PostgreSQL", "REST APIs"]
    },
    {
        icon: MessageSquare,
        title: "24/7 Support",
        description: "Round-the-clock technical support and maintenance to keep your systems running smoothly.",
        features: [
            "Technical Support",
            "Bug Fixes & Updates",
            "Performance Monitoring",
            "Security Patches",
            "System Maintenance"
        ],
        technologies: ["Monitoring Tools", "Issue Tracking", "DevOps", "Security Tools"]
    }
]

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Banner */}
            <PageHeroBanner
                title="Our Services"
                subtitle="WHAT WE DO"
                description="From AI automation to stunning web designs, we offer comprehensive digital solutions to transform your business and drive growth."
                imagePath="/images/project_banner.png"
                ctaText="Get Started"
                ctaLink="/contact"
                badge="Full-Stack Solutions"
            />

            {/* Services Overview Section */}
            <BentoSection />

            {/* Detailed Services */}
            <section className="relative py-20 md:py-32 bg-[#0A1515]">
                <div className="max-w-[1600px] mx-auto px-4 md:px-12 lg:px-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-lastica text-white leading-[1.1] mb-8 uppercase">
                            DETAILED <span className="text-primary italic">SERVICE</span> <br />
                            <span
                                className="spotlight-header text-primary/60 font-mono block text-3xl md:text-5xl mt-2 italic shadow-primary/20"
                                data-text="SPECIFICATIONS"
                            >
                                SPECIFICATIONS
                            </span>
                        </h2>
                        <p className="text-white/70 text-lg md:text-xl font-raleway max-w-3xl mx-auto">
                            Explore our comprehensive range of services designed to meet all your digital needs
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {serviceDetails.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500"
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                                    <service.icon className="w-8 h-8 text-primary" />
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-2xl md:text-3xl font-lastica text-white uppercase tracking-tight mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-white/70 font-raleway mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="mb-6">
                                    <h4 className="text-primary font-raleway font-bold text-sm uppercase tracking-wider mb-3">
                                        Key Features
                                    </h4>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-white/60 text-sm font-raleway">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-primary font-raleway font-bold text-sm uppercase tracking-wider mb-3">
                                        Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {service.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs font-mono"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Decorative */}
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <FooterSection />
        </div>
    )
}
