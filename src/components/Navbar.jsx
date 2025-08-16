"use client"
import {  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu, } from "./ui/resizable-navbar"
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
        {/* Desktop Navigation */}
        <div className="flex">
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="items-center">
            <NavbarButton variant="secondary">    <a
                  href="/Yash-Naik-Resume.pdf"
                  download
                  className="items-center transition-colors"
                > Resume </a></NavbarButton>
            {/* <NavbarButton variant="primary">Contact me</NavbarButton> */}
          </div>
        </NavBody>
          <ModalExample/>
        </div>

        {/* Mobile Navigation */}
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
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
                  <a
                  href="/Yash-Naik-Resume.pdf"
                  download
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                > Resume </a>
              </NavbarButton>
              <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
                Contact Me
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  )
}

