import { ExternalLink } from "lucide-react"

const apps = [
  {
    name: "NOTK",
    subtitle: "AI Note Taker",
    description: "Intelligent note-taking powered by AI for capturing and organizing your thoughts effortlessly.",
    url: "https://apps.apple.com/us/app/notk-%D9%86%D9%88%D8%AA%D9%83-ai-note-taker/id6751481106",
    technologies: ["Swift", "SwiftUI", "Firebase"],
  },
  {
    name: "Miqat",
    subtitle: "Never Miss a Salah",
    description: "Precise prayer time notifications and tracking to help you maintain your daily prayers.",
    url: "https://apps.apple.com/us/app/miqat-never-miss-a-salah/id6760215262",
    technologies: ["Swift", "SwiftUI", "REST APIs"],
  },
  {
    name: "TafsirAi",
    subtitle: "Quran Interpretation",
    description: "AI-powered Quran interpretation and exploration for deeper understanding.",
    url: "https://apps.apple.com/us/app/tafsirai/id6743822243",
    technologies: ["Swift", "SwiftUI", "Firebase"],
  },
]

const allTechnologies = ["Swift", "SwiftUI", "Firebase", "REST APIs", "Git & GitHub", "Xcode", "UI/UX Design"]

export function AppsSection() {
  return (
    <section id="apps" className="border-t border-border/50 px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Apps
        </p>
        <h2 className="mt-3 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
          Published Work
        </h2>
        
        <div className="mt-12 space-y-8">
          {apps.map((app) => (
            <a
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-b border-border/30 pb-8 transition-colors last:border-0"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-lg font-medium text-foreground group-hover:text-foreground/80 md:text-xl">
                      {app.name}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {app.subtitle}
                    </span>
                  </div>
                  
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
                    {app.description}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {app.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-muted-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground/50 transition-colors group-hover:text-foreground" />
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Technologies
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {allTechnologies.map((tech) => (
              <span key={tech} className="text-sm text-foreground/70">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
