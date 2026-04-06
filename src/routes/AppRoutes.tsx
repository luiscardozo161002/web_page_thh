import { Routes, Route } from "react-router-dom"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

import Home from "@/pages/Home"
import AcercaPage from "@/pages/AcercaPage"
import MisionVisionPage from "@/pages/MisionVisionPage"
import ValoresPage from "@/pages/ValoresPage"
import HistoriaPage from "@/pages/HistoriaPage"
import IdeologiaPage from "@/pages/IdeologiaPage"
import ServiciosPage from "@/pages/ServiciosPage"
import FilialesPage from "@/pages/FilialesPage"
import ContactoPage from "@/pages/ContactoPage"
import UbicacionPage from "@/pages/UbicacionPage"
import BolsaTrabajoPage from "@/pages/BolsaTrabajoPage"
import NotasPage from "@/pages/NotasPage"
import PoliticaCalidadPage from "@/pages/PoliticaCalidadPage"
import PrevencionPsicosocialPage from "@/pages/PrevencionPsicosocialPage"

function NotFound() {
  return (
    <div className="pt-32 min-h-screen flex flex-col items-center justify-center text-center container mx-auto px-4">
      <div className="w-24 h-24 bg-secondary/10 dark:bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-8">
        <span className="text-4xl font-black text-secondary">404</span>
      </div>
      <h1 className="text-3xl font-extrabold text-navy-blue dark:text-white mb-3">
        Página no encontrada
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
        La página que buscas no existe o fue movida. Regresa al inicio para continuar navegando.
      </p>
      <a
        href="/"
        className="inline-flex items-center gap-2 bg-navy-blue hover:bg-secondary text-white font-bold px-8 py-3 rounded-full transition-colors shadow-lg"
      >
        Ir al Inicio
      </a>
    </div>
  )
}

function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"                        element={<Home />} />
        <Route path="/acerca"                  element={<AcercaPage />} />
        <Route path="/mision-y-vision"         element={<MisionVisionPage />} />
        <Route path="/valores"                 element={<ValoresPage />} />
        <Route path="/historia"                element={<HistoriaPage />} />
        <Route path="/ideologia"               element={<IdeologiaPage />} />
        <Route path="/servicios"               element={<ServiciosPage />} />
        <Route path="/filiales"                element={<FilialesPage />} />
        <Route path="/contacto"                element={<ContactoPage />} />
        <Route path="/ubicacion"               element={<UbicacionPage />} />
        <Route path="/bolsa-de-trabajo"        element={<BolsaTrabajoPage />} />
        <Route path="/notas"                   element={<NotasPage />} />
        <Route path="/politica-calidad"        element={<PoliticaCalidadPage />} />
        <Route path="/prevencion-psicosocial"  element={<PrevencionPsicosocialPage />} />
        <Route path="*"                        element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default AppRoutes
