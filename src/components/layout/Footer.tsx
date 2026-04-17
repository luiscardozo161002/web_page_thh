import { Link } from "react-router-dom"
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowRight } from "lucide-react"
import ButtonMailto from "@/components/ui/ButtonMailto"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden z-0">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/wZvsgpcq/IMG-20210304-134021.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-blue/95 via-navy-blue/90 to-black/95" />

      {/* Decorative blobs */}
      <div aria-hidden="true" className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div aria-hidden="true" className="absolute bottom-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none translate-x-1/4 translate-y-1/4" />

      <div className="relative z-10 pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">



            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="inline-flex items-center space-x-3 mb-6">
                <img src="https://i.ibb.co/ZpzXD141/thh-oficial-copia.png" alt="Logo Transportes Hidro-Hidalguenses" className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm shadow-md transition-colors bg-white/20 text-white border border-white/30" />
                <span className="text-white text-md font-light tracking-tight">
                  Transportes Hidro-Hidalguenses</span>

              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Empresa mexicana especializada en explotación de yacimientos, manejo de
                materiales pétreos y transporte público de carga para la industria.
              </p>
              <div className="flex space-x-3">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61560554673446" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Síguenos en Facebook"
                    className="w-9 h-9 bg-white/10 hover:bg-secondary border border-white/10 hover:border-secondary rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                ))}
                <a href="https://www.facebook.com/profile.php?id=61560554673446" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm leading-relaxed mb-6">@Transportes Hidro-Hidalguenses</a>
              </div>
            </div>






            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest flex items-center gap-2">
                <span className="w-4 h-0.5 bg-secondary inline-block" />
                Navegación
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Inicio", to: "/" },
                  { name: "Acerca de", to: "/acerca" },
                  { name: "Misión y Visión", to: "/mision-y-vision" },
                  { name: "Servicios", to: "/servicios" },
                  { name: "Bolsa de Trabajo", to: "/bolsa-de-trabajo" },
                  { name: "Contacto", to: "/contacto" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className="group flex items-center text-gray-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      <ArrowRight
                        size={14}
                        className="mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-secondary"
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest flex items-center gap-2">
                <span className="w-4 h-0.5 bg-secondary inline-block" />
                Servicios
              </h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                {[
                  "Minería de Piedra de Cal",
                  "Minería de Arena y Grava",
                  "Transporte Público de Carga",
                  "Renta de Maquinaria",
                  "Barrenación y Perforación",
                  "Carga y Acarreo",
                ].map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest flex items-center gap-2">
                <span className="w-4 h-0.5 bg-secondary inline-block" />
                Contacto
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-50/20 border border-gray-50/30 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={14} className="text-white" />
                  </div>
                  <a
                    href="https://maps.app.goo.gl/MJKhHojemQZDJXpt8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 text-sm leading-relaxed hover:text-white transition-colors"
                  >
                    Calle Tercera No. 214, Col. Fraccionamiento Popular,
                    Loc. Pabellón de Arteaga, Aguascalientes. C.P. 20676
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-50/20 border border-gray-50/30 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={14} className="text-white" />
                  </div>
                  <a href="tel:7731820988" className="text-gray-400 text-sm hover:text-white transition-colors">
                    773 182 0988
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-50/20 border border-gray-50/30 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={14} className="text-white" />
                  </div>
                  <ButtonMailto
                    mailto="mailto:marilyn.thh@cooperativajuarez.com.mx"
                    label="marilyn.thh@cooperativajuarez.com.mx"
                    className="text-gray-400 text-xs hover:text-white transition-colors break-all"
                  />
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
              <p>© {currentYear} Transportes Hidro-Hidalguenses S.A. de C.V. Todos los derechos reservados.</p>
              <div className="flex space-x-6">
                <Link to="/politica-calidad" className="hover:text-white transition-colors">
                  Política de Calidad
                </Link>
                <Link to="/prevencion-psicosocial" className="hover:text-white transition-colors">
                  Prevención Psicosocial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
