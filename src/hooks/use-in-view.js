"use client"

import { useEffect, useRef, useState, useMemo } from "react"

export function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  const options = useMemo(() => ({ threshold }), [threshold])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.unobserve(element)
      }
    }, options)

    observer.observe(element)
    return () => observer.disconnect()
  }, [options])

  return { ref, isInView }
}
