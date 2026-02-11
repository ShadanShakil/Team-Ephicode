"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const testimonials = [
  {
    quote:
      "The biggest difference between Utility and other shops we've worked with is their agility and dedication. We've thrown them a lot of curveballs, and they've always managed to figure out a solution.",
    name: "John Doe",
    title: "CEO & Founder",
  },
  {
    quote:
      "Working with Utility was a standout experience. They took the time to truly understand our customers, and their preparation showed from day one. What really set them apart was their leadership team - best in class.",
    name: "Ryan Safarian",
    title: "CTO",
  },
  {
    quote:
      "The biggest difference between Utility and other shops we've worked with is their agility and dedication. We've thrown them a lot of curveballs, and they've always managed to figure out a solution.",
    name: "Shannon Jones",
    title: "Director, Experiential",
  },
  {
    quote:
      "Utility has been an integral part of our operations. They're an integrated extension of our team, bringing valuable points of view. Few partners we recommend without reservation, we're proud to do so with Utility.",
    name: "Scott Perkins",
    title: "CEO & Founder",
  },
  {
    quote:
      "Building our own product after coming from SaaS was daunting, but knowing that tech is fully under control with Utility allows us to focus on scaling with confidence.",
    name: "Allie Sallberg",
    title: "CMO",
  },
  {
    quote:
      "Utility has been with GIA for almost three years, and they've been an exceptional delivery partner as we ventured into mobile and AI-integrated solutions.",
    name: "Mike Koyle",
    title: "VP, Product",
  },
  {
    quote:
      "Utility is now our long-term product development partner. We couldn't have re-launched our robust new tech offerings to customers without them.",
    name: "Cale Genenbacher",
    title: "CEO & Founder",
  },
]

export function Testimonials() {
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

  useEffect(() => {
    checkScroll()
  }, [checkScroll])

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const cardWidth =
      window.innerWidth < 768
        ? 300
        : window.innerWidth < 1024
          ? 380
          : 430
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth - 20 : cardWidth + 20,
      behavior: "smooth",
    })
    setTimeout(checkScroll, 400)
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Header with arrows */}
      <div className="px-5 md:px-10 lg:px-16 max-w-[1400px] mx-auto">
        <div
          className={`flex items-end justify-between mb-8 md:mb-12 transition-all duration-700 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div />
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-foreground hover:border-accent hover:text-accent transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-foreground hover:border-accent hover:text-accent transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 md:gap-5 overflow-x-auto hide-scrollbar pl-5 md:pl-10 lg:pl-16 pr-5 md:pr-10 pb-2"
      >
        {testimonials.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className={`flex-shrink-0 w-[290px] md:w-[370px] lg:w-[420px] bg-card border border-border/60 rounded-2xl p-6 md:p-7 lg:p-8 flex flex-col justify-between min-h-[280px] md:min-h-[320px] transition-all duration-700 ease-out ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${Math.min(i, 4) * 80}ms` }}
          >
            <div>
              {/* Quote icon */}
              <svg
                width="28"
                height="20"
                viewBox="0 0 28 20"
                fill="none"
                className="text-accent/20 mb-4"
              >
                <path
                  d="M0 20V11.2C0 7.68 0.82 4.86 2.46 2.74C4.1 0.62 6.7 -0.44 10.2 -0.44V4.2C8.5 4.2 7.2 4.82 6.3 6.06C5.4 7.3 4.95 8.96 4.95 11.02H10.2V20H0ZM17.2 20V11.2C17.2 7.68 18.02 4.86 19.66 2.74C21.3 0.62 23.9 -0.44 27.4 -0.44V4.2C25.7 4.2 24.4 4.82 23.5 6.06C22.6 7.3 22.15 8.96 22.15 11.02H27.4V20H17.2Z"
                  fill="currentColor"
                />
              </svg>
              <p className="text-[13px] md:text-sm text-foreground/85 leading-[1.75]">
                {`"${t.quote}"`}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <span className="text-[11px] font-semibold text-foreground">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="text-[13px] font-medium text-foreground">
                  {t.name}
                </p>
                <p className="text-[11px] text-muted-foreground">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
