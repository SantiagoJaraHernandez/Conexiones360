"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Modal from "react-modal";
import dayjs from "dayjs";
import "dayjs/locale/es";
import destinosData from "@/data/destinos.json";
import { FaWhatsapp } from "react-icons/fa";

dayjs.locale("es");

interface Destino {
  nombre: string;
  descripcion: string;
  precio: number;
  fechasDisponibles: string[];
  incluye: string[];
  tipo: string;
  modalidad: string;
  galeriaPath: string;
  galleryCount?: number;
  ubicacion: { ciudad: string; departamento: string };
}

if (typeof window !== "undefined") {
  Modal.setAppElement(document.getElementById("__next") || document.body);
}

const getProximaFecha = (d: Destino) => {
  const fechas = d.fechasDisponibles
    .map((f) => dayjs(f))
    .filter((f) => f.isAfter(dayjs(), "day"))
    .sort((a, b) => a.valueOf() - b.valueOf());
  return fechas.length > 0 ? fechas[0] : null;
};

const buildGallery = (d: Destino) =>
  Array.from(
    { length: d.galleryCount ?? 5 },
    (_, i) => `${d.galeriaPath}/${i + 1}.jpg`
  );

function DestinoCard({
  destino,
  abrirModal,
}: {
  destino: Destino;
  abrirModal: (d: Destino) => void;
}) {
  const hoy = dayjs();
  const imgPrincipal = buildGallery(destino)[0];
  const proximasFechas = destino.fechasDisponibles
    .filter((f) => dayjs(f).isAfter(hoy, "day"))
    .sort()
    .slice(0, 3);

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 120 }}
      onClick={() => abrirModal(destino)}
      className="cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden flex flex-col"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") abrirModal(destino);
      }}
      aria-label={`Ver detalles del destino ${destino.nombre}`}
    >
      <div className="relative w-full h-[280px] bg-slate-200">
        <Image
          src={imgPrincipal}
          alt={destino.nombre}
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, 33vw"
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col gap-3 flex-1 text-left">
        <h3 className="text-xl font-bold text-blue-700 dark:text-white">
          {destino.nombre}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
          {destino.descripcion}
        </p>
        <div className="flex flex-wrap gap-2 text-xs mt-auto" aria-label="Próximas fechas disponibles">
          {proximasFechas.length > 0 ? (
            proximasFechas.map((f) => (
              <span
                key={f}
                className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full"
              >
                {dayjs(f).format("D MMM")}
              </span>
            ))
          ) : (
            <span className="text-gray-500 dark:text-gray-400">Sin fechas próximas</span>
          )}
        </div>
        <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-2">
          Desde ${destino.precio.toLocaleString()} COP
        </p>
      </div>
    </motion.article>
  );
}

export default function Destinos() {
  const hoy = dayjs();

  const [modalAbierto, setModalAbierto] = useState(false);
  const [destinoSeleccionado, setDestinoSeleccionado] = useState<Destino | null>(
    null
  );
  const [fotoIndex, setFotoIndex] = useState(0);

  const destinosFiltrados = (destinosData as unknown as Destino[])
    .map((d) => ({ destino: d, proximaFecha: getProximaFecha(d) }))
    .filter(({ proximaFecha }) => proximaFecha !== null)
    .sort((a, b) => a.proximaFecha!.valueOf() - b.proximaFecha!.valueOf())
    .map(({ destino }) => destino);

  const abrirModal = (d: Destino) => {
    setDestinoSeleccionado(d);
    setFotoIndex(0);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setDestinoSeleccionado(null);
  };

  const cambiarFoto = (dir: "prev" | "next" | number) => {
    if (!destinoSeleccionado) return;
    const total = buildGallery(destinoSeleccionado).length;
    setFotoIndex((prev) =>
      typeof dir === "number"
        ? dir
        : dir === "prev"
        ? (prev - 1 + total) % total
        : (prev + 1) % total
    );
  };

  const fotoActual = () =>
    destinoSeleccionado ? buildGallery(destinoSeleccionado)[fotoIndex] : "";

  return (
    <section
      className="py-20 px-4 -mt-20 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/17125428/pexels-photo-17125428/free-photo-of-a-sunset-over-a-valley-with-mountains-and-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
      aria-label="Sección de destinos programados"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/50 dark:from-gray-900/50 dark:to-gray-900/40" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-blue-700 dark:text-white mb-12"
        >
          Nuestros destinos programados
        </motion.h2>

        {/* Grid de tarjetas */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {destinosFiltrados.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-300 col-span-full">
              No hay destinos próximos.
            </p>
          ) : (
            destinosFiltrados.map((destino) => (
              <DestinoCard
                key={destino.nombre}
                destino={destino}
                abrirModal={abrirModal}
              />
            ))
          )}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {modalAbierto && destinoSeleccionado && (
            <Modal
              isOpen={modalAbierto}
              onRequestClose={cerrarModal}
              className="
                relative
                w-full sm:w-[95%] max-w-6xl
                bg-white dark:bg-gray-900
                rounded-2xl p-6 md:p-10
                shadow-2xl
                flex flex-col lg:flex-row gap-6 lg:gap-8
              "
              overlayClassName="
                fixed inset-0 bg-black/60 backdrop-blur-sm
                flex justify-center md:items-center
                px-2 py-6 md:py-0 overflow-y-auto z-50
              "
              contentLabel={`Detalles del destino ${destinoSeleccionado.nombre}`}
            >
              <button
                onClick={cerrarModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-3xl font-bold"
                aria-label="Cerrar modal"
              >
                &times;
              </button>

              {/* Carrusel */}
              <div className="relative flex-shrink-0 w-full aspect-[4/3] lg:w-1/2 rounded-xl overflow-hidden shadow-md bg-slate-200">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={fotoActual()}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={fotoActual()}
                      alt={destinoSeleccionado.nombre}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                </AnimatePresence>

                {buildGallery(destinoSeleccionado).length > 1 && (
                  <>
                    <button
                      onClick={() => cambiarFoto("prev")}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white rounded-full p-2 z-20"
                      aria-label="Imagen anterior"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => cambiarFoto("next")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white rounded-full p-2 z-20"
                      aria-label="Imagen siguiente"
                    >
                      ›
                    </button>

                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                      {buildGallery(destinoSeleccionado).map((_, i) => (
                        <span
                          key={i}
                          onClick={() => cambiarFoto(i)}
                          className={`w-3 h-3 rounded-full cursor-pointer ${
                            i === fotoIndex ? "bg-white" : "bg-white/50"
                          }`}
                          aria-label={`Ir a imagen ${i + 1}`}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") cambiarFoto(i);
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Información */}
              <div className="flex flex-col gap-6 flex-1 text-left text-gray-800 dark:text-gray-300">
                <h2 className="text-3xl font-bold text-blue-700 dark:text-white">
                  {destinoSeleccionado.nombre}
                </h2>

                <p>{destinoSeleccionado.descripcion}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-blue-600">Ubicación</p>
                    <p>
                      {destinoSeleccionado.ubicacion.ciudad},{" "}
                      {destinoSeleccionado.ubicacion.departamento}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-600">
                      Tipo / Modalidad
                    </p>
                    <p>
                      {destinoSeleccionado.tipo} / {destinoSeleccionado.modalidad}
                    </p>
                  </div>

                  <div className="sm:col-span-2">
                    <p className="font-semibold text-blue-600">Incluye</p>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      {destinoSeleccionado.incluye.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="sm:col-span-2">
                    <p className="font-semibold text-blue-600">
                      Fechas disponibles
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {destinoSeleccionado.fechasDisponibles
                        .filter((f) => dayjs(f).isAfter(hoy, "day"))
                        .sort()
                        .map((f) => (
                          <span
                            key={f}
                            className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 px-3 py-1 rounded-full text-xs"
                          >
                            {dayjs(f).format("dddd, D [de] MMMM")}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>

                {/* CTA WhatsApp */}
                <a
                  href={
                    "https://wa.me/573001234567?text=" +
                    encodeURIComponent(
                      `Hola Conexiones360, quiero más información sobre el viaje a ${destinoSeleccionado.nombre}.`
                    )
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 mx-auto px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow mt-6 w-full max-w-sm"
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
