"use client";

import { motion } from "framer-motion";
import { FaGlobeAmericas, FaLightbulb } from "react-icons/fa";

export default function MisionVision() {
  return (
    <section
      aria-labelledby="misionvision-title"
      className="
        relative
        py-28
        px-6
        overflow-hidden
        bg-fixed
        bg-center
        bg-cover
      "
      style={{ backgroundImage: "url('/bckmision.jpg')" }}
    >
      {/* OVERLAY ATMOSFÉRICO */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/85 dark:from-gray-900/85 dark:via-gray-900/70 dark:to-gray-900/85" />

      <motion.div
        className="relative max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* HEADER */}
        <header className="text-center mb-20">
          <h2
            id="misionvision-title"
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight"
          >
            Nuestro propósito
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Lo que nos mueve hoy y la visión que guía nuestro camino hacia el futuro
          </p>
        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* MISIÓN */}
          <motion.article
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="
              relative
              rounded-3xl
              bg-white/80 dark:bg-white/10
              backdrop-blur-xl
              p-8
              shadow-xl
              border border-white/40
            "
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-md">
                <FaGlobeAmericas className="text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-800">
                Misión
              </h3>
            </div>

            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-relaxed text-justify">
              Somos una empresa que promueve los viajes y el turismo por Colombia y el
              mundo, dando a conocer alojamientos campestres en lugares maravillosos,
              fomentando el descanso consciente y la conexión con los paisajes,
              la artesanía, el folclor y los sabores de nuestra tierra.
            </p>
          </motion.article>

          {/* VISIÓN */}
          <motion.article
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="
              relative
              rounded-3xl
              bg-white/80 dark:bg-white/10
              backdrop-blur-xl
              p-8
              shadow-xl
              border border-white/40
            "
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-yellow-500 text-white p-4 rounded-2xl shadow-md">
                <FaLightbulb className="text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-700">
                Visión
              </h3>
            </div>

            <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-relaxed text-justify">
              En el sector de viajes y turismo, nuestra visión es posicionarnos para el
              año 2030 como una de las agencias más prestigiosas, líderes en innovación,
              tecnología y calidad de servicio en Colombia y el mundo.
            </p>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}
