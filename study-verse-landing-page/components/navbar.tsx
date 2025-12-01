"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Home, LayoutGrid, Users, Info, Mail } from "lucide-react"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Features", href: "/#features", icon: LayoutGrid },
  { name: "Community", href: "/#community", icon: Users },
  { name: "About", href: "/#about", icon: Info },
  { name: "Contact", href: "/#contact", icon: Mail },
]

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Mobile Top Header - Floating */}
      <div className="md:hidden fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <Link href="/" className="flex items-center gap-2 pointer-events-auto backdrop-blur-md bg-background/10 rounded-full px-3 py-1.5 border border-white/10">
          <div className="relative w-8 h-8">
            <img
              src="/stellar-space-logo.png?v=3"
              alt="Stellar Space Logo"
              className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            />
          </div>
          <span className="text-sm font-bold text-white tracking-tight">Stellar Space</span>
        </Link>
      </div>

      {/* Desktop Logo & CTA Wrapper */}
      <div className="hidden md:flex fixed top-6 left-0 right-0 z-50 justify-center px-8 pointer-events-none">
        <div className="w-full max-w-7xl flex items-center justify-between">
          {/* Desktop Logo - Flush Left */}
          <Link href="/" className="pointer-events-auto flex items-center gap-2 group">
            <div className="relative w-10 h-10 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/stellar-space-logo.png?v=3"
                alt="Stellar Space Logo"
                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              />
            </div>
            <span className="font-bold text-lg tracking-tight text-white/90 group-hover:text-white transition-colors">
              Stellar Space
            </span>
          </Link>

          {/* Desktop CTA - Flush Right */}
          <div className="pointer-events-auto group relative">
            {/* Ambient neon glow (behind) */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition duration-700" />

            <Button
              asChild
              className={cn(
                "relative rounded-full px-8 h-11 border border-white/10",
                // Glass Background
                "bg-white/5 backdrop-blur-2xl",
                // Text
                "text-white/90 font-semibold tracking-wide drop-shadow-sm",
                // Inner Glow / Vignette / Border Glow
                "shadow-[inset_0_0_12px_rgba(255,255,255,0.05),0_0_20px_rgba(124,58,237,0.1)]",
                // Hover State
                "transition-all duration-300 ease-out",
                "hover:bg-white/10 hover:scale-[1.03] hover:text-white hover:border-white/20 hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.1),0_0_30px_rgba(124,58,237,0.3)]",
                // Active/Press State
                "active:scale-[0.98] active:translate-y-px active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
              )}
            >
              <Link href="https://discord.gg/FqwZuHEBqM" target="_blank" rel="noopener noreferrer">
                Join Community
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Nav Container (Center Pill on Desktop / Bottom Bar on Mobile) */}
      <div className={cn(
        "fixed z-50 transition-all duration-300 ease-in-out",
        // Desktop: Top center floating
        "md:top-6 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-3xl",
        // Mobile: Bottom fixed
        "bottom-6 left-6 right-6 md:bottom-auto"
      )}>
        <nav className={cn(
          "flex items-center justify-between rounded-full border border-white/10 shadow-2xl backdrop-blur-xl transition-all duration-300",
          "bg-gradient-to-r from-blue-900/20 to-purple-900/20", // Soft gradient background
          "supports-[backdrop-filter]:bg-black/10",
          "px-1.5 md:px-2", // Balanced padding
          isScrolled ? "py-1.5" : "py-2" // Shrink effect
        )}>

          {/* Nav Items */}
          <ul className="flex items-center justify-between w-full gap-1 md:gap-0 relative">
            {navItems.map((item) => {
              const isActive = activeTab === item.name
              const Icon = item.icon

              return (
                <li key={item.name} className="relative z-10 flex-1">
                  <Link
                    href={item.href}
                    onClick={() => setActiveTab(item.name)}
                    className={cn(
                      "flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 px-2 md:px-0 py-2 md:py-2.5 rounded-full transition-all duration-300 relative group w-full",
                      isActive ? "text-white" : "text-white/60 hover:text-white"
                    )}
                  >
                    {/* Active Background Pill */}
                    {isActive && (
                      <span className="absolute inset-0 bg-white/10 rounded-full -z-10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-sm animate-in fade-in zoom-in-95 duration-200" />
                    )}

                    {/* Hover Glow */}
                    <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                    <Icon className={cn("w-5 h-5 md:w-4 md:h-4 transition-transform duration-300", isActive && "scale-110")} />
                    <span className={cn(
                      "text-[10px] md:text-sm font-medium hidden md:block", // Labels hidden on mobile, shown on desktop
                      isActive ? "opacity-100" : "opacity-70"
                    )}>
                      {item.name}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  )
}
