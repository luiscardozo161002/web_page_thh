import { Pickaxe, Truck, Mountain, Wrench } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    title: "Minería de Piedra de Cal",
    description:
      "Extracción y procesamiento de materiales calizos de alta pureza para la industria de la construcción, química y siderúrgica, con más de 25 años de experiencia junto a Cruz Azul.",
    icon: Pickaxe,
    accent: "from-blue-600 to-navy-blue",
    tags: ["Barrenación y perforación", "Descapote y despolve", "Extracción de caliza"],
  },
  {
    title: "Minería de Arena y Grava",
    description:
      "Producción y venta de materiales pétreos de diversas granulometrías para la industria de la construcción, con estrictos controles de calidad en cada lote.",
    icon: Mountain,
    accent: "from-secondary to-red-800",
    tags: ["Arena para construcción", "Grava triturada", "Materiales pétreos"],
  },
  {
    title: "Transporte Público de Carga",
    description:
      "Logística especializada para el traslado de materiales industriales a nivel regional y nacional, incluyendo puzolana, yeso, coque y maquinaria pesada.",
    icon: Truck,
    accent: "from-gray-600 to-gray-900",
    tags: ["Acarreo de puzolana", "Transporte de maquinaria", "Carga y acarreo general"],
  },
  {
    title: "Renta de Maquinaria",
    description:
      "Equipos pesados de última generación para excavación, carga, perforación y nivelación de terrenos industriales con operadores certificados.",
    icon: Wrench,
    accent: "from-emerald-600 to-teal-800",
    tags: ["Maquinaria de excavación", "Equipos de perforación", "Operadores certificados"],
  },
]

export default function Services() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      id="servicios" 
      className="py-24 bg-gray-50 dark:bg-gray-900/60"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue dark:text-white mb-4">
            Servicios Especializados
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Soluciones eficientes y confiables para los sectores industrial y de la construcción,
            respaldadas por experiencia operativa y personal altamente capacitado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 rounded-3xl shadow-sm hover:shadow-2xl dark:hover:shadow-black/40 transition-all duration-300 hover:-translate-y-2 overflow-hidden backdrop-blur-sm"
            >
              {/* Hover gradient */}
              <div
                className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-5 rounded-full translate-x-10 -translate-y-10 transition-all duration-500`}
              />

              <div className="flex items-start gap-5 mb-5">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${service.accent} rounded-full flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-blue dark:text-white mb-2 group-hover:text-secondary dark:group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full font-medium border border-gray-200 dark:border-gray-600/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
