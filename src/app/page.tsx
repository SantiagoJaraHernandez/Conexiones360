import Hero from "@/components/Hero";
import MisionVision from "@/components/MisionVision";
import PorQueElegirnos from "@/components/PorQueElegirnos";
import Destinos from "@/components/Destinos";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NuestrasAventuras from "@/components/NuestrasAventuras";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
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

      {/* Cotizacion */}
      <section id="aventuras" className="pt-24 bg-[#cbd7e6]">
        <NuestrasAventuras />
      </section>

      {/* Destinos */}
      <section id="destinos" className="pt-24 bg-[#cbd7e6]">
        <Destinos />
      </section>

      {/* Botón de WhatsApp flotante */}
      <WhatsAppButton />

      {/* Footer al final */}
      <Footer />
    </main>
  );
}
