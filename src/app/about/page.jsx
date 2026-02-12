import { PageWrapper } from "@/components/page-wrapper"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Stats } from "@/components/stats"
import { Awards } from "@/components/awards"
import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-section"
import { TeamSection } from "@/components/team-section"

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
            <PageWrapper>
                <Navbar />

                <PageHeader
                    title="About Us"
                    description="We are a team of designers, engineers, and strategists passionate about building digital products that matter."
                    badge="Company"
                />

                <section className="px-5 md:px-10 lg:px-16 pb-20 max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                        <div>
                            <h2 className="text-2xl font-medium mb-6">Our Philosophy</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                We believe that great software is born from a deep understanding of the problem space and a relentless focus on the user experience. We don't just build apps; we build businesses.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Our process is collaborative, transparent, and iterative. We work closely with our clients to ensure that we are always aligned on the vision and the goals.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-medium mb-6">Our Culture</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                We are a remote-first company with a global team. We value diversity, inclusion, and a healthy work-life balance. We believe that happy people make better software.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                We are constantly learning and evolving. We stay up-to-date with the latest technologies and best practices to ensure that we are delivering the best possible solutions to our clients.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-background text-foreground">
                    <TeamSection />
                </section>

                <section className="light-theme bg-background text-foreground">
                    <Stats />
                </section>

                <section className="bg-background text-foreground">
                    <Testimonials />
                </section>

                <section className="light-theme bg-background text-foreground">
                    <Awards />
                </section>

                <section className="grey-theme bg-background text-foreground">
                    <ContactSection />
                </section>

                <Footer />
            </PageWrapper>
        </main>
    )
}
