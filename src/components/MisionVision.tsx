"use client";

import { motion } from "framer-motion";
import { FaGlobeAmericas, FaLightbulb } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: (direction: "left" | "right") => ({
    opacity: 0,
    x: direction === "left" ? -60 : 60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  hover: {
    scale: 1.04,
    boxShadow: "0 15px 25px rgba(0,0,0,0.15)",
  },
};

export default function MisionVision() {
  return (
    <section
      aria-labelledby="misionvision-title"
      className="relative pt-16 pb-32 overflow-hidden -mt-10 z-10 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/bckmision.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/60 z-0" />

      {/* Contenido */}
      <motion.div
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          id="misionvision-title"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-4 tracking-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Nuestra Misión y Visión
        </motion.h2>

        <p className="text-center text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-16 px-2 sm:px-0">
          Conoce el propósito que impulsa nuestra labor y nuestra visión de futuro.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Misión */}
          <motion.article
            variants={cardVariants}
            custom="left"
            className="relative bg-white/70 dark:bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border-l-[6px] border-blue-600 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-md transition-all duration-300"
            whileHover="hover"
            tabIndex={0}
            aria-labelledby="mision-title"
          >
            <motion.div
              className="absolute -top-6 left-6 bg-blue-600 text-white rounded-full p-3 sm:p-4 shadow-lg ring-4 ring-white dark:ring-gray-800"
              animate={{ rotate: [0, 10, -10, 10, 0], y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              aria-hidden="true"
            >
              <FaGlobeAmericas className="text-xl sm:text-2xl" />
            </motion.div>
            <h3
              id="mision-title"
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-800 mt-8 mb-4"
            >
              Misión
            </h3>
            <p className="text-gray-800 dark:text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide text-justify">
              Somos una empresa que promueve el turismo por Colombia y el mundo,
              dando a conocer alojamiento campestre en lugares maravillosos,
              sensibilizando al turista sobre la importancia del buen descanso,
              aprovechando los hermosos paisajes, artesanía, folclor, frutos y sabores
              de nuestra tierra Colombiana.
            </p>
          </motion.article>

          {/* Visión */}
          <motion.article
            variants={cardVariants}
            custom="right"
            className="relative bg-white/70 dark:bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border-l-[6px] border-yellow-500 cursor-pointer focus:outline-none focus:ring-4 focus:ring-yellow-400 shadow-md transition-all duration-300"
            whileHover="hover"
            tabIndex={0}
            aria-labelledby="vision-title"
          >
            <motion.div
              className="absolute -top-6 left-6 bg-yellow-500 text-white rounded-full p-3 sm:p-4 shadow-lg ring-4 ring-white dark:ring-gray-800"
              animate={{ rotate: [0, -10, 10, -10, 0], y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              aria-hidden="true"
            >
              <FaLightbulb className="text-xl sm:text-2xl" />
            </motion.div>
            <h3
              id="vision-title"
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-700 mt-8 mb-4"
            >
              Visión
            </h3>
            <p className="text-gray-800 dark:text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide text-justify">
              Posicionarnos para el año 2030 como una de las más prestigiosas empresas
              de viajes, turismo, servicios de terceros y agencia virtual, líder de
              servicios en Colombia y el mundo; lograrlo por medio del esfuerzo,
              innovación, tecnología y mejoramiento continuo.
            </p>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}
