"use client"

import { useState } from "react"
import { LoadingScreen } from "@/components/loading-screen"

export function PageWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      <div className={`transition-opacity duration-700 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        {children}
      </div>
    </>
  )
}
