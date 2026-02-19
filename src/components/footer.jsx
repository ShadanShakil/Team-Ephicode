"use client"

import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Tech Development", href: "/services" },
      { label: "Video & Post-Production", href: "/services" },
      { label: "Global Growth & Ads", href: "/services" },
      { label: "Management Systems", href: "/services" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "Twitter / X", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60 pt-12 md:pt-16 pb-8 md:pb-10 px-5 md:px-10 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-foreground">
              <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
              <span className="text-base font-semibold tracking-tight">Ephicode</span>
            </Link>
            <p className="mt-4 text-[13px] text-muted-foreground leading-relaxed max-w-[240px]">
              Global digital tech & creative agency. Built for speed, engineered for growth.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-[13px] font-medium text-foreground mb-4 uppercase tracking-wider">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("#") ? (
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 md:mt-16 pt-5 border-t border-border/40 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-[11px] text-muted-foreground/60">
            {"© 2025 Ephicode. All rights reserved."}
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[11px] text-muted-foreground/60 hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[11px] text-muted-foreground/60 hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
