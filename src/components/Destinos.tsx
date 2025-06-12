"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Modal from "react-modal";
import dayjs from "dayjs";
import "dayjs/locale/es";
import destinosData from "@/data/destinos.json";

dayjs.locale("es");

// Definir tipo de destino
interface Destino {
  nombre: string;
  descripcion: string;
  precio: number;
  flyerLocalPath: string;
  fechaDisponible: string;
  tipo: string;
  modalidad: string;
  ubicacion: {
    ciudad: string;
    departamento: string;
  };
}

if (typeof window !== "undefined") {
  const root = document.getElementById("__next") || document.body;
  if (root) Modal.setAppElement(root);
}

const meses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

export default function Destinos() {
  const fechaActual = dayjs();
  const mesActual = fechaActual.month();
  const [mesSeleccionado, setMesSeleccionado] = useState<number>(mesActual);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [destinoSeleccionado, setDestinoSeleccionado] = useState<Destino | null>(null);

  const mesesConDisponibilidad = (destinosData as Destino[]).reduce((acc: number[], destino: Destino) => {
    const mes = dayjs(destino.fechaDisponible).month();
    const fechaDestino = dayjs(destino.fechaDisponible);
    if (
      fechaDestino.isAfter(fechaActual, 'day') &&
      !acc.includes(mes)
    ) {
      acc.push(mes);
    }
    return acc;
  }, []);

  const destinosFiltrados = (destinosData as Destino[])
    .filter(destino => dayjs(destino.fechaDisponible).month() === mesSeleccionado)
    .sort((a, b) => dayjs(a.fechaDisponible).valueOf() - dayjs(b.fechaDisponible).valueOf());

  const abrirModal = (destino: Destino) => {
    setDestinoSeleccionado(destino);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setDestinoSeleccionado(null);
  };

  return (
    <section
      className="py-20 px-4 bg-cover -mt-10 bg-center relative"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=compress&cs=tinysrgb&w=1260')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90 dark:from-gray-900/90 dark:via-gray-900/80 dark:to-gray-900/90 z-0" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl font-bold text-blue-700 dark:text-white mb-10 drop-shadow"
        >
          Destinos disponibles este año
        </motion.h2>

        {/* Filtro de meses */}
        <motion.div className="flex flex-wrap justify-center gap-3 mb-10">
          {meses.map((mes, idx) => {
            const desactivado = !mesesConDisponibilidad.includes(idx);
            return (
              <button
                key={idx}
                onClick={() => !desactivado && setMesSeleccionado(idx)}
                disabled={desactivado}
                className={`px-4 py-2 rounded-full font-semibold text-sm shadow-md transition-all
                  ${desactivado
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : idx === mesSeleccionado
                    ? "bg-blue-600 text-white ring-2 ring-offset-2 ring-blue-400"
                    : "bg-white text-gray-700 dark:bg-gray-700 dark:text-white hover:bg-blue-100"
                  }`}
              >
                {mes}
              </button>
            );
          })}
        </motion.div>

        {/* Lista de destinos */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {destinosFiltrados.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-300 col-span-full">No hay destinos disponibles para este mes.</p>
          ) : (
            destinosFiltrados.map((destino, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => abrirModal(destino)}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition cursor-pointer overflow-hidden flex flex-col"
              >
                <div className="relative w-full aspect-[4/3] rounded-t-xl overflow-hidden shadow-md">
                  <Image
                    src={destino.flyerLocalPath}
                    alt={destino.nombre}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="p-6 text-left space-y-3 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-white">{destino.nombre}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{destino.descripcion}</p>
                  <p className="text-lg font-bold text-green-600 dark:text-green-400 mt-auto">
                    ${destino.precio.toLocaleString()} COP
                  </p>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {modalAbierto && destinoSeleccionado && (
            <Modal
              isOpen={modalAbierto}
              onRequestClose={cerrarModal}
              className="relative bg-white dark:bg-gray-900 rounded-xl max-w-5xl w-[95%] mx-auto p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
              overlayClassName="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4 backdrop-blur-sm"
            >
              <button
                onClick={cerrarModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl transition"
              >
                ✖
              </button>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="relative w-full md:w-1/2 aspect-[4/3] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-300 dark:border-gray-700">
                  <Image
                    src={destinoSeleccionado.flyerLocalPath}
                    alt={destinoSeleccionado.nombre}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="md:w-1/2 space-y-6 text-left">
                  <h2 className="text-3xl font-bold text-blue-700 dark:text-white">
                    {destinoSeleccionado.nombre}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">{destinoSeleccionado.descripcion}</p>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <li><strong>Fecha:</strong> {dayjs(destinoSeleccionado.fechaDisponible).format("D [de] MMMM")}</li>
                    <li><strong>Ubicación:</strong> {destinoSeleccionado.ubicacion.ciudad}, {destinoSeleccionado.ubicacion.departamento}</li>
                    <li><strong>Tipo:</strong> {destinoSeleccionado.tipo}</li>
                    <li><strong>Modalidad:</strong> {destinoSeleccionado.modalidad}</li>
                  </ul>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    ${destinoSeleccionado.precio.toLocaleString()} COP
                  </p>
                  <a
                    href={`https://wa.me/573162276795?text=Hola%2C%20me%20interesa%20el%20viaje%20a%20${encodeURIComponent(destinoSeleccionado.nombre)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded transition"
                  >
                    Contactar por WhatsApp
                  </a>
                </div>
              </div>
            </Modal>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
