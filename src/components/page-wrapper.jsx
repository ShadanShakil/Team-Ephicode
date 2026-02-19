"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LoadingScreen } from "@/components/loading-screen"

export function PageWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      <motion.div
        id="content-wrapper"
        initial={{ opacity: 0, y: 15 }}
        animate={{
          opacity: isLoading ? 0 : 1,
          y: isLoading ? 15 : 0
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="[will-change:transform,opacity]"
      >
        {children}
      </motion.div>
    </>
  )
}
