import { motion } from "framer-motion"
import { LucideIcon, Home, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

interface PageHeroProps {
  title: string
  titleAccent?: string        // Word(s) to highlight in secondary color
  subtitle?: string
  breadcrumb?: string         // e.g. "Nosotros / Historia"
  breadcrumbPath?: string     // parent route e.g. "/acerca"
  icon?: LucideIcon
  bgImage?: string
  size?: "sm" | "md"
}

export default function PageHero({
  title,
  titleAccent,
  subtitle,
  breadcrumb,
  icon: Icon,
  bgImage,
  size = "md",
}: PageHeroProps) {
  const py = size === "sm" ? "py-20" : "py-28"

  return (
    <section className={`relative pt-20 ${py} overflow-hidden`}>
      {/* Background image or gradient */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
      )}
      <div
        className={`absolute inset-0 ${
          bgImage
            ? "bg-gradient-to-br from-navy-blue/92 via-navy-blue/80 to-black/85"
            : "bg-gradient-to-br from-navy-blue via-blue-950 to-black"
        }`}
      />

      {/* Decorative blobs */}
      <div className="absolute top-1/3 left-8 w-64 h-64 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-12 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-white/50 text-xs uppercase tracking-[0.2em] font-semibold mb-6"
          >
            <Link to="/" className="hover:text-white/80 transition-colors flex items-center gap-1">
              <Home size={12} />
              Inicio
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/70">{breadcrumb}</span>
          </motion.div>
        )}

        {/* Icon */}
        {Icon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-secondary/30"
          >
            <Icon size={30} className="text-white" />
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
        >
          {titleAccent ? (
            <>
              {title}{" "}
              <span className="text-secondary">{titleAccent}</span>
            </>
          ) : (
            title
          )}
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-20 h-1.5 bg-secondary mx-auto mb-6 origin-left"
        />

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-white/75 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
