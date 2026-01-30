import Hero from "@/components/Hero";
import MisionVision from "@/components/MisionVision";
import PorQueElegirnos from "@/components/PorQueElegirnos";
import Destinos from "@/components/Destinos";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NuestrasAventuras from "@/components/NuestrasAventuras";
import ServicioTransporte from "@/components/ServicioTransporte";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* H1 SEO (principal del sitio) */}
      <h1 className="sr-only">
        Agencia de viajes en Neiva | Conexiones360
      </h1>

      <Navbar />

      {/* Texto SEO introductorio visible */}
      <p className="sr-only">
        Conexiones360 es una agencia de viajes en Neiva con más de 15 años de
        experiencia, especializada en paquetes turísticos nacionales e
        internacionales, excursiones, pasadías y transporte turístico desde
        Neiva y el Huila.
      </p>

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* Misión y Visión */}
      <section id="mision" className="pt-24 bg-[#cbd7e6]">
        <MisionVision />
      </section>

      {/* Por qué elegirnos */}
      <section id="porque" className="pt-24 bg-[#cbd7e6]">
        <PorQueElegirnos />
      </section>

      {/* Transporte */}
      <section id="transporte" className="pt-24 bg-[#cbd7e6]">
        <ServicioTransporte />
      </section>

      {/* Aventuras */}
      <section id="aventuras" className="pt-24 bg-[#cbd7e6]">
        <NuestrasAventuras />
      </section>

      {/* Destinos */}
      <section id="destinos" className="pt-24 bg-[#cbd7e6]">
        <Destinos />
      </section>

      <WhatsAppButton />
      <Footer />
    </main>
  );
}
