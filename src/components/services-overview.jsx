"use client"

import { ArrowUpRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const services = [
  {
    label: "Tech Development",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: "Product Design",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    label: "AI Solutions",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L12 22" />
        <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
        <path d="M5 10c0 2.5 2 4 4 5.5" />
        <path d="M19 10c0 2.5-2 4-4 5.5" />
      </svg>
    ),
  },
  {
    label: "Growth Marketing",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    label: "Digital Transformation",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
]

export function ServicesOverview() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section className="py-20 md:py-28 lg:py-36 px-5 md:px-10 lg:px-16" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <div className={`transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-2xl md:text-[2rem] lg:text-[2.5rem] font-medium leading-[1.2] max-w-3xl text-balance text-foreground">
            Drawing on decades of expertise, Utility builds new products with innovative client partners.
          </h2>
        </div>

        <div className="mt-10 md:mt-14 lg:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {services.map((service, i) => (
            <div
              key={service.label}
              className={`group flex flex-col gap-5 p-5 md:p-6 rounded-xl border border-border/70 bg-card/50 hover:border-accent/40 hover:bg-card transition-all duration-500 cursor-pointer ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <div className="text-accent">{service.icon}</div>
              <span className="text-[13px] md:text-sm font-medium text-foreground">{service.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-10">
          <a
            href="#services"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all services
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
