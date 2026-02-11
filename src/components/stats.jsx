"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

function AnimatedNumber({ target, suffix = "", isInView }) {
  const [current, setCurrent] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true
    const duration = 2000
    const startTime = performance.now()

    function animate(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCurrent(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isInView, target])

  return (
    <span>
      {current}
      {suffix}
    </span>
  )
}

const stats = [
  { value: 12, suffix: "+", unit: "years", sublabel: "Agency history" },
  { value: 150, suffix: "+", unit: "", sublabel: "Projects delivered" },
  { value: 100, suffix: "+", unit: "", sublabel: "Rockstar staff" },
]

export function Stats() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section className="py-20 md:py-28 lg:py-36 px-5 md:px-10 lg:px-16" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12 md:mb-16 lg:mb-20 transition-all duration-700 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <span className="text-[13px] text-accent uppercase tracking-[0.15em] font-medium">
              {"Where we've been"}
            </span>
            <h2 className="mt-3 text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] font-medium leading-[1.1] text-foreground text-balance">
              We take pride in delivering exceptional
              <br className="hidden md:block" /> solutions that exceed
              expectations.
            </h2>
          </div>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-full text-[13px] text-foreground hover:border-accent hover:text-accent transition-colors w-fit flex-shrink-0"
          >
            Our work
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-border/50">
          {stats.map((stat, i) => (
            <div
              key={stat.sublabel}
              className={`flex flex-col gap-2 md:px-8 lg:px-12 first:pl-0 transition-all duration-700 ease-out ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="flex items-baseline gap-1">
                <span className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-medium text-foreground leading-none tracking-tight">
                  <AnimatedNumber
                    target={stat.value}
                    suffix={stat.suffix}
                    isInView={isInView}
                  />
                </span>
                {stat.unit && (
                  <span className="text-base md:text-lg text-muted-foreground ml-1.5">
                    {stat.unit}
                  </span>
                )}
              </div>
              <span className="text-[13px] text-muted-foreground">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-10 md:mt-14">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Our work
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
