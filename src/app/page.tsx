import Hero from "@/components/Hero";
import MisionVision from "@/components/MisionVision";
import PorQueElegirnos from "@/components/PorQueElegirnos";
import Destinos from "@/components/Destinos";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";  // Importa el footer


export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" >
        <Hero />
      </section>

      {/* Misión y Visión */}
      <section id="mision" className="pt-24">
        <MisionVision />
      </section>

      {/* Por qué elegirnos */}
      <section id="porque" className="pt-24">
        <PorQueElegirnos />
      </section>

      {/* Destinos */}
      <section id="destinos" className="pt-24">
        <Destinos />
      </section>

      {/* Botón de WhatsApp flotante (sin scroll) */}
      <WhatsAppButton />

      {/* Footer al final */}
      <Footer />
    </main>
  );
}
