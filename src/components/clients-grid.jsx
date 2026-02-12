"use client"

import { useInView } from "@/hooks/use-in-view"

const clients = [
    "Google", "Airbnb", "Spotify", "Netflix",
    "Uber", "Lyft", "Slack", "Zoom",
    "Coinbase", "Stripe", "Dropbox", "Figma",
    "Adobe", "Microsoft", "Amazon", "Apple"
]

export function ClientsGrid() {
    const { ref, isInView } = useInView(0.1)

    return (
        <section className="py-20 md:py-24 border-t border-border/40" ref={ref}>
            <div className="px-5 md:px-10 lg:px-16 max-w-[1400px] mx-auto">
                <div className={`transition-all duration-700 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    <h3 className="text-center text-lg md:text-xl font-medium text-muted-foreground mb-12">
                        Trusted by innovative teams worldwide
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {clients.map((client) => (
                            <div key={client} className="flex items-center justify-center h-12 text-2xl font-bold text-foreground/80">
                                {/* Placeholder for actual logos, using text for now */}
                                {client}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
