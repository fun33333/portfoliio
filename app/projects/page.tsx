"use client"

import { PageHeroBanner } from "@/components/page-hero-banner"
import { ProjectsSection } from "@/components/projects-section"
import { FooterSection } from "@/components/footer-section"

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Banner */}
            <PageHeroBanner
                title="Our Projects"
                subtitle="PORTFOLIO"
                description="Explore our diverse portfolio of successful projects. From AI-powered applications to stunning web designs, see how we've helped businesses achieve their digital goals."
                imagePath="/images/project_banner.png"
                ctaText="Start Your Project"
                ctaLink="/contact"
                badge="100+ Projects Delivered"
            />

            {/* Projects Gallery - Dark Background */}
            <section className="relative py-20 md:py-32 bg-[#0A1515]">
                <ProjectsSection />
            </section>

            {/* Footer */}
            <FooterSection />
        </div>
    )
}
