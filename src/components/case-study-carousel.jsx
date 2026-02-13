"use client"

import { useRef, useState, useEffect } from "react"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { motion, useMotionValue, animate } from "framer-motion"
import Link from "next/link"

export function CaseStudyCarousel({ title, subtitle, mobileSubtitle, cases }) {
  const [width, setWidth] = useState(0)
  const carouselRef = useRef(null)
  const x = useMotionValue(0)

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }
  }, [cases])

  const scroll = (direction) => {
    const cardWidth = window.innerWidth < 768 ? 260 : window.innerWidth < 1024 ? 320 : 360
    const currentX = x.get()
    const newX = direction === "left"
      ? Math.min(currentX + cardWidth, 0)
      : Math.max(currentX - cardWidth, -width)

    animate(x, newX, {
      type: "spring",
      stiffness: 300,
      damping: 30
    })
  }

  return (
    <section className="py-14 md:py-20 lg:py-24" id="work">
      <div className="px-5 md:px-10 lg:px-16 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 md:mb-12"
        >
          <div className="flex-1">
            <h2 className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] font-medium leading-[1.1] text-foreground text-balance">
              {title}
            </h2>
            <p className="mt-4 text-[13px] md:text-sm text-muted-foreground max-w-md leading-relaxed hidden md:block">
              {subtitle}
            </p>
            <p className="mt-3 text-[13px] text-muted-foreground max-w-sm leading-relaxed md:hidden">
              {mobileSubtitle}
            </p>
          </div>
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-foreground hover:border-accent hover:text-accent transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-border text-foreground hover:border-accent hover:text-accent transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Draggable Carousel */}
      <div ref={carouselRef} className="overflow-hidden pl-5 md:pl-10 lg:pl-16 cursor-grab active:cursor-grabbing">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          style={{ x }}
          className="flex gap-4 md:gap-5 pr-5 md:pr-10 pb-2 w-max"
        >
          {cases.map((item, i) => (
            <motion.a
              key={item.name}
              href="#"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex-shrink-0 w-[250px] md:w-[310px] lg:w-[350px] rounded-2xl overflow-hidden block"
            >
              <div className="aspect-[3/4] w-full relative overflow-hidden" style={{ backgroundColor: item.color }}>
                {/* Placeholder phone mockup silhouette */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[45%] h-[65%] rounded-[20px] border-2 border-white/10 bg-white/5 backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-700" />
                </div>
                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Arrow icon top right */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>

                {/* Card content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-base md:text-lg font-semibold text-white">{item.name}</h3>
                  <p className="text-[13px] text-white/60 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">{item.description}</p>
                  <span className="inline-block mt-3 text-[11px] text-white/40 uppercase tracking-[0.12em] font-medium">
                    Case Study
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* View All link */}
      <div className="px-5 md:px-10 lg:px-16 mt-6 md:mt-8 max-w-[1400px] mx-auto">
        <Link href="/work" className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          View All
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
