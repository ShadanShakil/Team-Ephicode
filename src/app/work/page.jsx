import { PageWrapper } from "@/components/page-wrapper"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { CaseStudyGrid } from "@/components/case-study-grid"
import { AboutCta } from "@/components/about-cta"
import { enterpriseCases, ventureCases } from "@/data/cases"
import { ProcessSection } from "@/components/process-section"
import { ClientsGrid } from "@/components/clients-grid"

export default function WorkPage() {
    const allCases = [...enterpriseCases, ...ventureCases]

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
            <PageWrapper>
                <Navbar />

                <PageHeader
                    title="Our Work"
                    description="We partner with forward-thinking companies to design and build digital products that people love."
                    badge="Portfolio"
                />

                <CaseStudyGrid cases={allCases} />

                <section className="bg-secondary/10 text-foreground">
                    <ProcessSection />
                </section>

                <section className="bg-background text-foreground">
                    <ClientsGrid />
                </section>

                <section className="bg-background text-foreground">
                    <AboutCta />
                </section>

                <Footer />
            </PageWrapper>
        </main>
    )
}
