"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
  {
    quote: "Quadgentics delivered exactly what we needed - a perfect blend of creativity and technology that transformed our business operations and user experience.",
    author: "Sarah Ahmed",
    role: "CEO, TechCorp Worldwide",
    image: "/images/guillermo-rauch.png"
  },
  {
    quote: "The team's attention to detail and ability to understand our complex requirements was unmatched. They are true partners in our digital journey.",
    author: "James Wilson",
    role: "Director of Engineering, Innovate.io",
    image: "/images/guillermo-rauch.png" // Using existing image for consistency
  },
  {
    quote: "From AI automation to high-performance web systems, Quadgentics consistently exceeds our expectations with every deployment.",
    author: "Elena Rodriguez",
    role: "Founding Partner, Nexus Solutions",
    image: "/images/guillermo-rauch.png" // Using existing image for consistency
  }
]

export function LargeTestimonial() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,175,167,0.05),transparent_70%)]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-12 lg:px-24 relative z-10">
        {/* Standard Heading */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 backdrop-blur-md"
          >
            <div className="h-1.5 w-1.5 animate-pulse  bg-primary" />
            <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-primary">
              TESTIMONIALS
            </span>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-lastica text-[#172222] leading-[1.2] md:leading-[1.1] mb-8 uppercase"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            VOICE OF <span className="text-primary italic">OUR</span> <br />
            <span className="text-primary/60 font-mono block text-xl sm:text-3xl md:text-5xl mt-2"></span>
            <span
                                className="spotlight-header text-primary/60 font-mono block text-2xl md:text-5xl mt-2 italic shadow-primary/20"
                                data-text="GLOBAL CLIENTS"
                            >
                                GLOBAL CLIENTS
                            </span>
          </motion.h2>
        </div>

        {/* Carousel Slider */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full relative"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <motion.div
                  className="relative max-w-5xl mx-auto overflow-hidden rounded-[48px] border border-gray-100 bg-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] p-8 md:p-16 lg:p-20"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Decorative Quote Mark */}
                  <div className="absolute top-10 left-10 text-primary/10 select-none pointer-events-none">
                    <span className="text-[12rem] font-serif leading-none italic">“</span>
                  </div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.div
                      className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-raleway font-semibold text-[#172222] italic leading-[1.4] sm:leading-[1.3] mb-8 md:mb-12"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      "{testimonial.quote}"
                    </motion.div>

                    <motion.div
                      className="flex flex-col items-center gap-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          width={80}
                          height={80}
                          className="w-20 h-20 relative rounded-full border-2 border-white shadow-xl"
                        />
                      </div>
                      <div>
                        <div className="text-[#172222] text-xl font-bold font-raleway">{testimonial.author}</div>
                        <div className="text-primary font-mono text-sm uppercase tracking-wider font-bold">{testimonial.role}</div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex">
            <CarouselPrevious className="absolute -left-4 md:-left-12 lg:-left-16" />
            <CarouselNext className="absolute -right-4 md:-right-12 lg:-right-16" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
