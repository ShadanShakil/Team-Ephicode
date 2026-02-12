"use client"

import { useInView } from "@/hooks/use-in-view"

export function PageHeader({ title, description, badge }) {
    const { ref, isInView } = useInView(0.1)

    return (
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-5 md:px-10 lg:px-16 max-w-[1400px] mx-auto" ref={ref}>
            <div className={`transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                {badge && (
                    <span className="inline-block mb-4 text-[13px] md:text-sm font-medium text-accent tracking-wider uppercase">
                        {badge}
                    </span>
                )}
                <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-bold leading-[1.1] md:leading-[1.1] tracking-tight text-foreground text-balance">
                    {title}
                </h1>
                {description && (
                    <p className="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-balance">
                        {description}
                    </p>
                )}
            </div>
        </section>
    )
}
