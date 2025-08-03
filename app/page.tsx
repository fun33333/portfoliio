import { HeroSection } from "@/components/hero-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { SocialProof } from "@/components/social-proof"
import { BentoSection } from "@/components/bento-section"
import { ProjectsSection } from "@/components/projects-section"
import { LargeTestimonial } from "@/components/large-testimonial"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialGridSection } from "@/components/testimonial-grid-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"
import { VideoBackground } from "@/components/video-background"
import { TeamSection } from "@/components/team-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen relative overflow-hidden pb-0">
      {/* Sticky Video Background */}
      <VideoBackground />

      {/* Scrollable Content */}
      <div className="relative z-10">
        <main className="max-w-[1320px] mx-auto relative">
          <HeroSection />
          {/* Dashboard Preview Wrapper */}
          <div className="absolute bottom-[-200px] md:bottom-[-450px] left-1/2 transform -translate-x-1/2 z-30">
            <DashboardPreview />
          </div>
        </main>

        <AnimatedSection
          className="relative z-10 max-w-[1320px] mx-auto mt-[450px] md:mt-[500px]"
          delay={0.1}
          variant="fadeUp"
        >
          <SocialProof />
        </AnimatedSection>

        <AnimatedSection
          id="services-section"
          className="relative z-10 max-w-[1320px] mx-auto"
          delay={0.2}
          variant="stagger"
        >
          <BentoSection />
        </AnimatedSection>

        <AnimatedSection
          id="projects-section"
          className="relative z-10 max-w-[1320px] mx-auto"
          delay={0.2}
          variant="fadeUp"
        >
          <ProjectsSection />
        </AnimatedSection>

        <AnimatedSection
          id="about-section"
          className="relative z-10 max-w-[1320px] mx-auto"
          delay={0.2}
          variant="fadeUp"
        >
          <TeamSection />
        </AnimatedSection>

        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto" delay={0.2} variant="scale">
          <LargeTestimonial />
        </AnimatedSection>

        <AnimatedSection
          id="pricing-section"
          className="relative z-10 max-w-[1320px] mx-auto"
          delay={0.2}
          variant="slideLeft"
        >
          <PricingSection />
        </AnimatedSection>

        <AnimatedSection
          id="testimonials-section"
          className="relative z-10 max-w-[1320px] mx-auto"
          delay={0.2}
          variant="fadeUp"
        >
          <TestimonialGridSection />
        </AnimatedSection>

        <AnimatedSection
          id="faq-section"
          className="relative z-10 max-w-[1320px] mx-auto"
          delay={0.2}
          variant="slideRight"
        >
          <FAQSection />
        </AnimatedSection>

        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto" delay={0.2} variant="scale">
          <CTASection />
        </AnimatedSection>

        <AnimatedSection
          id="contact-section"
          className="relative z-10 max-w-[1320px] mx-auto"
          delay={0.2}
          variant="fadeIn"
        >
          <FooterSection />
        </AnimatedSection>
      </div>
    </div>
  )
}
