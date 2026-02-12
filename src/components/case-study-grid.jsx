"use client"

import { ArrowUpRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import Link from "next/link"

export function CaseStudyGrid({ cases }) {
    const { ref, isInView } = useInView(0)

    return (
        <section className="pb-20 md:pb-32 px-5 md:px-10 lg:px-16 max-w-[1400px] mx-auto overflow-hidden" ref={ref}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {cases.map((item, i) => (
                    <Link
                        key={item.name}
                        href="#"
                        className={`group block w-full rounded-2xl overflow-hidden transition-all duration-600 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
                            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="w-5 h-5 text-white" />
                            </div>

                            {/* Card content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.name}</h3>
                                <p className="text-sm md:text-base text-white/70 leading-relaxed mb-4">{item.description}</p>
                                <div className="flex items-center gap-2">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] text-white font-medium uppercase tracking-wider">
                                        {item.name === "Airbnb" || item.name === "Forbes" ? "Enterprise" : "Venture"}
                                    </span>
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] text-white/80 font-medium uppercase tracking-wider">
                                        Mobile App
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
