import PageHeader from "@/components/layout/PageHeader"
import { Building2, MapPin } from "lucide-react"
import Subsidiaries from "@/components/sections/Subsidiaries"

const locations = [
  {
    name: "Pabellón de Arteaga, Aguascalientes",
    desc: "Sede principal — administración, transporte y operaciones mineras.",
    detail: "Calle Tercera No. 214, Col. Fraccionamiento Popular, C.P. 20676",
  },
  {
    name: "Puebla, México",
    desc: "Sede operativa — transporte público de carga y explotación de yacimientos.",
    detail: "Información de dirección disponible próximamente.",
  },
]

export default function FilialesPage() {
  return (
    <main className="bg-background">
      <PageHeader
        title="Nuestras Sedes"
        subtitle="Contamos con 2 sedes estratégicamente ubicadas para atender la demanda industrial en el país."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
      />

      <Subsidiaries />

      {/* Map / Presence */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-navy-blue dark:text-white mb-3">
              Presencia en México
            </h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto mb-6" />
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Operamos en 2 estados de la República con instalaciones propias y flota dedicada en cada región.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
            {locations.map(({ name, desc, detail }) => (
              <div
                key={name}
                className="group flex items-start gap-4 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 p-6 rounded-2xl hover:border-secondary/40 hover:shadow-lg dark:hover:shadow-black/30 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-secondary transition-all duration-300">
                  <MapPin size={18} className="text-secondary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-blue dark:text-white mb-1">{name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{desc}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="h-[400px] w-full bg-gray-100 dark:bg-gray-800 rounded-[30px] overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700/50 grayscale hover:grayscale-0 transition-all duration-700 flex items-center justify-center flex-col gap-3 text-gray-400 dark:text-gray-600">
            <MapPin size={44} className="text-secondary" />
            <p className="font-semibold text-sm">Mapa de presencia THH</p>
            <p className="text-xs">Aguascalientes · Puebla</p>
          </div>
        </div>
      </section>
    </main>
  )
}
