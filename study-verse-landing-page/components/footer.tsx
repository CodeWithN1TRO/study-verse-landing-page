"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-gradient-to-b from-background via-background/95 to-card/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <img
                  src="/stellar-space-logo.png?v=3"
                  alt="Stellar Space Logo"
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Stellar Space</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your virtual study space to focus, collaborate, and grow.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.gg/FqwZuHEBqM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Discord
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/legal#terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/legal#privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/legal#cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Stellar Space. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="https://discord.gg/FqwZuHEBqM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.607 1.25a18.27 18.27 0 0 0-5.487 0c-.163-.386-.397-.875-.61-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.975 14.975 0 0 0 1.293-2.1a.07.07 0 0 0-.038-.098a13.11 13.11 0 0 1-1.872-.892a.072.072 0 0 1-.007-.12a10.15 10.15 0 0 0 .372-.294a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.294a.072.072 0 0 1-.006.12a12.3 12.3 0 0 1-1.873.892a.07.07 0 0 0-.037.099c.36.687.772 1.341 1.294 2.099a.078.078 0 0 0 .084.028a19.963 19.963 0 0 0 6.002-3.03a.079.079 0 0 0 .033-.057c.5-4.761-.838-8.898-3.549-12.562a.06.06 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-.967-2.157-2.156c0-1.193.956-2.157 2.157-2.157c1.203 0 2.178.964 2.157 2.157c0 1.19-.956 2.157-2.157 2.157zm7.975 0c-1.183 0-2.157-.967-2.157-2.156c0-1.193.955-2.157 2.157-2.157c1.202 0 2.178.964 2.157 2.157c0 1.19-.955 2.157-2.157 2.157z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
