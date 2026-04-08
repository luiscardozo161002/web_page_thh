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
        jsonLd={{
          '@type': 'ContactPage',
          'name': 'Contacto — Transportes Hidro Hidalguenses',
          'url': 'https://transporteshidrohidalguenses.cooperativajuarez.net/contacto',
          'mainEntity': {
            '@type': 'LocalBusiness',
            'name': 'Transportes Hidro Hidalguenses S.A. de C.V.',
            'telephone': '+527731820988',
            'email': 'marilyn.thh@cooperativajuarez.com.mx',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'Calle Tercera No. 214, Col. Fraccionamiento Popular',
              'addressLocality': 'Pabellón de Arteaga',
              'addressRegion': 'Aguascalientes',
              'postalCode': '20676',
              'addressCountry': 'MX',
            },
          },
        }}
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
