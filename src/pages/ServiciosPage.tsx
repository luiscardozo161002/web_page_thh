import PageHeader from "@/components/layout/PageHeader"
import { Truck, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import Services from "@/components/sections/Services"

export default function ServiciosPage() {
  return (
    <main className="bg-background">
      <PageHeader
        title="Nuestros Servicios"
        subtitle="Soluciones integrales en minería, logística y transporte industrial para el sector productivo del centro del país."
        backgroundImage="https://i.ibb.co/YFgzS2rr/IMG-20210611-154520.jpg"
      />

      <Services />

      {/* Process section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-navy-blue dark:text-white mb-3">¿Cómo Trabajamos?</h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto mb-6" />
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Nuestro proceso está diseñado para garantizar eficiencia, transparencia y la completa satisfacción de nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Cotización", desc: "Analizamos tus necesidades y generamos una propuesta a medida en menos de 24 horas." },
              { step: "02", title: "Planificación", desc: "Diseñamos la ruta, asignamos la flota adecuada y coordinamos los tiempos de entrega." },
              { step: "03", title: "Operación", desc: "Ejecutamos con monitoreo GPS en tiempo real y comunicación constante con el cliente." },
              { step: "04", title: "Entrega", desc: "Confirmamos la recepción conforme, generamos evidencia fotográfica y la documentación necesaria." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative text-center group">
                {/* Connector line */}
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10" />

                <div className="w-16 h-16 bg-navy-blue dark:bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-black text-lg shadow-lg relative z-10 group-hover:bg-secondary dark:group-hover:bg-navy-blue transition-colors">
                  {step}
                </div>
                <h3 className="font-bold text-navy-blue dark:text-white mb-2">{title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-blue to-blue-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">¿Necesitas una cotización?</h2>
          <p className="text-white/75 mb-8 max-w-xl mx-auto">
            Cuéntanos sobre tu proyecto y recibirás una propuesta personalizada en menos de 24 horas.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Solicitar Cotización
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
