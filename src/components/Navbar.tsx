"use client";

import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = ["hero", "mision", "porque", "transporte", "aventuras", "destinos"];
const LABELS: Record<string, string> = {
  hero: "Inicio",
  mision: "Misión y Visión",
  porque: "¿Por qué elegirnos?",
  transporte: "Transporte",
  destinos: "Destinos",
  aventuras: "Cotización"
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "hero";

      for (const section of SECTIONS) {
        const el = document.getElementById(section);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar en carga inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 ${
        scrolled ? "bg-white/80 shadow-md text-gray-900" : "bg-transparent text-white"
      } transition-all duration-300 backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2 transition-all duration-300">
          <Image src="/logo.png" alt="Conexiones360" width={40} height={40} />
          <span className="font-bold text-lg tracking-tight">Conexiones360</span>
        </div>

        {/* Menú escritorio */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {SECTIONS.map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              className={`group cursor-pointer relative transition-all hover:text-blue-600 ${
                activeSection === section ? "text-blue-600" : ""
              }`}
            >
              <span className="pb-1">{LABELS[section]}</span>
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-full bg-blue-600 transform scale-x-0 origin-left transition-transform duration-300 ${
                  activeSection === section ? "scale-x-100" : "group-hover:scale-x-100"
                }`}
              />
            </ScrollLink>
          ))}
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-md focus:outline-none"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white text-gray-900 shadow-md overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-3 space-y-3 font-medium">
              {SECTIONS.map((section) => (
                <ScrollLink
                  key={section}
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={handleLinkClick}
                  className={`cursor-pointer px-3 py-2 rounded-md transition-all hover:bg-blue-500 hover:text-white ${
                    activeSection === section ? "bg-blue-600 text-white font-semibold" : ""
                  }`}
                >
                  {LABELS[section]}
                </ScrollLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
