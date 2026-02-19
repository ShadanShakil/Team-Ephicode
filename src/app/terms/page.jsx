"use client"

import { PageWrapper } from "@/components/page-wrapper"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { motion } from "framer-motion"

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
            <PageWrapper>
                <Navbar />

                <PageHeader
                    title="Legal"
                    description="Our terms of service and privacy commitment to you."
                    badge="Policy"
                />

                <section className="px-5 md:px-10 lg:px-16 pb-20 md:pb-32 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-16"
                    >
                        {/* Terms and Conditions Section */}
                        <div className="prose prose-invert max-w-none">
                            <h2 className="text-3xl font-medium mb-8 text-foreground border-b border-border/60 pb-4">Terms and Conditions</h2>
                            <p className="text-sm text-muted-foreground mb-8">Last Updated: February 20, 2026</p>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-medium mb-3 text-foreground">1. ACCEPTANCE OF TERMS</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        By engaging Team Ephicode ("the Agency") for digital services, including but not limited to Web Development, App Engineering, Video Editing, and Marketing, the Client ("You") agrees to be bound by these Terms and Conditions.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium mb-3 text-foreground">2. SCOPE OF SERVICES</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        The Agency will perform services as defined in the specific Project Proposal or Statement of Work (SOW). Any requested changes outside the original SOW will be treated as "Scope Creep" and billed at the Agency’s standard hourly rate.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium mb-3 text-foreground">3. PAYMENT & FEES</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                        <li><span className="font-medium text-foreground">Deposit:</span> A non-refundable deposit of 50% is required to commence any project.</li>
                                        <li><span className="font-medium text-foreground">Milestones:</span> Remaining balances are due upon reaching agreed-upon milestones or prior to the transfer of final assets/launch.</li>
                                        <li><span className="font-medium text-foreground">Late Payments:</span> Invoices unpaid after 14 days will incur a 5% monthly interest fee.</li>
                                        <li><span className="font-medium text-foreground">Currency:</span> All transactions are processed in USD unless otherwise agreed.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium mb-3 text-foreground">4. INTELLECTUAL PROPERTY (IP)</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                        <li><span className="font-medium text-foreground">Ownership:</span> The Agency retains all rights, titles, and interests in any code, designs, or raw video files until final payment is received in full.</li>
                                        <li><span className="font-medium text-foreground">Transfer:</span> Upon full payment, the Client is granted a perpetual, worldwide license to use the final deliverables for their intended business purpose.</li>
                                        <li><span className="font-medium text-foreground">Portfolio Rights:</span> The Agency reserves the right to display project work in its portfolio, case studies, and social media for promotional purposes unless a signed Non-Disclosure Agreement (NDA) is in place.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium mb-3 text-foreground">5. CLIENT RESPONSIBILITIES</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        The Client must provide all necessary assets (logos, copy, footage, API keys) within 7 business days of a request. Delays caused by the Client exceeding 14 days may result in the project being placed on "Hold" and subject to a restart fee.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium mb-3 text-foreground">6. LIMITATION OF LIABILITY</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Team Ephicode shall not be liable for any indirect, incidental, or consequential damages, including loss of profits, data, or business interruptions, arising from the use of the services or technical failures post-launch.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium mb-3 text-foreground">7. TERMINATION</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Either party may terminate the agreement with 14 days' written notice. In the event of termination, the Client is responsible for paying for all work completed up to the date of termination.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>
                <Footer />
            </PageWrapper>
        </main >
    )
}
