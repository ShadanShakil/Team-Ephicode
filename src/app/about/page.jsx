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
                    description="A collective of elite developers, creative rebels, and data nerds — empowering founders and enterprises with world-class digital solutions."
                    badge="Company"
                />

                <section className="px-5 md:px-10 lg:px-16 pb-20 max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                        <div>
                            <h2 className="text-2xl font-medium mb-6">Our Story</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Team Ephicode wasn't built in a boardroom — it was built in the cloud. We are a collective of elite developers, creative rebels, and data nerds who believe that location shouldn't limit innovation.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Our mission is to empower founders and enterprises with the same high-tier technical and creative resources used by the world's top 1% of brands.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-medium mb-6">Our Values</h2>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                <strong className="text-foreground">Radical Transparency.</strong> We believe in open communication and honest partnerships. You'll always know exactly where your project stands.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                <strong className="text-foreground">Technical Precision & Relentless Speed.</strong> We stay up-to-date with the latest technologies to deliver fast, robust, and beautiful products — without cutting corners.
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
