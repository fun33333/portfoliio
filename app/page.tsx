"use client";

import { HeroSection } from "@/components/hero-section";
import { DashboardPreview } from "@/components/dashboard-preview";
import { SocialProof } from "@/components/social-proof";
import { BentoSection } from "@/components/bento-section";
import { ProjectsSection } from "@/components/projects-section";
import { LargeTestimonial } from "@/components/large-testimonial";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialGridSection } from "@/components/testimonial-grid-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { FooterSection } from "@/components/footer-section";
import { AnimatedSection } from "@/components/animated-section";
import { VideoBackground } from "@/components/video-background";
import { TeamSection } from "@/components/team-section";
import { motion } from "framer-motion";

// bitBYTE8

export default function LandingPage() {
  return (
    <div className="min-h-screen relative overflow-hidden pb-0">
      {/* Sticky Video Background */}
      {/* Robot Icon - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="fixed bottom-8 right-28 w-24 h-24 rounded-full overflow-hidden shadow-primary z-50"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Technology startup (1).mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full animate-pulse"></div>
      </motion.div>
      {/* Scrollable Content */}
      <div className="relative z-10">
        <main className="mx-auto relative">
          <HeroSection />
        </main>
        <AnimatedSection
          id="services-section"
          className="relative z-10 section-light-pure section-transition"
          delay={0.2}
          variant="stagger"
        >
          <BentoSection />
        </AnimatedSection>

        <AnimatedSection
          id="projects-section"
          className="relative z-10 section-dark-primary section-transition"
          delay={0.2}
          variant="fadeUp"
        >
          <div className="max-w-[1320px] mx-auto">
            <ProjectsSection />
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="about-section"
          className="relative z-10 section-light-pure section-transition"
          delay={0.2}
          variant="fadeUp"
        >
          <div className="max-w-[1320px] mx-auto">
            <TeamSection />
          </div>
        </AnimatedSection>

        <AnimatedSection
          className="relative z-10 section-light-tinted section-transition"
          delay={0.2}
          variant="scale"
        >
          <div className="max-w-[1320px] mx-auto">
            <LargeTestimonial />
          </div>
        </AnimatedSection>

        {/* <AnimatedSection
          id="pricing-section"
          className="relative z-10 max-w-[1320px] mx-auto"
          delay={0.2}
          variant="slideLeft"
        >
          <PricingSection />
        </AnimatedSection> */}

        <AnimatedSection
          id="testimonials-section"
          className="relative z-10 section-dark-primary section-transition"
          delay={0.2}
          variant="fadeUp"
        >
          <div className="max-w-[1320px] mx-auto">
            <TestimonialGridSection />
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="faq-section"
          className="relative z-10 section-light-tinted section-transition"
          delay={0.2}
          variant="slideRight"
        >
          <div className="max-w-[1320px] mx-auto">
            <FAQSection />
          </div>
        </AnimatedSection>

        <AnimatedSection
          className="relative z-10 section-light-pure section-transition"
          delay={0.2}
          variant="scale"
        >
          <div className="max-w-[1320px] mx-auto">
            <CTASection />
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="contact-section"
          className="relative z-10 section-dark-secondary section-transition"
          delay={0.2}
          variant="fadeIn"
        >
          <div className="max-w-[1320px] mx-auto">
            <FooterSection />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
