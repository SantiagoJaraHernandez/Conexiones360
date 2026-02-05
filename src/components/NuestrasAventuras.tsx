"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const TOTAL = 13;
const AUTO_TIME = 5500;
const SWIPE_CONFIDENCE = 80;

const captions = [
  "Momentos que se sienten para siempre",
  "Viajar también es conectar",
  "Historias que nacen en el camino",
  "Recuerdos que no se olvidan",
  "Experiencias que sí valen la pena",
];

export default function Experiencias() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  /* ---------- AUTOPLAY INTELIGENTE ---------- */
  useEffect(() => {
    if (paused) return;

    timeoutRef.current = setTimeout(() => {
      setDir(1);
      setIndex((p) => (p + 1) % TOTAL);
    }, AUTO_TIME);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, paused]);

  /* ---------- PRELOAD SIGUIENTE IMAGEN ---------- */
  useEffect(() => {
    const next = new window.Image();
    next.src = `/clientes/${(index + 2) % TOTAL || TOTAL}.jpg`;
  }, [index]);

  /* ---------- SWIPE CON INERCIA REAL ---------- */
  const handleDragEnd = (_: any, info: any) => {
    const swipe = info.offset.x + info.velocity.x;

    if (swipe < -SWIPE_CONFIDENCE) {
      setDir(1);
      setIndex((p) => (p + 1) % TOTAL);
    } else if (swipe > SWIPE_CONFIDENCE) {
      setDir(-1);
      setIndex((p) => (p - 1 + TOTAL) % TOTAL);
    }

    setPaused(false);
  };

  return (
    <section
      className="relative w-full py-24 overflow-hidden"
      style={{ backgroundColor: "#c6d0dc" }}
    >
      {/* ---------- HEADER ---------- */}
      <div className="text-center mb-14 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800">
          Experiencias reales
        </h2>
        <p className="mt-4 text-lg text-blue-700 max-w-xl mx-auto">
          Viajes vividos, recuerdos auténticos
        </p>
      </div>

      {/* ---------- CARRUSEL ---------- */}
      <div className="relative w-full max-w-[1180px] mx-auto px-4">
        <div className="relative h-[65vh] sm:h-[58vh] md:h-[520px] rounded-3xl overflow-hidden bg-slate-900">
          <AnimatePresence initial={false} custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.9}
              onDragStart={() => setPaused(true)}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, x: dir > 0 ? 120 : -120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir > 0 ? -120 : 120 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 30,
              }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              {/* ---------- BOKEH CONTROLADO ---------- */}
              <Image
                src={`/clientes/${index + 1}.jpg`}
                alt=""
                fill
                className="object-cover scale-110 blur-md brightness-75"
                priority
              />

              {/* ---------- IMAGEN PRINCIPAL ---------- */}
              <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-10">
                <Image
                  src={`/clientes/${index + 1}.jpg`}
                  alt={`Experiencia ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width:768px) 100vw, 1200px"
                  priority
                />
              </div>

              {/* ---------- TEXTO EMOCIONAL SUTIL ---------- */}
              <motion.div
                key={`caption-${index}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute bottom-6 left-6 right-6 md:left-10 md:right-10 z-10"
              >
                <p className="text-white text-sm md:text-base max-w-md font-medium" 
                style={{
                  textShadow: "0 2px 10px rgba(0,0,0,0.55)",
                }}>
                  {captions[index % captions.length]}
                </p>
              </motion.div>

              {/* ---------- OVERLAY ---------- */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ---------- INDICADORES ---------- */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setPaused(true);
                setDir(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-blue-700"
                  : "w-2 bg-blue-400/50 hover:bg-blue-500"
              }`}
              aria-label={`Imagen ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
