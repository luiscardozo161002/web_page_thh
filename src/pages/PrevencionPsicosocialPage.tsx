import SEO from "@/components/seo/SEO"
import PageHeader from "@/components/layout/PageHeader"
import ButtonMailto from "@/components/ui/ButtonMailto"
import {
  HeartHandshake,
  AlertTriangle,
  CheckCircle,
  ChevronRight,
  Calendar,
  Mail,
  Users,
  Wind,
  Clock,
  BookOpen,
  ShieldOff,
} from "lucide-react"

const riskFactors = [
  {
    icon: Wind,
    title: "Condiciones del ambiente de trabajo",
    desc: "Garantizamos espacios físicos seguros, ergonómicos y con las condiciones adecuadas para todos los puestos operativos y administrativos.",
  },
  {
    icon: Clock,
    title: "Carga y ritmo de trabajo",
    desc: "Monitoreamos las jornadas laborales para evitar sobrecargas que puedan afectar la salud física y mental del trabajador.",
  },
  {
    icon: Users,
    title: "Liderazgo y relaciones de trabajo",
    desc: "Promovemos una cultura de respeto, comunicación asertiva y prohibición expresa del hostigamiento y acoso laboral.",
  },
  {
    icon: ShieldOff,
    title: "Violencia laboral",
    desc: "Contamos con un protocolo de atención a quejas confidenciales con respuesta en un plazo máximo de 5 días hábiles.",
  },
  {
    icon: BookOpen,
    title: "Apoyo social organizacional",
    desc: "Fomentamos programas de integración, reconocimiento y desarrollo personal para fortalecer el bienestar del equipo THH.",
  },
]

const commitments = [
  "Investigación oportuna de toda queja recibida",
  "Confidencialidad absoluta para el denunciante",
  "Cero represalias contra quien reporte de buena fe",
  "Actualización anual de la evaluación de riesgos",
]

export default function PrevencionPsicosocialPage() {
  return (
    <main className="bg-background">
      <SEO
        title="Prevención Psicosocial"
        description="Política de prevención de riesgos psicosociales de Transportes Hidro-Hidalguenses conforme a la NOM-035-STPS-2018. Conoce nuestros compromisos de bienestar laboral y entorno organizacional favorable."
        path="/prevencion-psicosocial"
      />
      <PageHeader
        title="Prevención de Riesgos"
        subtitle="Bienestar laboral y entorno organizacional favorable para todos los colaboradores de Transportes Hidro-Hidalguenses."
        backgroundImage="https://i.ibb.co/Ly93FwY/IMG-20210611-142016.jpg"
      />

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4">

          {/* NOM-035 basis */}
          <div className="border-l-4 border-blue-600 bg-blue-600/5 dark:bg-blue-600/10 p-7 rounded-r-2xl mb-14">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h3 className="font-bold text-navy-blue dark:text-white">Marco Normativo</h3>
              <span className="bg-navy-blue dark:bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                NOM-035-STPS-2018
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Esta política da cumplimiento a la{" "}
              <strong className="text-navy-blue dark:text-white">NOM-035-STPS-2018</strong> — Factores
              de Riesgo Psicosocial en el Trabajo — Identificación, Análisis y Prevención, emitida por
              la Secretaría del Trabajo y Previsión Social de México.
            </p>
          </div>

          {/* Objective + Scope */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <div className="relative bg-gradient-to-br from-navy-blue to-blue-950 text-white p-8 rounded-3xl shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-blue-600/10 rounded-full translate-x-8 -translate-y-8 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <HeartHandshake size={20} />
                  </div>
                  <h3 className="font-bold">Objetivo General</h3>
                </div>
                <p className="text-blue-100/90 text-sm leading-relaxed">
                  Identificar, analizar y prevenir los factores de riesgo psicosocial, así como
                  promover un entorno organizacional favorable que proteja la salud mental y el
                  bienestar de todos los colaboradores de THH.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-blue-600/10 dark:bg-blue-600/20 rounded-full flex items-center justify-center">
                  <Users size={20} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-navy-blue dark:text-white">Alcance</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Aplica a todos los trabajadores de Transportes Hidro-Hidalguenses S.A. de C.V.,
                incluyendo personal{" "}
                <strong className="text-navy-blue dark:text-white">
                  operativo, administrativo, directivo y contratistas
                </strong>{" "}
                que laboren en nuestras instalaciones de Aguascalientes y Puebla.
              </p>
            </div>
          </div>

          {/* Risk Factors */}
          <div className="mb-14">
            <h2 className="text-2xl font-extrabold text-navy-blue dark:text-white mb-3 text-center">
              Factores de Riesgo y Medidas Preventivas
            </h2>
            <div className="w-14 h-1.5 bg-blue-600 mx-auto mb-10" />

            <div className="space-y-4">
              {riskFactors.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group flex items-start gap-5 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 p-6 rounded-2xl hover:border-blue-600/40 hover:shadow-md dark:hover:shadow-black/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-blue-600/10 dark:bg-blue-600/20 rounded-full flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all duration-300 mt-0.5">
                    <Icon size={18} className="text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <ChevronRight size={14} className="text-blue-600 shrink-0" />
                      <h4 className="font-bold text-navy-blue dark:text-white text-sm">{title}</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reporting + Commitments */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-5">
                <AlertTriangle size={22} className="text-blue-600" />
                <h3 className="font-bold text-navy-blue dark:text-white">Canal de Denuncia</h3>
              </div>
              <h4 className="font-bold text-navy-blue dark:text-white mb-3">Reporte Confidencial</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                Si experimentas o eres testigo de conductas de riesgo psicosocial, comunícalo
                de forma anónima y confidencial con la Representante Administrativa:
              </p>
              <div className="mb-3">
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                  Lic. Marilyn Medina Jiménez
                </p>
                <ButtonMailto
                  mailto="mailto:marilyn.thh@cooperativajuarez.com.mx"
                  className="inline-flex items-center gap-2 bg-blue-600/10 dark:bg-blue-600/20 border border-blue-600/30 text-blue-600 font-bold px-5 py-2.5 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Mail size={15} />
                  marilyn.thh@cooperativajuarez.com.mx
                </ButtonMailto>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                O acércate directamente al Área de Recursos Humanos en nuestras instalaciones.
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-navy-blue to-blue-950 text-white p-8 rounded-3xl shadow-xl overflow-hidden">
              <div className="absolute bottom-0 right-0 w-28 h-28 bg-white/5 rounded-full translate-x-8 translate-y-8 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle size={22} className="text-blue-600" />
                  <h3 className="font-bold">Compromisos de la Empresa</h3>
                </div>
                <ul className="space-y-3">
                  {commitments.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-blue-100/90">
                      <CheckCircle size={15} className="text-blue-600 shrink-0 mt-0.5" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Doc footer */}
          <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
            <div className="flex items-start gap-3">
              <Calendar size={18} className="text-blue-600 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Política revisada anualmente.{" "}
                <strong className="text-navy-blue dark:text-white">Última revisión: Enero 2024.</strong>
              </p>
            </div>
          </div>

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
