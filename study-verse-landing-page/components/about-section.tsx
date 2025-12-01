"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const avatars = [
    "https://i.pinimg.com/736x/11/db/66/11db66ae1109327cd3ad53392969432f.jpg",
    "https://i.pinimg.com/736x/4a/c7/b5/4ac7b549ff195641dd683e44edf9ae12.jpg",
    "https://i.pinimg.com/736x/77/92/cc/7792cc86271d5c305670cf70a13dccc6.jpg",
    "https://i.pinimg.com/1200x/12/4b/f1/124bf107d9e2616cc9c0523125a2d1ba.jpg",
    "https://i.pinimg.com/736x/c1/64/27/c1642791e5fbb267ba078b0984627f8c.jpg",
    "https://i.pinimg.com/736x/85/56/f4/8556f42585cfe3482a377a45c796de6a.jpg",
    "https://i.pinimg.com/736x/07/1f/5c/071f5c4fe7dd106f9770dbdc0a5f455f.jpg",
]

const flags = [
    "https://flagcdn.com/w80/kr.png", // South Korea
    "https://flagcdn.com/w80/jp.png", // Japan
    "https://flagcdn.com/w80/us.png", // United States
]

const bulletPoints = [
    { text: "Real students, real motivation", icon: "🌍" },
    { text: "Built-in accountability", icon: "🔥" },
    { text: "Zero distractions, maximum vibes", icon: "🧠" },
    { text: "Study alone, but not lonely", icon: "😎" },
]

export default function AboutSection() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)
    const [activeAvatars, setActiveAvatars] = useState(avatars)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                    }
                })
            },
            { threshold: 0.2 }
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
            className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[128px] -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Visual Feature Box */}
                    <div className={cn(
                        "relative aspect-square lg:aspect-[4/3] w-full max-w-lg mx-auto lg:max-w-none",
                        "transition-all duration-1000 ease-out transform",
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    )}>
                        {/* Liquid Glass Panel */}
                        <div className={cn(
                            "absolute inset-0 rounded-[2.5rem] overflow-hidden group",
                            // Pure Glass Base (High Transparency, High Blur)
                            "backdrop-blur-3xl bg-purple-500/5",
                            // Border & Glow (Soft Neon)
                            "border border-white/20 shadow-[0_0_30px_rgba(124,58,237,0.15)]",
                            // Inner Top Highlight (Gloss) & Floating Shadow
                            "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_20px_50px_rgba(0,0,0,0.2)]"
                        )}>
                            {/* Subtle Surface Sheen */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none opacity-50" />

                            {/* Floating Avatars Container */}
                            <div className="absolute inset-0 p-8">
                                {/* Fixed positions for the 7 specific images */}
                                {activeAvatars.map((src, i) => (
                                    <div
                                        key={i}
                                        className={cn(
                                            "absolute rounded-full border-2 border-white/20 shadow-lg transition-all duration-1000 ease-in-out",
                                            "animate-float"
                                        )}
                                        style={{
                                            // Custom positions for 7 images (Scattered organic layout)
                                            top: `${[15, 65, 30, 75, 20, 50, 80][i]}%`,
                                            left: `${[15, 20, 55, 65, 80, 85, 40][i]}%`,
                                            width: `${[70, 65, 110, 60, 65, 55, 50][i]}px`,
                                            height: `${[70, 65, 110, 60, 65, 55, 50][i]}px`,
                                            animationDelay: `${i * 0.5}s`,
                                            zIndex: i === 2 ? 10 : 1 // Center-ish one (index 2) is biggest
                                        }}
                                    >
                                        <img
                                            src={src}
                                            alt={`Student ${i + 1}`}
                                            className="w-full h-full object-cover rounded-full transition-opacity duration-500"
                                        />
                                        {/* Country Flag Indicator (Replaces Green Dot) */}
                                        <div className="absolute bottom-0 right-0 translate-x-[10%] translate-y-[10%] w-5 h-5 rounded-full border-[1.5px] border-white/80 shadow-sm overflow-hidden bg-white">
                                            <img
                                                src={flags[i % flags.length]}
                                                alt="Flag"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                ))}

                                {/* Connecting Lines (Subtle) */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                                    <path d="M100 100 Q 250 250 400 100" stroke="url(#gradient-line)" strokeWidth="1" fill="none" className="animate-pulse" />
                                    <path d="M100 300 Q 250 250 400 300" stroke="url(#gradient-line)" strokeWidth="1" fill="none" className="animate-pulse" style={{ animationDelay: "1s" }} />
                                    <defs>
                                        <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="rgba(168, 85, 247, 0)" />
                                            <stop offset="50%" stopColor="rgba(168, 85, 247, 0.5)" />
                                            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className={cn(
                        "space-y-8 transition-all duration-1000 ease-out delay-300 transform",
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    )}>

                        <div className="space-y-4">
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white leading-[1.1] tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                                Where focus meets fun.
                            </h2>

                            <div className="space-y-6 text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
                                <p>
                                    Stellar Space isn’t just a study tool — it’s a whole vibe.
                                </p>
                                <p>
                                    A place where strangers become study buddies, deadlines feel less deadly, and productivity finally feels fun.
                                </p>
                                <p className="text-white/90 font-medium">
                                    Join 24/7 rooms filled with students across the world who are grinding… just like you.
                                </p>
                            </div>
                        </div>

                        {/* Bullet Points */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {bulletPoints.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <span className="text-2xl">{item.icon}</span>
                                    <span className="text-sm font-medium text-slate-200">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Tagline (Replaces Button) */}
                        <div className="pt-4 animate-pulse">
                            <p className="text-sm font-medium bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent tracking-wide">
                                P.S. We’re still cooking the website — bigger things are coming.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
