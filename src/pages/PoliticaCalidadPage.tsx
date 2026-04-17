import SEO from "@/components/seo/SEO"
import PageHeader from "@/components/layout/PageHeader"
import {
  ClipboardCheck,
  CheckCircle,
  RefreshCw,
  Shield,
  Users,
  Leaf,
  Award,
  Calendar,
} from "lucide-react"
import { Link } from "react-router-dom"

const commitments = [
  {
    icon: CheckCircle,
    title: "Satisfacción del Cliente",
    desc: "Identificar y superar las expectativas de cada cliente, anticipándonos a sus necesidades.",
    color: "from-blue-600 to-navy-blue",
  },
  {
    icon: RefreshCw,
    title: "Mejora Continua",
    desc: "Controlar y estandarizar nuestros procesos para optimizar continuamente la calidad del servicio.",
    color: "from-emerald-600 to-teal-800",
  },
  {
    icon: Shield,
    title: "Cumplimiento Normativo",
    desc: "Observar la legislación aplicable al transporte público de carga y a la industria minera en todo momento.",
    color: "from-violet-600 to-purple-900",
  },
  {
    icon: Users,
    title: "Desarrollo del Personal",
    desc: "Capacitar y motivar a nuestro equipo de más de 100 colaboradores para el crecimiento profesional continuo.",
    color: "from-amber-500 to-orange-700",
  },
  {
    icon: Leaf,
    title: "Compromiso Ambiental",
    desc: "Operar con responsabilidad ambiental en todas nuestras actividades de explotación y transporte.",
    color: "from-green-600 to-lime-800",
  },
  {
    icon: Award,
    title: "Estándares de Calidad",
    desc: "Mantener los más altos estándares de calidad en la explotación de yacimientos y transporte de carga.",
    color: "from-secondary to-red-800",
  },
]

export default function PoliticaCalidadPage() {
  return (
    <main className="bg-background">
      <SEO
        title="Política de Calidad"
        description="Política de calidad de Transportes Hidro-Hidalguenses: compromiso con la excelencia operativa, satisfacción del cliente y mejora continua bajo estándares NOM."
        path="/politica-calidad"
      />
      <PageHeader
        title="Política de Calidad"
        subtitle="Nuestro compromiso formal con la excelencia operativa, la satisfacción del cliente y la mejora continua."
        backgroundImage="https://i.ibb.co/8QpDRG8/IMG-20210611-142112.jpg"
      />

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4">

          {/* Official Declaration */}
          <div className="relative bg-gradient-to-br from-navy-blue to-blue-950 text-white p-10 md:p-14 shadow-2xl mb-14 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full translate-x-10 -translate-y-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-8 translate-y-8 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                  <ClipboardCheck size={24} />
                </div>
                <h2 className="text-xl font-bold">Declaración de Política de Calidad</h2>
              </div>
              <p className="text-lg md:text-xl text-blue-100/90 font-light text-justify leading-relaxed mb-8">
                "Transportes Hidro-Hidalguenses S.A. de C.V. se compromete a proveer un excelente
                servicio en la explotación de yacimientos y transporte público de carga para la
                industria, mediante el control y estandarización de nuestros procesos, aplicando
                la mejora continua con el fin de satisfacer las expectativas de nuestros clientes
                anticipándonos a sus necesidades."
              </p>
              <div className="border-t border-white/20 pt-6 flex flex-wrap gap-4 justify-between items-center text-sm text-white/60">
                <span>Lic. José Luis Martínez López · Representante Legal</span>
                <span>Pabellón de Arteaga, Ags. · 2024</span>
              </div>
            </div>
          </div>

          {/* Commitments */}
          <div className="mb-14">
            <h2 className="text-2xl font-extrabold text-navy-blue dark:text-white mb-3 text-center">
              Compromisos de Calidad
            </h2>
            <div className="w-14 h-1.5 bg-secondary mx-auto mb-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commitments.map(({ icon: Icon, title, desc, color }) => (
                <div
                  key={title}
                  className="group relative bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`h-1 w-full bg-gradient-to-r ${color}`} />
                  <div className="p-6">
                    <div className={`w-11 h-11 bg-gradient-to-br ${color} rounded-full flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="font-bold text-navy-blue dark:text-white mb-2 text-sm">{title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review */}
          <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                <Calendar size={18} className="text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-navy-blue dark:text-white mb-1">Vigencia y Revisión</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Esta política es revisada anualmente por la Dirección General y el Representante Legal.{" "}
                  <strong>Última revisión: Enero 2024.</strong>
                </p>
              </div>
            </div>
            <Link
              to="/contacto"
              className="shrink-0 inline-flex items-center gap-2 border border-navy-blue dark:border-secondary text-navy-blue dark:text-secondary hover:bg-navy-blue hover:text-white dark:hover:bg-secondary dark:hover:text-white font-bold px-6 py-2.5 rounded-full text-sm transition-all duration-300"
            >
              Solicitar copia oficial
            </Link>
          </div>

          {/* Doc footer */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <p className="text-xs text-gray-400 dark:text-gray-600 text-center">
              Versión: 2.0 · Aprobado por: Lic. José Luis Martínez López, Representante Legal · Fecha: Enero 2024 · Próxima revisión: Enero 2025
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
