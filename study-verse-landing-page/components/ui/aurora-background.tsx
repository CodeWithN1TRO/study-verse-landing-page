"use client"

import { cn } from "@/lib/utils"
import React, { ReactNode } from "react"

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    children?: ReactNode
    showRadialGradient?: boolean
}

export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}: AuroraBackgroundProps) => {
    return (
        <div
            className={cn(
                "relative flex flex-col h-full items-center justify-center bg-background text-foreground transition-bg",
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className={cn(
                        `
            [--white-gradient:repeating-linear-gradient(100deg,oklch(0.56_0.28_278)_0%,oklch(0.56_0.28_278)_7%,transparent_10%,transparent_12%,oklch(0.56_0.28_278)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,oklch(0.08_0_0)_0%,oklch(0.08_0_0)_7%,transparent_10%,transparent_12%,oklch(0.08_0_0)_16%)]
            [--aurora:repeating-linear-gradient(100deg,oklch(0.56_0.28_278)_10%,oklch(0.58_0.18_240)_15%,oklch(0.627_0.265_303.9)_20%,oklch(0.645_0.246_16.439)_25%,oklch(0.56_0.28_278)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,

                        showRadialGradient &&
                        `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
                    )}
                ></div>
            </div>
            {children}
        </div>
    )
}
