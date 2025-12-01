"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, Star, Zap, Coffee, Globe, Calendar, BookOpen, Sprout } from "lucide-react"

const innerAvatars = [
  "https://i.pinimg.com/736x/11/db/66/11db66ae1109327cd3ad53392969432f.jpg",
  "https://i.pinimg.com/736x/4a/c7/b5/4ac7b549ff195641dd683e44edf9ae12.jpg",
  "https://i.pinimg.com/736x/77/92/cc/7792cc86271d5c305670cf70a13dccc6.jpg",
]

const outerAvatars = [
  "https://i.pinimg.com/1200x/12/4b/f1/124bf107d9e2616cc9c0523125a2d1ba.jpg",
  "https://i.pinimg.com/736x/c1/64/27/c1642791e5fbb267ba078b0984627f8c.jpg",
  "https://i.pinimg.com/736x/85/56/f4/8556f42585cfe3482a377a45c796de6a.jpg",
  "https://i.pinimg.com/736x/07/1f/5c/071f5c4fe7dd106f9770dbdc0a5f455f.jpg",
]

const innerIcons = [
  { Icon: Star, color: "text-yellow-300" },
  { Icon: Zap, color: "text-blue-300" },
  { Icon: Coffee, color: "text-amber-300" },
]

const outerIcons = [
  { Icon: Globe, color: "text-emerald-300" },
  { Icon: Calendar, color: "text-pink-300" },
  { Icon: BookOpen, color: "text-sky-300" },
  { Icon: Sprout, color: "text-green-300" },
]

const flags = [
  "https://flagcdn.com/w80/kr.png",
  "https://flagcdn.com/w80/jp.png",
  "https://flagcdn.com/w80/us.png",
  "https://flagcdn.com/w80/ca.png",
  "https://flagcdn.com/w80/gb.png",
  "https://flagcdn.com/w80/au.png",
  "https://flagcdn.com/w80/de.png",
]

const chatMessages = [
  "25 min focus, 5 min break ⏱️",
  "Coffee + lo-fi = perfect combo ☕🎧",
  "Anyone else on pomodoro #3?",
  "Night study gang checking in 🌙",
  "Almost done with this chapter 💪",
  "Let’s lock in and finish this.",
  "Who's up for a 50min sprint? 🏃‍♂️",
  "Locked in 🔒",
  "Midnight oil crew 🕯️",
  "Focus mode: ON 🚫📱",
  "Study gang assemble! 📚",
  "Physics exam tmrw, send help 😭",
  "Hydrate check! 💧",
  "Grind never stops 😤",
  "Goal: Finish this module tonight",
  "Pomodoro timer starts... NOW!",
]

type ActiveBubble = {
  id: number
  text: string
  avatarId: string
  isTyping: boolean
  isExiting: boolean
}

const TypingIndicator = () => (
  <div className="flex items-center gap-1 px-1 py-0.5">
    <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce [animation-delay:-0.3s]" />
    <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce [animation-delay:-0.15s]" />
    <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce" />
  </div>
)

export default function CommunitySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeBubbles, setActiveBubbles] = useState<ActiveBubble[]>([])

  // Refs to track state without triggering re-renders in the interval
  const activeBubblesRef = useRef<ActiveBubble[]>([])
  const bubbleIdCounter = useRef(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Keep ref in sync with state
  useEffect(() => {
    activeBubblesRef.current = activeBubbles
  }, [activeBubbles])

  // Multi-bubble randomizer logic
  useEffect(() => {
    const interval = setInterval(() => {
      // Check against ref to avoid dependency loop
      if (activeBubblesRef.current.length >= 3) return

      const randomMsg = chatMessages[Math.floor(Math.random() * chatMessages.length)]
      const isInner = Math.random() > 0.5
      const targetIndex = Math.floor(Math.random() * (isInner ? innerAvatars.length : outerAvatars.length))
      const avatarId = isInner ? `inner-${targetIndex}` : `outer-${targetIndex}`

      // Avoid duplicate avatars having bubbles (check ref)
      if (activeBubblesRef.current.some(b => b.avatarId === avatarId)) return

      const newBubbleId = bubbleIdCounter.current++
      const newBubble: ActiveBubble = {
        id: newBubbleId,
        text: randomMsg,
        avatarId,
        isTyping: true,
        isExiting: false
      }

      setActiveBubbles(prev => [...prev, newBubble])

      // Switch from typing to message after 2s
      setTimeout(() => {
        setActiveBubbles(prev => prev.map(b => b.id === newBubbleId ? { ...b, isTyping: false } : b))
      }, 2000)

      // Start exiting after 6.5s (2s typing + 4.5s message)
      setTimeout(() => {
        setActiveBubbles(prev => prev.map(b => b.id === newBubbleId ? { ...b, isExiting: true } : b))
      }, 6500)

      // Remove bubble after 7s
      setTimeout(() => {
        setActiveBubbles(prev => prev.filter(b => b.id !== newBubbleId))
      }, 7000)

    }, 2000) // Check every 2 seconds to see if we can spawn a bubble

    return () => clearInterval(interval)
  }, []) // Empty dependency array ensures interval persists

  return (
    <section
      id="community"
      className="relative min-h-[100vh] flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Deep Space Background */}
      <div className="absolute inset-0 -z-20 bg-[#030014]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#030014] to-[#030014]" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center z-10">

        {/* Header Section (Centered Above Orbits) */}
        <div className={cn(
          "text-center mb-16 md:mb-24 space-y-4 max-w-2xl px-4",
          "transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
            Join the Stellar Space Study Community
          </h2>
          <p className="text-lg md:text-xl text-slate-300 font-light">
            Study with people around the world, one focus session at a time.
          </p>
        </div>

        {/* Orbital System Container */}
        <div className="relative w-[800px] h-[800px] flex items-center justify-center mb-12">

          {/* Static Rings */}
          {/* Inner Ring */}
          <div className="absolute w-[500px] h-[500px] rounded-full border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)]" />
          {/* Outer Ring */}
          <div className="absolute w-[750px] h-[750px] rounded-full border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.15)] hidden md:block" />

          {/* Inner Orbit (Clockwise) */}
          <div className="absolute inset-0 animate-orbit z-20">
            <div className="relative w-full h-full">
              {/* Avatars */}
              {innerAvatars.map((src, i) => {
                const angle = (i / innerAvatars.length) * 360
                return (
                  <div
                    key={`inner-${i}`}
                    className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8"
                    style={{
                      transform: `rotate(${angle}deg) translate(250px) rotate(-${angle}deg)`,
                    }}
                  >
                    {/* Counter-rotate to stay upright */}
                    <div
                      className="w-full h-full"
                      style={{ animation: "counter-orbit 60s linear infinite" }}
                    >
                      <div className="relative w-full h-full group">
                        <img
                          src={src}
                          alt="Student"
                          className="w-full h-full rounded-full border-2 border-white/20 object-cover shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border border-white/50 overflow-hidden shadow-md">
                          <img src={flags[i % flags.length]} alt="Flag" className="w-full h-full object-cover" />
                        </div>

                        {/* Chat Bubble */}
                        {activeBubbles.find(b => b.avatarId === `inner-${i}`) && (
                          <div className={cn(
                            "absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2.5 rounded-2xl",
                            "bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium shadow-xl",
                            "z-50 transition-all duration-500 ease-out origin-bottom",
                            // Entry animation
                            !activeBubbles.find(b => b.avatarId === `inner-${i}`)?.isExiting && "animate-in fade-in zoom-in slide-in-from-bottom-2",
                            // Exit animation
                            activeBubbles.find(b => b.avatarId === `inner-${i}`)?.isExiting && "animate-out fade-out zoom-out fill-mode-forwards"
                          )}>
                            {activeBubbles.find(b => b.avatarId === `inner-${i}`)?.isTyping ? (
                              <TypingIndicator />
                            ) : (
                              <span className="animate-in fade-in">{activeBubbles.find(b => b.avatarId === `inner-${i}`)?.text}</span>
                            )}
                            {/* Bubble Tail */}
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/10 border-r border-b border-white/20 rotate-45" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}

              {/* Icons (Interspersed) */}
              {innerIcons.map((item, i) => {
                // Offset by 60 degrees to place between avatars (0, 120, 240) -> (60, 180, 300)
                const angle = (i / innerIcons.length) * 360 + 60
                return (
                  <div
                    key={`inner-icon-${i}`}
                    className="absolute top-1/2 left-1/2 w-10 h-10 -ml-5 -mt-5"
                    style={{
                      transform: `rotate(${angle}deg) translate(250px) rotate(-${angle}deg)`,
                    }}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                      style={{ animation: "counter-orbit 60s linear infinite" }}
                    >
                      <item.Icon className={cn("w-5 h-5", item.color)} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Outer Orbit (Counter-Clockwise) - Hidden on mobile */}
          <div className="absolute inset-0 animate-counter-orbit hidden md:block z-20">
            <div className="relative w-full h-full">
              {/* Avatars */}
              {outerAvatars.map((src, i) => {
                const angle = (i / outerAvatars.length) * 360
                return (
                  <div
                    key={`outer-${i}`}
                    className="absolute top-1/2 left-1/2 w-20 h-20 -ml-10 -mt-10"
                    style={{
                      transform: `rotate(${angle}deg) translate(375px) rotate(-${angle}deg)`,
                    }}
                  >
                    {/* Counter-rotate (Clockwise) to stay upright */}
                    <div
                      className="w-full h-full"
                      style={{ animation: "orbit 60s linear infinite" }}
                    >
                      <div className="relative w-full h-full group">
                        <img
                          src={src}
                          alt="Student"
                          className="w-full h-full rounded-full border-2 border-white/20 object-cover shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border border-white/50 overflow-hidden shadow-md">
                          <img src={flags[(i + 3) % flags.length]} alt="Flag" className="w-full h-full object-cover" />
                        </div>

                        {/* Chat Bubble */}
                        {activeBubbles.find(b => b.avatarId === `outer-${i}`) && (
                          <div className={cn(
                            "absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2.5 rounded-2xl",
                            "bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium shadow-xl",
                            "z-50 transition-all duration-500 ease-out origin-bottom",
                            // Entry animation
                            !activeBubbles.find(b => b.avatarId === `outer-${i}`)?.isExiting && "animate-in fade-in zoom-in slide-in-from-bottom-2",
                            // Exit animation
                            activeBubbles.find(b => b.avatarId === `outer-${i}`)?.isExiting && "animate-out fade-out zoom-out fill-mode-forwards"
                          )}>
                            {activeBubbles.find(b => b.avatarId === `outer-${i}`)?.isTyping ? (
                              <TypingIndicator />
                            ) : (
                              <span className="animate-in fade-in">{activeBubbles.find(b => b.avatarId === `outer-${i}`)?.text}</span>
                            )}
                            {/* Bubble Tail */}
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/10 border-r border-b border-white/20 rotate-45" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}

              {/* Icons (Interspersed) */}
              {outerIcons.map((item, i) => {
                // Offset by 45 degrees to place between avatars (0, 90, 180, 270) -> (45, 135, 225, 315)
                const angle = (i / outerIcons.length) * 360 + 45
                return (
                  <div
                    key={`outer-icon-${i}`}
                    className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6"
                    style={{
                      transform: `rotate(${angle}deg) translate(375px) rotate(-${angle}deg)`,
                    }}
                  >
                    <div
                      className="w-full h-full flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                      style={{ animation: "orbit 60s linear infinite" }}
                    >
                      <item.Icon className={cn("w-6 h-6", item.color)} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Centered CTA Button */}
          <div className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30",
            "transition-all duration-1000 delay-500",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          )}>
            <Button
              size="lg"
              className={cn(
                "relative h-16 px-12 rounded-full text-xl font-semibold tracking-wide",
                "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md",
                "border border-white/20 hover:border-white/40",
                "shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.6)]",
                "transition-all duration-300 hover:scale-105 group"
              )}
              asChild
            >
              <Link href="https://discord.gg/FqwZuHEBqM" target="_blank">
                Join Stellar Community
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

        </div>

      </div>
    </section>
  )
}
