import SEO from "@/components/seo/SEO"
import PageHeader from "@/components/layout/PageHeader"
import { Phone } from "lucide-react"
import ContactSection from "@/components/sections/ContactSection"

export default function ContactoPage() {
  return (
    <main className="bg-background">
      <SEO
        title="Contacto"
        description="Contáctanos por teléfono, correo o visítanos en Pabellón de Arteaga, Aguascalientes. Atendemos de lunes a viernes de 8:00 AM a 6:00 PM."
        path="/contacto"
      />
      <PageHeader
        title="Contáctanos"
        subtitle="Estamos listos para atenderte. Escríbenos, llámanos o visítanos — siempre habrá alguien para ayudarte."
        backgroundImage="https://i.ibb.co/pBqKV26h/IMG-20210611-135039.jpg"
      />
      <ContactSection />
    </main>
  )
}
