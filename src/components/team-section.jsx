"use client"

import { useInView } from "@/hooks/use-in-view"

const team = [
    { name: "Sarah Jenkins", role: "CEO & Founder", image: "bg-slate-300" },
    { name: "David Chen", role: "Chief Technology Officer", image: "bg-stone-300" },
    { name: "Maya Patel", role: "Head of Design", image: "bg-zinc-300" },
    { name: "James Wilson", role: "VP of Engineering", image: "bg-neutral-300" },
    { name: "Elena Rodriguez", role: "Product Strategy Lead", image: "bg-gray-300" },
    { name: "Michael Kim", role: "Creative Director", image: "bg-slate-400" },
]

export function TeamSection() {
    const { ref, isInView } = useInView(0.1)

    return (
        <section className="py-20 md:py-32 px-5 md:px-10 lg:px-16" ref={ref}>
            <div className="max-w-[1400px] mx-auto">
                <div className={`mb-16 md:mb-24 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <span className="text-[13px] text-accent uppercase tracking-[0.15em] font-medium block mb-6">
                        Our Team
                    </span>
                    <h2 className="text-3xl md:text-5xl font-medium leading-[1.1] max-w-3xl text-balance">
                        Meet the people behind the products.
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-x-8 md:gap-y-12">
                    {team.map((member, i) => (
                        <div
                            key={member.name}
                            className={`group transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                            style={{ transitionDelay: `${(i + 1) * 80}ms` }}
                        >
                            <div className={`aspect-[4/5] w-full rounded-2xl mb-6 overflow-hidden ${member.image} relative`}>
                                {/* Placeholder image overlay */}
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
