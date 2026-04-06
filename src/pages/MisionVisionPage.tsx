import PageHeader from "@/components/layout/PageHeader"
import { Target } from "lucide-react"
import MissionVision from "@/components/sections/MissionVision"

export default function MisionVisionPage() {
  return (
    <main className="bg-background">
      <PageHeader
        title="Misión & Visión"
        subtitle="El rumbo estratégico que trazamos hacia el futuro, fundamentado en excelencia e innovación."
        backgroundImage="https://i.ibb.co/gbW6dXzk/IMG-20210611-154125.jpg"
      />
      <MissionVision />
    </main>
  )
}
