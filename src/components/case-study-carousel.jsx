"use client"

import { useRef, useState, useCallback } from "react"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import Link from "next/link"

export function CaseStudyCarousel({ title, subtitle, mobileSubtitle, cases }) {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const { ref, isInView } = useInView(0.05)

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }, [])

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const cardWidth = window.innerWidth < 768 ? 260 : window.innerWidth < 1024 ? 320 : 360
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth - 16 : cardWidth + 16,
      behavior: "smooth",
    })
    setTimeout(checkScroll, 400)
  }

  return (
    <section className="py-14 md:py-20 lg:py-24" ref={ref} id="work">
      <div className="px-5 md:px-10 lg:px-16 max-w-[1400px] mx-auto">
        <div className={`flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 md:mb-12 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex-1">
            <h2 className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] font-medium leading-[1.1] text-foreground text-balance">
              {title}
            </h2>
            <p className="mt-4 text-[13px] md:text-sm text-muted-foreground max-w-md leading-relaxed hidden md:block">
              {subtitle}
            </p>
            <p className="mt-3 text-[13px] text-muted-foreground max-w-sm leading-relaxed md:hidden">
              {mobileSubtitle}
            </p>
          </div>
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-foreground hover:border-accent hover:text-accent transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-foreground hover:border-accent hover:text-accent transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scrolling cards */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 md:gap-5 overflow-x-auto hide-scrollbar pl-5 md:pl-10 lg:pl-16 pr-5 md:pr-10 pb-2"
      >
        {cases.map((item, i) => (
          <a
            key={item.name}
            href="#"
            className={`group flex-shrink-0 w-[250px] md:w-[310px] lg:w-[350px] rounded-2xl overflow-hidden transition-all duration-600 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            style={{ transitionDelay: `${Math.min(i, 5) * 60}ms` }}
          >
            <div className="aspect-[3/4] w-full relative overflow-hidden" style={{ backgroundColor: item.color }}>
              {/* Placeholder phone mockup silhouette */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[45%] h-[65%] rounded-[20px] border-2 border-white/10 bg-white/5 backdrop-blur-sm" />
              </div>
              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Arrow icon top right */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
              {/* Card content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-base md:text-lg font-semibold text-white">{item.name}</h3>
                <p className="text-[13px] text-white/60 mt-1">{item.description}</p>
                <span className="inline-block mt-3 text-[11px] text-white/40 uppercase tracking-[0.12em] font-medium">
                  Case Study
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* View All link */}
      <div className="px-5 md:px-10 lg:px-16 mt-6 md:mt-8 max-w-[1400px] mx-auto">
        <Link href="/work" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          View All
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
