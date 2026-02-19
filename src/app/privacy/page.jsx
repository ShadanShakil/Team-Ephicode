"use client"

import { PageWrapper } from "@/components/page-wrapper"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { motion } from "framer-motion"

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
            <PageWrapper>
                <Navbar />

                <PageHeader
                    title="Privacy Policy"
                    description="Our commitment to protecting your personal data and privacy."
                    badge="Privacy"
                />

                <section className="px-5 md:px-10 lg:px-16 pb-20 md:pb-32 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-16"
                    >
                        <div className="prose prose-invert max-w-none">
                            <p className="text-sm text-muted-foreground mb-8">Effective Date: February 20, 2026</p>

                            <div className="space-y-12">
                                <div>
                                    <h2 className="text-2xl font-medium mb-4 text-foreground">1. INTRODUCTION</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Team Ephicode ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website (team-ephicode.vercel.app) or engage our digital services.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-medium mb-4 text-foreground">2. DATA WE COLLECT</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">We may collect and process the following categories of data:</p>
                                    <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
                                        <li><span className="font-medium text-foreground">Identity Data:</span> Name, job title, and company name.</li>
                                        <li><span className="font-medium text-foreground">Contact Data:</span> Email address, phone number, and billing address.</li>
                                        <li><span className="font-medium text-foreground">Project Data:</span> Information provided in project briefs, including brand assets and marketing goals.</li>
                                        <li><span className="font-medium text-foreground">Technical Data:</span> IP address, browser type, time zone settings, and operating system (collected automatically via Vercel and analytics tools).</li>
                                        <li><span className="font-medium text-foreground">Usage Data:</span> Information about how you use our website and services.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-medium mb-4 text-foreground">3. HOW WE COLLECT DATA</h2>
                                    <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
                                        <li><span className="font-medium text-foreground">Direct Interaction:</span> Information you provide by filling out forms on our site or communicating via email.</li>
                                        <li><span className="font-medium text-foreground">Automated Technologies:</span> As you interact with our site, we may automatically collect technical data about your equipment and browsing patterns using cookies and server logs.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-medium mb-4 text-foreground">4. PURPOSE OF DATA PROCESSING</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">We use your data for the following legal bases:</p>
                                    <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
                                        <li><span className="font-medium text-foreground">To Perform a Contract:</span> To deliver the web development, video editing, or marketing services you purchased.</li>
                                        <li><span className="font-medium text-foreground">Legitimate Interests:</span> To improve our website performance, respond to inquiries, and protect our site from security threats.</li>
                                        <li><span className="font-medium text-foreground">Consent:</span> To send you newsletters or promotional offers (which you can opt out of at any time).</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-medium mb-4 text-foreground">5. DATA RETENTION</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-medium mb-4 text-foreground">6. GLOBAL DATA TRANSFERS</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        As a global agency, your data may be transferred to, and processed in, countries other than the one in which you reside. We ensure that such transfers are protected by appropriate safeguards (such as Standard Contractual Clauses) to maintain the security of your information.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-medium mb-4 text-foreground">7. THIRD-PARTY DISCLOSURES</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">We do not sell your personal data. We may share data with:</p>
                                    <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
                                        <li><span className="font-medium text-foreground">Service Providers:</span> Hosting providers (Vercel), project management tools, and payment processors (Stripe/PayPal).</li>
                                        <li><span className="font-medium text-foreground">Legal Authorities:</span> If required by law or to protect our legal rights.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-medium mb-4 text-foreground">8. YOUR LEGAL RIGHTS</h2>
                                    <p className="text-muted-foreground leading-relaxed mb-4">Depending on your jurisdiction, you may have the following rights:</p>
                                    <ul className="list-disc pl-5 space-y-3 text-muted-foreground">
                                        <li><span className="font-medium text-foreground">Access:</span> Request a copy of the data we hold about you.</li>
                                        <li><span className="font-medium text-foreground">Correction:</span> Request that we fix inaccurate information.</li>
                                        <li><span className="font-medium text-foreground">Erasure:</span> Request that we delete your personal data ("Right to be Forgotten").</li>
                                        <li><span className="font-medium text-foreground">Objection:</span> Object to the processing of your data for direct marketing.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-medium mb-4 text-foreground">9. COOKIE POLICY</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Our website uses cookies to enhance user experience. You can set your browser to refuse all or some browser cookies, but note that some parts of this website may become inaccessible or not function properly.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-medium mb-4 text-foreground">10. CONTACT INFORMATION</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        If you have questions about this Privacy Policy or our data practices, please contact our Data Privacy Liaison:<br />
                                        <span className="font-medium text-foreground">Email:</span> hello@ephicode.com<br />
                                        <span className="font-medium text-foreground">Website:</span> team-ephicode.vercel.app
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                <Footer />
            </PageWrapper>
        </main>
    )
}
