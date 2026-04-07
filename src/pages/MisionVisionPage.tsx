import SEO from "@/components/seo/SEO"
import PageHeader from "@/components/layout/PageHeader"
import { Target } from "lucide-react"
import MissionVision from "@/components/sections/MissionVision"

export default function MisionVisionPage() {
  return (
    <main className="bg-background">
      <SEO
        title="Misión y Visión"
        description="Conoce la misión y visión de Transportes Hidro Hidalguenses: excelencia operativa, innovación y compromiso con la industria mexicana."
        path="/mision-y-vision"
      />
      <PageHeader
        title="Misión & Visión"
        subtitle="El rumbo estratégico que trazamos hacia el futuro, fundamentado en excelencia e innovación."
        backgroundImage="https://i.ibb.co/gbW6dXzk/IMG-20210611-154125.jpg"
      />
      <MissionVision />
    </main>
  )
}
