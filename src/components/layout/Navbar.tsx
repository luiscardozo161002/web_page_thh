import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react"
import { cn } from "@/utils/utils"
import { useTheme } from "@/context/ThemeContext"

const navLinks = [
  { name: "Inicio", path: "/" },
  {
    name: "Nosotros",
    submenu: [
      { name: "Acerca de", path: "/acerca" },
      { name: "Misión y Visión", path: "/mision-y-vision" },
      { name: "Valores", path: "/valores" },
      { name: "Historia", path: "/historia" },
      { name: "Ideología", path: "/ideologia" },
    ],
  },
  { name: "Servicios", path: "/servicios" },
  {
    name: "Políticas",
    submenu: [
      { name: "Política de Calidad", path: "/politica-calidad" },
      { name: "Prevención Psicosocial", path: "/prevencion-psicosocial" },
    ],
  },
  { name: "Bolsa de Trabajo", path: "/bolsa-de-trabajo" },
  { name: "Contacto", path: "/contacto" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const prevLocation = useRef(location.pathname)

  // Ref para leer isOpen sin recrear el listener en cada cambio
  const isOpenRef = useRef(false)
  useEffect(() => { isOpenRef.current = isOpen }, [isOpen])

  // Close sidebar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      if (isOpenRef.current) setIsOpen(false)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, []) // ← sin dependencias: solo se registra una vez

  // Close sidebar on route change
  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      prevLocation.current = location.pathname
      setIsOpen(false)
    }
  }, [location.pathname])

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const navBg = scrolled
    ? "bg-white/90 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-white/20 dark:border-gray-700/50"
    : "bg-transparent"

  const textColor = scrolled
    ? "text-navy-blue dark:text-white"
    : "text-white"

  return (
    <>
      <nav className={cn("fixed top-0 w-full z-[9997] transition-all duration-300", navBg)}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 min-w-0">
              <img
                src="https://i.ibb.co/ZpzXD141/thh-oficial-copia.png"
                alt="Logo Transportes Hidro Hidalguenses"
                className="w-10 h-10 shrink-0 rounded-full shadow-md bg-transparent"
              />
              {/* Nombre corto solo en móvil */}
              <span className={cn("text-3xl font-bold tracking-tight transition-colors sm:hidden", textColor)}>
                THH
              </span>
              {/* Nombre medio en tablet */}
              <span className={cn("hidden sm:block lg:hidden text-3xl font-bold tracking-tight transition-colors", textColor)}>
                Transportes Hidro Hidalguenses
              </span>
              {/* Nombre completo en desktop */}
              <span className={cn("hidden lg:block text-md font-bold tracking-tight transition-colors", textColor)}>
                Transportes Hidro Hidalguenses S.A. de C.V.
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.submenu ? (
                    <button
                      className={cn(
                        "flex items-center space-x-1 font-semibold hover:text-blue-300 transition-colors text-sm",
                        textColor
                      )}
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                  ) : (
                    <Link
                      to={link.path!}
                      className={cn(
                        "font-semibold hover:text-blue-300 transition-colors text-sm",
                        textColor,
                        location.pathname === link.path && "text-blue-300"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}

                  {link.submenu && (
                    <div className="absolute top-full left-0 mt-3 w-56 bg-white dark:bg-gray-900 shadow-2xl rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 dark:border-gray-700 border-t-4 border-t-secondary">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-5 py-3 text-sm font-medium text-navy-blue dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-blue-600 border-b border-gray-50 dark:border-gray-800 last:border-0 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={cn(
                  "p-2 rounded-full transition-all duration-300 hover:scale-110 border",
                  scrolled
                    ? theme === "dark"
                      ? "bg-gray-800 border-gray-600 hover:bg-gray-700"
                      : "bg-white border-gray-200 hover:bg-gray-100 shadow-sm"
                    : "bg-white/20 border-white/40 hover:bg-white/30"
                )}
                aria-label={theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
              >
                {theme === "dark"
                  ? <Sun size={18} className="text-yellow-300" />
                  : <Moon size={18} className={scrolled ? "text-navy-blue" : "text-white"} />
                }
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center space-x-3 lg:hidden">
              <button
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
                className={cn(
                  "p-2 rounded-full transition-all border",
                  scrolled
                    ? theme === "dark"
                      ? "bg-gray-800 border-gray-600"
                      : "bg-white border-gray-200 shadow-sm"
                    : "bg-white/20 border-white/40"
                )}
              >
                {theme === "dark"
                  ? <Sun size={18} className="text-yellow-300" />
                  : <Moon size={18} className={scrolled ? "text-navy-blue" : "text-white"} />
                }
              </button>
              <button
                aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                className={cn("p-2 rounded-md", textColor)}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

      </nav>

      {/* Drawer montado directamente en <body> via portal para evitar
        que el stacking context del backdrop-blur del nav lo atrape */}
      {createPortal(
        <>
          {/* Backdrop */}
          <div
            className={cn(
              "fixed inset-0 bg-black/50 z-[9998] lg:hidden transition-opacity duration-300",
              isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div
            className={cn(
              "fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white dark:bg-gray-950 z-[9999] lg:hidden transition-transform duration-300 shadow-2xl flex flex-col",
              isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
            )}
          >
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100 dark:border-gray-800">
              <span className="text-xl font-bold text-navy-blue dark:text-white">
                THH<span className="text-blue-600">.</span>
              </span>
              <button onClick={() => setIsOpen(false)} aria-label="Cerrar menú" className="text-navy-blue dark:text-white p-1">
                <X size={26} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.submenu ? (
                    <div>
                      <h4 className="text-base font-bold text-navy-blue dark:text-white mb-3 uppercase tracking-wide">
                        {link.name}
                      </h4>
                      <div className="pl-4 space-y-3 border-l-2 border-blue-600/30">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 font-medium transition-colors text-sm"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path!}
                      className={cn(
                        "block text-lg font-bold transition-colors",
                        location.pathname === link.path
                          ? "text-blue-600"
                          : "text-navy-blue dark:text-white hover:text-blue-600"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  )
}
