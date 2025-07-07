"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSend,
  FiUser,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { MdAirplanemodeActive } from "react-icons/md";

const TOTAL_IMGS = 13;
const WAPP_NUM = "573162276795";
const AUTO_TIME = 6000;

const svgPattern = encodeURIComponent(`
  <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
    <g><path fill="#A3AED0" d="M100 10 L90 50 L110 50 Z" />
      <path fill="#7AA9D9" fill-opacity="0.5" d="M95 50 L105 50 L100 80 Z" /></g>
    <g><rect x="40" y="120" width="30" height="20" rx="5" ry="5" fill="#B28B57" fill-opacity="0.7" />
      <rect x="52" y="110" width="6" height="12" fill="#C9A96B" fill-opacity="0.7" /></g>
    <g stroke="#3A7D44" stroke-width="1.1" fill="#76B041" fill-opacity="0.7">
      <path d="M150 140 C155 130, 165 130, 160 140 C170 135, 175 145, 160 150 Z" />
      <path d="M155 145 L155 160" stroke-width="1.3" stroke-linecap="round" /></g>
    <g>
      <polygon points="130,180 140,150 150,180" fill="#5A7A49" fill-opacity="0.7" />
      <polygon points="135,180 145,160 155,180" fill="#8B6A42" fill-opacity="0.7" />
    </g>
  </svg>
`);

export default function ArmaTuDestino() {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [vertical, setVert] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    if (isMobile) return;
    const id = setInterval(() => {
      setDirection(1);
      setIdx((p) => (p + 1) % TOTAL_IMGS);
    }, AUTO_TIME);
    return () => clearInterval(id);
  }, [isMobile]);

  const [nombre, setNombre] = useState("");
  const [destinos, setDest] = useState("");
  const [aceptaPolitica, setAceptaPolitica] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const nombreOk = nombre.trim().length > 3;
  const destinosOk = destinos.trim().length > 3;
  const puedeEnviar = nombreOk && destinosOk && aceptaPolitica;

  const urlWpp = useMemo(() => {
    const msg =
      `Hola, me gustaría cotizar un destino personalizado.%0A` +
      `Nombre: ${nombre}%0A` +
      `Destinos: ${destinos}`;
    return `https://wa.me/${WAPP_NUM}?text=${msg}`;
  }, [nombre, destinos]);

  const handlePrev = () => {
    setDirection(-1);
    setIdx((p) => (p - 1 + TOTAL_IMGS) % TOTAL_IMGS);
  };

  const handleNext = () => {
    setDirection(1);
    setIdx((p) => (p + 1) % TOTAL_IMGS);
  };

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
        Algunas de nuestras experiencias
      </h2>

      <div className="relative z-10 flex flex-col lg:flex-row gap-12 w-full max-w-7xl">
        {/* Carrusel */}
        <div className="lg:w-[60%] flex flex-col gap-6 items-center relative">
          <button
            aria-label="Imagen anterior"
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-700/90 rounded-full p-3 shadow-lg hover:bg-white dark:hover:bg-gray-600 transition z-20"
          >
            <FiChevronLeft size={28} className="text-blue-700 dark:text-blue-400" />
          </button>
          <button
            aria-label="Imagen siguiente"
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-700/90 rounded-full p-3 shadow-lg hover:bg-white dark:hover:bg-gray-600 transition z-20"
          >
            <FiChevronRight size={28} className="text-blue-700 dark:text-blue-400" />
          </button>

          <div className="relative w-full aspect-[4/3] rounded-3xl shadow-2xl overflow-hidden bg-gray-200">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={idx}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 200 : -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -200 : 200 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
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
                  onClick={() => {
                    setDirection(i > idx ? 1 : -1);
                    setIdx(i);
                  }}
                  className={`w-3 h-3 rounded-full transition ${
                    i === idx ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Mostrar imagen ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-[40%] backdrop-blur-xl bg-white/90 dark:bg-gray-800/70 rounded-3xl shadow-xl p-12 flex flex-col justify-center"
        >
          <h3 className="text-3xl font-extrabold mb-1 text-blue-700 dark:text-blue-300 drop-shadow-sm text-center leading-tight">
            Cotiza tu destino aquí
          </h3>
          <p className="text-lg font-semibold mb-8 text-blue-600 dark:text-blue-400 text-center tracking-wide">
            Nacional y/o Internacional
          </p>

          <label className="relative mb-8 block">
            <FiUser className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-600" />
            <input
              type="text"
              placeholder="Nombre y apellidos"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="pl-14 pr-5 py-4 w-full rounded-2xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 text-lg bg-white/95 dark:bg-gray-700 dark:text-white placeholder:text-gray-400 transition shadow-sm"
            />
          </label>

          <label className="block mb-8">
            <textarea
              rows={3}
              placeholder="Destinos que deseas cotizar (ej. Cartagena, Eje Cafetero…)"
              value={destinos}
              onChange={(e) => setDest(e.target.value)}
              required
              className="w-full rounded-2xl border border-gray-300 p-4 text-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-600 resize-none bg-white/95 dark:bg-gray-700 dark:text-white placeholder:text-gray-400 transition shadow-sm"
            />
          </label>

          <label
            htmlFor="acepto-politica"
            className="flex items-center gap-3 mb-10 cursor-pointer select-none text-gray-700 dark:text-gray-300 text-base"
          >
            <input
              type="checkbox"
              id="acepto-politica"
              checked={aceptaPolitica}
              onChange={() => setAceptaPolitica(!aceptaPolitica)}
              className="w-6 h-6 rounded border-gray-300 focus:ring-2 focus:ring-blue-600"
            />
            <span>
              He leído y acepto la{" "}
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="underline text-blue-700 hover:text-blue-900 dark:text-blue-400 font-semibold"
              >
                política de tratamiento de datos personales
              </button>
            </span>
          </label>

          <motion.a
            href={puedeEnviar ? urlWpp : undefined}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={puedeEnviar ? { scale: 1.05, boxShadow: "0 0 12px rgba(16,185,129,0.7)" } : {}}
            whileTap={puedeEnviar ? { scale: 0.95 } : {}}
            className={`flex justify-center items-center gap-3 px-10 py-4 rounded-3xl font-extrabold text-xl text-white select-none ${
              puedeEnviar
                ? "bg-green-600 hover:bg-green-700 shadow-md cursor-pointer"
                : "bg-green-300 cursor-not-allowed"
            } transition-shadow duration-300`}
            aria-disabled={!puedeEnviar}
          >
            <FiSend size={28} />
            Enviar por WhatsApp
          </motion.a>
        </motion.div>
      </div>

      {/* Modal política de privacidad */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-6"
            aria-modal="true"
            role="dialog"
            aria-labelledby="modal-title"
          >
            <div
              className="absolute inset-0 bg-white/30 backdrop-blur-sm dark:bg-gray-900/30"
              onClick={() => setModalOpen(false)}
            />

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.25 }}
              className="relative bg-white dark:bg-gray-800 rounded-3xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8 shadow-xl"
            >
              <h2
                id="modal-title"
                className="text-2xl font-bold mb-5 text-gray-900 dark:text-white"
              >
                Política de tratamiento de datos personales
              </h2>
              <p className="mb-5 text-gray-800 dark:text-gray-300 leading-relaxed">
                En cumplimiento de la Ley 1581 de 2012 y demás normatividad vigente en
                Colombia, informamos que los datos personales que usted suministre serán
                tratados con estricta confidencialidad y exclusivamente para fines de
                cotización y servicios turísticos ofrecidos por nuestra empresa.
              </p>
              <p className="mb-5 text-gray-800 dark:text-gray-300 leading-relaxed">
                Usted tiene derecho a conocer, actualizar y rectificar sus datos,
                así como a solicitar prueba de la autorización otorgada para el
                tratamiento, y a revocar dicha autorización cuando lo considere
                pertinente.
              </p>
              <p className="mb-5 text-gray-800 dark:text-gray-300 leading-relaxed">
                Para mayor información sobre nuestras políticas de privacidad y
                tratamiento de datos, puede contactarnos para solicitar más información.
              </p>
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-3xl font-bold focus:outline-none"
                aria-label="Cerrar política de privacidad"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
