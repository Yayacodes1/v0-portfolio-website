"use client"

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const apps = [
  {
    name: "NOTK",
    subtitle: "AI Note Taker",
    description: "Intelligent note-taking powered by AI. Capture thoughts, organize ideas, and let AI help you make sense of your notes effortlessly.",
    url: "https://apps.apple.com/us/app/notk-%D9%86%D9%88%D8%AA%D9%83-ai-note-taker/id6751481106",
    technologies: ["Swift", "SwiftUI", "Firebase", "REST APIs"],
    icon: "/app-icons/notk.png",
  },
  {
    name: "Miqat",
    subtitle: "Never Miss a Salah",
    description: "Precise prayer time notifications with beautiful minimal design. Stay connected to your daily prayers with accurate timing and gentle reminders.",
    url: "https://apps.apple.com/us/app/miqat-never-miss-a-salah/id6760215262",
    technologies: ["Swift", "SwiftUI", "REST APIs", "Core Location"],
    icon: "/app-icons/miqat.png",
  },
  {
    name: "TafsirAi",
    subtitle: "Quran Interpretation",
    description: "AI-powered Quran exploration for deeper understanding. Discover interpretations, context, and insights through intelligent search and analysis.",
    url: "https://apps.apple.com/us/app/tafsirai/id6743822243",
    technologies: ["Swift", "SwiftUI", "Firebase", "AI/ML"],
    icon: "/app-icons/tafsirai.png",
  },
]

const allTechnologies = ["Swift", "SwiftUI", "Firebase", "REST APIs", "Git & GitHub", "Xcode", "UI/UX Design"]

export function AppsSection() {
  return (
    <section id="apps" className="px-6 py-32 md:px-12 lg:px-20 xl:px-32">
      {/* Section header */}
      <div className="mb-24 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
            01 — Apps
          </span>
        </div>
        <div className="lg:col-span-9">
          <h2 className="max-w-2xl font-serif text-3xl font-light leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Published Work
          </h2>
        </div>
      </div>

      {/* App showcases */}
      <div className="space-y-32">
        {apps.map((app, index) => (
          <article key={app.name} className="group">
            <div className={`grid items-start gap-8 lg:grid-cols-12 lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* App icon placeholder */}
              <div className={`lg:col-span-4 ${index % 2 === 1 ? 'lg:col-start-9' : ''}`}>
                <div className="relative aspect-square w-32 overflow-hidden rounded-2xl bg-muted/50 shadow-sm md:w-40">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-4xl font-light text-foreground/20">
                      {app.name[0]}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* App details */}
              <div className={`lg:col-span-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="flex items-baseline gap-4">
                  <h3 className="font-serif text-2xl font-light tracking-tight text-foreground md:text-3xl">
                    {app.name}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground/60">
                    {app.subtitle}
                  </span>
                </div>
                
                <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60 md:text-lg md:leading-relaxed">
                  {app.description}
                </p>
                
                {/* Technologies */}
                <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
                  {app.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* App Store link */}
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 border-b border-foreground/20 pb-1 text-sm text-foreground/70 transition-all hover:border-foreground/40 hover:text-foreground"
                >
                  <span>View on App Store</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      {/* Technologies summary */}
      <div className="mt-32 grid gap-6 border-t border-border/30 pt-12 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
            Stack
          </span>
        </div>
        <div className="lg:col-span-9">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {allTechnologies.map((tech) => (
              <span key={tech} className="text-sm text-foreground/50">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
