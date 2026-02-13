"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const awards = [
  { year: "2024", title: "Webby Awards Agency of the Year" },
  { year: "2024", title: "Best Mobile App Awards" },
  { year: "2024", title: "Awwwards" },
  { year: "2024", title: "Clutch Top Agencies" },
]

export function Awards() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-5 md:px-10 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Top pill link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-10"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-full text-[13px] text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            About us
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10 md:mb-14"
        >
          <h2 className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] font-medium leading-[1.1] text-foreground">
            Pushing boundaries.
            <br />
            Getting recognition.
          </h2>
        </motion.div>

        {/* Awards cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + (i * 0.1) }}
              className="group bg-card border border-border/60 rounded-xl p-5 md:p-6 hover:border-accent/30 transition-colors duration-500 cursor-default"
            >
              <span className="inline-block text-[11px] text-accent font-mono bg-accent/10 px-2.5 py-1 rounded-full">
                {award.year}
              </span>
              <h3 className="mt-3 text-sm md:text-base font-medium text-foreground leading-snug">
                {award.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
