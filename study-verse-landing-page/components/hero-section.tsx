"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

const quotes = [
  "Work with the world, not alone.",
  "Focus is easier when shared.",
  "Your study partner is one click away.",
  "Turn consistency into results.",
  "Study smarter, together.",
  "Accountability breeds success.",
]

export default function HeroSection() {
  const [quote, setQuote] = useState(quotes[0])
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(randomQuote)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxklCiUAQRlczPc2bJeg46yBKHSA8bRudGOVNp6QWVWACzRfyE0Pr9MFHFvJ6UmGYAQog/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ email }).toString(),
        }
      )

      toast({
        title: "You're on the list!",
        description: "We'll notify you as soon as we launch.",
      })
      setEmail("")
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuroraBackground className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-6 sm:px-8">
      <section className="relative w-full">

        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(108, 99, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(108, 99, 255, 0.1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="absolute top-32 right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl opacity-40 animate-float" />
        <div
          className="absolute bottom-32 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary/80 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Launching Soon
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-white leading-[1.1] drop-shadow-lg animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Your dreams are big. <br className="hidden sm:block" />
            Your community should be too.
          </h1>

          <p
            className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed font-light text-balance animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Stellar Space is your virtual study space where you focus with others, stay accountable, and finally stop studying alone.
          </p>

          <div className="animate-fade-in-up space-y-6" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-2xl font-semibold text-white tracking-tight">
              Be the first to know when we launch!
            </h2>

            <form
              onSubmit={handleSubmit}
              method="POST"
              action="https://script.google.com/macros/s/AKfycbxklCiUAQRlczPc2bJeg46yBKHSA8bRudGOVNp6QWVWACzRfyE0Pr9MFHFvJ6UmGYAQog/exec"
              className="relative flex items-center w-full max-w-lg mx-auto rounded-full border border-white/10 bg-black/20 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transition-all duration-300 focus-within:border-white/20 focus-within:shadow-[0_0_20px_rgba(255,255,255,0.1)] group overflow-hidden p-1.5"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-transparent border-none text-white placeholder:text-white/40 px-6 py-2 focus:outline-none focus:ring-0 text-base h-full min-w-0"
              />

              <Button
                type="submit"
                disabled={isLoading}
                className="relative shrink-0 rounded-full bg-black/40 hover:bg-black/60 text-white font-medium px-8 py-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border border-white/5 transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <span className="sr-only">Joining...</span>
                  </>
                ) : (
                  "Notify me"
                )}
              </Button>
            </form>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <p className="text-sm sm:text-base text-muted-foreground italic font-light leading-relaxed">"{quote}"</p>
          </div>
        </div>
      </section>
    </AuroraBackground>
  )
}
