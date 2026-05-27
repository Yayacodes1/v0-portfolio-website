"use client"

import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToApps = () => {
    document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-[90vh] px-6 md:px-12 lg:px-20 xl:px-32">
      <div className="flex min-h-[90vh] flex-col justify-between pb-12 pt-24 md:pt-32">
        {/* Top anchor - subtle label */}
        <div className="animate-fade-in">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
            Independent Developer
          </span>
        </div>
        
        {/* Main content - asymmetrical layout */}
        <div className="my-auto py-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left column - Name and role */}
            <div className="lg:col-span-7">
              <h1 className="animate-fade-in font-serif text-[clamp(2.5rem,8vw,5.5rem)] font-light leading-[0.95] tracking-tight text-foreground">
                Yahya
                <br />
                Ahmed
              </h1>
              
              <div className="animate-fade-in-delay-1 mt-8 flex items-center gap-4">
                <span className="h-px w-12 bg-foreground/20" />
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  iOS Developer & Automation Builder
                </p>
              </div>
            </div>
            
            {/* Right column - Introduction */}
            <div className="flex flex-col justify-end lg:col-span-5">
              <p className="animate-fade-in-delay-2 max-w-sm text-balance text-base leading-relaxed text-foreground/70 md:text-lg md:leading-relaxed">
                I build thoughtful digital products focused on simplicity, performance, and user experience.
              </p>
              
              <div className="animate-fade-in-delay-3 mt-10">
                <button
                  onClick={scrollToApps}
                  className="group inline-flex items-center gap-3 text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  <span className="font-mono text-xs uppercase tracking-wider">View Work</span>
                  <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom anchor - scroll indicator */}
        <div className="animate-fade-in-delay-3 flex justify-end">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">
            Scroll
          </span>
        </div>
      </div>
    </section>
  )
}
