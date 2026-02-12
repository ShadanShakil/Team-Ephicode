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

const enterpriseCases = [
  { name: "Airbnb", description: "Creating global connections", color: "#FF5A5F" },
  { name: "Forbes", description: "Digitizing a media brand", color: "#0F1F3C" },
  { name: "Jenny Craig", description: "Seamless health management", color: "#7B2D8E" },
  { name: "Care.com", description: "Re-imagining the caretaker search", color: "#006B5A" },
  { name: "Tracy Anderson", description: "Transforming a fitness pioneer", color: "#C4A35A" },
  { name: "GIA", description: "Digitizing diamond authentication", color: "#1A1A2E" },
  { name: "South Street Securities", description: "Digitizing financial trading", color: "#2C3E50" },
  { name: "Buzzfeed", description: "Personalized digital storytelling", color: "#EE3322" },
  { name: "Bleacher Report", description: "Interactive and social trivia", color: "#0D1117" },
  { name: "Coca-Cola", description: "Gamifying mobile through AR", color: "#E61E2A" },
  { name: "NYC Health + Hospitals", description: "Solving asthma monitoring", color: "#00508F" },
  { name: "Roundtable", description: "Content delivery for arts leader", color: "#2D2D2D" },
  { name: "Samsung", description: "Gaming with a hip hop icon", color: "#1428A0" },
  { name: "NBA", description: "Homebase for global tournament", color: "#1D428A" },
  { name: "Women Deliver", description: "Leading global women's health", color: "#E8336D" },
  { name: "SirenMD", description: "Telemedicine for athlete care", color: "#00B4D8" },
  { name: "Stride Gum", description: "Global event gamified", color: "#2ECC71" },
]

const ventureCases = [
  { name: "pliability", description: "Leveling up mobility training", color: "#1B4332" },
  { name: "LOGE Camps", description: "Digitizing the guest experience", color: "#5C4033" },
  { name: "MOVES", description: "Custom fitness built by experts", color: "#E67E22" },
  { name: "Snack", description: "AI-driven sports highlights", color: "#8E44AD" },
  { name: "Carsy", description: "Frictionless car rentals", color: "#3498DB" },
  { name: "Counslr", description: "Accessible college counseling", color: "#27AE60" },
  { name: "Reconstruction", description: "World-class remote learning", color: "#E74C3C" },
  { name: "Football Genius", description: "Play-by-play game predictions", color: "#2C3E50" },
  { name: "Fivestar Training", description: "Star athlete workouts for all", color: "#F39C12" },
  { name: "TOOR", description: "Decentralized house hunting", color: "#1ABC9C" },
  { name: "TapStats", description: "AI-powered sports data", color: "#9B59B6" },
  { name: "Kismet", description: "Unbiased dating & matchmaking", color: "#E91E63" },
  { name: "Areena", description: "Hyper-local corporate philanthropy", color: "#00BCD4" },
  { name: "Kickwheel", description: "Connecting college applicants", color: "#FF9800" },
  { name: "Dearduck", description: "Micro-gifting and personalization", color: "#4CAF50" },
  { name: "AVP", description: "Gamification for pro sports league", color: "#FFC107" },
  { name: "StringFlix", description: "Collaborative memory making", color: "#673AB7" },
]

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
