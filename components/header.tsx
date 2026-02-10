"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Search, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScrollEffect = () => {
      const currentScrollY = window.scrollY;

      // Determine visibility based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setScrolled(currentScrollY > 50);
      lastScrollY.current = currentScrollY;
    };

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
    if (href.startsWith('#')) {
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
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed w-full transition-all duration-500 ease-out !z-[99999] ${isVisible || mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          } ${scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/20 py-4"
            : "bg-transparent py-6"
          }`}
      >
        <div className="min-w-7xl px-6 md:px-24 pt-3">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-4 group transition-transform duration-300 hover:scale-105 active:scale-95">
              {scrolled ? (
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12">
                    <Image
                      src="/logos/dark-logo.png"
                      alt="Quadgentics Q Logo"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <div className="hidden sm:block">
                    <Image
                      src="/logos/Mockup/name.png"
                      alt="Quadgentics Text"
                      width={250}
                      height={50}
                      className="object-contain z-50"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12">
                    <Image
                      src="/logos/Dark-theme/light theme logo.png"
                      alt="Quadgentics Q Logo"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <div className="hidden sm:block">
                    <Image
                      src="/logos/Dark-theme/WhiteName.png"
                      alt="Quadgentics Text"
                      width={250}
                      height={50}
                      className="object-contain z-50"
                    />
                  </div>
                </div>
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`relative px-4 py-2 transition-all duration-300 group ${scrolled ? "text-foreground" : "text-white/80"}`}
                >
                  <h2 className="navbar-header-span font-medium">{item.name}</h2>
                  <motion.span
                    className="absolute bottom-1 left-4 right-4 h-[2px] bg-primary origin-center"
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
                      ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 scale-110"
                      : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                      }`}
                  >
                    <span className="relative z-10 px-4">Get Started</span>
                  </Button>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-[100000] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className={`w-6 h-0.5 transition-colors duration-300 ${mobileMenuOpen ? "bg-white" : scrolled ? "bg-foreground" : "bg-white"}`}
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`w-6 h-0.5 transition-colors duration-300 ${mobileMenuOpen ? "bg-white" : scrolled ? "bg-foreground" : "bg-white"}`}
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className={`w-6 h-0.5 transition-colors duration-300 ${mobileMenuOpen ? "bg-white" : scrolled ? "bg-foreground" : "bg-white"}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Move outside header to fix visibility/clipping */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 250 }}
            className="fixed inset-0 z-[99999] lg:hidden bg-[#0F111A] overflow-hidden flex flex-col pt-24 px-8"
          >
            {/* Header Mirror for Mobile Menu */}
            <div className="absolute top-0 left-0 w-full p-8 flex items-center justify-between border-b border-white/5 bg-[#0F111A]">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 relative">
                  <Image src="/logos/Dark-theme/light theme logo.png" alt="Q" fill className="object-contain" />
                </div>
                <div className="h-6 w-32 relative">
                  <Image src="/logos/Dark-theme/WhiteName.png" alt="Quadgentics" fill className="object-contain" />
                </div>
              </div>

              {/* Close Button Inside Menu Overlay */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* List-based Menu (BrainBizz Style) */}
            <nav className="flex-1 w-full mt-12 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="flex items-center justify-between py-6 border-b border-white/5 group"
                  >
                    <span className={`text-sm font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${pathname === item.href ? "text-primary" : "text-white/90 group-hover:text-primary"}`}>
                      {item.name}
                    </span>
                    <ChevronRight size={14} className={`transition-all duration-300 ${pathname === item.href ? "text-primary" : "text-white/20 group-hover:text-primary group-hover:translate-x-1"}`} />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer Section */}
            <div className="pb-12 mt-auto space-y-8">
              <div className="flex items-center justify-between p-5 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-white/40 text-xs font-mono uppercase tracking-widest">Search Protocol</span>
                <Search size={16} className="text-white/40" />
              </div>

              <div className="text-center">
                <p className="text-[10px] font-mono text-white/20 tracking-[0.3em] uppercase">
                  Quadgentics Design © 2024
                </p>
              </div>
            </div>

            {/* Background Details */}
            <div className="absolute top-1/2 left-1/2 -track-x-1/2 -translate-y-1/2 w-[300%] h-[300%] bg-grid-white/[0.01] -z-10 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
