import { PageWrapper } from "@/components/page-wrapper"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ServicesOverview } from "@/components/services-overview"
import { ServicesDetail } from "@/components/services-detail"
import { ContactSection } from "@/components/contact-section"
import { WhyChooseUs } from "@/components/why-choose-us"

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
            <PageWrapper>
                <Navbar />

                <PageHeader
                    title="Our Services"
                    description="From strategy to execution, we help companies build digital products that drive business results."
                    badge="Expertise"
                />

                <section className="bg-background text-foreground">
                    <ServicesOverview />
                </section>

                <WhyChooseUs />

                <section className="bg-background text-foreground border-t border-border/40">
                    <ServicesDetail />
                </section>

                <section className="grey-theme bg-background text-foreground">
                    <ContactSection />
                </section>

                <Footer />
            </PageWrapper>
        </main>
    )
}
