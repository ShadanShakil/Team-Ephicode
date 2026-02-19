"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Link from "next/link"

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent")
        if (!consent) {
            const timer = setTimeout(() => {
                setIsVisible(true)
            }, 2000)
            return () => clearTimeout(timer)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "true")
        setIsVisible(false)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 md:max-w-md z-[100]"
                >
                    <div className="bg-card/95 backdrop-blur-md border border-border/60 p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
                        {/* Ambient background glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-500" />

                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Close"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <div className="relative">
                            <h3 className="text-lg font-semibold text-foreground mb-2">Cookie Preferences</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies. Read our{" "}
                                <Link href="/privacy" className="text-accent hover:underline underline-offset-4">Privacy Policy</Link> for details.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={handleAccept}
                                    className="bg-accent text-accent-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:brightness-110 transition-all flex-1"
                                >
                                    Accept All
                                </button>
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="border border-border/70 text-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:bg-secondary/50 transition-colors flex-1"
                                >
                                    Essential Only
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
