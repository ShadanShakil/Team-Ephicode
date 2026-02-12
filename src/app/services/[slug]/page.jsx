import { notFound } from "next/navigation"
import { PageWrapper } from "@/components/page-wrapper"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ContactSection } from "@/components/contact-section"
import { servicesData } from "@/data/services-data"
import { CheckCircle2, ArrowRight } from "lucide-react"

export function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }))
}

export default function ServicePage({ params }) {
    const service = servicesData.find((s) => s.slug === params.slug)

    if (!service) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
            <PageWrapper>
                <Navbar />

                <PageHeader
                    title={service.title}
                    description={service.description}
                    badge="Service"
                />

                <section className="px-5 md:px-10 lg:px-16 pb-16 md:pb-24 max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-medium mb-6">Key Features</h2>
                            <ul className="grid grid-cols-1 gap-4">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg text-muted-foreground p-4 rounded-xl border border-border/50 bg-card/30">
                                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-card border border-border/60 rounded-2xl p-8 sticky top-32">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Ready to get started?</h3>
                            <p className="text-muted-foreground mb-6">
                                Let's discuss how we can help you implement {service.title.toLowerCase()} for your business.
                            </p>
                            <a href="#contact" className="inline-flex items-center justify-center w-full gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors">
                                Start a Conversation
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </section>

                <section className="bg-secondary/20 py-16 md:py-24 px-5 md:px-10 lg:px-16">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="mb-12 md:mb-16">
                            <span className="text-sm font-medium text-accent uppercase tracking-wider">How We Work</span>
                            <h2 className="mt-2 text-3xl md:text-4xl font-medium">Our Process</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {service.process.map((step, i) => (
                                <div key={i} className="relative">
                                    <div className="text-6xl font-bold text-border/40 mb-4 select-none">
                                        0{i + 1}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                    {i < service.process.length - 1 && (
                                        <div className="hidden lg:block absolute top-8 right-0 w-[calc(100%-4rem)] h-[1px] bg-border/40 translate-x-[50%]" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="grey-theme bg-background text-foreground">
                    <ContactSection />
                </section>

                <Footer />
            </PageWrapper>
        </main>
    )
}
