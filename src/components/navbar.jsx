"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Learn", href: "/services" },
  { label: "Careers", href: "/careers" },
]

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/ephicode" },
  { label: "Twitter", href: "https://twitter.com/ephicode" },
  { label: "Instagram", href: "https://instagram.com/ephicode" },
]

const menuVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3, delay: 0.3 } }
}

const linkVariants = {
  initial: { y: 20, opacity: 0 },
  animate: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }),
  exit: { y: 20, opacity: 0, transition: { duration: 0.2 } }
}

const contentVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.4 } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
}

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
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[60] hidden lg:block transition-colors duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <div className="flex items-center justify-between px-6 lg:px-10 xl:px-16 py-4">
            <Link href="/" className="flex items-center gap-2.5 text-foreground">
              <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
            </Link>

            <div className="flex items-center gap-8">
              <nav className="flex items-center gap-1">
                <Link href="/about" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-full hover:bg-secondary/50">Our Company</Link>
                <Link href="/services" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-full hover:bg-secondary/50">Our Expertise</Link>
                <Link href="/work" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-full hover:bg-secondary/50">Our Work</Link>
                <Link href="/insights" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-full hover:bg-secondary/50">Insights</Link>
                <Link href="/careers" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-full hover:bg-secondary/50">Careers</Link>
              </nav>
              <Link href="/contact" className="group flex items-center gap-2 bg-foreground text-background px-5 py-2.5 rounded-full text-[13px] font-medium hover:bg-foreground/90 transition-colors">
                Contact
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile nav bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] lg:hidden">
        <div className={`transition-all duration-300 ${scrolled && !isOpen ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
          <div className="flex items-center justify-between px-5 py-4">
            <Link href="/" className="flex items-center text-foreground z-[70]">
              <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
            </Link>
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[55] bg-background lg:hidden"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex flex-col justify-between h-full pt-28 pb-10 px-6">
              <nav className="flex flex-col gap-0">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    custom={i}
                    variants={linkVariants}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-[2.5rem] sm:text-5xl font-medium text-foreground py-2 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="flex flex-col gap-6"
                variants={contentVariants}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-medium w-fit hover:bg-foreground/90 transition-colors"
                >
                  Start a project
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <div className="flex items-center gap-6 pt-2">
                  {socialLinks.map((link) => (
                    <a key={link.label} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground/60">{"© 2025 Ephicode"}</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
