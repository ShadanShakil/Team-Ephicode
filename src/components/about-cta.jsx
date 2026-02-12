"use client"

import { ArrowUpRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import Link from "next/link"

export function AboutCta() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section className="py-10 md:py-16 lg:py-20 px-5 md:px-10 lg:px-16" id="about" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <div
          className={`bg-card border border-border/60 rounded-2xl md:rounded-3xl p-7 md:p-10 lg:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-7 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div>
            <span className="text-[13px] text-accent uppercase tracking-[0.15em] font-medium">About Us</span>
            <h2 className="mt-3 text-xl md:text-2xl lg:text-[2rem] font-medium leading-[1.2] text-foreground text-balance">
              We look for interesting challenges
              <br className="hidden md:block" /> that move people forward.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/careers"
              className="group inline-flex items-center gap-2 border border-border/70 px-5 py-2.5 rounded-full text-[13px] font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              Careers
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 border border-border/70 px-5 py-2.5 rounded-full text-[13px] font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              About Us
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
