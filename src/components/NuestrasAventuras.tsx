"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const TOTAL = 13;
const AUTO_TIME = 5200;

export default function Experiencias() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setIndex((p) => (p + 1) % TOTAL);
    }, AUTO_TIME);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative w-full py-24 overflow-hidden"
      style={{
        backgroundColor: "#c6d0dc",
      }}
    >
      {/* HEADER */}
      <div className="text-center mb-14 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 drop-shadow-sm">
          Experiencias reales
        </h2>
        <p className="mt-4 text-lg text-blue-700 max-w-xl mx-auto">
          Momentos auténticos vividos por quienes confiaron en nosotros
        </p>
      </div>

      {/* CARRUSEL */}
      <div className="relative w-full max-w-[1200px] mx-auto px-4">
        <div
          className="
            relative
            w-full
            h-[68vh]
            sm:h-[60vh]
            md:h-[520px]
            rounded-3xl
            overflow-hidden
            bg-slate-900
          "
        >
          <AnimatePresence initial={false} custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir > 0 ? 80 : -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir > 0 ? -80 : 80 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* FONDO SUAVE */}
              <Image
                src={`/clientes/${index + 1}.jpg`}
                alt=""
                fill
                className="
                  object-cover
                  scale-105
                  blur-lg
                  brightness-75
                "
                priority
              />

              {/* IMAGEN PRINCIPAL */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={`/clientes/${index + 1}.jpg`}
                  alt={`Experiencia ${index + 1}`}
                  fill
                  className="object-contain px-6 sm:px-10"
                  sizes="(max-width:768px)100vw,1200px"
                  priority
                />
              </div>

              {/* OVERLAY CONTROLADO */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* INDICADORES */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: TOTAL }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDir(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-8 bg-blue-700"
                  : "w-2 bg-blue-400/60"
              }`}
              aria-label={`Imagen ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
