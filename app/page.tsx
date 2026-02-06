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

import { FooterSection } from "@/components/footer-section";
import { AnimatedSection } from "@/components/animated-section";
import { VideoBackground } from "@/components/video-background";
import { CounterSection } from "@/components/counter-section";
import { AboutSection } from "@/components/about-section";
import { motion } from "framer-motion";

// bitBYTE8

import { useEffect } from "react";
import Lenis from "lenis";

export default function LandingPage() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
          <source src="/Technology.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full animate-pulse"></div>
      </motion.div>
      {/* Scrollable Content */}
      <div className="relative z-10">
        <main className="mx-auto relative">
          <HeroSection />
        </main>

        {/* Services Section - LIGHT */}
        <AnimatedSection
          id="services-section"
          className="relative z-10 section-light-pure section-transition"
          delay={0.2}
          variant="stagger"
        >
          <BentoSection />
        </AnimatedSection>

        {/* Projects Section - DARK */}
        <AnimatedSection
          id="projects-section"
          className="relative z-10 section-dark-primary section-transition"
          delay={0.2}
          variant="fadeUp"
        >
          <div className=" mx-auto">
            <ProjectsSection />
          </div>
        </AnimatedSection>

        {/* Counter Section - LIGHT */}
        <AnimatedSection
          id="counter-section"
          className="relative z-10 section-light-pure section-transition"
          delay={0.2}
          variant="scale"
        >
          <CounterSection />
        </AnimatedSection>

        {/* About Section - DARK */}
        <AnimatedSection
          id="about-section"
          className="relative z-10 section-dark-primary section-transition"
          delay={0.2}
          variant="fadeUp"
        >
          <div className=" mx-auto">
            <AboutSection />
          </div>
        </AnimatedSection>

        {/* Large Testimonial - LIGHT */}
        <AnimatedSection
          className="relative z-10 section-light-tinted section-transition"
          delay={0.2}
          variant="scale"
        >
          <div className="mx-auto">
            <LargeTestimonial />
          </div>
        </AnimatedSection>

        {/* Testimonials Grid - DARK */}
        <AnimatedSection
          id="testimonials-section"
          className="relative z-10 section-dark-secondary section-transition"
          delay={0.2}
          variant="fadeUp"
        >
          <div className=" mx-auto">
            <TestimonialGridSection />
          </div>
        </AnimatedSection>

        {/* FAQ Section - LIGHT */}
        <AnimatedSection
          id="faq-section"
          className="relative z-10 section-light-pure section-transition"
          delay={0.2}
          variant="slideRight"
        >
          <div className=" mx-auto">
            <FAQSection />
          </div>
        </AnimatedSection>



        {/* Footer - DARK */}
        <AnimatedSection
          id="contact-section"
          className="relative z-10 bg-[#0A1515]"
          delay={0.2}
          variant="fadeIn"
        >
          <div className=" mx-auto">
            <FooterSection />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
