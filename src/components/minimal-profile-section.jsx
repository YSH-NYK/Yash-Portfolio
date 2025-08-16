"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

export default function MinimalProfileSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const words = ["CODE", "DATA", "DESIGN"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 1800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col justify-between h-full py-12">
      {/* Static Header */}
      <div>
        <h1 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white mb-2">Creative</h1>
        <h2 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white">Developer</h2>
      </div>

      {/* Animated Text at Bottom */}
      <div className="mt-auto">
        <div className="h-8 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-lg md:text-xl font-mono text-gray-600 dark:text-gray-300 tracking-wider"
            >
              {words[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
