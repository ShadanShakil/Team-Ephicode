"use client"

import { useState } from "react"
import { ArrowUpRight, Plus, Minus } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const serviceData = [
  {
    number: "01",
    title: "Technology",
    description:
      "From MVP to Enterprise Scale. We build robust architectures that handle millions of users without breaking a sweat — custom SaaS, iOS/Android apps, e-commerce ecosystems, and API integrations that push boundaries and drive real business impact.",
    tags: ["Mobile App Development", "Web Development", "AI & Innovation", "Backend & Infrastructure", "Emerging Technology"],
  },
  {
    number: "02",
    title: "Experience",
    description:
      "Our best-in-class Product Designers and Strategists collaborate to create smart, clear product experiences. Every pixel, every interaction is crafted to keep people engaged with precision UX, UI, and motion design.",
    tags: ["Product Vision", "User Research", "UX Design", "Visual Design", "Design Systems"],
  },
  {
    number: "03",
    title: "Strategy",
    description:
      "We surround our clients with leaders across product, design, data, and engineering — with a relentless focus on product-market fit, growth potential, monetization strategies, and technical opportunities that transcend borders.",
    tags: ["Digital Transformation", "Product Validation", "AI Strategy", "Planning & Roadmapping", "Technical Audits"],
  },
  {
    number: "04",
    title: "Growth",
    description:
      "Stop guessing and start growing. Our Product Managers, Data Scientists and Growth Marketers use advanced analytics to position your brand in front of the right audience — regardless of geography — driving measurable business growth.",
    tags: ["Global SEO", "Paid Media (PPC)", "Growth Hacking", "Funnel Optimization", "User Retention"],
  },
  {
    number: "05",
    title: "Creative Post-Production",
    description:
      "We translate your brand's soul into high-impact video. Our editors and motion designers create cinematic content that converts viewers into fans — 4K editing, motion graphics, social media ads, and brand identity that stops the scroll.",
    tags: ["4K Video Editing", "Motion Graphics", "Social Media Ads", "Brand Identity", "Content Strategy"],
  },
  {
    number: "06",
    title: "Management Systems",
    description:
      "We build and implement enterprise-grade management systems that streamline your operations, automate workflows, and give your team the clarity and efficiency to scale without friction.",
    tags: ["CRM Systems", "ERP Integration", "Workflow Automation", "Business Intelligence", "Custom Dashboards"],
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
              {" proven global methodologies."}
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
