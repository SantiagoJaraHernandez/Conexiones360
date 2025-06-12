'use client';

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const direccion = "CRA. 7 No 6-34 LOCAL 5 CENTRO, Neiva, Colombia";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-6 sm:px-12 relative">
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-6">
        {/* Dirección */}
        <div>
          <h3 className="text-base font-semibold mb-2 border-b border-gray-700 pb-1 uppercase tracking-wide">
            Oficina Neiva
          </h3>
          <p className="flex items-center gap-2 text-sm">
            <FaMapMarkerAlt className="text-blue-500" />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccion)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition underline"
              aria-label="Abrir ubicación en Google Maps"
            >
              {direccion}
            </a>
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-base font-semibold mb-2 border-b border-gray-700 pb-1 uppercase tracking-wide">
            Contáctanos
          </h3>
          <p className="flex items-center gap-2 text-sm mb-1">
            <FaPhoneAlt className="text-blue-500" />
            <a
              href="tel:+573162276795"
              className="hover:text-blue-400 transition underline"
            >
              316 227 6795
            </a>
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
            15 años de experiencia
          </p>
        </div>

        {/* Horarios */}
        <div>
          <h3 className="text-base font-semibold mb-2 border-b border-gray-700 pb-1 uppercase tracking-wide">
            Horarios
          </h3>
          <p className="flex items-center gap-2 text-sm mb-1">
            <FaClock className="text-blue-500" />
            Lunes a Viernes: 7:30 AM - 6:00 PM
          </p>
          <p className="flex items-center gap-2 text-sm">
            <FaClock className="text-blue-500" />
            Sábados: 8:00 AM - 1:00 PM
          </p>
        </div>

        {/* Redes Sociales */}
        <div>
          <h3 className="text-base font-semibold mb-2 border-b border-gray-700 pb-1 uppercase tracking-wide">
            Síguenos
          </h3>
          <div className="flex gap-3 mt-2">
            <a
              href="https://www.facebook.com/profile.php?id=100057375912248"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://www.instagram.com/conexiones_360/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://wa.me/573162276795"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-gray-400 hover:text-green-500 transition"
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@carlosperez.360"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-gray-400 hover:text-black transition"
            >
              <SiTiktok size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-xs select-none relative">
        &copy; Conexiones360 Todos los derechos reservados {new Date().getFullYear()}.
      </div>
    </footer>
  );
}
