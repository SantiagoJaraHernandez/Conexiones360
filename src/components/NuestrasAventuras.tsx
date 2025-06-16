"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiUser, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MdAirplanemodeActive } from "react-icons/md";

const TOTAL_IMGS = 13;
const WAPP_NUM = "573162276795";
const AUTO_TIME = 6000;

// SVG mejorado sin animaciones, colores suaves y más detalle
const svgPattern = encodeURIComponent(`
  <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
    <!-- Avión metálico estilizado -->
    <g>
      <path fill="#A3AED0" d="M100 10 L90 50 L110 50 Z" />
      <path fill="#7AA9D9" fill-opacity="0.5" d="M95 50 L105 50 L100 80 Z" />
    </g>

    <!-- Maleta marrón con sombra -->
    <g>
      <rect x="40" y="120" width="30" height="20" rx="5" ry="5" fill="#B28B57" fill-opacity="0.7" />
      <rect x="52" y="110" width="6" height="12" fill="#C9A96B" fill-opacity="0.7" />
    </g>

    <!-- Palma verde estilizada -->
    <g stroke="#3A7D44" stroke-width="1.1" fill="#76B041" fill-opacity="0.7" transform-origin="160 140">
      <path d="M150 140 C155 130, 165 130, 160 140 C170 135, 175 145, 160 150 Z" />
      <path d="M155 145 L155 160" stroke-width="1.3" stroke-linecap="round" />
    </g>

    <!-- Montañas con tonos terrosos -->
    <g>
      <polygon points="130,180 140,150 150,180" fill="#5A7A49" fill-opacity="0.7" />
      <polygon points="135,180 145,160 155,180" fill="#8B6A42" fill-opacity="0.7" />
    </g>
  </svg>
`);

export default function ArmaTuDestino() {
  const [idx, setIdx] = useState(0);
  const [vertical, setVert] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setIdx((p) => (p + 1) % TOTAL_IMGS), AUTO_TIME);
    return () => clearInterval(id);
  }, []);

  const [nombre, setNombre] = useState("");
  const [destinos, setDest] = useState("");
  const nombreOk = nombre.trim().length > 3;
  const destinosOk = destinos.trim().length > 3;
  const puedeEnviar = nombreOk && destinosOk;

  const urlWpp = useMemo(() => {
    const msg =
      `Hola, me gustaría cotizar un destino personalizado.%0A` +
      `Nombre: ${nombre}%0A` +
      `Destinos: ${destinos}`;
    return `https://wa.me/${WAPP_NUM}?text=${msg}`;
  }, [nombre, destinos]);

  const handlePrev = () => setIdx((p) => (p - 1 + TOTAL_IMGS) % TOTAL_IMGS);
  const handleNext = () => setIdx((p) => (p + 1) % TOTAL_IMGS);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center gap-12 px-6 lg:px-20 py-16 overflow-hidden"
      style={{
        backgroundColor: "#c6d0dc",
        backgroundImage: `url("data:image/svg+xml,${svgPattern}")`,
        backgroundRepeat: "repeat",
        backgroundSize: "200px 200px",
      }}
    >
      <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-600 text-center flex items-center gap-3 select-none drop-shadow-md">
        <MdAirplanemodeActive size={36} />
        Algunas de nuestras aventuras
      </h2>

      <div className="relative z-10 flex flex-col lg:flex-row gap-12 w-full max-w-7xl">
        <div className="lg:w-[60%] flex flex-col gap-6 items-center relative">
          {/* Flechas carrusel */}
          <button
            aria-label="Imagen anterior"
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-gray-600 transition z-20"
          >
            <FiChevronLeft size={28} className="text-blue-700 dark:text-blue-400" />
          </button>

          <button
            aria-label="Imagen siguiente"
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 rounded-full p-2 shadow-md hover:bg-white dark:hover:bg-gray-600 transition z-20"
          >
            <FiChevronRight size={28} className="text-blue-700 dark:text-blue-400" />
          </button>

          <div className="relative w-full aspect-[4/3] rounded-3xl shadow-2xl overflow-hidden bg-gray-200">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Fondo borroso: la imagen con blur y escala correcta */}
                <Image
                  src={`/clientes/${idx + 1}.jpg`}
                  alt=""
                  fill
                  priority
                  style={{
                    filter: "brightness(0.6) blur(14px)",
                    transform: vertical ? "scale(1.15)" : "scale(1.1)",
                    objectFit: "cover",
                  }}
                  className="absolute inset-0"
                />

                {/* Imagen principal visible */}
                <Image
                  src={`/clientes/${idx + 1}.jpg`}
                  alt={`Aventura ${idx + 1}`}
                  fill
                  onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                    setVert(naturalHeight > naturalWidth)
                  }
                  className="relative object-contain p-4"
                  sizes="(max-width:768px)100vw,60vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {Array.from({ length: TOTAL_IMGS }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-3 h-3 rounded-full transition ${
                    i === idx ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Mostrar imagen ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-[40%] backdrop-blur-lg bg-white/80 dark:bg-gray-700/60 rounded-3xl shadow-2xl p-10 flex flex-col justify-center"
        >
          <h3 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300 drop-shadow-sm">
            Solicita tu cotización personalizada
          </h3>

          <label className="relative mb-6 block">
            <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" />
            <input
              type="text"
              placeholder="Nombre y apellidos"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="pl-12 pr-4 py-4 w-full rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-lg bg-white/90 dark:bg-gray-600 dark:text-white transition"
            />
          </label>

          <label className="block mb-8">
            <textarea
              rows={5}
              placeholder="Destinos que deseas cotizar (ej. Cartagena, Eje Cafetero…) "
              value={destinos}
              onChange={(e) => setDest(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-300 p-5 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 resize-none bg-white/90 dark:bg-gray-600 dark:text-white transition"
            />
          </label>

          <motion.a
            href={puedeEnviar ? urlWpp : undefined}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={puedeEnviar ? { scale: 1.05 } : {}}
            whileTap={puedeEnviar ? { scale: 0.95 } : {}}
            className={`flex justify-center items-center gap-3 px-8 py-4 rounded-xl font-bold text-xl text-white ${
              puedeEnviar
                ? "bg-green-600 hover:bg-green-700"
                : "bg-green-300 cursor-not-allowed"
            } transition`}
          >
            <FiSend size={26} />
            Enviar por WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
