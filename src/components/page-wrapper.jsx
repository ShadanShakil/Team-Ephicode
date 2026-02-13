"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LoadingScreen } from "@/components/loading-screen"

export function PageWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      <AnimatePresence mode="wait">
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="[will-change:transform,opacity]"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
