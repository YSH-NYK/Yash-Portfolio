"use client";
import React from "react";
import {  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger, } from "./ui/animated-modal";
import { Mail,Github, Phone, MapPin, Linkedin, Instagram, ArrowUp, Download } from "lucide-react"


export default function AnimatedModalDemo() {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <div className="py-4 flex items-center justify-center text-white">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn font-bold">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Contact Me
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-black z-20 font-bold">
             ✉
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
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
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}


