"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "./ui/animated-modal";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  const cards = [
  {
    title: "Frontend",
    description: "React, HTML, CSS, Figma, JavaScript",
    src: "/frontend.png",
    technologies: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
    content: "Experienced in crafting responsive, user-friendly interfaces using React, HTML/CSS, JavaScript, and Figma. Worked on AI platforms and e-commerce applications."
  },
  {
    title: "Backend",
    description: "PHP, SQL, Python, Flask",
    src: "/backend.png",
    technologies: [
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "SQL", logo: "sql.png" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    ],
    content: "Built backend APIs and database-driven features using Flask, PHP, SQL, and Python. Integrated user authentication and real-time data services in web apps."
  },
  {
    title: "Data Science",
    description: "Python, R, YOLO, PowerBI",
    src: "/datascience.png",
    technologies: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
      { name: "YOLO", logo: "yolo.png" },
      { name: "Power BI", logo: "powerbi.png" },
      { name: "Tableau", logo: "tableau.webp" },
    ],
    content: "Have an Honors Degree in Data Science, with hands-on experience in AI-driven projects like face recognition, ID verification, and intrusion detection using DeepFace, Tesseract OCR, YOLOv8, and Python. Passionate about building intelligent systems using real-world datasets and ML frameworks."
  },
  {
    title: "UI-UX",
    description: "Figma, Photoshop",
    src: "uiux.png",
    technologies: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Photoshop", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
    ],
    content: "Led design efforts for events and platforms using Figma, Photoshop. Designed brochures, banners, ID cards, and UI mockups for apps and websites."
  },
  {
    title: "Content Creation & Design",
    description: "Photography, Videography, Editing, Canva",
    src: "/content.png",
    technologies: [
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Photoshop", logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
      { name: "Canva", logo: "canva.png" },
      { name: "Inshot", logo: "inshot.png" },
      { name: "Adobe Lightroom", logo: "light.png" },
      { name: "Instagram", logo: "insta.png" },
    ],
    content: "Actively contributed to major college events like Tandav and Spectrum as the Designing Team Leader—created brochures, ID cards, event banners, sponsorship creatives, and T-shirt designs. Beyond college, I manage my Instagram page [@spykyeditz](https://www.instagram.com/spykyeditz), where I share my photography, videography, and cinematic edits to a growing audience."
  }
];


  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 z-10"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[700px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src || "/placeholder.svg"}
                  alt={active.title}
                  className="w-full h-48 lg:h-56 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"
                />
              </motion.div> */}
              <div className="flex-1 flex flex-col">
                <div className="p-6 border-b border-neutral-200 dark:border-neutral-700">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 mb-2"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400 text-lg"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    <motion.button
                      layoutId={`button-${active.title}-${id}`}
                      className="px-6 py-3 text-sm rounded-full font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors ml-4 flex-shrink-0"
                      onClick={() => setActive(null)}
                    >
                      Close
                    </motion.button>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-neutral-800 dark:text-neutral-200">
                      Technologies & Tools:
                    </h4>
                    <motion.div layoutId={`technologies-${active.title}-${id}`} className="flex flex-wrap gap-3">
                      {active.technologies.map((tech, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg"
                        >
                          <img
                            src={tech.logo || "/placeholder.svg"}
                            alt={tech.name}
                            className="w-6 h-6 object-contain"
                          />
                          <span className="text-neutral-700 dark:text-neutral-300 font-medium">{tech.name}</span>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base overflow-auto"
                  >
                    <h4 className="font-semibold text-lg mb-4 text-neutral-800 dark:text-neutral-200">
                      Professional Experience:
                    </h4>
                    {typeof active.content === "function" ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <div className="w-full mx-auto p-4 mt-[100px] border-b-2 border-[#313131] pb-[100px] ">
        <div className="mb-8 text-center">
          <h2 className="text-7xl font-bold text-white dark:text-neutral-200 mb-2 text-center">TECHNOLOGY STACK</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            A growing toolkit of modern technologies and frameworks that I use to craft efficient, elegant, and scalable solutions.
          </p>
        </div>

        {/* All 5 cards in one row, bigger */}
        <div className="flex flex-row gap-6 overflow-x-auto pb-4 ml-[90px]">
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="min-w-[320px] max-w-[340px] h-[370px] p-6 flex flex-col bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 rounded-xl cursor-pointer shadow-md hover:shadow-lg transition-all duration-200 border border-neutral-200 dark:border-neutral-700"
            >
              <motion.div layoutId={`image-${card.title}-${id}`} className="mb-4">
                <img
                  width={100}
                  height={100}
                  src={card.src || "/placeholder.svg"}
                  alt={card.title}
                  className="h-16 w-16 rounded-lg object-cover object-center mx-auto"
                />
              </motion.div>
              <div className="text-center mb-4 flex-1">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-2"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-sm mb-4"
                >
                  {card.description}
                </motion.p>
              </div>

              <motion.div
                layoutId={`technologies-${card.title}-${id}`}
                className="flex justify-center items-center gap-2 mb-4 overflow-x-auto pb-2"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {card.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-10 h-10 bg-white dark:bg-neutral-700 rounded-lg p-2 shadow-sm border border-neutral-200 dark:border-neutral-600"
                  >
                    <img
                      src={tech.logo || "/placeholder.svg"}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                      title={tech.name}
                    />
                  </div>
                ))}
              </motion.div>

              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-medium bg-neutral-100 hover:bg-blue-600 hover:text-white text-neutral-700 transition-all duration-200"
              >
                View Details
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};