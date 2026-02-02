"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScrollEffect = () => {
      const currentScrollY = window.scrollY;

      // Determine visibility based on scroll direction
      // Hide when scrolling down and not at the very top
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setScrolled(currentScrollY > 50);
      lastScrollY.current = currentScrollY;
    };

    // Initial check to set correct states on load
    handleScrollEffect();

    window.addEventListener("scroll", handleScrollEffect, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollEffect);
  }, []);

  const navItems = [
    { name: "Home", href: "/", isPage: true },
    { name: "Services", href: "/services", isPage: true },
    { name: "Projects", href: "/projects", isPage: true },
    { name: "Packages", href: "/pricing", isPage: true },
    { name: "About", href: "/about", isPage: true },
    { name: "Contact", href: "/contact", isPage: true },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full transition-all duration-500 ease-out !z-[99999] ${isVisible || mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        } ${scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/20 py-4"
          : "bg-transparent py-6"
        }`}
    >
      <div className="min-w-7xl px-4 md:px-24 pt-3">

        <div className="flex items-center justify-between">
          {/* Logo Section - Two Logos as per reference */}
          {/* Logo Section - Two Logos as per reference */}
          <Link href="/" className="flex items-center gap-4 group  ">
            {/* Q Icon Logo */}
            <div className="relative h-12 w-12">
              <Image
                src="logos/Dark-theme/light theme logo.png"
                alt="Quadgentics Q Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>

            {/* QUADGENTICS Text Logo */}
            {/* QUADGENTICS Text Logo - Dynamic based on background */}
            <div className="hidden sm:block">
              <Image
                src={scrolled ? "/logos/Mockup/name.png" : "/logos/Dark-theme/WhiteName.png"}
                alt="Quadgentics Text"
                width={250}
                height={50}
                className="object-contain z-50"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (!item.isPage && item.href.startsWith('#')) {
                    handleScroll(e, item.href);
                  }
                }}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${scrolled
                  ? "text-foreground hover:text-primary"
                  : "text-secondary hover:text-white"
                  }`}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
            <div className="ml-4">
              <Link href="/contact">
                <Button
                  className={`relative overflow-hidden group ${scrolled
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                    }`}
                >
                  <span className="relative z-10 px-4">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-foreground" : "bg-white"
                  } ${mobileMenuOpen ? "rotate-45 top-2" : "rotate-0 top-0"}`}
              />
              <span
                className={`absolute w-6 h-0.5 top-2 transition-all duration-300 ${scrolled ? "bg-foreground" : "bg-white"
                  } ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute w-6 h-0.5 transition-all duration-300 ${scrolled ? "bg-foreground" : "bg-white"
                  } ${mobileMenuOpen ? "-rotate-45 top-2" : "rotate-0 top-4"}`}
              />
            </div>
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed inset-0 z-40 md:hidden"
              >
                <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
                <nav className="relative h-full flex flex-col items-center justify-center space-y-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        if (!item.isPage && item.href.startsWith('#')) {
                          handleScroll(e, item.href);
                        }
                        setMobileMenuOpen(false);
                      }}
                      className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button className="mt-8 bg-primary hover:bg-primary/90 text-white px-8">
                      Get Started
                    </Button>
                  </Link>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
