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
    <div className="max-w-7xl mx-auto px-4 md:px-8">
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
              className="group relative h-[700px] rounded-2xl overflow-hidden bg-[#0F1B1B] border border-white/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
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
                    className="Imag"
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