import { HeroSection } from "@/components/hero-section";
import dynamic from "next/dynamic";
import { AnimatedSection } from "@/components/animated-section";
import { ChatWidget } from "@/components/chat/chat-widget";

// Dynamically import heavy components below the fold
const BentoSection = dynamic(() => import("@/components/bento-section").then(mod => mod.BentoSection));
const ProjectsSection = dynamic(() => import("@/components/projects-section").then(mod => mod.ProjectsSection));
const CounterSection = dynamic(() => import("@/components/counter-section").then(mod => mod.CounterSection));
const AboutSection = dynamic(() => import("@/components/about-section").then(mod => mod.AboutSection));
const LargeTestimonial = dynamic(() => import("@/components/large-testimonial").then(mod => mod.LargeTestimonial));
const TestimonialGridSection = dynamic(() => import("@/components/testimonial-grid-section").then(mod => mod.TestimonialGridSection));
const FAQSection = dynamic(() => import("@/components/faq-section").then(mod => mod.FAQSection));
const FooterSection = dynamic(() => import("@/components/footer-section").then(mod => mod.FooterSection));

export default function LandingPage() {
  return (
    <div className="min-h-screen relative overflow-hidden pb-0">
      <ChatWidget />
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
