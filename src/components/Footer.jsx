"use client"
import { Github } from "lucide-react"
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUp, Download } from "lucide-react"
import { Button } from "./ui/button"

export default function PortfolioFooter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative overflow-hidden bg-[#313131] text-white mt-[120px]">
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Contact Me</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href="https://yashnaik7664@gmail.com" className="hover:text-blue-400 transition-colors">
                  yashnaik7664@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <a href="tel:+91 8799952287" className="hover:text-blue-400 transition-colors">
                  +91 87999 52287
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                <span>Govind Nagar, Vathadev, Sarvan, Bicholim - Goa, India.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/in/yashnaikit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-gray-400" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/spykyeditz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Instagram className="h-4 w-4 text-gray-400" />
                  Instagram
                </a>
              </li>
                <li>
                <a
                  href="https://github.com/YSH-NYK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Github className="h-4 w-4 text-gray-400" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#Projects" className="hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/#" className="hover:text-blue-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="/#Skills" className="hover:text-blue-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="/Yash-Naik-Resume.pdf"
                  download
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">Yash Nivas Naik</p>
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 bg-transparent border-gray-600 hover:bg-gray-700 flex items-center gap-2"
          >
            Back to Top <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
