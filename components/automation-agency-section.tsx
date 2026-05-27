const capabilities = [
  {
    title: "AI Automations",
    description: "Intelligent workflows powered by AI that learn and adapt to your business needs",
  },
  {
    title: "Workflow Automations",
    description: "Streamline repetitive processes across your tools and platforms",
  },
  {
    title: "Internal Tools",
    description: "Custom dashboards and tools built specifically for your team",
  },
  {
    title: "API Integrations",
    description: "Connect disparate systems and create unified data flows",
  },
]

export function AutomationAgencySection() {
  return (
    <section className="px-6 py-32 md:px-12 lg:px-20 xl:px-32">
      {/* Section header */}
      <div className="mb-20 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
            03 — Automation
          </span>
        </div>
        <div className="lg:col-span-9">
          <h2 className="max-w-2xl font-serif text-3xl font-light leading-tight tracking-tight text-foreground md:text-4xl">
            Business Automations
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/60 md:text-lg">
            Helping businesses automate repetitive work, build smarter workflows, and simplify operations.
          </p>
        </div>
      </div>

      {/* Capabilities */}
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-3" />
        <div className="space-y-10 lg:col-span-9">
          {capabilities.map((item, index) => (
            <div
              key={item.title}
              className="grid gap-4 border-b border-border/20 pb-10 md:grid-cols-2 md:gap-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] text-muted-foreground/40">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-medium text-foreground">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-foreground/50 md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
