import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage: string
  icon?: React.ReactNode
}

export default function PageHeader({ title, subtitle, backgroundImage, icon }: PageHeaderProps) {
  return (
    <div className="relative h-[55vh] min-h-[360px] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Parallax-like effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlays - Increased darkness and contrast to match Image 2 */}
      <div className="absolute inset-0 bg-navy-blue/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-blue/40 via-transparent to-navy-blue/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-blue via-transparent to-transparent" />

      {/* Content Area */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] leading-tight">
              {title}
            </h1>
            <div className="w-24 md:w-32 h-2 bg-blue-600 mx-auto mb-6 md:mb-10 shadow-[0_0_20px_rgba(37,99,235,0.4)]" />
            {subtitle && (
              <p className="text-base sm:text-lg md:text-2xl text-white font-medium leading-snug max-w-2xl mx-auto drop-shadow-lg tracking-normal opacity-90 px-2">
                {subtitle}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
