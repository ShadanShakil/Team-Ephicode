"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#" },
  { label: "Learn", href: "#" },
  { label: "Careers", href: "#careers" },
]

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      {/* Top bar - desktop only */}
      <div className="fixed top-0 left-0 right-0 z-[60] hidden lg:block">
        <div className={`transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
          <div className="flex items-center justify-between px-6 lg:px-10 xl:px-16 py-4">
            <a href="#" className="flex items-center gap-2.5 text-foreground">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="currentColor" />
                <path d="M8 9h3.5v8.5a4.5 4.5 0 009 0V9H24v8.5a8 8 0 01-16 0V9z" fill="hsl(var(--background))" />
              </svg>
            </a>

            <div className="flex items-center gap-8">
              <nav className="flex items-center gap-1">
                <a href="#about" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-full hover:bg-secondary/50">Our Company</a>
                <a href="#services" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-full hover:bg-secondary/50">Our Expertise</a>
                <a href="#work" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-full hover:bg-secondary/50">Our Work</a>
              </nav>
              <a href="#contact" className="group flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-[13px] font-medium hover:bg-foreground/90 transition-colors">
                Contact
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile nav bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] lg:hidden">
        <div className={`transition-all duration-300 ${scrolled && !isOpen ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
          <div className="flex items-center justify-between px-5 py-4">
            <a href="#" className="flex items-center text-foreground z-[70]">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="currentColor" />
                <path d="M8 9h3.5v8.5a4.5 4.5 0 009 0V9H24v8.5a8 8 0 01-16 0V9z" fill="hsl(var(--background))" />
              </svg>
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-1 z-[70] relative"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 w-6 h-[1.5px] bg-foreground transition-all duration-300 ${isOpen ? "top-[11px] rotate-45" : "top-[6px] rotate-0"}`} />
                <span className={`absolute left-0 w-6 h-[1.5px] bg-foreground transition-all duration-300 ${isOpen ? "top-[11px] -rotate-45" : "top-[16px] rotate-0"}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Full screen mobile menu */}
      <div className={`fixed inset-0 z-[55] bg-background transition-all duration-500 ease-in-out lg:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="flex flex-col justify-between h-full pt-24 pb-10 px-6">
          <nav className="flex flex-col gap-0">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[2.5rem] sm:text-5xl font-medium text-foreground py-2 hover:text-accent transition-colors"
                style={{
                  transform: isOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: isOpen ? 1 : 0,
                  transition: `all 0.4s ease ${i * 0.06}s`,
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-6" style={{ opacity: isOpen ? 1 : 0, transition: "opacity 0.5s ease 0.3s" }}>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-medium w-fit hover:bg-foreground/90 transition-colors"
            >
              Start a project
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <div className="flex items-center gap-6 pt-2">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground/60">{"© 2024 Utility"}</p>
          </div>
        </div>
      </div>
    </>
  )
}
