"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Modal from "react-modal";
import dayjs from "dayjs";
import "dayjs/locale/es";
import destinosData from "@/data/destinos.json";
import { FaWhatsapp } from "react-icons/fa";

dayjs.locale("es");

/* Tipado */
interface PlanAereo {
  hotel: string;
  plan: string;
  precio: number;
  descripcionPlan?: string;
}

interface Destino {
  nombre: string;
  descripcion: string;
  precio: number;
  fechasDisponibles: string[];
  fechasRango?: string[];
  incluye: string[];
  tipo: string;
  modalidad: string;
  galeriaPath: string;
  galleryCount?: number;
  ubicacion: { ciudad: string; departamento: string };
  planes?: PlanAereo[];
}

/* Accesibilidad react-modal */
if (typeof window !== "undefined") {
  Modal.setAppElement(document.getElementById("__next") || document.body);
}

/* Helpers */
const getProximaFecha = (d: Destino) => {
  const futuras = d.fechasDisponibles
    .map((f) => dayjs(f))
    .filter((f) => f.isAfter(dayjs(), "day"))
    .sort((a, b) => a.valueOf() - b.valueOf());
  return futuras.length ? futuras[0] : null;
};

const buildGallery = (d: Destino) =>
  Array.from({ length: d.galleryCount ?? 5 }, (_, i) => `${d.galeriaPath}/${i + 1}.jpg`);

/* Tarjeta de destino */
function DestinoCard({
  destino,
  abrirModal,
}: {
  destino: Destino;
  abrirModal: (d: Destino) => void;
}) {
  const hoy = dayjs();
  const portada = buildGallery(destino)[0];

  const fechasMostrar = destino.fechasRango?.length
    ? destino.fechasRango.slice(0, 3)
    : destino.fechasDisponibles
        .filter((f) => dayjs(f).isAfter(hoy, "day"))
        .sort()
        .slice(0, 3)
        .map((f) => dayjs(f).format("D MMM"));

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 120 }}
      onClick={() => abrirModal(destino)}
      className="cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden flex flex-col h-[420px]"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") abrirModal(destino);
      }}
      aria-label={`Ver detalles del destino ${destino.nombre}`}
    >
      <div className="relative w-full h-[240px] bg-slate-200 shrink-0">
        <Image
          src={portada}
          alt={destino.nombre}
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, 33vw"
          loading="lazy"
        />
      </div>

      <div className="p-4 flex flex-col flex-1 text-left">
        <h3 className="text-lg font-bold text-blue-700 dark:text-white line-clamp-2">{destino.nombre}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">{destino.descripcion}</p>

        <div className="flex flex-wrap gap-2 text-xs mt-auto pt-2">
          {fechasMostrar.length ? (
            fechasMostrar.map((f, i) => (
              <span
                key={f + i}
                className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full"
              >
                {f}
              </span>
            ))
          ) : (
            <span className="text-gray-500 dark:text-gray-400">Sin fechas próximas</span>
          )}
        </div>

        <p className="text-base font-bold text-green-600 dark:text-green-400 mt-2">
          Desde ${destino.precio.toLocaleString()} COP
        </p>
      </div>
    </motion.article>
  );
}

/* Componente principal */
export default function Destinos() {
  const hoy = dayjs();
  const [filtroModalidad, setFiltroModalidad] = useState<"Terrestre" | "Aéreo" | "Huila">("Terrestre");
  const [modalAbierto, setModalAbierto] = useState(false);
  const [destinoSel, setDestinoSel] = useState<Destino | null>(null);
  const [fotoIdx, setFotoIdx] = useState(0);

  const destinosFiltrados = (destinosData as Destino[])
    .filter((d) => {
      const modalidadLower = d.modalidad.toLowerCase();
      if (filtroModalidad === "Huila") return d.ubicacion.departamento.toLowerCase() === "huila";
      if (filtroModalidad.toLowerCase() === "aéreo") return modalidadLower === "aéreo";
      if (filtroModalidad === "Terrestre") {
        const prox = getProximaFecha(d);
        return prox !== null && modalidadLower === "terrestre";
      }
      return false;
    })
    .map((d) => ({ d, prox: getProximaFecha(d) }))
    .sort((a, b) => {
      if (!a.prox && !b.prox) return 0;
      if (!a.prox) return 1;
      if (!b.prox) return -1;
      return a.prox.valueOf() - b.prox.valueOf();
    })
    .map(({ d }) => d);

  const abrirModal = (d: Destino) => {
    setDestinoSel(d);
    setFotoIdx(0);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setDestinoSel(null);
  };

  const cambiarFoto = (dir: "prev" | "next" | number) => {
    if (!destinoSel) return;
    const total = buildGallery(destinoSel).length;
    setFotoIdx((prev) =>
      typeof dir === "number"
        ? dir
        : dir === "prev"
        ? (prev - 1 + total) % total
        : (prev + 1) % total
    );
  };

  const fotoActual = () => (destinoSel ? buildGallery(destinoSel)[fotoIdx] : "");

  useEffect(() => {
    if (!modalAbierto || !destinoSel) return;
    const timer = setInterval(() => cambiarFoto("next"), 5000);
    return () => clearInterval(timer);
  }, [modalAbierto, destinoSel]);

  return (
    <section
      className="py-20 px-4 -mt-20 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/50 dark:from-gray-900/50 dark:to-gray-900/40" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <AnimatePresence mode="wait">
          <motion.h2
            key={filtroModalidad}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-blue-700 dark:text-white mb-6"
          >
            {filtroModalidad === "Huila"
              ? "Nuestros Planes Personalizados en Huila"
              : filtroModalidad === "Aéreo"
              ? "Nuestros Planes Aéreos Personalizados"
              : "Nuestros Planes Terrestres Programados"}
          </motion.h2>
        </AnimatePresence>

        <div className="inline-flex rounded-xl bg-blue-100 dark:bg-blue-900 p-1 mb-12 select-none">
          {(["Terrestre", "Aéreo", "Huila"] as const).map((mod) => (
            <button
              key={mod}
              onClick={() => setFiltroModalidad(mod)}
              className={`px-5 py-2 rounded-lg font-semibold transition-colors ${
                filtroModalidad === mod
                  ? "bg-white text-blue-700 dark:bg-blue-700 dark:text-white shadow"
                  : "text-blue-700 dark:text-blue-300 hover:bg-white/80 dark:hover:bg-blue-800"
              }`}
              aria-pressed={filtroModalidad === mod}
              type="button"
            >
              {mod}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filtroModalidad}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[1fr]"
          >
            {destinosFiltrados.length ? (
              destinosFiltrados.map((d) => (
                <DestinoCard key={`${d.nombre}-${d.precio}`} destino={d} abrirModal={abrirModal} />
              ))
            ) : (
              <p className="text-gray-600 dark:text-gray-300 col-span-full">
                No hay destinos próximos.
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {modalAbierto && destinoSel && (
            <Modal
              isOpen={modalAbierto}
              onRequestClose={cerrarModal}
              className="relative w-full max-w-6xl bg-white/90 dark:bg-gray-900/80 rounded-2xl p-4 md:p-6 shadow-2xl flex flex-col lg:flex-row gap-6 overflow-hidden max-h-[95vh]"
              overlayClassName="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-start md:items-center px-2 py-6 md:py-0 overflow-y-auto z-50"
              contentLabel={`Detalles del destino ${destinoSel.nombre}`}
            >
              {/* Carrusel */}
              <div className="relative z-10 w-full lg:w-1/2 h-[250px] sm:h-[300px] lg:h-[80vh] rounded-xl overflow-hidden shadow-md">
                <div className="absolute inset-0">
                  <Image
                    src={fotoActual()}
                    alt=""
                    fill
                    className="object-cover blur-xl scale-110"
                    loading="lazy"
                  />
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={fotoActual()}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={fotoActual()}
                      alt={destinoSel.nombre}
                      fill
                      className="object-contain"
                      loading="lazy"
                    />
                  </motion.div>
                </AnimatePresence>
                {buildGallery(destinoSel).length > 1 && (
                  <>
                    <button
                      onClick={() => cambiarFoto("prev")}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white rounded-full p-2 z-20"
                      aria-label="Anterior"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => cambiarFoto("next")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white rounded-full p-2 z-20"
                      aria-label="Siguiente"
                    >
                      ›
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                      {buildGallery(destinoSel).map((_, i) => (
                        <span
                          key={i}
                          onClick={() => cambiarFoto(i)}
                          className={`w-3 h-3 rounded-full cursor-pointer ${
                            i === fotoIdx ? "bg-white" : "bg-white/50"
                          }`}
                          role="button"
                          tabIndex={0}
                          aria-label={`Imagen ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Información */}
              <div className="relative z-10 flex flex-col gap-6 flex-1 text-left text-gray-800 dark:text-gray-300 overflow-y-auto max-h-[70vh] pr-1">
                <button
                  onClick={cerrarModal}
                  className="absolute top-0 right-0 text-gray-400 hover:text-red-500 text-3xl font-bold"
                  aria-label="Cerrar"
                >
                  &times;
                </button>

                <div className="mt-10 lg:mt-0 flex flex-col gap-6">
                  <h2 className="text-3xl font-bold text-blue-700 dark:text-white">{destinoSel.nombre}</h2>
                  <p>{destinoSel.descripcion}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-blue-600">Ubicación</p>
                      <p>{destinoSel.ubicacion.ciudad}, {destinoSel.ubicacion.departamento}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-600">Tipo / Modalidad</p>
                      <p>{destinoSel.tipo} / {destinoSel.modalidad}</p>
                    </div>

                    {destinoSel.modalidad.toLowerCase() === "aéreo" && destinoSel.planes?.length ? (
                      <div className="sm:col-span-2">
                        <p className="font-semibold text-blue-600">Planes disponibles</p>
                        <ul className="list-disc list-inside mt-1 space-y-1">
                          {destinoSel.planes.map((plan, idx) => (
                            <li key={idx}>
                              <strong>{plan.hotel}</strong> / Plan: {plan.plan} — Desde ${plan.precio.toLocaleString()} COP
                              {plan.descripcionPlan ? ` (${plan.descripcionPlan})` : ""}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    <div className="sm:col-span-2">
                      <p className="font-semibold text-blue-600">Incluye</p>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        {destinoSel.incluye.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="sm:col-span-2">
                      <p className="font-semibold text-blue-600">Fechas disponibles</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {(destinoSel.fechasRango?.length
                          ? destinoSel.fechasRango
                          : destinoSel.fechasDisponibles
                              .filter((f) => dayjs(f).isAfter(hoy, "day"))
                              .sort()
                              .map((f) => dayjs(f).format("dddd, D [de] MMMM"))
                        ).map((f, i) => (
                          <span
                            key={f + i}
                            className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 px-3 py-1 rounded-full text-xs"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={
                    "https://wa.me/573162276795?text=" +
                    encodeURIComponent(`Hola Conexiones360, quiero más información sobre el viaje a ${destinoSel.nombre}.`)
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 mx-auto px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow w-full max-w-sm flex-shrink-0"
                >
                  <FaWhatsapp className="w-6 h-6" />
                  Solicitar información
                </a>
              </div>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
