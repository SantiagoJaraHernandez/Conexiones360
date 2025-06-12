"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white text-center px-6 overflow-hidden">
      {/* Contenedor del video con fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full overflow-hidden z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src="/hero2.mp4" type="video/mp4" />
          Tu navegador no soporta videos en HTML5.
        </video>
        {/* Overlay con degradado encima del video */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
      </motion.div>

      {/* Contenido */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Logo + Título */}
        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/logo.png"
            alt="Logo Conexiones360"
            className="w-20 md:w-24"
          />
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold tracking-wide font-sans text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Conexiones360
          </motion.h1>
        </motion.div>

        <motion.p
          className="mt-6 text-xl md:text-2xl drop-shadow-md max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Descubre Colombia con experiencias únicas e inolvidables.
        </motion.p>

        <motion.a
          href="#destinos"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="inline-block mt-10 bg-blue-600 px-8 py-3 rounded-full text-white font-semibold hover:bg-blue-700 shadow-lg transition"
        >
          Ver destinos
        </motion.a>
      </motion.div>
    </section>
  );
}
