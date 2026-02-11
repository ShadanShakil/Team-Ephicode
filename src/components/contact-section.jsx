"use client"

import { ArrowUpRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function ContactSection() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section className="py-20 md:py-28 lg:py-36 px-5 md:px-10 lg:px-16" id="contact" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <div className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] font-medium leading-[1.05] text-foreground tracking-tight">
            {"Let's talk "}
            <span className="text-accent inline-block animate-pulse">--</span>
          </h2>
          <p className="mt-4 md:mt-6 text-sm md:text-base text-muted-foreground">
            {"We'd love to hear about your project"}
          </p>
          <a
            href="#"
            className="group mt-8 md:mt-10 inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full text-sm md:text-base font-medium hover:brightness-110 transition-all"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
