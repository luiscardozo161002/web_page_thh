import { useState } from "react"
import { Phone, Mail, MapPin, Send, Clock, User } from "lucide-react"
import { motion } from "framer-motion"
import ButtonMailto from "@/components/ui/ButtonMailto"

const CONTACT_EMAIL = 'marilyn.thh@cooperativajuarez.com.mx'

interface ContactItem {
  Icon: React.ElementType
  title: string
  badge?: string
  activity?: string
  lines: string[]
  href: string | null
}

const contactItems: ContactItem[] = [
  {
    Icon: MapPin,
    title: "Sede Principal — Aguascalientes",
    badge: "Sede activa",
    activity: "Administración general, transporte de carga, minería de materiales pétreos.",
    lines: [
      "Calle Tercera No. 214, Col. Fraccionamiento Popular,",
      "Loc. Pabellón de Arteaga, Aguascalientes. C.P. 20676",
    ],
    href: "https://maps.app.goo.gl/MJKhHojemQZDJXpt8",
  },
  {
    Icon: MapPin,
    title: "Sede Operativa — Hidalgo y Puebla",
    badge: "Sede activa",
    activity: "Operaciones de transporte público de carga y explotación de yacimientos.",
    lines: [
      "Tulancingo 103 Edif B 2, San Miguel Vindhó,",
      "Tula de Allende, Hidalgo. C.P. 42842",
    ],
    href: "https://maps.google.com/?q=Tulancingo+103+Edif+B+2,+San+Miguel+Vindhó,+Tula+de+Allende,+Hidalgo",
  },
  {
    Icon: Phone,
    title: "Teléfono de Atención",
    lines: ["773 182 0988"],
    href: "tel:7731820988",
  },
  {
    Icon: User,
    title: "Representante Administrativo",
    lines: ["Lic. Marilyn Medina Jiménez"],
    href: null,
  },
  {
    Icon: Clock,
    title: "Horario de Oficina",
    lines: ["Lunes a Viernes: 8:00 AM – 6:00 PM", "Sábado: 8:00 AM – 2:00 PM"],
    href: null,
  },
]

const SERVICIOS: Record<string, string> = {
  "": "No especificado",
  "mineria-cal": "Minería de Piedra de Cal",
  "mineria-arena": "Minería de Arena y Grava",
  "transporte": "Transporte Público de Carga",
  "maquinaria": "Renta de Maquinaria",
  "otro": "Otro",
}

export default function ContactSection() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    empresa: "",
    servicio: "",
    mensaje: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const buildMailto = () => {
    const subject = encodeURIComponent(
      `Consulta desde el sitio web${form.servicio ? ` – ${SERVICIOS[form.servicio]}` : ""}`
    )
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\n` +
      `Correo: ${form.correo}\n` +
      `Empresa: ${form.empresa || "No especificada"}\n` +
      `Servicio de interés: ${SERVICIOS[form.servicio] || "No especificado"}\n\n` +
      `Mensaje:\n${form.mensaje}`
    )
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      id="contacto"
      className="py-24 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-navy-blue dark:text-white mb-4">
            Ponte en Contacto
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Estamos aquí para resolver tus dudas. Ya sea para servicios de minería,
            transporte o renta de maquinaria, nuestro equipo está listo para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info cards */}
          <div className="space-y-5">
            {contactItems.map(({ Icon, title, badge, activity, lines, href }) => {
              const inner = (
                <>
                  <div className="w-12 h-12 bg-navy-blue dark:bg-secondary text-white rounded-full flex items-center justify-center shrink-0 mr-5 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="font-bold text-navy-blue dark:text-white">{title}</h4>
                      {badge && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          {badge}
                        </span>
                      )}
                    </div>
                    {activity && (
                      <p className="text-xs text-gray-500 dark:text-gray-500 italic mb-1">{activity}</p>
                    )}
                    {lines.map((l, i) => (
                      <p key={i} className="text-gray-600 dark:text-gray-400 text-sm">{l}</p>
                    ))}
                  </div>
                </>
              )
              const cls = "group flex items-start bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 p-6 rounded-2xl hover:border-navy-blue/50 hover:shadow-lg dark:hover:shadow-black/30 transition-all duration-300 backdrop-blur-sm"
              return href ? (
                <a key={title} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cls}>
                  {inner}
                </a>
              ) : (
                <div key={title} className={cls}>{inner}</div>
              )
            })}

            {/* Email */}
            <ButtonMailto
              mailto={`mailto:${CONTACT_EMAIL}`}
              className="group flex items-start bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 p-6 rounded-2xl hover:border-navy-blue/50 hover:shadow-lg dark:hover:shadow-black/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-navy-blue dark:bg-secondary text-white rounded-full flex items-center justify-center shrink-0 mr-5 shadow-lg group-hover:scale-110 transition-transform">
                <Mail size={22} />
              </div>
              <div>
                <h4 className="font-bold text-navy-blue dark:text-white mb-1">Correo Electrónico</h4>
                <p className="text-navy-blue dark:text-blue-400 font-medium text-sm break-all">
                  {CONTACT_EMAIL}
                </p>
              </div>
            </ButtonMailto>
          </div>

          {/* Form */}
          <div className="relative bg-gradient-to-br border-2 border-blue-950 p-10 md:p-12 rounded-[40px] shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-950/10 rounded-full translate-x-16 -translate-y-16 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-950/10 rounded-full -translate-x-8 translate-y-8 pointer-events-none" />

            <h3 className="text-2xl font-bold text-navy-blue dark:text-white mb-8 relative z-10">
              Envíanos un Mensaje
            </h3>

            <form className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-navy-blue dark:text-white text-xs font-bold mb-2 uppercase tracking-wider">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    className="w-full bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl px-5 py-3.5 text-navy-blue dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-navy-blue dark:focus:border-blue-500 focus:ring-1 focus:ring-navy-blue dark:focus:ring-blue-500 transition-all text-sm"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-navy-blue dark:text-white text-xs font-bold mb-2 uppercase tracking-wider">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="correo"
                    required
                    value={form.correo}
                    onChange={handleChange}
                    className="w-full bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl px-5 py-3.5 text-navy-blue dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-navy-blue dark:focus:border-blue-500 focus:ring-1 focus:ring-navy-blue dark:focus:ring-blue-500 transition-all text-sm"
                    placeholder="ejemplo@correo.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-navy-blue dark:text-white text-xs font-bold mb-2 uppercase tracking-wider">
                  Empresa / Organización
                </label>
                <input
                  type="text"
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  className="w-full bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl px-5 py-3.5 text-navy-blue dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-navy-blue dark:focus:border-blue-500 focus:ring-1 focus:ring-navy-blue dark:focus:ring-blue-500 transition-all text-sm"
                  placeholder="Ej. Constructora XYZ"
                />
              </div>

              <div>
                <label htmlFor="servicio" className="block text-navy-blue dark:text-white text-xs font-bold mb-2 uppercase tracking-wider">
                  Servicio de Interés
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  value={form.servicio}
                  onChange={handleChange}
                  className="w-full bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl px-5 py-3.5 text-navy-blue dark:text-white focus:outline-none focus:border-navy-blue dark:focus:border-blue-500 focus:ring-1 focus:ring-navy-blue dark:focus:ring-blue-500 transition-all text-sm appearance-none cursor-pointer"
                >
                  <option value="" className="bg-white dark:bg-gray-800 text-navy-blue dark:text-white">Seleccionar servicio...</option>
                  <option value="mineria-cal" className="bg-white dark:bg-gray-800 text-navy-blue dark:text-white">Minería de Piedra de Cal</option>
                  <option value="mineria-arena" className="bg-white dark:bg-gray-800 text-navy-blue dark:text-white">Minería de Arena y Grava</option>
                  <option value="transporte" className="bg-white dark:bg-gray-800 text-navy-blue dark:text-white">Transporte Público de Carga</option>
                  <option value="maquinaria" className="bg-white dark:bg-gray-800 text-navy-blue dark:text-white">Renta de Maquinaria</option>
                  <option value="otro" className="bg-white dark:bg-gray-800 text-navy-blue dark:text-white">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-navy-blue dark:text-white text-xs font-bold mb-2 uppercase tracking-wider">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  required
                  rows={4}
                  value={form.mensaje}
                  onChange={handleChange}
                  className="w-full bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl px-5 py-3.5 text-navy-blue dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-navy-blue dark:focus:border-blue-500 focus:ring-1 focus:ring-navy-blue dark:focus:ring-blue-500 transition-all resize-none text-sm"
                  placeholder="Describe tu proyecto o necesidad..."
                />
              </div>

              <ButtonMailto
                mailto={buildMailto()}
                className="group w-full bg-navy-blue hover:bg-blue-900 text-white py-4 rounded-2xl font-bold text-base shadow-xl hover:shadow-navy-blue/40 transition-all duration-300 flex items-center justify-center gap-3"
              >
                Enviar Mensaje
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </ButtonMailto>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 h-[500px] w-full rounded-lg overflow-hidden shadow-2xl border-2 border-white dark:border-gray-800">
          <iframe
            title="Mapa Cooperativa Juárez"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2843.0105413298584!2d-102.18695192610481!3d22.184216947095777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8682072b0f371093%3A0xf4f8b39d7db1a!2sTransportes%20Hidro%20Hidalguenses!5e1!3m2!1ses!2smx!4v1774465911560!5m2!1ses!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="brightness-90 hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </motion.section>
  )
}
