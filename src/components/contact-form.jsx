"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    company: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
    agree: z.boolean().refine(val => val === true, "You must agree to the terms"),
});

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            message: "",
            agree: true,
        },
    });

    async function onSubmit(values) {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    }

    const inputClasses =
        "w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all placeholder:text-muted-foreground/50 text-foreground";
    const labelClasses = "text-sm font-medium text-muted-foreground mb-2 block";
    const errorClasses = "text-xs text-red-500 mt-1 flex items-center gap-1";

    if (isSuccess) {
        return (
            <div className="w-full h-full min-h-[400px] flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md mx-auto flex flex-col items-center justify-center text-center p-8 bg-card border border-border rounded-2xl shadow-sm"
                >
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6 text-accent">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground mb-8">
                        Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                        onClick={() => setIsSuccess(false)}
                        className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                        Send another message
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-md mx-auto">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                    <label htmlFor="name" className={labelClasses}>
                        Name
                    </label>
                    <input
                        {...form.register("name")}
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className={cn(
                            inputClasses,
                            form.formState.errors.name && "border-red-500 focus:ring-red-500/50"
                        )}
                    />
                    {form.formState.errors.name && (
                        <p className={errorClasses}>
                            <AlertCircle className="w-3 h-3" />
                            {form.formState.errors.name.message}
                        </p>
                    )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                    <label htmlFor="email" className={labelClasses}>
                        Email
                    </label>
                    <input
                        {...form.register("email")}
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className={cn(
                            inputClasses,
                            form.formState.errors.email && "border-red-500 focus:ring-red-500/50"
                        )}
                    />
                    {form.formState.errors.email && (
                        <p className={errorClasses}>
                            <AlertCircle className="w-3 h-3" />
                            {form.formState.errors.email.message}
                        </p>
                    )}
                </div>

                {/* Company Field (Optional) */}
                <div className="space-y-2">
                    <label htmlFor="company" className={labelClasses}>
                        Company{" "}
                        <span className="text-muted-foreground/50 text-xs font-normal ml-1">
                            (Optional)
                        </span>
                    </label>
                    <input
                        {...form.register("company")}
                        id="company"
                        type="text"
                        placeholder="Acme Inc."
                        className={inputClasses}
                    />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                    <label htmlFor="message" className={labelClasses}>
                        Message
                    </label>
                    <textarea
                        {...form.register("message")}
                        id="message"
                        rows={4}
                        placeholder="Tell us about your project..."
                        className={cn(
                            inputClasses,
                            "resize-none",
                            form.formState.errors.message && "border-red-500 focus:ring-red-500/50"
                        )}
                    />
                    {form.formState.errors.message && (
                        <p className={errorClasses}>
                            <AlertCircle className="w-3 h-3" />
                            {form.formState.errors.message.message}
                        </p>
                    )}
                </div>

                {/* Agree Checkbox */}
                <div className="space-y-2">
                    <div className="flex items-start gap-3">
                        <div className="flex items-center h-5">
                            <input
                                {...form.register("agree")}
                                id="agree"
                                type="checkbox"
                                className="w-4 h-4 rounded border-border bg-secondary/50 text-accent focus:ring-accent/50 transition-all cursor-pointer"
                            />
                        </div>
                        <label htmlFor="agree" className="text-xs text-muted-foreground leading-tight cursor-pointer">
                            I agree to Team Ephicode's{" "}
                            <Link href="/terms" className="underline hover:text-accent transition-colors">Terms of Service</Link>
                            {" "}and{" "}
                            <Link href="/privacy" className="underline hover:text-accent transition-colors">Privacy Policy</Link>.
                        </label>
                    </div>
                    {form.formState.errors.agree && (
                        <p className={errorClasses}>
                            <AlertCircle className="w-3 h-3" />
                            {form.formState.errors.agree.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-foreground text-background font-medium py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
