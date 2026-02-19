"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function LoadingScreen({ onComplete }) {
  const [shouldRender, setShouldRender] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    // Start fading out after 2 seconds
    const timer = setTimeout(() => {
      setIsFading(true)
    }, 2000)

    // Unmount after fade animation completes (e.g. 500ms fade)
    const unmountTimer = setTimeout(() => {
      setShouldRender(false)
      if (onComplete) onComplete()
    }, 2500)

    return () => {
      clearTimeout(timer)
      clearTimeout(unmountTimer)
    }
  }, [onComplete])

  if (!shouldRender) return null

  return (
    <div
      id="loading-screen"
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ease-in-out",
        isFading ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="relative w-32 h-32 md:w-40 md:h-40 animate-pulse-slow">
        <img
          src="/logo.svg"
          alt="Loading..."
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}
