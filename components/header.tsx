"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Services", href: "#services-section" },
    { name: "About", href: "#about-section" },
    { name: "Contact", href: "#contact-section" },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`w-full py-4 px-6 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/80 border-b border-primary/20 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-foreground text-xl font-tech font-bold">
              <span className="text-primary">&lt;</span>
              Quadgentics
              <span className="text-primary">/&gt;</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="relative text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg font-tech transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                <span className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://vercel.com/home" target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <Button className="btn-tech bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-tech font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
              Try for Free
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
