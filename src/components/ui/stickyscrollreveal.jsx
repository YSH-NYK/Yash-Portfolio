"use client"
import React, { useEffect, useRef, useState } from "react"
import { useMotionValueEvent, useScroll } from "motion/react"
import { motion } from "motion/react"
import { cn } from "../../lib/utils"
import { LinkPreview } from "./link-preview"

export const StickyScroll = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint)
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index
      }
      return acc
    }, 0)
    setActiveCard(closestBreakpointIndex)
  })

const backgroundColors = [
  '#313131',
  '#313131',
  '#313131',
];



  return (
    <>
      {/* Mobile layout: stacked vertically */}
      <div className="block lg:hidden rounded-md overflow-hidden" style={{ backgroundColor: backgroundColors[activeCard % backgroundColors.length] }}>
        {content.map((item, index) => (
          <div key={item.title + index} className="py-10 px-4 border-b border-neutral-700 last:border-0">
            <h2 className="text-xl font-bold text-slate-100 mb-3">{item.title}</h2>
            <div className="text-slate-300 text-sm mb-4">{item.description}</div>
            <div className="w-full rounded-md overflow-hidden">{item.content}</div>
          </div>
        ))}
        <div className="flex flex-row items-center justify-start h-[70px] px-4">
          <p className="font-medium text-white text-sm">For More Projects: <LinkPreview url="https://github.com/YSH-NYK"><span className="font-bold text-[#FF7043]">GITHUB</span></LinkPreview></p>
        </div>
      </div>

      {/* Desktop layout: sticky side-by-side */}
      <motion.div
        animate={{
          backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }}
        className="relative hidden lg:flex h-[40rem] justify-center space-x-10 overflow-y-auto rounded-md"
        ref={ref}
      >
        <div className="div relative flex items-start px-4">
          <div className="max-w-3xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="mt-6 text-slate-300"
                >
                  {item.description}
                </motion.div>
              </div>
            ))}
            <div className="flex flex-row items-center justify-start h-[95px]">
              <p className="font-medium text-white">For More Projects click below<LinkPreview url="https://github.com/YSH-NYK"><h2 className="font-bold text-[#FF7043]">GITHUB</h2></LinkPreview>{" "}</p>
            </div>
          </div>
        </div>
        <div className={cn("sticky top-1 h-auto w-auto overflow-hidden rounded-md lg:block", contentClassName)}>
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    </>
  )
}
