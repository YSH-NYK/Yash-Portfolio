// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "motion/react";

// const Aboutme = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const words = ["CODE", "DATA", "DESIGN"];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % words.length);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-12 max-w-7xl mx-auto">
//       <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
//         <h1 className="text-white font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center md:text-left">
//           YASH NAIK
//         </h1>
//         <div className="mt-4 flex items-center space-x-2 justify-center md:justify-start">
//           <span className="text-gray-500 dark:text-gray-400 text-base sm:text-lg md:text-2xl">
//             I bring ideas to life through
//           </span>
//           <AnimatePresence mode="wait">
//             <motion.span
//               key={currentIndex}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               transition={{ duration: 0.4 }}
//               className="text-xl sm:text-2xl md:text-3xl text-white font-semibold"
//             >
//               {words[currentIndex]}
//             </motion.span>
//           </AnimatePresence>
//         </div>
//       </div>
//       <div className="w-full md:w-auto flex justify-center md:justify-end">
//         <img
//           src="/Heroimage.png"
//           width={350}
//           height={155}
//           className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-cover"
//           alt="Hero"
//         />
//       </div>
//     </div>
//   );
// };

// export default Aboutme;

import React from "react";
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

const Aboutme = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const words = ["DEVELOP", "DATA", "DESIGN"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mt-[100px] pb-[20px] flex items-center gap-5">
      <div className="ml-[270px]">
        <h1 className="text-[#F0F0F0] font-bold text-9xl">YASH NAIK</h1>
        <div className=" ml-[380px] flex items-center space-x-2">
        <span className="text-gray-500 dark:text-gray-400">I bring ideas to life through</span>
        <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="text-2xl text-[#F0F0F0]"
            >
              {words[currentIndex]}
            </motion.span>
          </AnimatePresence>
          </div>
      </div>
      <img src="/Heroimage.png" width={700} height={310} className="ml-20" />
    </div>
  );
};

export default Aboutme;
