"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPlane, FaBus } from "react-icons/fa";
import { flyers, FlyerPlan } from "@/data/flyers/flyers";

const mesesOrdenados = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
] as const;

type Mes = (typeof mesesOrdenados)[number];

export default function CatalogoFlyers() {
  const [tipoActivo, setTipoActivo] =
    useState<"terrestre" | "aereo">("aereo");

  const [mesActivo, setMesActivo] = useState<Mes | null>(null);

  const mesActualIndex = new Date().getMonth();

  const mesesVisibles = mesesOrdenados.filter((mes, index) => {
    if (index < mesActualIndex) return false;

    return flyers.some(
      f => f.tipo === "terrestre" && f.mes === mes
    );
  });

  // Auto seleccionar primer mes válido
  useEffect(() => {
    if (!mesActivo && mesesVisibles.length) {
      setMesActivo(mesesVisibles[0]);
    }
  }, [mesActivo, mesesVisibles]);

  const filtrados =
    tipoActivo === "aereo"
      ? flyers.filter(f => f.tipo === "aereo")
      : flyers.filter(
          f => f.tipo === "terrestre" && f.mes === mesActivo
        );

  return (
    <section className="py-20 px-4 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
          Catálogo de Viajes
        </h2>

        {/* TIPO */}
        <div className="flex justify-center gap-4 mb-10">
          <TipoBtn
            activo={tipoActivo === "aereo"}
            onClick={() => setTipoActivo("aereo")}
            color="indigo"
            icon={<FaPlane />}
            text="Aéreos Exclusivos"
          />

          <TipoBtn
            activo={tipoActivo === "terrestre"}
            onClick={() => setTipoActivo("terrestre")}
            color="green"
            icon={<FaBus />}
            text="Terrestres"
          />
        </div>

        {/* MESES */}
        {tipoActivo === "terrestre" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {mesesVisibles.map(mes => (
              <button
                key={mes}
                onClick={() => setMesActivo(mes)}
                className={`px-4 py-2 rounded-full font-bold capitalize transition-all ${
                  mesActivo === mes
                    ? "bg-blue-600 text-white scale-105"
                    : "bg-white text-blue-600 shadow hover:scale-105"
                }`}
              >
                {mes}
              </button>
            ))}
          </motion.div>
        )}

        {/* GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${tipoActivo}-${mesActivo}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filtrados.map(plan => (
              <FlyerCard key={plan.id} plan={plan} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
function FlyerCard({ plan }: { plan: FlyerPlan }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
    >
      <div className="relative">
        <Image
          src={plan.imagen}
          alt={plan.titulo}
          width={600}
          height={800}
          className="w-full object-cover"
          priority
        />

        {plan.tipo === "aereo" && (
          <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            ✈️ Aéreo Exclusivo
          </span>
        )}
      </div>

      <div className="p-5 text-center">
        <h3 className="text-xl font-extrabold">{plan.titulo}</h3>

        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {plan.fechas.map((f, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full"
            >
              {f}
            </span>
          ))}
        </div>

        <p className="text-3xl font-extrabold text-green-600 mt-4">
          ${plan.precio.toLocaleString()} COP
        </p>
      </div>

      <a
        href={`https://wa.me/573162276795?text=${encodeURIComponent(
          plan.whatsappBase
        )}`}
        target="_blank"
        className="mt-auto flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 text-lg transition"
      >
        <FaWhatsapp className="text-2xl" />
        Reservar por WhatsApp
      </a>
    </motion.div>
  );
}
function TipoBtn({
  activo,
  onClick,
  icon,
  text,
  color,
}: any) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
        activo
          ? `bg-${color}-600 text-white scale-105`
          : `bg-white text-${color}-600 shadow hover:scale-105`
      }`}
    >
      {icon}
      {text}
    </button>
  );
}
