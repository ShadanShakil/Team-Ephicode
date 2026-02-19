import { notFound } from "next/navigation"
import { PageWrapper } from "@/components/page-wrapper"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ContactSection } from "@/components/contact-section"
import { servicesData } from "@/data/services-data"
import { CheckCircle2, ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }))
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params
    const service = servicesData.find((s) => s.slug === resolvedParams.slug)
    if (!service) return {}
    return {
        title: `${service.title} | Ephicode`,
        description: service.description,
    }
}

export default async function ServicePage({ params }) {
    const resolvedParams = await params
    const service = servicesData.find((s) => s.slug === resolvedParams.slug)
    const otherServices = servicesData.filter((s) => s.slug !== resolvedParams.slug).slice(0, 3)

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

                {/* Features + CTA */}
                <section className="px-5 md:px-10 lg:px-16 pb-16 md:pb-24 max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                        {/* Features list */}
                        <div className="lg:col-span-2">
                            <span className="text-[13px] text-accent uppercase tracking-[0.15em] font-medium">What's included</span>
                            <h2 className="mt-3 text-2xl md:text-3xl font-medium mb-8">Key Capabilities</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-base text-muted-foreground p-5 rounded-xl border border-border/50 bg-card/30 hover:border-accent/40 hover:bg-card transition-all duration-300">
                                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Sticky CTA card */}
                        <div className="bg-card border border-border/60 rounded-2xl p-8 sticky top-32">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Ready to get started?</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                Let's discuss how {service.title} can drive measurable results for your business. Our global strategy team responds within 12 hours.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center w-full gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full text-sm font-medium hover:brightness-110 transition-all"
                            >
                                Start a Conversation
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/services"
                                className="mt-3 inline-flex items-center justify-center w-full gap-2 border border-border/70 px-6 py-3 rounded-full text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
                            >
                                All Services
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="py-16 md:py-24 px-5 md:px-10 lg:px-16 border-t border-border/40 bg-card/30">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="mb-12 md:mb-16">
                            <span className="text-sm font-medium text-accent uppercase tracking-wider">How We Work</span>
                            <h2 className="mt-2 text-3xl md:text-4xl font-medium">Our Process</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {service.process.map((step, i) => (
                                <div key={i} className="relative">
                                    <div className="text-6xl font-bold text-border/40 mb-4 select-none leading-none">
                                        0{i + 1}
                                    </div>
                                    <div className="w-8 h-[2px] bg-accent mb-4" />
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

                {/* Other Services */}
                <section className="py-16 md:py-24 px-5 md:px-10 lg:px-16">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
                            <div>
                                <span className="text-[13px] text-accent uppercase tracking-[0.15em] font-medium">Explore More</span>
                                <h2 className="mt-2 text-2xl md:text-3xl font-medium">Other Services</h2>
                            </div>
                            <Link
                                href="/services"
                                className="group inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-full text-[13px] text-foreground hover:border-accent hover:text-accent transition-colors w-fit"
                            >
                                View All
                                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {otherServices.map((s) => (
                                <Link
                                    key={s.slug}
                                    href={`/services/${s.slug}`}
                                    className="group p-6 rounded-xl border border-border/70 bg-card/50 hover:border-accent/40 hover:bg-card transition-all duration-300"
                                >
                                    <div className="text-accent mb-4 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                                        {s.icon}
                                    </div>
                                    <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">{s.title}</h3>
                                    <p className="mt-2 text-[13px] text-muted-foreground line-clamp-2">{s.description}</p>
                                    <div className="mt-4 inline-flex items-center gap-1 text-[13px] text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                                        Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                                    </div>
                                </Link>
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
