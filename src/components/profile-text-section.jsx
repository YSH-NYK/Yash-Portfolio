"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

export default function ProfileTextSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const words = ["CODE", "DATA", "DESIGN"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 2000) // Change word every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col justify-center h-full space-y-8 p-8">
      {/* Static Header */}
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">Hello, I'm</h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">John Doe</h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4">Full Stack Developer & Designer</p>
      </div>

      {/* Animated Text at Bottom */}
      <div className="mt-auto">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">I specialize in</p>
        <div className="h-12 flex items-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400"
            >
              {words[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
