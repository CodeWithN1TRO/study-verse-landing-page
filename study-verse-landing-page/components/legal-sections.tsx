"use client"

import { cn } from "@/lib/utils"

export default function LegalSections() {
    return (
        <div className="bg-background text-foreground">
            {/* Terms Section */}
            <section id="terms" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">Terms of Use</h2>
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Stellar Space is a productivity and community platform designed for students and creators.
                            By using our website or services, you agree to:
                        </p>
                        <ul className="mt-4 space-y-2 list-disc list-inside text-slate-400">
                            <li>Use the platform responsibly and respectfully</li>
                            <li>Not engage in harassment, abuse, or harmful behavior</li>
                            <li>Avoid misuse of features, automation, or scraping</li>
                            <li>Follow all applicable laws when using Stellar Space</li>
                        </ul>
                        <p className="mt-4 text-slate-400">
                            We may update features or policies as the platform grows. Continued use means you accept those updates. If you disagree with any part of the terms, please discontinue using the service.
                        </p>
                    </div>
                </div>
            </section>

            {/* Privacy Section */}
            <section id="privacy" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-black/20">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">Privacy Policy</h2>
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Stellar Space collects only essential information such as email addresses (for notifications, community access, and updates).
                            We do not sell your data.
                            We use third-party services (e.g., Google Sheets, analytics tools) to improve performance and functionality.
                        </p>
                        <div className="mt-4 space-y-2 text-slate-400">
                            <p>Your data is stored securely and used only to:</p>
                            <ul className="list-disc list-inside pl-4">
                                <li>Send updates or notifications</li>
                                <li>Improve platform experience</li>
                                <li>Prevent abuse and maintain security</li>
                            </ul>
                        </div>
                        <p className="mt-4 text-slate-400">
                            You can request deletion of your data anytime by contacting us.
                        </p>
                    </div>
                </div>
            </section>

            {/* Cookies Section */}
            <section id="cookies" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
                <div className="max-w-3xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">Cookie Policy</h2>
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Stellar Space uses cookies and similar technologies to:
                        </p>
                        <ul className="mt-4 space-y-2 list-disc list-inside text-slate-400">
                            <li>Improve site functionality</li>
                            <li>Remember your preferences</li>
                            <li>Analyze traffic and usage patterns</li>
                        </ul>
                        <p className="mt-4 text-slate-400">
                            By using the site, you agree to the use of cookies. You can disable cookies in your browser settings, but some features may not work properly.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
