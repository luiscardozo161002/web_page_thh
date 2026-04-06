import { Target, Eye } from "lucide-react"
import { motion } from "framer-motion";



const valores = ["Trabajo en equipo", "Honestidad", "Responsabilidad", "Disciplina", "Eficacia"]

export default function MissionVision() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-white dark:bg-gray-950 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-blue dark:text-white mb-4">
            Misión &amp; Visión
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-10 h-full border-none bg-gradient-to-tr from-red-900 to-red-700 text-white overflow-hidden shadow-2xl group hover:-translate-y-2 transition-transform duration-500 rounded-[80px_0_80px_0] relative">

              {/* Background Decoration - Target SVG */}
              <div className="absolute left-10 top-1/2 -translate-y-1/2 pointer-events-none opacity-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  className="lucide lucide-target-icon lucide-target text-white w-[800px] h-[800px]"
                ><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-end mb-6">
                  <span className="flex items-center gap-2">
                    <img src="https://i.ibb.co/ZpzXD141/thh-oficial-copia.png" alt="Logo de Cooperativa Juárez SCL" className="object-cover w-20 h-20 rounded-full p-2 bg-white/10" />
                  </span>
                </div>
                <div>
                  <h3 className="text-5xl font-black tracking-tighter mb-4">Misión</h3>
                </div>
              </div>
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-white/80 leading-relaxed text-justify font-extralight">
                  "Proveer un excelente servicio en la explotación de yacimientos y transporte público de carga para la industria, mediante el control y estandarización de nuestros procesos, aplicando la mejora continua con el fin de satisfacer las expectativas de nuestros clientes anticipándonos a sus necesidades."
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 relative z-10">
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">CJ-AN-03 | Referencia de Excelencia</span>
              </div>
            </div>
          </motion.div>

          {/* Visidiv */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="p-10 h-full border-none bg-gradient-to-tr from-blue-950 to-blue-950 text-white overflow-hidden shadow-2xl group hover:-translate-y-2 transition-transform duration-500 rounded-[80px_0_80px_0] relative">
              {/* Background Decoration - Eye SVG */}
              <div className="absolute left-10 top-1/2 -translate-y-1/2 pointer-events-none opacity-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-eye-icon lucide-eye text-white w-[800px] h-[800px]"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-end mb-6">
                  <span className="flex items-center gap-2">
                    <img src="https://i.ibb.co/ZpzXD141/thh-oficial-copia.png" alt="Logo de Cooperativa Juárez SCL" className="object-cover w-20 h-20 rounded-full p-2 bg-white/10" />
                  </span>
                </div>
                <div>
                  <h3 className="text-5xl font-black tracking-tighter mb-4">Visión</h3>
                </div>
              </div>
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-white/80 leading-relaxed text-justify font-extralight">
                  "Posicionarnos como la empresa líder en la prestación de servicios de explotación de yacimientos y transporte público de carga para la industria en el ámbito nacional y regional, esto por medio de una total satisfacción del cliente."
                </p>

              </div>
              <div className="pt-6 border-t border-white/5 relative z-10">
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">CJ-AN-03 | Liderazgo Industrial</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Valores */}
        <div className="text-center">
          <h3 className=" font-bold text-navy-blue dark:text-white mb-6 uppercase tracking-widest text-sm">
            Nuestros Valores
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {valores.map((valor) => (
              <span
                key={valor}
                className="px-6 py-2.5 bg-gray-100 dark:bg-gray-800 text-navy-blue dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-semibold hover:bg-secondary hover:text-white hover:border-secondary dark:hover:bg-secondary dark:hover:text-white transition-all duration-300 cursor-default shadow-sm"
              >
                {valor}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
