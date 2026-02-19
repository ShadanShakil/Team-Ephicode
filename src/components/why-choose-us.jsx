"use client"

import { useInView } from "@/hooks/use-in-view"
import { Check } from "lucide-react"

const benefits = [
    {
        title: "24/7 Digital Cycle",
        description: "Our global team ensures your project never sleeps. With distributed talent across time zones, we deliver continuous progress around the clock."
    },
    {
        title: "Future-Proof Tech",
        description: "Built on cutting-edge frameworks for unmatched speed and interaction design. We use the latest technologies so your product stays ahead of the curve."
    },
    {
        title: "ROI-Centric",
        description: "We don't just deliver assets; we deliver measurable business growth. Every decision is anchored in data and oriented toward your bottom line."
    },
    {
        title: "Radical Transparency",
        description: "We believe in open communication. You'll always know the status of your project, what's next, and why every decision was made."
    },
    {
        title: "Global Reach",
        description: "Location shouldn't limit innovation. We empower founders and enterprises worldwide with the same high-tier resources used by the top 1% of global brands."
    },
    {
        title: "End-to-End Delivery",
        description: "From concept and strategy to launch and growth — we are with you every step of the way with a unified, senior team that owns the outcome."
    }
]

export function WhyChooseUs() {
    const { ref, isInView } = useInView(0.1)

    return (
        <section className="py-20 md:py-28 px-5 md:px-10 lg:px-16 bg-card" ref={ref}>
            <div className="max-w-[1400px] mx-auto">
                <div className={`text-center max-w-3xl mx-auto mb-16 md:mb-20 transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <span className="text-[13px] text-accent uppercase tracking-[0.15em] font-medium block mb-6">
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl md:text-5xl font-medium leading-[1.1] text-balance">
                        We deliver results, not just promises.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, i) => (
                        <div
                            key={benefit.title}
                            className={`bg-background border border-border/60 p-8 rounded-2xl transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                            style={{ transitionDelay: `${(i + 1) * 80}ms` }}
                        >
                            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                                <Check className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
