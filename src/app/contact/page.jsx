import { PageWrapper } from "@/components/page-wrapper"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ContactSection } from "@/components/contact-section"

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
            <PageWrapper>
                <Navbar />

                <PageHeader
                    title="Contact"
                    description="Ready to start your next project? We'd love to hear from you."
                    badge="Get in Touch"
                />

                <section className="grey-theme bg-background text-foreground">
                    <ContactSection />
                </section>

                <Footer />
            </PageWrapper>
        </main>
    )
}
