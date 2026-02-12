import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { ServicesOverview } from "@/components/services-overview"
import { CaseStudyCarousel } from "@/components/case-study-carousel"
import { ServicesDetail } from "@/components/services-detail"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { Awards } from "@/components/awards"
import { AboutCta } from "@/components/about-cta"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { PageWrapper } from "@/components/page-wrapper"

import { enterpriseCases, ventureCases } from "@/data/cases"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
      <PageWrapper>
        <Navbar />

        {/* Dark Section */}
        <section className="bg-background text-foreground">
          <Hero />
        </section>

        {/* Dark Section (requested black) */}
        <section className="bg-background text-foreground">
          <Marquee />
        </section>

        {/* Light Section (requested white) */}
        <section className="light-theme bg-background text-foreground">
          <ServicesOverview />
        </section>

        {/* Dark Section (requested black) */}
        <section className="bg-background text-foreground">
          <CaseStudyCarousel
            title="Innovating With Enterprises"
            subtitle="Our work with established companies and Fortune 500 brands helps create digital solutions to solve business growth opportunities."
            mobileSubtitle="Our work with established brands helps create business growth opportunities."
            cases={enterpriseCases}
          />
        </section>

        {/* Light Section */}
        <section className="light-theme bg-background text-foreground">
          <CaseStudyCarousel
            title="Empowering New Ventures"
            subtitle="Our intimate collaborations with both emerging startups and growing ventures lead to tech solutions that match any stage companies are entering."
            mobileSubtitle="Our work with established brands helps create business growth opportunities."
            cases={ventureCases}
          />
        </section>

        {/* Dark Section */}
        <section className="bg-background text-foreground">
          <ServicesDetail />
        </section>

        {/* Light Section */}
        <section className="light-theme bg-background text-foreground">
          <Stats />
        </section>

        {/* Dark Section */}
        <section className="bg-background text-foreground">
          <Testimonials />
        </section>

        {/* Light Section */}
        <section className="light-theme bg-background text-foreground">
          <Awards />
        </section>

        {/* Dark Section */}
        <section className="bg-background text-foreground">
          <AboutCta />
        </section>

        {/* Grey Section (requested little grey instead of white) */}
        <section className="grey-theme bg-background text-foreground">
          <ContactSection />
        </section>

        <Footer />
      </PageWrapper>
    </main>
  )
}
