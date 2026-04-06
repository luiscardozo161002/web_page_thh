import PageHeader from "@/components/layout/PageHeader"
import { Building2, Briefcase, Users, MapPin, CheckCircle } from "lucide-react"
import AboutContent from "@/components/sections/AboutContent"

const stats = [
  { icon: Briefcase, value: "200+", label: "Soluciones operativas" },
  { icon: Users, value: "100", label: "Empleos generados" },
  { icon: Building2, value: "2", label: "Sedes operativas" },
  { icon: MapPin, value: "50+", label: "Clientes satisfechos" },
]

const clientes = [
  {
    name: "Cementos y Concretos La Cruz Azul, S.A. de C.V.",
    since: "1998 – Actualidad",
    services: ["Renta de maquinaria", "Manejo de materiales", "Barrenación y perforación", "Extracción de caliza", "Descapote y despolve", "Carga y acarreo"],
    highlight: true,
  },
  {
    name: "CYCNA de Oriente, S.A. de C.V.",
    since: "2022 – Actualidad",
    services: ["Acarreo de puzolana", "Acarreo de yeso", "Acarreo de coque", "Transporte de maquinaria"],
    highlight: false,
  },
  {
    name: "Martín Eduardo Díaz de León Barrera",
    since: "2015 – Actualidad",
    services: ["Venta de materiales pétreos"],
    highlight: false,
  },
  {
    name: "Cándido Loza Gutiérrez",
    since: "2016 – Actualidad",
    services: ["Venta de materiales pétreos"],
    highlight: false,
  },
  {
    name: "Heidi Parra Castro",
    since: "2023 – Actualidad",
    services: ["Acarreo de puzolana"],
    highlight: false,
  },
]

export default function AcercaPage() {
  return (
    <main className="bg-background">
      <PageHeader
        title="Acerca de THH"
        subtitle="Empresa mexicana especializada en servicios para la industria, enfocada en la explotación de yacimientos, manejo de materiales pétreos y transporte público de carga."
        backgroundImage="https://i.ibb.co/YFgzS2rr/IMG-20210611-154520.jpg"
      />

      {/* Intro + Stats */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          {/* Description */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <strong className="text-navy-blue dark:text-white">Transportes Hidro-Hidalguenses S.A. de C.V.</strong>{" "}
              es una empresa 100% mexicana especializada en servicios para la industria. Nos distinguimos
              por ofrecer soluciones eficientes y confiables para los sectores industrial y de la construcción,
              respaldados por experiencia operativa, personal capacitado y compromiso con la calidad y el
              cumplimiento de las normativas.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="group text-center bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 rounded-3xl p-8 hover:shadow-xl hover:border-secondary/30 dark:hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-all duration-300">
                  <Icon size={22} className="text-secondary group-hover:text-white transition-colors" />
                </div>
                <p className="text-3xl font-black text-navy-blue dark:text-white mb-1">{value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{label}</p>
              </div>
            ))}
          </div>

          {/* Datos generales */}
          <div className="max-w-4xl mx-auto relative bg-gradient-to-br border-2 border-blue-950 p-10 md:p-12 rounded-[40px] shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-950/10 rounded-full translate-x-16 -translate-y-16 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-950/10 rounded-full -translate-x-8 translate-y-8 pointer-events-none" />
            <h2 className="text-2xl font-extrabold text-navy-blue dark:text-white mb-8 text-center">
              Datos Generales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Razón Social", value: "Transportes Hidro-Hidalguenses S.A. de C.V." },
                { label: "Representante Legal", value: "Lic. José Luis Martínez López" },
                { label: "Gerente Administrativo", value: "Ing. Modesto Sebastián León" },
                { label: "Rep. Administrativo", value: "Lic. Marilyn Medina Jiménez" },
                { label: "Dirección", value: "Calle Tercera No. 214, Col. Fraccionamiento Popular, Pabellón de Arteaga, Ags. C.P. 20676" },
                { label: "Teléfono", value: "773 182 0988" },
                { label: "Correo", value: "marilyn.thh@cooperativajuarez.com.mx" },
                { label: "Redes Sociales", value: "@transporteshidro-hidalguenses" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-lg text-navy-blue dark:text-white font-bold mb-2 uppercase tracking-wider">{label}</span>
                  <span className="text-xl text-navy-blue dark:text-white font-light break-all">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AboutContent />

      {/* Experiencia Laboral / Clientes */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-navy-blue dark:text-white mb-3">
              Experiencia Laboral
            </h2>
            <div className="w-16 h-1.5 bg-blue-600 mx-auto mb-6" />
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Hemos colaborado con diversas organizaciones del sector industrial a lo largo de nuestra trayectoria.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {clientes.map((cliente) => (
              <div
                key={cliente.name}
                className={`group relative bg-white dark:bg-gray-800/60 border ${cliente.highlight ? "border-blue-600/40" : "border-gray-100 dark:border-gray-700/50"} rounded-3xl p-8 shadow-sm hover:shadow-xl dark:hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
              >
                {cliente.highlight && (
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600 rounded-l-3xl" />
                )}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                  <div className="pl-2">
                    <h3 className="text-lg font-bold text-navy-blue dark:text-white mb-1">
                      {cliente.name}
                    </h3>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      {cliente.since}
                    </span>
                  </div>
                  {cliente.highlight && (
                    <span className="self-start shrink-0 text-xs bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 border border-blue-600/30 font-bold px-3 py-1.5 rounded-full">
                      Cliente desde 1998
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 pl-2">
                  {cliente.services.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1.5 text-xs bg-gray-100 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-full font-medium border border-gray-200 dark:border-gray-600/50"
                    >
                      <CheckCircle size={11} className="text-blue-600" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
