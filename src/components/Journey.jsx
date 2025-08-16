"use client"
import { Timeline } from "./ui/timeline"
import { Badge } from "./ui/Badge"

export default function ResumeTimeline() {
  const timelineData = [
        {
      title: "2019",
      content: (
        <div>
          <h3 className="text-xl font-bold text-neutral-800 mb-2 dark:text-neutral-100">
            Passed Class X (Goa Board)
            <Badge className="ml-2 bg-green-500 hover:bg-green-600">Education</Badge>
          </h3>
          <p className="mb-4 text-sm font-normal text-neutral-700 dark:text-neutral-300">
            Our lady of Grace high school, Bicholim – Goa (2018-2019)
            <br />
            Percentage: 85.33
          </p>
          <div className="mb-8">
            <img
              src="10.jpeg"
              alt="Our Lady of Grace High School"
              className="w-full rounded-lg object-cover shadow-md h-48 md:h-64"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (         
          <div>
          <h3 className="text-xl font-bold text-neutral-800 mb-2 dark:text-neutral-100">
            Passed Class XII (Goa Board)
            <Badge className="ml-2 bg-green-500 hover:bg-green-600">Education</Badge>
          </h3>
          <p className="mb-4 text-sm font-normal text-neutral-700 dark:text-neutral-300">
            Shri Shanta Durga higher secondary, Bicholim - Goa (2020-2021)
            <br />
            Percentage: 75.00
          </p>
          <div className="mb-8">
            <img
              src="12.jpg"
              alt="Shri Shanta Durga Higher Secondary"
              className="w-full rounded-lg object-cover shadow-md h-48 md:h-64"
            />
          </div>
          <h3 className="text-xl font-bold text-neutral-800 mb-2 dark:text-neutral-100">
            Cleared GCET & got admission in Goa College Of Engineering (IT)
            <Badge className="ml-2 bg-green-500 hover:bg-green-600">Education</Badge>
          </h3>
          <p className="mb-4 text-sm font-normal text-neutral-700 dark:text-neutral-300">
            DIRECTORATE OF TECHNICAL EDUCATION, Government of Goa, India
            <br />
            Rank: 200 (General Category) 
          </p>
          <div className="mb-8">
            <img
              src="gcet.jpg"
              alt="DTE"
              className="w-full rounded-lg object-cover shadow-md h-48 md:h-64"
            />
          </div>
             <h3 className="text-xl font-bold text-neutral-800 mb-2 dark:text-neutral-100">
            Started BE in Information Technology Engineering
            <Badge className="ml-2 bg-green-500 hover:bg-green-600">Education</Badge>
          </h3>
          <p className="mb-4 text-sm font-normal text-neutral-700 dark:text-neutral-300">
            Goa College of Engineering (2021 - 2025)
          </p>
          <div className="mb-8">
            <img
              src="gec.jpg"
              alt="Goa College of Engineering"
              className="w-full rounded-lg object-cover shadow-md h-48 md:h-64"
            />
          </div>
        </div>
        
      ),
    },
    {
     title: "2022",
      content: (
        <div>
            <h3 className="text-xl font-bold text-neutral-800 mb-2 dark:text-neutral-100">
            Started Honors Degree in Data Science
            <Badge className="ml-2 bg-green-500 hover:bg-green-600">Education</Badge>
          </h3>
          <p className="mb-4 text-sm font-normal text-neutral-700 dark:text-neutral-300">
            Information Technology Department, Goa College of Engineering (2022 - 2025)
          </p>
          <div className="mb-8">
            <img
              src="IT.jpg"
              alt="Data Science Honors Program"
              className="w-full rounded-lg object-cover shadow-md h-48 md:h-64"
            />
          </div>
        </div>
      ),
    },
     {
      title: "2023",
      content: (
        <div>
          <h3 className="text-xl font-bold text-neutral-800 mb-2 dark:text-neutral-100">
            TE Executive | Intensa Council
            <Badge className="ml-2 bg-blue-500 hover:bg-blue-600">Extracurricular</Badge>
          </h3>
          <p className="mb-4 text-sm font-normal text-neutral-700 dark:text-neutral-300">
            Goa College of Engineering (2023 - 2024)
          </p>
          <p className="mb-4 text-sm font-normal text-neutral-700 dark:text-neutral-300">
            Have coordinated numerous technical events and played a pivotal role in the technical work in major college
            events like Tandav and Spectrum.
          </p>
          <div className="mb-8">
            <img
              src="TE.jpg"
              alt="Intensa Council Events"
              className="w-full rounded-lg object-cover shadow-md h-48 md:h-64"
            />
          </div>

          <h3 className="text-xl font-bold text-neutral-800 mb-2 dark:text-neutral-100">
            Certifications
            <Badge className="ml-2 bg-yellow-500 hover:bg-yellow-600">Achievement</Badge>
          </h3>
          <ul className="list-disc pl-5 mb-4 text-sm font-normal text-neutral-700 dark:text-neutral-300">
            <li className="mb-2">
              Data Structure and Algorithms Using Java, NPTEL Online Certifications, IIT Kharagpur (2023)
            </li>
            <li>The joy of computing with python, NPTEL Online Certifications, IIT Madras (2023)</li>
          </ul>
          <div className="mb-8">
            <img
              src="cert.jpg"
              alt="NPTEL Certifications"
              className="w-full rounded-lg object-cover shadow-md h-48 md:h-64"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h3 className="text-xl font-bold text-neutral-800 mb-2 dark:text-neutral-100">
            Web Development Intern at Codanto
            <Badge className="ml-2 bg-purple-500 hover:bg-purple-600">Experience</Badge>
          </h3>
          <p className="mb-4 text-sm font-normal text-neutral-700 dark:text-neutral-300">July 2024 – August 2024</p>
          <ul className="list-disc pl-5 mb-4 text-sm font-normal text-neutral-700 dark:text-neutral-300">
            <li className="mb-2">
              <strong>GiftRight – US-based Charity Donation Platform:</strong> Allowed users to view products and
              wishlists from charities. Donors could select and donate products directly through the platform. Admin
              functionalities for managing product entries and updating wishlists.
            </li>
            <li className="mb-2">
              <strong>Local Governance Platform:</strong> Developed a notification system for tracking and resolving
              reported issues. Enabled efficient issue management for local governance and community reporting.
            </li>
            <li>
              <strong>Technologies Used:</strong> Next.js, MySQL, APIs, HTML, CSS, Trello, Figma.
            </li>
          </ul>
          <div className="mb-8">
            <img
              src="internship.png"
              alt="Codanto Internship"
              className="w-full rounded-lg object-cover shadow-md h-48 md:h-64"
            />
          </div>

          <h3 className="text-xl font-bold text-neutral-800 mb-2 dark:text-neutral-100">
            Designing Team Leader | Spectrum
            <Badge className="ml-2 bg-blue-500 hover:bg-blue-600">Extracurricular</Badge>
          </h3>
          <p className="mb-4 text-sm font-normal text-neutral-700 dark:text-neutral-300">
            Goa College of Engineering (March 2024 - April 2024)
          </p>
          <p className="mb-4 text-sm font-normal text-neutral-700 dark:text-neutral-300">
            Led the creation of essential assets such as event brochures, volunteer ID cards, event banners, sponsorship
            banners, and T-shirt designs for volunteers, coordinators, and council members using Figma, Photoshop and
            Canva.
          </p>
          <div className="mb-8">
            <img
              src="spectrum.jpg"
              alt="Spectrum Design Team"
              className="w-full rounded-lg object-cover shadow-md h-48 md:h-64"
            />
          </div>

         <h3 className="text-xl font-bold text-neutral-800 mb-2 dark:text-neutral-100">
            AI-powered Surveillance and Intrusion Detection project for 6 Technical Training Regiment (Army)
            <Badge className="ml-2 bg-purple-500 hover:bg-purple-600">Experience</Badge>
          </h3>
          <p className="mb-4 text-sm font-normal text-neutral-700 dark:text-neutral-300">July 2024 – July 2025</p>
           <p className="mb-4 text-sm font-normal text-neutral-700 dark:text-neutral-300">
                     Developed for 6 Technical Training Regiment (Army) with a team of 3. Implemented two-factor
              authentication, intrusion detection, and vehicle authorization using Raspberry Pi, ReactJS, Python,
              YOLOv8, and more.
          </p>
          <div className="mb-8">
            <img
              src="6ttr.jpg"
              alt="6ttr"
              className="w-full rounded-lg object-cover shadow-md h-48 md:h-64"
            />
          </div>

        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h3 className="text-xl font-bold text-neutral-800 mb-2 dark:text-neutral-100">
            Finalist | Spark-3 Hackathon, HackIndia
            <Badge className="ml-2 bg-blue-500 hover:bg-blue-600">Extracurricular</Badge>
          </h3>
          <p className="mb-4 text-sm font-normal text-neutral-700 dark:text-neutral-300">
            Built an AI-powered PPT generator using Gemini Flash 2.0 for content generation and the PPTX Python library
            for slide creation. Built on React.js and Flask based web platform.
          </p>
          <div className="mb-8">
            <img
              src="hackindia.jpeg"
              alt="Spark-3 Hackathon"
              className="w-full rounded-lg object-cover shadow-md h-48 md:h-64"
            />
          </div>
          <h3 className="text-xl font-bold text-neutral-800 mb-2 dark:text-neutral-100">
            B.E. in Information Technology – Successfully Completed 
            <Badge className="ml-2 bg-green-500 hover:bg-green-600">Education</Badge>
          </h3>
          <p className="mb-4 text-sm font-normal text-neutral-700 dark:text-neutral-300">
            A comprehensive 4-year undergraduate program focused on software development, data structures, databases, and core IT engineering subjects.
          </p>
          <div className="mb-8">
            <img
              src="farewell.jpg"
              alt="Spark-3 Hackathon"
              className="w-full rounded-lg object-cover shadow-md h-48 md:h-64"
            />
          </div>  
                    <h3 className="text-xl font-bold text-neutral-800 mb-2 dark:text-neutral-100">
            Completed Deloitte Australia Data Analytics Job Simulation
            <Badge className="ml-2 bg-yellow-500 hover:bg-yellow-600">Achievement</Badge>
          </h3>
          <p className="mb-4 text-sm font-normal text-neutral-700 dark:text-neutral-300">
          During the program, I analyzed datasets using Excel, built an interactive Tableau dashboard, and applied forensic technology techniques
           </p>
          <div className="mb-8">
            <img
              src="delloite.png"
              alt="Spark-3 Hackathon"
              className="w-full rounded-lg object-cover shadow-md h-48 md:h-64"
            />
          </div>  
                    <h3 className="text-xl font-bold text-neutral-800 mb-2 dark:text-neutral-100">
            Completed BCGX GenAI Job Simulation
            <Badge className="ml-2 bg-yellow-500 hover:bg-yellow-600">Achievement</Badge>
          </h3>
          <p className="mb-4 text-sm font-normal text-neutral-700 dark:text-neutral-300">
          During this simulation, I built a rule-based financial chatbot, analyzed 10-K and 10-Q reports, and used Python (pandas) for data extraction and cleaning; I applied logic-based rules to interpret financial data and present it in a clear, user-friendly format.
           </p>
          <div className="mb-8">
            <img
              src="bcgx.png"
              alt="Spark-3 Hackathon"
              className="w-full rounded-lg object-cover shadow-md h-48 md:h-64"
            />
          </div>        
        </div>
      ),
    },
      {
     title: "Currently",
      content: (
        <div>
           <h3 className="text-xl font-bold text-neutral-800 mb-2 dark:text-neutral-100">
            Joined as Software Engineer Intern at Anant Infomedia Pvt. Ltd.
            <Badge className="ml-2 bg-purple-500 hover:bg-purple-600">Experience</Badge>
          </h3>
          <p className="mb-4 text-sm font-normal text-neutral-700 dark:text-neutral-300">
           Working with the team on the Saath7 project by Sanofi which is a patient support program that empowers individuals with diabetes through counseling and education across 45 cities, supported by over 5,000 doctors. My work involved developing and testing the scripts and Database for the same using PhP, MySQL, Filezilla, Javascript, Html and Bootstrap.
          </p>
          <div className="mb-8">
            <img
              src="Anant.jpeg"
              alt="Spark-3 Hackathon"
              className="w-full rounded-lg object-cover shadow-md h-48 md:h-64"
            />
          </div>  

           <h3 className="text-xl font-bold text-neutral-800 mb-2 dark:text-neutral-100">
             Actively seeking entry-level opportunities in Data Science, Data Analytics, and AI/ML while continuously upskilling with the latest technologies, frameworks, and hands-on project experience.
          </h3>
          <p className="mb-4 text-sm font-normal text-neutral-700 dark:text-neutral-300">
            Actively looking for full-time positions where I can apply data-driven problem-solving and AI/ML skills to real-world challenges.
          </p>
          <div className="mb-8">
            {/* <img
              src="data.png"
              alt="Spark-3 Hackathon"
              className="w-full rounded-lg object-cover shadow-md h-48 md:h-64"
            /> */}
          </div>  
        </div>
      )
    }
  ]

  return (
    <div>
       <div className="pt-[100px]">
        <div className="text-center">
          <h2 className="text-7xl font-bold text-white dark:text-neutral-200 text-center">MY JOURNEY</h2>
             <p className="text-neutral-600 dark:text-neutral-400">
              A journey of passion, purpose, and progress.
             </p></div></div>
      <Timeline data={timelineData} />
    </div>
  )
}
