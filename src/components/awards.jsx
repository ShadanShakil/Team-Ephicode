"use client"

import { ArrowUpRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const awards = [
  { year: "2024", title: "Webby Awards Agency of the Year" },
  { year: "2024", title: "Best Mobile App Awards" },
  { year: "2024", title: "Awwwards" },
  { year: "2024", title: "Clutch Top Agencies" },
]

export function Awards() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section className="py-16 md:py-24 lg:py-32 px-5 md:px-10 lg:px-16" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        {/* Top pill link */}
        <div
          className={`mb-8 md:mb-10 transition-all duration-700 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-full text-[13px] text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            About us
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Section heading */}
        <div
          className={`mb-10 md:mb-14 transition-all duration-700 delay-100 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] font-medium leading-[1.1] text-foreground">
            Pushing boundaries.
            <br />
            Getting recognition.
          </h2>
        </div>

        {/* Awards cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {awards.map((award, i) => (
            <div
              key={award.title}
              className={`group bg-card border border-border/60 rounded-xl p-5 md:p-6 hover:border-accent/30 transition-all duration-500 cursor-default ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <span className="inline-block text-[11px] text-accent font-mono bg-accent/10 px-2.5 py-1 rounded-full">
                {award.year}
              </span>
              <h3 className="mt-3 text-sm md:text-base font-medium text-foreground leading-snug">
                {award.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
