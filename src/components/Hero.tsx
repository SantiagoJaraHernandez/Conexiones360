"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const keywords = ["momentos", "destinos", "aventuras"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  /* ============================
     Palabras animadas (seguras)
  ============================ */
  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % keywords.length);
    }, 2600);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  /* ============================
     Video play / pause por visibilidad
     (sin romper scroll mobile)
  ============================ */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="
        relative
        min-h-[100svh]
        w-full
        overflow-hidden
        flex items-center justify-center
        text-white text-center px-6
        isolate
      "
    >
      {/* ============================
          VIDEO FONDO (blindado)
      ============================ */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        aria-hidden="true"
        tabIndex={-1}
        className="
          absolute inset-0
          w-full h-full
          object-cover object-center
          md:scale-105
          brightness-110 saturate-110
          pointer-events-none
          will-change-transform
        "
      >
        <source
          src="/heromobile.mp4"
          type="video/mp4"
          media="(max-width: 768px)"
        />
        <source
          src="/hero4.mp4"
          type="video/mp4"
          media="(min-width: 769px)"
        />
      </video>

      {/* ============================
          OVERLAYS (no generan overflow)
      ============================ */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/90 via-black/60 to-black/30 md:from-black/80 md:via-black/40 md:to-black/20" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* ============================
          CONTENIDO
      ============================ */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* SLOGAN */}
        <p className="text-base sm:text-lg md:text-xl opacity-90 mb-4">
          Haz de cada viaje una experiencia inolvidable con
        </p>

        {/* LOGO + MARCA */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
          <img
            src="/logo.png"
            alt="Conexiones360"
            className="w-14 sm:w-16 md:w-20"
            loading="eager"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-wide drop-shadow-lg">
            CONEXIONES360
          </h1>
        </div>

        {/* TEXTO ANIMADO (altura fija → no mueve layout) */}
        <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed opacity-90">
          Viajes diseñados para conectar{" "}
          <span className="inline-flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={keywords[index]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="
                  inline-block
                  min-w-[8ch]
                  text-center
                  font-semibold
                  text-cyan-400
                "
              >
                {keywords[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </p>

        {/* CTA */}
        <motion.a
          href="#destinos"
          className="
            relative inline-flex items-center justify-center
            mt-10 px-12 py-4 rounded-full
            font-semibold text-white
            bg-gradient-to-r from-blue-600 to-cyan-500
            shadow-[0_12px_30px_rgba(0,0,0,0.35)]
            focus:outline-none focus:ring-2 focus:ring-cyan-300
          "
          whileHover={!prefersReducedMotion ? { y: -3 } : undefined}
          whileTap={{ scale: 0.97 }}
        >
          Arma tu próxima aventura
        </motion.a>
      </motion.div>

      {/* ============================
          INDICADOR SCROLL (safe-area)
      ============================ */}
      <motion.div
        className="
          absolute
          left-1/2 -translate-x-1/2
          bottom-[calc(env(safe-area-inset-bottom)+2.5rem)]
          md:bottom-8
          text-sm opacity-90 font-medium
          pointer-events-none
        "
        animate={prefersReducedMotion ? undefined : { y: [0, 10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      >
        Explorar ↓
      </motion.div>
    </section>
  );
}
