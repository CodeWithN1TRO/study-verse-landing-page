"use client"

import { useEffect, useRef, useState } from "react"
import { Home, Tv, Zap, BarChart3, Users } from "lucide-react"

export default function DashboardPreview() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/10"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(108,99,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(108,99,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Focus Hub Awaits
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preview of Stellar Space's beautiful, intuitive interface designed to keep you focused and motivated.
          </p>
        </div>

        {/* Mock Dashboard Card */}
        <div className={`relative group ${isVisible ? "animate-scale-in" : "opacity-0"}`}>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 to-secondary/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Browser Frame */}
          <div className="relative rounded-3xl border border-border/50 bg-card/40 backdrop-blur-xl overflow-hidden shadow-2xl">
            {/* Browser Header */}
            <div className="bg-card/80 border-b border-border/50 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-xs text-muted-foreground">Stellar Space Dashboard</div>
              <div className="w-12 h-4" />
            </div>

            {/* Dashboard Content */}
            <div className="p-8 bg-gradient-to-br from-background via-card/30 to-background min-h-[500px] flex gap-6">
              {/* Sidebar */}
              <div className="hidden lg:block w-48 space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/20 text-primary">
                  <Home className="h-5 w-5" />
                  <span className="text-sm font-medium">Home</span>
                </div>
                {[
                  { icon: Tv, label: "Rooms" },
                  { icon: Zap, label: "Focus" },
                  { icon: BarChart3, label: "Dashboard" },
                  { icon: Users, label: "Community" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer text-muted-foreground"
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Main Content */}
              <div className="flex-1 space-y-6">
                {/* Timer Display */}
                <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center">
                  <p className="text-sm text-muted-foreground mb-2">Current Session</p>
                  <p className="text-5xl font-bold text-foreground font-mono">25:00</p>
                  <p className="text-sm text-muted-foreground mt-2">Pomodoro Session • 12 people studying</p>
                </div>

                {/* Active Users Grid */}
                <div>
                  <p className="text-sm font-semibold mb-3 text-muted-foreground">Active Study Partners</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center"
                      >
                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-secondary" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-card/50 border border-border/50 p-4">
                    <p className="text-xs text-muted-foreground">Focus Time Today</p>
                    <p className="text-2xl font-bold text-primary">4h 32m</p>
                  </div>
                  <div className="rounded-lg bg-card/50 border border-border/50 p-4">
                    <p className="text-xs text-muted-foreground">Focus Streak</p>
                    <p className="text-2xl font-bold text-secondary">12 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
