import { motion } from "framer-motion"
import { ChevronDown, Phone, ArrowRight, Briefcase, Users, Building2 } from "lucide-react"

const stats = [
  { icon: Briefcase, value: "200+", label: "Soluciones operativas" },
  { icon: Users, value: "100", label: "Empleos generados" },
  { icon: Building2, value: "2", label: "Sedes operativas" },
]

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/d49pnr5f/514250826-122172550322351822-1724328279750070403-n.jpg')",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-blue/90 via-navy-blue/75 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Decorative blobs */}
      <div aria-hidden="true" className="absolute top-1/4 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center pt-24 pb-36">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-lg"
        >
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
          <span>Empresa Mexicana de Servicios Industriales · Aguascalientes, México</span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6"
        >
          Transportes
          <br />
          <span className="text-white drop-shadow-lg">Hidro Hidalguenses</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10"
        >
          Especialistas en explotación de yacimientos, manejo de materiales pétreos y
          transporte público de carga para la industria.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href="#servicios"
            className="group inline-flex items-center justify-center gap-2 bg-secondary hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-2xl shadow-secondary/30 transition-all duration-300 hover:scale-105"
          >
            Nuestros Servicios
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:7731820988"
            className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            <Phone size={18} />
            773 182 0988
          </a>
        </motion.div>

        {/* Glass Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center space-x-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-5 hover:bg-white/15 transition-all duration-300 group shadow-lg"
            >
              <div className="w-11 h-11 bg-secondary/80 rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform shadow-md">
                <Icon size={22} />
              </div>
              <div className="text-left">
                <p className="text-2xl font-extrabold text-white leading-none">{value}</p>
                <p className="text-xs text-white/70 mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 gap-1"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Explorar</span>
        <ChevronDown size={20} className="animate-bounce" />
      </motion.div>
    </div>
  )
}
