import { PageWrapper } from "@/components/page-wrapper"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ContactSection } from "@/components/contact-section"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const jobs = [
    { title: "Senior Product Designer", location: "Remote", type: "Full-time" },
    { title: "Lead Frontend Engineer", location: "New York, NY", type: "Full-time" },
    { title: "Project Manager", location: "Remote", type: "Contract" },
    { title: "QA Engineer", location: "Remote", type: "Full-time" },
]

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
            <PageWrapper>
                <Navbar />

                <PageHeader
                    title="Careers"
                    description="Join our team of creators, thinkers, and builders. We are always looking for talented individuals to help us build the future."
                    badge="Join Us"
                />

                <section className="px-5 md:px-10 lg:px-16 pb-20 md:pb-32 max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 gap-4">
                        {jobs.map((job) => (
                            <Link
                                key={job.title}
                                href="/contact"
                                className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 rounded-xl border border-border/60 hover:border-accent hover:bg-card/50 transition-all duration-300"
                            >
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <span>{job.location}</span>
                                        <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                                        <span>{job.type}</span>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0 flex items-center gap-2 text-sm font-medium text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    Apply Now
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </Link>
                        ))}
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
