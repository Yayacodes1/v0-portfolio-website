"use client"

import { Mail, ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToApps = () => {
    document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="px-6 pb-24 pt-32 md:px-12 lg:px-24">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Yahya Ahmed
        </h1>
        
        <p className="mt-3 text-lg text-muted-foreground md:text-xl">
          iOS Developer & Automation Builder
        </p>
        
        <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-foreground/80 md:text-lg md:leading-relaxed">
          I build fast, thoughtful, and user-focused products — from iOS apps to business automations.
        </p>
        
        <a 
          href="mailto:yahyaahmed1357@icloud.com"
          className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Mail className="h-4 w-4" />
          yahyaahmed1357@icloud.com
        </a>
        
        <div className="mt-10 flex flex-wrap gap-4">
          <button
            onClick={scrollToApps}
            className="inline-flex items-center gap-2 border border-foreground/20 bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-foreground/40 hover:bg-foreground/5"
          >
            View Apps
            <ArrowDown className="h-3.5 w-3.5" />
          </button>
          
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-foreground/90"
          >
            Work With Me
          </button>
        </div>
      </div>
    </section>
  )
}
