import { HeroSection } from "@/components/hero-section"
import { AppsSection } from "@/components/apps-section"
import { IOSAgencySection } from "@/components/ios-agency-section"
import { AutomationAgencySection } from "@/components/automation-agency-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Subtle paper grain overlay */}
      <div className="paper-texture pointer-events-none fixed inset-0 opacity-[0.03]" />
      
      <div className="relative">
        <HeroSection />
        <AppsSection />
        <IOSAgencySection />
        <AutomationAgencySection />
        <AboutSection />
        <Footer />
      </div>
    </main>
  )
}
