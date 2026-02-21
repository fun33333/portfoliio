"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const categories = [
  { id: "web", label: "Web Development" },
  { id: "saas", label: "SaaS" },
  { id: "graphics", label: "Graphic Design" },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("web");

  useEffect(() => {
    NativeFancybox.bind("[data-fancybox]", {
      Toolbar: {
        display: {
          right: ["close"],
        },
      },
    } as any);


    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-24 md:px-8">
      {/* Standardized Header Section */}
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 backdrop-blur-md"
        >
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-primary">
            CASE STUDIES
          </span>
        </motion.div>

        <motion.h2
          className="text-2xl md:text-4xl lg:text-6xl font-lastica text-white leading-[1.1] mb-4 uppercase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          CRAFTING <span className="text-primary italic">DIGITAL</span> <br />
        </motion.h2>
          <span
            className="spotlight-header font-mono block text-3xl md:text-5xl mt-2"
            data-text="SUCCESS STORIES"
          >
            SUCCESS STORIES
          </span>

        <motion.p
          className=" max-w-2xl text-base md:text-lg text-white/60 font-raleway font-medium leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Explore our portfolio of high-performance applications and stunning designs
          that have helped businesses scale and stand out.
        </motion.p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 border ${activeCategory === category.id
              ? "bg-primary text-black border-primary shadow-[0_0_20px_rgba(45,175,167,0.4)]"
              : "bg-transparent text-white/60 border-white/10 hover:border-primary/50 hover:text-primary"
              }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative h-[450px] sm:h-[550px] md:h-[650px] lg:h-[700px] rounded-2xl overflow-hidden bg-[#0F1B1B] border border-white/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Image + Fancybox */}
              <div className="relative w-full h-full overflow-hidden">
                <a
                  href={product.thumbnail}
                  data-fancybox="projects"
                  data-caption={product.title}
                  className="block w-full h-full"
                >
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>


              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/images/restaurant3-opt.jpg",
    category: "web",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/images/restaurant3-opt.jpg",
    category: "saas",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/images/restaurant3-opt.jpg",
    category: "graphics",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/images/restaurant3-opt.jpg",
    category: "web",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/images/restaurant3-opt.jpg",
    category: "saas",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/images/restaurant3-opt.jpg",
    category: "graphics",
  },
];