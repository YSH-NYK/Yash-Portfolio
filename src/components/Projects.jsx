import ProjectShowcase from "./project-showcase"

export default function Home() {
  return (
   <div className="w-full mx-auto bg-[#313131] pt-10 sm:pt-14">
        <div className="mb-8 text-center px-4">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white dark:text-neutral-200 mb-2 text-center">My Work in Action</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
            A showcase of the applications, tools, and systems I've designed and built — turning ideas into reality.
          </p>
        </div>
        <ProjectShowcase />
      </div>
  )
}