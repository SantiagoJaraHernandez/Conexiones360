"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const razones = [
  "Más de 15 años de experiencia en turismo",
  "Viajes personalizados dentro y fuera del país",
  "Equipo experto en logística, ventas y atención",
  "Aliados confiables a nivel nacional e internacional",
  "Compromiso total con tu satisfacción",
  "Atención y soporte durante todo tu viaje",
];

// Variants para animar toda la lista y cada item
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      ease: "easeOut",
    }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function PorQueElegirnos() {
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    function checkWidth() {
      setIsWide(window.innerWidth >= 640);
    }
    checkWidth();

    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <section
      className="py-24 bg-[#c6d0dc] -mt-16"
      id="elegirnos"
    >
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900 mb-6 font-display text-center">
          ¿Por qué elegirnos?
          <span className="block h-1 w-24 bg-blue-700 mt-3 mx-auto rounded-full" />
        </h2>

        <p className="text-base md:text-lg text-gray-700 mb-14 max-w-3xl mx-auto leading-relaxed font-light">
          En{" "}
          <span className="font-semibold text-blue-700">Conexiones360</span>{" "}
          convertimos tus sueños de viaje en realidad. Nuestro equipo de expertos
          y aliados estratégicos garantiza experiencias inolvidables, seguras
          y hechas a tu medida.
        </p>

        <motion.ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {razones.map((razon, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-4 bg-white rounded-2xl p-6 border-l-4 border-blue-600 cursor-pointer
                         shadow-md hover:shadow-lg hover:border-blue-800 transition duration-300 ease-in-out"
              variants={itemVariants}
              whileHover={{
                y: isWide ? -6 : 0,
                scale: isWide ? 1.05 : 1,
              }}
              tabIndex={0}
              role="button"
              aria-label={`Razón: ${razon}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  // Puedes agregar acción al activar con teclado aquí
                }
              }}
            >
              <FaCheckCircle
                className="text-blue-600 flex-shrink-0"
                size={26}
                aria-hidden="true"
              />
              <span className="text-gray-900 font-medium text-base leading-snug select-none">
                {razon}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
