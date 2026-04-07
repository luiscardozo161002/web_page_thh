import PageHeader from "@/components/layout/PageHeader"
import { MapPin, Phone, Mail, Clock, Navigation, Car, Building, User } from "lucide-react"

const referencias = [
  { icon: Car, title: "Autopista México-Aguascalientes", desc: "A pocos minutos de la carretera federal, con fácil acceso desde la zona industrial." },
  { icon: Building, title: "Centro de Pabellón de Arteaga", desc: "A 2 km del centro de la localidad de Pabellón de Arteaga, Aguascalientes." },
  { icon: Navigation, title: "Zona Industrial de Aguascalientes", desc: "Ubicación estratégica para atender a clientes del corredor industrial regional." },
]

export default function UbicacionPage() {
  return (
    <main className="bg-background">
      <PageHeader
        title="Nuestra Ubicación"
        subtitle="Encuéntranos en Pabellón de Arteaga, Aguascalientes — ubicación estratégica para atender al sector industrial."
        backgroundImage="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Info */}
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-navy-blue dark:text-white mb-8">
                Información de Contacto
              </h2>

              {[
                {
                  Icon: MapPin,
                  title: "Dirección",
                  lines: [
                    "Calle Tercera No. 214,",
                    "Col. Fraccionamiento Popular,",
                    "Loc. Pabellón de Arteaga, Aguascalientes. C.P. 20676",
                  ],
                },
                {
                  Icon: Phone,
                  title: "Teléfono",
                  lines: ["773 182 0988"],
                },
                {
                  Icon: User,
                  title: "Representante Administrativo",
                  lines: ["Lic. Marilyn Medina Jiménez"],
                },
                {
                  Icon: Mail,
                  title: "Correo Electrónico",
                  lines: ["marilyn.thh@cooperativajuarez.com.mx"],
                },
                {
                  Icon: Clock,
                  title: "Horario de Atención",
                  lines: ["Lunes a Viernes: 8:00 AM – 6:00 PM", "Sábado: 8:00 AM – 2:00 PM"],
                },
              ].map(({ Icon, title, lines }) => (
                <div
                  key={title}
                  className="group flex items-start bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 p-6 rounded-2xl hover:border-secondary/40 hover:shadow-md dark:hover:shadow-black/20 transition-all duration-300"
                >
                  <div className="w-11 h-11 bg-navy-blue dark:bg-secondary text-white rounded-full flex items-center justify-center shrink-0 mr-5 shadow-md group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-blue dark:text-white mb-1">{title}</h4>
                    {lines.map((l, i) => (
                      <p key={i} className="text-gray-600 dark:text-gray-400 text-sm">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="flex flex-col gap-6">
              <div className="flex-1 min-h-[500px] bg-gray-100 dark:bg-gray-800 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                  src="https://maps.app.goo.gl/MJKhHojemQZDJXpt8"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación THH"
                ></iframe>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=22.146524,-102.274358"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-navy-blue hover:bg-secondary text-white font-bold py-4 rounded-2xl transition-colors shadow-lg"
              >
                <Navigation size={18} />
                Cómo llegar con Google Maps
              </a>
            </div>
          </div>

          {/* References */}
          <div>
            <h3 className="text-2xl font-extrabold text-navy-blue dark:text-white mb-3 text-center">
              Puntos de Referencia
            </h3>
            <div className="w-16 h-1.5 bg-secondary mx-auto mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {referencias.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="group text-center p-8 bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 rounded-2xl hover:shadow-lg dark:hover:shadow-black/20 hover:border-secondary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-all duration-300">
                    <Icon size={22} className="text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="font-bold text-navy-blue dark:text-white mb-2 text-sm">{title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
