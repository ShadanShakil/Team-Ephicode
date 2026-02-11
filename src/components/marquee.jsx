"use client"

const brands = [
  "Airbnb",
  "Forbes",
  "Coca-Cola",
  "Samsung",
  "NBA",
  "Buzzfeed",
  "Bleacher Report",
  "Care.com",
  "Jenny Craig",
  "Tracy Anderson",
  "GIA",
  "NYC Health",
  "Roundtable",
  "Women Deliver",
]

export function Marquee() {
  const allBrands = [...brands, ...brands, ...brands]

  return (
    <div className="py-6 md:py-8 border-y border-border/60 overflow-hidden">
      <div className="flex animate-marquee">
        {allBrands.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="mx-5 md:mx-8 text-xs md:text-sm text-muted-foreground/40 font-medium uppercase tracking-[0.15em] whitespace-nowrap flex-shrink-0"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  )
}
