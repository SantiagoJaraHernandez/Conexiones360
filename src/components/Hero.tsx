"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white text-center px-6 overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/hero2.mp4" type="video/mp4" />
          Tu navegador no soporta videos en HTML5.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Contenido */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Frase superior (slogan) */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl drop-shadow-md max-w-2xl mx-auto px-2 font-sans mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
>
Haz de cada viaje una experiencia inolvidable con
</motion.p>

        {/* Logo + Marca */}
        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <img src="/logo.png" alt="Logo Conexiones360" className="w-16 md:w-20 lg:w-24" />
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg font-sans"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            CONEXIONES360
          </motion.h1>
        </motion.div>

        {/* Frase descriptiva */}
        <motion.p
          className="mt-5 text-lg sm:text-xl md:text-2xl drop-shadow-md max-w-2xl mx-auto px-2 font-sans"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          Descubre el mundo con experiencias únicas e inolvidables.
        </motion.p>

        {/* Botón CTA */}
        <motion.a
          href="#destinos"
          className="inline-block mt-8 bg-blue-600 px-8 py-3 rounded-full text-white font-semibold hover:bg-blue-700 shadow-lg transition"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          Ver destinos
        </motion.a>
      </motion.div>
    </section>
  );
}
