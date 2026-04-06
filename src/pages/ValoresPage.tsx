import PageHeader from "@/components/layout/PageHeader"
import { Users, HeartHandshake, Star, Shield, Zap } from "lucide-react"

const valores = [
  {
    icon: Users,
    title: "Trabajo en Equipo",
    color: "from-blue-600 to-navy-blue",
    description:
      "Creemos que los mejores resultados nacen de la colaboración. Cada área de THH trabaja en sintonía para ofrecer soluciones integrales y superar las expectativas de nuestros clientes.",
    details: [
      "Comunicación abierta entre áreas",
      "Metas compartidas y claras",
      "Apoyo mutuo en campo y oficina",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Honestidad",
    color: "from-secondary to-red-800",
    description:
      "Actuamos con transparencia en cada acuerdo, contrato y operación. Nuestra palabra tiene el mismo peso que nuestra firma, y eso nos ha ganado relaciones comerciales de más de 25 años.",
    details: [
      "Contratos claros y sin letra chica",
      "Rendición de cuentas con clientes",
      "Ética en cada negociación",
    ],
  },
  {
    icon: Star,
    title: "Responsabilidad",
    color: "from-amber-500 to-orange-700",
    description:
      "Asumimos con disciplina cada compromiso adquirido. Desde la primera cotización hasta la entrega final, somos responsables del resultado y de los estándares de calidad comprometidos.",
    details: [
      "Cumplimiento de tiempos acordados",
      "Seguimiento continuo de operaciones",
      "Respuesta ágil ante imprevistos",
    ],
  },
  {
    icon: Shield,
    title: "Disciplina",
    color: "from-violet-600 to-purple-900",
    description:
      "La disciplina operativa es lo que transforma una buena intención en resultados concretos. Nuestros procesos estandarizados garantizan consistencia y calidad en cada servicio.",
    details: [
      "Procesos estandarizados y documentados",
      "Capacitación constante del personal",
      "Cumplimiento de normativas vigentes",
    ],
  },
  {
    icon: Zap,
    title: "Eficacia",
    color: "from-emerald-600 to-teal-800",
    description:
      "Medimos nuestro éxito por los resultados que logramos para nuestros clientes. Más de 200 soluciones operativas y más de 50 objetivos empresariales cumplidos lo confirman.",
    details: [
      "Más de 200 soluciones operativas",
      "+50 objetivos empresariales cumplidos",
      "Mejora continua de indicadores",
    ],
  },
]

export default function ValoresPage() {
  return (
    <main className="bg-background">
      <PageHeader
        title="Nuestros Valores"
        subtitle="Los cinco pilares que guían cada decisión operativa, comercial y humana dentro de Transportes Hidro-Hidalguenses."
        backgroundImage="https://i.ibb.co/M5PmvSYF/IMG-20210611-143618.jpg"
      />

      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Nuestros valores no son un documento corporativo —{" "}
              <strong className="text-navy-blue dark:text-white">
                son la forma en que vivimos nuestro trabajo
              </strong>{" "}
              cada día, en cada operación y en cada relación con nuestros clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valores.map(({ icon: Icon, title, color, description, details }) => (
              <div
                key={title}
                className="group relative bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl dark:hover:shadow-black/40 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${color}`} />
                <div className="p-8">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${color} rounded-full flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-navy-blue dark:text-white mb-3">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                    {description}
                  </p>
                  <ul className="space-y-2">
                    {details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
