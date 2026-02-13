"use client"

import { motion } from "framer-motion"

const steps = [
    {
        number: "01",
        title: "Discover",
        description: "We start by understanding your business, your goals, and your users. We dive deep into the problem space to uncover opportunities for innovation.",
    },
    {
        number: "02",
        title: "Strategy",
        description: "We develop a comprehensive strategy that outlines the roadmap for success. This includes technical architecture, user experience design, and go-to-market planning.",
    },
    {
        number: "03",
        title: "Design",
        description: "Our design team crafts beautiful, intuitive interfaces that delight users and drive engagement. We focus on creating a seamless user journey.",
    },
    {
        number: "04",
        title: "Build",
        description: "Our engineering team brings the designs to life using the latest technologies. We build scalable, secure, and high-performance applications.",
    },
    {
        number: "05",
        title: "Launch",
        description: "We help you launch your product to the market with confidence. We handle everything from deployment to app store submission.",
    },
    {
        number: "06",
        title: "Scale",
        description: "We monitor performance, gather user feedback, and iterate to ensure your product continues to grow and evolve.",
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

export function ProcessSection() {
    return (
        <section className="py-20 md:py-32 px-5 md:px-10 lg:px-16 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[13px] text-accent uppercase tracking-[0.15em] font-medium block mb-8">
                        Our Process
                    </span>
                    <h2 className="text-3xl md:text-5xl font-medium leading-[1.1] mb-16 md:mb-24 max-w-4xl text-balance">
                        We follow a proven methodology to deliver exceptional results.
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
                >
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            variants={itemVariants}
                            className="group"
                        >
                            <div className="text-6xl md:text-8xl font-bold text-border/30 mb-6 group-hover:text-accent/20 transition-colors duration-500">
                                {step.number}
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold mb-4">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
