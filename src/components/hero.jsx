"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const rotatingWords = [
  "Tech Ventures",
  "Digital Products",
  "World Class Apps",
  "AI Solutions",
  "Innovative Platforms",
]

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      className="relative min-h-[100dvh] flex flex-col justify-between px-5 md:px-10 lg:px-16 pt-28 md:pt-32 lg:pt-36 pb-8 md:pb-12 overflow-hidden"
    >
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1400px] mx-auto w-full">
        {/* Main heading */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.6rem,8vw,7rem)] font-medium leading-[1.05] tracking-[-0.03em] text-foreground"
          >
            <span className="block">{"Building Today's"}</span>
            <span className="block relative h-[1.15em] overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={index}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 w-full text-accent block [will-change:transform,opacity]"
                >
                  {rotatingWords[index]}
                </motion.span>
              </AnimatePresence>
              {/* Invisible spacer to maintain height */}
              <span className="opacity-0">{rotatingWords[0]}</span>
            </span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-10"
        >
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-[520px] leading-relaxed">
            Utility crafts award-winning custom digital products driven by
            strategy, design and technology
          </p>
        </motion.div>
      </div>

      {/* Bottom section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-[1400px] mx-auto w-full"
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
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1"
      >
        <span className="text-[10px] text-muted-foreground/40 uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-muted-foreground/40 animate-bounce" />
      </motion.div>
    </section>
  )
}
