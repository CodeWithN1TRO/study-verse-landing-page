"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import LegalSections from "@/components/legal-sections"

export default function LegalPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />
            <div className="pt-24">
                <LegalSections />
            </div>
            <Footer />
        </main>
    )
}
