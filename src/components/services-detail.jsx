"use client"

import { useState } from "react"
import { ArrowUpRight, Plus, Minus } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const serviceData = [
  {
    number: "01",
    title: "Technology",
    description:
      "We are a leader in building cutting-edge mobile and web applications that are AI-driven, and intuitive digital solutions. We push boundaries, solve complex challenges through products that drive real impact.",
    tags: ["Mobile App Development", "Web Development", "AI & Innovation", "Backend & Infrastructure", "Emerging Technology"],
  },
  {
    number: "02",
    title: "Experience",
    description:
      "Our best in class Product Designers and Strategists collaborate to create smart, clear product experiences that keeps people engaged through carefully crafted UX, UI and interaction design.",
    tags: ["Product Vision", "User Research", "UX Design", "Visual Design", "Design Systems"],
  },
  {
    number: "03",
    title: "Strategy",
    description:
      "We surround our clients with leaders from product, design, data, and engineering departments, with a relentless focus on product-market fit, growth potential, monetization strategies, and technical opportunities.",
    tags: ["Digital Transformation", "Product Validation", "AI Strategy", "Planning & Roadmapping", "Technical Audits"],
  },
  {
    number: "04",
    title: "Growth",
    description:
      "Our Product Managers, Data Scientists and Growth Marketers partner with clients to focus on the evolution and adoption of the product, prioritizing business goals through rapid releases, user feedback cycles, and data-driven growth marketing experimentation.",
    tags: ["Ongoing Management", "Data & Experimentation", "User Acquisition", "User Retention", "Staff Augmentation"],
  },
]

export function ServicesDetail() {
  const [openIndex, setOpenIndex] = useState(0)
  const { ref, isInView } = useInView(0.05)

  return (
    <section className="py-20 md:py-28 lg:py-36 px-5 md:px-10 lg:px-16" id="services" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-14 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <span className="text-[13px] text-accent uppercase tracking-[0.15em] font-medium">What we do</span>
            <h2 className="mt-3 text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] font-medium leading-[1.1] text-foreground text-balance">
              {"Elegant solutions built on"}
              <br className="hidden md:block" />
              {" proven methodologies."}
            </h2>
          </div>
          <a href="#" className="group inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-full text-[13px] text-foreground hover:border-accent hover:text-accent transition-colors w-fit flex-shrink-0">
            Services
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Accordion items */}
        <div className="flex flex-col">
          {serviceData.map((service, i) => {
            const isActive = openIndex === i
            return (
              <div
                key={service.number}
                className={`border-t border-border/70 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isActive ? -1 : i)}
                  className="w-full flex items-center justify-between py-5 md:py-7 text-left group"
                >
                  <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
                    <span className="text-xs md:text-sm text-accent font-mono">{service.number}</span>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-foreground group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {isActive ? (
                      <Minus className="w-4 h-4 md:w-5 md:h-5 text-accent transition-transform" />
                    ) : (
                      <Plus className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    )}
                  </div>
                </button>

                <div className={`grid transition-all duration-500 ease-in-out ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div className="pb-6 md:pb-8 pl-6 md:pl-12 lg:pl-16">
                      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                        <p className="text-[13px] md:text-sm text-muted-foreground leading-[1.7] max-w-lg">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <a
                              key={tag}
                              href="#"
                              className="group/tag inline-flex items-center gap-1.5 border border-border/70 px-3.5 py-2 rounded-full text-[12px] md:text-[13px] text-foreground/80 hover:border-accent hover:text-accent transition-colors whitespace-nowrap"
                            >
                              {tag}
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/tag:opacity-100 transition-opacity" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          <div className="border-t border-border/70" />
        </div>

        {/* Bottom services link */}
        <div className="mt-8 md:mt-10">
          <a href="#" className="group inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-full text-[13px] text-foreground hover:border-accent hover:text-accent transition-colors">
            Services
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
