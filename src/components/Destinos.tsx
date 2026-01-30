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

const colorClasses = {
  indigo: {
    active: "bg-indigo-600 text-white",
    inactive: "bg-white text-indigo-600",
  },
  green: {
    active: "bg-green-600 text-white",
    inactive: "bg-white text-green-600",
  },
};

export default function CatalogoFlyers() {
  const [tipoActivo, setTipoActivo] =
    useState<"terrestre" | "aereo">("terrestre");

  const [mesActivo, setMesActivo] = useState<Mes | null>(null);

  const mesActualIndex = new Date().getMonth();

  const mesesVisibles = mesesOrdenados.filter((mes, index) => {
    if (index < mesActualIndex) return false;

    return flyers.some(
      f => f.tipo === "terrestre" && f.mes === mes
    );
  });

  useEffect(() => {
    if (!mesActivo && mesesVisibles.length) {
      setMesActivo(mesesVisibles[0]);
    }
  }, [mesActivo, mesesVisibles]);

  const filtrados =
    tipoActivo === "aereo"
      ? flyers.filter(f => f.tipo === "aereo")
      : flyers.filter(f => {
          if (f.tipo !== "terrestre") return false;
          if (f.mes !== mesActivo) return false;

          const indexMesFlyer = mesesOrdenados.indexOf(f.mes);
          return indexMesFlyer >= mesActualIndex;
        });

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-indigo-50 via-indigo-100/80 to-indigo-200/70">
      {/* decor blur */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-14">
          Catálogo de Viajes
        </h2>

        {/* TIPO */}
        <div className="flex justify-center gap-4 mb-12">
          <TipoBtn
            activo={tipoActivo === "terrestre"}
            onClick={() => setTipoActivo("terrestre")}
            color="green"
            icon={<FaBus />}
            text="Terrestres"
          />
            <TipoBtn
            activo={tipoActivo === "aereo"}
            onClick={() => setTipoActivo("aereo")}
            color="indigo"
            icon={<FaPlane />}
            text="Aéreos Exclusivos"
          />
        </div>

        {/* MESES */}
        {tipoActivo === "terrestre" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3 mb-14"
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
            transition={{ duration: 0.35 }}
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
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden flex flex-col"
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

      <div className="p-6 text-center">
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

        <p className="text-3xl font-extrabold text-green-600 mt-5">
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

type TipoBtnProps = {
  activo: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  text: string;
  color: "indigo" | "green";
};

function TipoBtn({
  activo,
  onClick,
  icon,
  text,
  color,
}: TipoBtnProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
        activo
          ? `${colorClasses[color].active} scale-105`
          : `${colorClasses[color].inactive} shadow hover:scale-105`
      }`}
    >
      {icon}
      {text}
    </button>
  );
}
