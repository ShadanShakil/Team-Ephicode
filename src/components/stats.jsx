"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { useInView, useMotionValue, useSpring, motion } from "framer-motion"

function AnimatedNumber({ value }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2500, bounce: 0.1 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest)
      }
    })
  }, [springValue])

  return <span ref={ref} />
}

const stats = [
  { value: 12, suffix: "+", unit: "years", sublabel: "Agency history" },
  { value: 150, suffix: "+", unit: "", sublabel: "Projects delivered" },
  { value: 100, suffix: "+", unit: "", sublabel: "Rockstar staff" },
]

export function Stats() {
  return (
    <section className="py-20 md:py-28 lg:py-36 px-5 md:px-10 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12 md:mb-16 lg:mb-20"
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
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-border/50">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.sublabel}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
              className="flex flex-col gap-2 md:px-8 lg:px-12 first:pl-0"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-medium text-foreground leading-none tracking-tight">
                  <AnimatedNumber value={stat.value} />
                  {stat.suffix}
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
            </motion.div>
          ))}
        </div>

        {/* Bottom link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-10 md:mt-14"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Our work
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
