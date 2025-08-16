"use client";
import { StickyScroll } from "./ui/stickyscrollreveal";
import { LinkPreview } from "./ui/link-preview";

// import { Shield, Bot, ShoppingBag } from "lucide-react";

const content = [
  {
    title: (
      <LinkPreview url="https://github.com/YSH-NYK/AI-powered-Surveillance-and-Intrusion-Detection-for-6-Technical-Training-Regiment-Indian-Army.git">AI-powered Surveillance and Intrusion Detection</LinkPreview>),
    description: "For 6 Technical Training Regiment (Army)",
    content: (
      
      <div className="flex h-full w-full flex-col items-center justify-center p-6 text-white">
      <LinkPreview url="https://github.com/YSH-NYK/AI-powered-Surveillance-and-Intrusion-Detection-for-6-Technical-Training-Regiment-Indian-Army.git"><img src="intrusion.png" alt="" /></LinkPreview> 
      </div>
    ),
    details: {
      teamSize: "3",
      role: "Project Member (AI Engineer, IoT Engineer, Web Developer)",
      problem:
        "Traditional surveillance systems lack automation, real-time monitoring, and AI-driven authentication, making military border security vulnerable to unauthorized access and intrusions.",
      solutions: [
        "Two-Factor Authentication: Implementing OCR-based ID card scanning and face recognition for personnel verification.",
        "Intrusion Detection: Developing an IoT-driven system with PIR sensors and YOLOv8 for real-time border surveillance, integrating night-vision capabilities.",
        "Vehicle Authorization: Using OCR-based number plate verification against a secure database.",
      ],
      technologies:
        "Raspberry Pi, ReactJS, Python, YOLOv8, Tesseract OCR, HaarCascade Classifier, DeepFace Engine, Flask, Jira.",
    },
  },
   {
    title:(<LinkPreview url="https://github.com/YSH-NYK/Vendor-Performance-Data-Analytics-Using-SQL-Python-and-Tableau.git">Data-Driven Inventory & Vendor Performance Optimization</LinkPreview>),
    description: "EDA and Analytics using SQL, Python & Tableau",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center p-10">
        <LinkPreview url="https://github.com/YSH-NYK/Vendor-Performance-Data-Analytics-Using-SQL-Python-and-Tableau.git"><img src="inventory.png" alt="" /></LinkPreview>
      </div>
    ),
    details: {
      teamSize: "1",
      role: "Data Analyst",
      problem:
        "Retailers struggle with underperforming vendors, poor inventory turnover, and ineffective bulk purchase planning—leading to profit losses",
      solutions: [
        "Evaluated vendor and brand performance using sales and profit data.",
        "Analyzed inventory turnover to flag slow- and fast-moving items.",
        "Assessed bulk purchase benefits on profitability.",
        "Built an interactive Tableau dashboard for KPI visualization.",
      ],
      technologies: " Tableau, Python (Pandas, NumPy, Matplotlib), SQL (SQLite), Excel",
    },
  },
  {
    title:(<LinkPreview url="https://github.com/YSH-NYK/KRYA.git">KryaAI – SaaS AI Platform</LinkPreview> ),
    description: "Generative Chatbot and Content Creation",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center p-6 text-white">
        <LinkPreview url="https://github.com/YSH-NYK/KRYA.git"><img src="krya.png" alt="" /></LinkPreview>
      </div>
    ),
    details: {
      teamSize: "2",
      role: "Frontend Developer",
      problem:
        "Existing AI content generation tools lack a unified platform that integrates multiple AI services for chatbots, image, video, code, and audio generation.",
      solutions: [
        "User Authentication: Sign-in & Sign-up powered by CLERK.",
        "Generative Capabilities: ",
        "Image, Video, and Audio Generation using Replicate AI.",
        "Chatbot and Code Generation with Eden AI."   ],
      technologies: "React, Next.js, Clerk, Replicate AI, Eden AI",
    },
  },
  {
    title:(<LinkPreview url="https://github.com/YSH-NYK/LayerShop.git">WrapMate – E-commerce Application</LinkPreview>),
    description: "DBMS-based Platform for Mobile Skins",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center p-10">
        <LinkPreview url="https://github.com/YSH-NYK/LayerShop.git"><img src="wrapmate.png" alt="" /></LinkPreview>
      </div>
    ),
    details: {
      teamSize: "2",
      role: "Full-Stack Developer",
      problem:
        "The mobile skin market lacks an affordable and user-friendly e-commerce platform with seamless payment verification and theme-based filtering.",
      solutions: [
        "User Authentication: Implemented login and signup system for secure access.",
        "Product Filtering: Enabled theme-based filtering for personalized product discovery.",
        "Offline Payment System: Integrated an offline payment verification system.",
      ],
      technologies: "HTML, CSS, JavaScript, PHP, SQL",
    },
  },
];

export default function ProjectShowcase() {
  return (
    <div className="w-full">
      <EnhancedStickyScroll content={content} />
    </div>
  );
}

function EnhancedStickyScroll({ content }) {
  return (
    <StickyScroll
      content={content.map((item) => ({
        ...item,
        description: (
          <div className="space-y-9">
            <p className="text-lg font-medium underline">{item.description}</p>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-semibold">Team Size:</span> {item.details.teamSize}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Role:</span> {item.details.role}
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-semibold">Problem Statement:</p>
              <p className="text-sm text-slate-300">{item.details.problem}</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-semibold">Proposed Solutions:</p>
              <ul className="list-disc pl-5 text-sm text-slate-300">
                {item.details.solutions.map((solution, idx) => (
                  <li key={idx}>{solution}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-semibold">Technologies Used:</p>
              <p className="text-sm text-slate-300">{item.details.technologies}</p>
            </div>
          </div>
        ),
      }))}
    />
  );
}
