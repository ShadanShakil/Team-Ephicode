import { PageWrapper } from "@/components/page-wrapper"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ContactSection } from "@/components/contact-section"
import { ArrowUpRight } from "lucide-react"

const articles = [
    {
        title: "The Future of Mobile App Development in 2026",
        category: "Technology",
        date: "Feb 12, 2026",
        image: "bg-blue-900"
    },
    {
        title: "How to Build a Scalable Design System",
        category: "Design",
        date: "Jan 28, 2026",
        image: "bg-purple-900"
    },
    {
        title: "Why User Experience is Key to Retention",
        category: "Strategy",
        date: "Jan 15, 2026",
        image: "bg-emerald-900"
    },
    {
        title: "Navigating the App Store Review Process",
        category: "Development",
        date: "Dec 10, 2025",
        image: "bg-orange-900"
    },
]

export default function InsightsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
            <PageWrapper>
                <Navbar />

                <PageHeader
                    title="Insights"
                    description="Thoughts, ideas, and stories from our team."
                    badge="Blog"
                />

                <section className="px-5 md:px-10 lg:px-16 pb-20 md:pb-32 max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {articles.map((article, i) => (
                            <a
                                key={i}
                                href="#"
                                className="group block"
                            >
                                <div className={`aspect-video w-full rounded-2xl mb-6 ${article.image} opacity-80 group-hover:opacity-100 transition-opacity`} />
                                <div className="flex items-center gap-3 text-xs font-medium text-accent mb-3 uppercase tracking-wider">
                                    <span>{article.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-accent" />
                                    <span>{article.date}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{article.title}</h3>
                                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                    Read Article
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </a>
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
