"use client"

import { useEffect, useRef, useState } from "react"
import { Clock, Users, Plus, Zap, CheckSquare, BarChart3, Brain, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    id: 1,
    title: "Global Focus Rooms",
    description: "Join 24/7 virtual focus rooms with students worldwide for accountability and motivation.",
    icon: Clock,
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "Live Study Together Sessions",
    description: "Study alongside real people using silent study-cam tiles in real time.",
    icon: Users,
    color: "from-purple-500 to-pink-400",
  },
  {
    id: 3,
    title: "Create Your Own Rooms",
    description: "Host private or public study rooms and invite friends or communities.",
    icon: Plus,
    color: "from-amber-400 to-orange-500",
  },
  {
    id: 4,
    title: "Pomodoro + Focus Timer",
    description: "Use built-in Pomodoro and session timers to add structure and discipline.",
    icon: Zap,
    color: "from-emerald-400 to-green-500",
  },
  {
    id: 5,
    title: "Task Manager & Tracking",
    description: "Organise tasks and track progress inside your study environment.",
    icon: CheckSquare,
    color: "from-indigo-400 to-blue-500",
  },
  {
    id: 6,
    title: "Productivity Dashboard",
    description: "View focus hours, streaks, and insights to measure your improvement.",
    icon: BarChart3,
    color: "from-rose-400 to-red-500",
  },
  {
    id: 7,
    title: "AI-Powered Insights",
    description: "Get personalised recommendations to optimise your study habits.",
    icon: Brain,
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 8,
    title: "Community Challenges",
    description: "Join global study challenges and climb the leaderboard.",
    icon: Trophy,
    color: "from-yellow-400 to-amber-500",
  },
]

export default function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(
              () => {
                setVisibleCards((prev) => [...prev, Number.parseInt(entry.target.getAttribute("data-id") || "0")])
              },
              Number.parseInt(entry.target.getAttribute("data-delay") || "0"),
            )
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-id]")
    cards?.forEach((card) => observer.observe(card))

    return () => {
      cards?.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white tracking-tight">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Stay Focused
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Stellar Space brings all the tools you need to study smarter. Boost focus, maintain accountability, and build life-changing routines.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isVisible = visibleCards.includes(feature.id)

            return (
              <div
                key={feature.id}
                data-id={feature.id}
                data-delay={index * 50}
                className={cn(
                  "group relative p-8 rounded-[2rem] border border-white/5 bg-black/20 backdrop-blur-xl",
                  "hover:bg-white/5 hover:border-white/10 transition-all duration-500 ease-out",
                  "hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]",
                  "flex flex-col items-start gap-4",
                  isVisible ? "animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-forwards" : "opacity-0"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Card Glow Gradient */}
                <div className={cn(
                  "absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                  "bg-gradient-to-br from-white/5 to-transparent"
                )} />

                {/* Icon Container */}
                <div className={cn(
                  "relative mb-2 inline-flex h-14 w-14 items-center justify-center rounded-2xl",
                  "bg-gradient-to-br shadow-lg",
                  feature.color,
                  "group-hover:scale-110 transition-transform duration-500 ease-out"
                )}>
                  <div className="absolute inset-[1px] rounded-[14px] bg-black/40 backdrop-blur-sm" />
                  <Icon className="relative h-7 w-7 text-white drop-shadow-md" />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-2">
                  <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-blue-200 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
