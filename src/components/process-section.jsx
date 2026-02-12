"use client"

import { useInView } from "@/hooks/use-in-view"

const steps = [
    {
        number: "01",
        title: "Discover",
        description: "We start by understanding your business, your goals, and your users. We dive deep into the problem space to uncover opportunities for innovation.",
    },
    {
        number: "02",
        title: "Strategy",
        description: "We develop a comprehensive strategy that outlines the roadmap for success. This includes technical architecture, user experience design, and go-to-market planning.",
    },
    {
        number: "03",
        title: "Design",
        description: "Our design team crafts beautiful, intuitive interfaces that delight users and drive engagement. We focus on creating a seamless user journey.",
    },
    {
        number: "04",
        title: "Build",
        description: "Our engineering team brings the designs to life using the latest technologies. We build scalable, secure, and high-performance applications.",
    },
    {
        number: "05",
        title: "Launch",
        description: "We help you launch your product to the market with confidence. We handle everything from deployment to app store submission.",
    },
    {
        number: "06",
        title: "Scale",
        description: "We monitor performance, gather user feedback, and iterate to ensure your product continues to grow and evolve.",
    },
]

export function ProcessSection() {
    const { ref, isInView } = useInView(0.1)

    return (
        <section className="py-20 md:py-32 px-5 md:px-10 lg:px-16 overflow-hidden" ref={ref}>
            <div className="max-w-[1400px] mx-auto">
                <div className={`transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <span className="text-[13px] text-accent uppercase tracking-[0.15em] font-medium block mb-8">
                        Our Process
                    </span>
                    <h2 className="text-3xl md:text-5xl font-medium leading-[1.1] mb-16 md:mb-24 max-w-4xl text-balance">
                        We follow a proven methodology to deliver exceptional results.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {steps.map((step, i) => (
                        <div
                            key={step.number}
                            className={`group transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                            style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                        >
                            <div className="text-6xl md:text-8xl font-bold text-border/30 mb-6 group-hover:text-accent/20 transition-colors">
                                {step.number}
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-4">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
