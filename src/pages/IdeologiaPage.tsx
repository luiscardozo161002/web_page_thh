import SEO from "@/components/seo/SEO"
import PageHeader from "@/components/layout/PageHeader"
import { Lightbulb, Users, Shield, Zap, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const pillars = [
  {
    icon: Users,
    title: "Trabajo en Equipo",
    desc: "Colaboramos en cada proyecto para ofrecer soluciones integrales y superar las expectativas de nuestros clientes de la industria.",
  },
  {
    icon: Shield,
    title: "Responsabilidad y Disciplina",
    desc: "Procesos estandarizados, cumplimiento de normativas y compromiso firme con cada acuerdo comercial.",
  },
  {
    icon: Zap,
    title: "Mejora Continua",
    desc: "Aplicamos la mejora continua en todos nuestros procesos para anticiparnos a las necesidades de nuestros clientes.",
  },
]

export default function IdeologiaPage() {
  return (
    <main className="bg-background">
      <SEO
        title="Ideología"
        description="Los principios y pilares ideológicos que definen la identidad operativa y cultural de Transportes Hidro-Hidalguenses S.A. de C.V."
        path="/ideologia"
      />
      <PageHeader
        title="Nuestra Ideología"
        subtitle="Los principios que guían cada decisión y definen la forma en que operamos para la industria mexicana."
        backgroundImage="https://i.ibb.co/fctFND3/IMG-20210611-142141.jpg"
      />

      {/* Main quote */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/60 dark:to-gray-900/60 border border-gray-200 dark:border-gray-700/50 p-12 shadow-xl backdrop-blur-sm mb-10">
              <div className="absolute top-6 left-8 text-8xl text-secondary/10 font-black leading-none select-none">"</div>
              <div className="absolute bottom-6 right-8 text-8xl text-secondary/10 font-black leading-none select-none rotate-180">"</div>
              <div className="w-14 h-14 bg-navy-blue dark:bg-secondary rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Lightbulb size={35} className="text-white" />
              </div>
              <p className="text-xl md:text-2xl font-light text-gray-700 dark:text-gray-300 leading-relaxed relative z-10 text-justify">
                Proveer un excelente servicio en la explotación de yacimientos y transporte
                público de carga para la industria, mediante el{" "}
                <span className="text-secondary font-bold not-italic">control y estandarización de nuestros procesos</span>,
                aplicando la{" "}
                <span className="text-secondary font-bold not-italic">mejora continua</span>{" "}
                con el fin de satisfacer las expectativas de nuestros clientes anticipándonos a sus necesidades.
              </p>
              <p className="mt-6 text-sm font-bold text-gray-400 uppercase tracking-widest">
                — Dirección General, THH
              </p>
            </div>

            <h2 className="text-3xl font-extrabold text-navy-blue dark:text-white text-center mb-3">
              Pilares de Nuestra Cultura
            </h2>
            <div className="w-16 h-1.5 bg-secondary mx-auto mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/60 dark:to-gray-900/60 border border-gray-200 dark:border-gray-700/50 p-12 shadow-xl backdrop-blur-sm mb-10"
                >

                  <div className="w-14 h-14 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <Icon className="text-secondary group-hover:text-white transition-colors" size={26} />
                  </div>
                  <h3 className="font-bold text-xl text-navy-blue dark:text-white mb-3">{title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Culture text */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-extrabold text-navy-blue dark:text-white mb-4">
                  Una filosofía que se vive en campo
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-justify">
                  En THH, la ideología no es un documento guardado en un cajón. Es la manera en que
                  cada operador arranca su equipo con cuidado, la forma en que nuestro equipo
                  administrativo responde con honestidad y la determinación con la que enfrentamos
                  cada reto logístico.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                  Nuestros más de 25 años de relación ininterrumpida con clientes como Cruz Azul son
                  la mejor evidencia de que esta ideología funciona y genera valor real.
                </p>
              </div>
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-blue to-blue-950 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center relative">
                <Lightbulb size={120} className="text-white/5" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-2xl font-black text-white">Cultura THH</p>
                  <p className="text-xs uppercase tracking-widest text-secondary font-bold mt-1">
                    Cada día, con propósito
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            ¿Quieres ser parte de este equipo?
          </h3>
          <p className="text-white/80 mb-8 text-lg">
            Buscamos personas que compartan nuestros valores y quieran crecer con nosotros.
          </p>
          <Link
            to="/bolsa-de-trabajo"
            className="inline-flex items-center gap-2 bg-white text-secondary font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Ver Vacantes Disponibles
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
