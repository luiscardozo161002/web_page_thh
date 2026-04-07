import { Building2, MapPin, Briefcase, Phone as PhoneIcon } from "lucide-react"
import { motion } from "framer-motion"

const sedes = [
  {
    name: "Sede Principal — Aguascalientes",
    address: "Calle Tercera No. 214, Col. Fraccionamiento Popular, Loc. Pabellón de Arteaga, Aguascalientes. C.P. 20676",
    activity: "Administración general, transporte de carga, minería de materiales pétreos.",
    phone: "773 182 0988",
    status: "Sede activa",
  },
  {
    name: "Sede Operativa — Hidalgo y Puebla",
    address: "Tulancingo 103 Edif B 2, San Miguel Vindhó, Tula de Allende, Hidalgo. C.P. 42842",
    activity: "Operaciones de transporte público de carga y explotación de yacimientos.",
    phone: "773 182 0988",
    status: "Sede activa",
  },
]

export default function Subsidiaries() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative py-24 bg-navy-blue overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Sedes Operativas
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Contamos con 2 sedes operativas estratégicamente ubicadas para atender a la industria
            en el centro del país.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {sedes.map((sede, index) => (


            <div key={index} className="relative bg-gradient- from-navy-blue to-blue-950 text-white p-10 md:p-14 shadow-2xl mb-14 overflow-hidden border border-white rounded-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full translate-x-10 -translate-y-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-8 translate-y-8 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

              <div className="flex items-start gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 bg-gray-50/50 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg shrink-0">
                  <Building2 size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white transition-colors leading-snug">
                    {sede.name}
                  </h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mt-1 block">
                    {sede.status}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 text-gray-300 relative z-10">
                <li className="flex items-start gap-3">
                  <MapPin className="text-blue-400 shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className=" text-gray-200 text-lg block uppercase font-bold tracking-wider mb-0.5">
                      Dirección
                    </span>
                    <span className="font-light text-lg leading-relaxed">{sede.address}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Briefcase className="text-blue-400 shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className=" text-gray-200 text-lg block uppercase font-bold tracking-wider mb-0.5">
                      Actividad Principal
                    </span>
                    <span className="font-light text-lg leading-relaxed">{sede.activity}</span>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center relative z-10">
                <span className="flex items-center gap-2 text-sm font-bold text-blue-300">
                  <PhoneIcon size={14} />
                  {sede.phone}
                </span>
                <a
                  href="/contacto"
                  className="text-xs font-bold uppercase tracking-wider text-blue-200 hover:text-white transition-colors hover:underline underline-offset-4"
                >
                  Contactar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
