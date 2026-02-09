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
import Link from "next/link";
import Lenis from "lenis";
import { ChatWidget } from "@/components/chat/chat-widget";

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
      <ChatWidget />
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
