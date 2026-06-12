"use client"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar"
import { useState } from "react"
import ModalExample from './Modal';

export default function NavbarDemo() {
  const navItems = [
    {
      name: "AboutMe",
      link: "#",
    },
    {
      name: "Skills & Technologies",
      link: "#Skills",
    },
    {
      name: "Project",
      link: "#Projects",
    },
    {
      name: "Journey",
      link: "#Journey",
    },
    {
      name: "Content-Creation",
      link: "#Contentcreation",
    },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation — only visible on lg+ */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-2">
            <NavbarButton variant="secondary">
              <a
                href="/Yash-Naik-Resume.pdf"
                download
                className="items-center transition-colors"
              >
                Resume
              </a>
            </NavbarButton>
            <ModalExample />
          </div>
        </NavBody>

        {/* Mobile / Tablet Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 w-full py-1"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-3 pt-2">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full text-center"
              >
                <a
                  href="/Yash-Naik-Resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full"
                >
                  Resume
                </a>
              </NavbarButton>
              {/* Contact Me modal trigger — inline for mobile */}
              <div className="w-full [&>div]:w-full [&_button]:w-full" onClick={() => setIsMobileMenuOpen(false)}>
                <ModalExample />
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  )
}

