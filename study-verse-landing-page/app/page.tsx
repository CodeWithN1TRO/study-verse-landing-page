"use client"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import FeaturesSection from "@/components/features-section"
import DashboardPreview from "@/components/dashboard-preview"
import CommunitySection from "@/components/community-section"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="grid-bg">
        <HeroSection />
        <AboutSection />
      </div>
      <div className="grid-bg">
        <FeaturesSection />
      </div>
      <DashboardPreview />
      <CommunitySection />
      <Footer />
    </main>
  )
}
