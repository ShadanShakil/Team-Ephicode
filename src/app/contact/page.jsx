"use client"

import { PageWrapper } from "@/components/page-wrapper"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter, Github } from "lucide-react"

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

                <section className="py-20 md:py-28 lg:py-36 px-5 md:px-10 lg:px-16 overflow-hidden">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                            {/* Left Column: Info & Visuals */}
                            <div className="flex flex-col gap-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    <h2 className="text-[2.5rem] md:text-[3.5rem] font-medium leading-[1.1] tracking-tight font-inter mb-6">
                                        Let's build something <span className="text-accent italic">extraordinary</span> together.
                                    </h2>
                                    <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                                        We help ambitious brands and startups create digital products that stand out.
                                        Reach out to discuss your next project.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                    className="p-8 rounded-3xl bg-secondary/30 border border-border/50 relative overflow-hidden group"
                                >
                                    {/* Abstract background shape */}
                                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-700" />

                                    <div className="relative z-10 space-y-8">
                                        <div>
                                            <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Contact Details</h3>
                                            <div className="space-y-4">
                                                <a href="mailto:hello@ephicode.com" className="flex items-center gap-3 text-lg hover:text-accent transition-colors group/link">
                                                    <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center group-hover/link:border-accent/50 transition-colors">
                                                        <Mail className="w-4 h-4" />
                                                    </div>
                                                    hello@ephicode.com
                                                </a>
                                                <div className="flex items-center gap-3 text-lg">
                                                    <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center">
                                                        <MapPin className="w-4 h-4" />
                                                    </div>
                                                    San Francisco, CA
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Socials</h3>
                                            <div className="flex gap-4">
                                                {[
                                                    { icon: Instagram, href: "#" },
                                                    { icon: Twitter, href: "#" },
                                                    { icon: Linkedin, href: "#" },
                                                    { icon: Github, href: "#" },
                                                ].map((Social, index) => (
                                                    <a
                                                        key={index}
                                                        href={Social.href}
                                                        className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:scale-110 hover:-rotate-6 transition-all duration-300"
                                                    >
                                                        <Social.icon className="w-5 h-5" />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Column: Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            >
                                <div className="bg-card/50 backdrop-blur-sm border border-border/70 p-6 md:p-8 rounded-3xl shadow-sm">
                                    <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
                                    <ContactForm />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <Footer />
            </PageWrapper>
        </main>
    )
}
