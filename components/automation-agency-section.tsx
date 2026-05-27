const services = [
  "Workflow automations",
  "Business process automation",
  "AI-powered automations",
  "Internal tool workflows",
  "API-based automations",
]

export function AutomationAgencySection() {
  return (
    <section className="border-t border-border/50 px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Automation
        </p>
        <h2 className="mt-3 max-w-lg text-2xl font-medium tracking-tight text-foreground md:text-3xl">
          Helping businesses automate repetitive work and simplify operations.
        </h2>
        
        <div className="mt-12 grid gap-x-12 gap-y-4 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service}
              className="flex items-center gap-3 border-b border-border/20 py-3"
            >
              <span className="h-1 w-1 flex-shrink-0 rounded-full bg-foreground/30" />
              <span className="text-sm text-foreground/80 md:text-base">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
