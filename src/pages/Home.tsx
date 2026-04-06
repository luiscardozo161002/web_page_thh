import Hero from "@/components/layout/Hero"
import Services from "@/components/sections/Services"
import MissionVision from "@/components/sections/MissionVision"
import Subsidiaries from "@/components/sections/Subsidiaries"
import AboutContent from "@/components/sections/AboutContent"
import ContactSection from "@/components/sections/ContactSection"

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />

      {/* Intro */}
      <section className="container py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue dark:text-white mb-6">
          Explotación de Yacimientos y Transporte Industrial
        </h2>
        <div className="w-24 h-1.5 bg-secondary mx-auto mb-10" />
        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-xl leading-relaxed">
          Transportes Hidro-Hidalguenses S.A. de C.V. ofrece soluciones eficientes y confiables
          para los sectores industrial y de la construcción, respaldados por experiencia operativa,
          personal capacitado y compromiso con la calidad y el cumplimiento de las normativas.
        </p>
      </section>

      <Services />
      <MissionVision />
      <AboutContent />
      <Subsidiaries />
      <ContactSection />
    </main>
  )
}
