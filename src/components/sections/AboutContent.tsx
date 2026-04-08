import { ScrollText, History as HistoryIcon, Users, Lightbulb, Shield } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutContent() {
  return (
    <div className="space-y-0">
      {/* Historia */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        id="historia" 
        className="py-24 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="relative bg-gradient from-navy-blue to-blue-950 rounded-full overflow-hidden shadow-2xl flex items-center justify-center">
                <img src="https://i.ibb.co/ZpzXD141/thh-oficial-copia.png" alt="Logo Transportes Hidro Hidalguenses" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
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
        </div>
      </motion.section>

      {/* Ideología */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        id="ideologia" 
        className="py-24 bg-white dark:bg-gray-950"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-14 h-14 bg-navy-blue dark:bg-secondary rounded-full flex items-center justify-center text-white mx-auto mb-8 shadow-xl">
              <Lightbulb size={28} />
            </div>
            <h2 className="text-4xl font-extrabold text-navy-blue dark:text-white mb-8">
              Nuestra Ideología
            </h2>

            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/60 dark:to-gray-900/60 border border-gray-200 dark:border-gray-700/50 p-12 shadow-xl backdrop-blur-sm">
              <p className="text-xl md:text-2xl font-light text-gray-700 dark:text-gray-300 leading-relaxed relative z-10">
                Creemos que el{" "}
                <span className="text-secondary font-bold not-italic">trabajo en equipo</span>{" "}
                y la{" "}
                <span className="text-secondary font-bold not-italic">mejora continua</span>{" "}
                son la base para superar las expectativas de nuestros clientes y generar valor
                para la industria mexicana.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  Icon: Users,
                  title: "Trabajo en Equipo",
                  desc: "Colaboramos para superar cualquier desafío operativo con sinergia y compromiso.",
                },
                {
                  Icon: Shield,
                  title: "Responsabilidad",
                  desc: "Asumimos con disciplina cada compromiso adquirido con nuestros clientes y colaboradores.",
                },
                {
                  Icon: ScrollText,
                  title: "Honestidad",
                  desc: "Transparencia total en cada contrato, proceso y relación comercial.",
                },
              ].map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="group p-8 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <Icon className="text-secondary group-hover:text-white transition-colors" size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-navy-blue dark:text-white mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
