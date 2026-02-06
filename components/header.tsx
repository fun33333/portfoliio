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
          <Link href="/" className="flex items-center gap-4 group transition-transform duration-300 hover:scale-105 active:scale-95">
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
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (!item.isPage && item.href.startsWith('#')) {
                    handleScroll(e, item.href);
                  }
                }}
                className={`relative px-4 py-2 transition-all duration-300 group ${scrolled
                  ? "text-foreground"
                  : "text-white/80"
                  }`}
              >
                <h2 className="navbar-header-span">{item.name}</h2>

                {/* Elegant Underline Hover Effect */}
                <motion.span
                  className="absolute bottom-1 left-0 w-full h-[2px] bg-primary origin-center"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />

              </Link>
            ))}
            <div className="ml-4">
              <Link href="/contact">
                <Button
                  className={`relative overflow-hidden group transition-transform duration-300 hover:scale-105 active:scale-95 ${scrolled
                    ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
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
            className="lg:hidden relative z-[100] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className={`w-6 h-0.5 transition-colors duration-300 ${scrolled || mobileMenuOpen ? "bg-foreground" : "bg-white"
                }`}
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`w-6 h-0.5 transition-colors duration-300 ${scrolled || mobileMenuOpen ? "bg-foreground" : "bg-white"
                }`}
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className={`w-6 h-0.5 transition-colors duration-300 ${scrolled || mobileMenuOpen ? "bg-foreground" : "bg-white"
                }`}
            />
          </button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[90] lg:hidden bg-background/95 backdrop-blur-2xl"
              >
                <div className="absolute inset-0 bg-grid-white/[0.02]" />
                <nav className="relative h-full flex flex-col items-center justify-center px-6">
                  <div className="flex flex-col items-center space-y-6 w-full">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <Link
                          href={item.href}
                          onClick={(e) => {
                            if (!item.isPage && item.href.startsWith('#')) {
                              handleScroll(e, item.href);
                            }
                            setMobileMenuOpen(false);
                          }}
                          className="text-3xl font-lastica uppercase tracking-tight text-foreground transition-all duration-300 text-center block group"
                        >
                          <motion.span
                            whileHover={{ scale: 1.1, color: "var(--primary)" }}
                            className="inline-block transition-colors"
                          >
                            {item.name}
                          </motion.span>
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * navItems.length }}
                      className="pt-8 w-full max-w-[280px]"
                    >
                      <Link
                        href="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full"
                      >
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-7 rounded-2xl shadow-xl shadow-primary/20">
                          Get Started
                        </Button>
                      </Link>
                    </motion.div>
                  </div>

                  {/* Mobile Footer Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-10 left-0 right-0 text-center"
                  >
                    <p className="text-muted-foreground text-sm font-mono tracking-widest uppercase">
                      Quadgentics &copy; 2024
                    </p>
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
