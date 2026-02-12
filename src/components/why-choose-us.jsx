"use client"

import { useInView } from "@/hooks/use-in-view"
import { Check } from "lucide-react"

const benefits = [
    {
        title: "Client-Centric Approach",
        description: "We prioritize your business goals and user needs above all else. Your success is our success."
    },
    {
        title: "Agile Methodology",
        description: "We work in sprints to deliver value quickly and adapt to changing requirements."
    },
    {
        title: "Top-Tier Talent",
        description: "Our team consists of senior engineers, designers, and strategists with years of experience."
    },
    {
        title: "Transparency",
        description: "We believe in open communication. You'll always know the status of your project."
    },
    {
        title: "Innovation",
        description: "We stay ahead of the curve, leveraging the latest technologies to solve complex problems."
    },
    {
        title: "End-to-End Support",
        description: "From concept to launch and beyond, we are with you every step of the way."
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
