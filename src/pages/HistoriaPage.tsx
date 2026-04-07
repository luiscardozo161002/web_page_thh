import SEO from "@/components/seo/SEO"
import PageHeader from "@/components/layout/PageHeader"
import { HistoryIcon, Signpost } from "lucide-react"

const milestones = [
  {
    year: "1998",
    title: "Inicio de operaciones con Cruz Azul",
    description:
      "Transportes Hidro-Hidalguenses inicia su relación comercial con Cementos y Concretos La Cruz Azul S.A. de C.V., prestando servicios de renta de maquinaria, extracción de caliza y carga y acarreo que perduran hasta hoy.",
    color: "bg-secondary",
  },
  {
    year: "2015",
    title: "Expansión en venta de materiales pétreos",
    description:
      "Se consolida la línea de venta de materiales pétreos a través de nuevas alianzas comerciales, diversificando los servicios más allá del transporte hacia la cadena completa de suministro mineral.",
    color: "bg-navy-blue",
  },
  {
    year: "2022",
    title: "Nuevo cliente: CYCNA de Oriente",
    description:
      "Incorporación de CYCNA de Oriente S.A. de C.V. al portafolio de clientes, ampliando los servicios de acarreo de puzolana, yeso, coque y transporte de maquinaria pesada.",
    color: "bg-secondary",
  },
  {
    year: "Hoy",
    title: "2 sedes operativas y crecimiento continuo",
    description:
      "Con sedes en Aguascalientes y Puebla, más de 100 empleos generados y más de 200 soluciones operativas realizadas, THH consolida su posición como empresa líder en servicios industriales.",
    color: "bg-navy-blue",
  },
]

export default function HistoriaPage() {
  return (
    <main className="bg-background">
      <SEO
        title="Nuestra Historia"
        description="Más de 25 años de trayectoria en minería y transporte industrial. Conoce los hitos que marcaron el crecimiento de Transportes Hidro Hidalguenses desde 1998."
        path="/historia"
      />
      <PageHeader
        title="Nuestra Historia"
        subtitle="Más de 25 años construyendo relaciones sólidas con la industria mexicana."
        backgroundImage="https://i.ibb.co/Vyj6Y8C/IMG-20210611-142307.jpg"
      />

      {/* Narrative */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative group w-full max-w-[95vw] sm:max-w-lg lg:max-w-xl mx-auto">
              <div className="relative aspect-square bg-white rounded-full overflow-hidden shadow-2xl flex items-center justify-center">
                <img src="https://i.ibb.co/ZpzXD141/thh-oficial-copia.png" className="object-contain w-full h-full" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-11 h-11 bg-secondary rounded-full flex items-center justify-center text-white shadow-lg">
                  <HistoryIcon size={22} />
                </div>
                <h2 className="text-4xl font-extrabold text-navy-blue dark:text-white">
                  Nuestra Historia
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                Transportes Hidro-Hidalguenses S.A. de C.V. es una empresa mexicana fundada con la
                visión de ofrecer soluciones eficientes para la industria. Desde nuestros inicios en
                la prestación de servicios a Cementos y Concretos La Cruz Azul en 1998, hemos
                crecido de manera constante y sostenida.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Hoy contamos con 2 sedes operativas —en Aguascalientes y Puebla— y un equipo de
                más de 100 colaboradores comprometidos con la excelencia en la explotación de
                yacimientos, el manejo de materiales pétreos y el transporte público de carga.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-navy-blue dark:text-white mb-3">
              Hitos de Nuestra Trayectoria
            </h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto" />
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
                >
                  <div className={`w-full md:w-5/12 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
                      <span className="text-xs font-black uppercase tracking-widest text-secondary mb-2 block">
                        {m.year}
                      </span>
                      <h3 className="text-xl font-bold text-navy-blue dark:text-white mb-3">{m.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{m.description}</p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className={`w-12 h-12 ${m.color} rounded-full flex items-center justify-center text-white shadow-lg z-10 shrink-0`}>
                      <Signpost size={20} />
                    </div>
                  </div>

                  <div className="hidden md:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
