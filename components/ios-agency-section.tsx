const services = [
  {
    title: "Full App Development",
    description: "End-to-end iOS development from concept to App Store launch",
  },
  {
    title: "SwiftUI Interfaces",
    description: "Modern, responsive interfaces built with the latest Apple frameworks",
  },
  {
    title: "API Integrations",
    description: "Seamless connection with backend services and third-party APIs",
  },
  {
    title: "Firebase & Backend",
    description: "Authentication, databases, analytics, and cloud functions",
  },
  {
    title: "App Optimization",
    description: "Performance tuning, memory management, and smooth animations",
  },
  {
    title: "Maintenance & Updates",
    description: "Ongoing support, feature development, and iOS version compatibility",
  },
]

export function IOSAgencySection() {
  return (
    <section className="bg-foreground/[0.02] px-6 py-32 md:px-12 lg:px-20 xl:px-32">
      {/* Section header */}
      <div className="mb-20 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
            02 — Services
          </span>
        </div>
        <div className="lg:col-span-9">
          <h2 className="max-w-2xl font-serif text-3xl font-light leading-tight tracking-tight text-foreground md:text-4xl">
            iOS App Development
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60 md:text-lg">
            Building modern iOS apps for startups, creators, and businesses who care about craft and user experience.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <div className="grid gap-px bg-border/20 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="bg-background p-8 md:p-10"
          >
            <span className="font-mono text-[10px] text-muted-foreground/40">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 text-lg font-medium text-foreground">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/50">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
