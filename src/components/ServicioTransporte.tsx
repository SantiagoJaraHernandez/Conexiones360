"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBusAlt } from "react-icons/fa";

const beneficios = [
  "Movilizamos grupos con comodidad",
  "Ideal para empresas, colegios y particulares",
  "Cobertura nacional e intermunicipal",
  "Confort y seguridad garantizada",
  "Viajes, excursiones, peregrinaciones y traslados",
  "Flota moderna y conductores profesionales",
];

const buses = [
  { id: 1, nombre: "Vans 7 puestos" },
  { id: 2, nombre: "Vans 18 puestos" },
  { id: 3, nombre: "Busetón 35 puestos" },
  { id: 4, nombre: "Bus 42 puestos" },
];

const descripciones = {
  1: "Ideal para pequeños grupos o familias. Compacta, cómoda y lista para cualquier viaje cercano o urbano.",
  2: "Perfecta para excursiones y traslados empresariales. Espaciosa, segura y eficiente para grupos medianos.",
  3: "Busetón con amplio espacio para excursiones largas. Excelente balance entre capacidad y comodidad.",
  4: "Autobús turístico de alta capacidad. Ideal para viajes largos con todos los lujos y seguridad garantizada.",
};

export default function ServicioTransporte() {
  return (
    <section className="py-24 bg-[#c6d0dc]" id="transporte">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-6 font-display">
          Servicio Especial de Transporte Turístico
          <span className="block h-1 w-24 bg-blue-700 mt-3 mx-auto rounded-full" />
        </h2>

        <p className="text-center text-gray-700 mb-12 text-base md:text-lg max-w-2xl mx-auto">
          Viaja seguro y con comodidad en nuestros vehículos propios. Perfecto para todo tipo de grupos.
        </p>

        {/* Beneficios */}
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {beneficios.map((b, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white p-6 rounded-2xl shadow-md border border-blue-100 hover:shadow-xl transition-all duration-300 flex items-start gap-4"
            >
              <FaBusAlt className="text-blue-700 mt-1 flex-shrink-0" size={22} />
              <span className="text-blue-900 font-medium text-base">{b}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Galería de buses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {buses.map((bus) => (
            <motion.div
              key={bus.id}
              className="group cursor-pointer transition-transform transform hover:scale-105 active:animate-pulse"
            >
              {/* Imagen */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-white">
                <Image
                  src={`/Buses/${bus.id}.jpg`}
                  alt={bus.nombre}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>

              {/* Nombre debajo con subrayado animado */}
              <div className="text-center mt-3">
                <p className="text-blue-900 font-semibold text-base relative inline-block after:block after:h-[2px] after:bg-blue-700 after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300">
                  {bus.nombre}
                </p>
              </div>

              {/* Descripción justo debajo del nombre */}
              <p className="text-gray-700 text-sm text-center mt-1 px-2">
                {descripciones[bus.id as keyof typeof descripciones]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
