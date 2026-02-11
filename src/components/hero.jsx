"use client"

import { useState, useEffect, useCallback } from "react"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const rotatingWords = [
  "Tech Ventures",
  "Digital Products",
  "World Class Apps",
  "AI Solutions",
  "Innovative Platforms",
]

export function Hero() {
  const { ref, isInView } = useInView(0.1)
  const [activeIndex, setActiveIndex] = useState(0)
  const [animState, setAnimState] = useState("visible") // "entering" | "visible" | "exiting"

  const cycle = useCallback(() => {
    setAnimState("exiting")
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % rotatingWords.length)
      setAnimState("entering")
      setTimeout(() => {
        setAnimState("visible")
      }, 50)
    }, 500)
  }, [])

  useEffect(() => {
    const interval = setInterval(cycle, 3000)
    return () => clearInterval(interval)
  }, [cycle])

  const wordStyle = () => {
    switch (animState) {
      case "entering":
        return { transform: "translateY(100%)", opacity: 0, transition: "none" }
      case "visible":
        return {
          transform: "translateY(0%)",
          opacity: 1,
          transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease",
        }
      case "exiting":
        return {
          transform: "translateY(-100%)",
          opacity: 0,
          transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease",
        }
      default:
        return {}
    }
  }

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex flex-col justify-between px-5 md:px-10 lg:px-16 pt-28 md:pt-32 lg:pt-36 pb-8 md:pb-12"
    >
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1400px] mx-auto w-full">
        {/* Main heading */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-[clamp(2.6rem,8vw,7rem)] font-medium leading-[1.05] tracking-[-0.03em] text-foreground">
            <span className="block">{"Building Today's"}</span>
            <span className="block relative h-[1.15em] overflow-hidden">
              <span
                className="absolute left-0 w-full text-accent"
                style={wordStyle()}
              >
                {rotatingWords[activeIndex]}
              </span>
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`mt-8 md:mt-10 transition-all duration-1000 delay-200 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-[520px] leading-relaxed">
            Utility crafts award-winning custom digital products driven by
            strategy, design and technology
          </p>
        </div>
      </div>

      {/* Bottom section */}
      <div
        className={`relative z-10 max-w-[1400px] mx-auto w-full transition-all duration-1000 delay-500 ease-out ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 pt-8 border-t border-border/40">
          <p className="text-xs md:text-[13px] text-muted-foreground max-w-md leading-relaxed">
            We create elegant design, intuitive user experiences, and scalable
            technology for our client partners that transforms the way humans
            interact with their brand.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-3.5 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors w-fit flex-shrink-0"
          >
            Work with us
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1">
        <span className="text-[10px] text-muted-foreground/40 uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-muted-foreground/40 animate-bounce" />
      </div>
    </section>
  )
}
