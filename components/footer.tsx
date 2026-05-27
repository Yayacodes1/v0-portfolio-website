import { Mail, Github, ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer id="footer" className="border-t border-border/30 px-6 py-24 md:px-12 lg:px-20 xl:px-32">
      <div className="grid gap-16 lg:grid-cols-12">
        {/* Left column - Contact */}
        <div className="lg:col-span-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
            Get in touch
          </span>
          
          <a 
            href="mailto:yahyaahmed1357@icloud.com"
            className="mt-6 block font-serif text-2xl text-foreground transition-colors hover:text-foreground/70 md:text-3xl"
          >
            yahyaahmed1357@icloud.com
          </a>
          
          <p className="mt-8 max-w-sm text-sm leading-relaxed text-foreground/50">
            Available for iOS development projects and business automation consulting. Let&apos;s build something meaningful together.
          </p>
        </div>
        
        {/* Right column - Links */}
        <div className="flex flex-col justify-between lg:col-span-6">
          <div className="flex gap-8">
            <a
              href="mailto:yahyaahmed1357@icloud.com"
              className="group flex items-center gap-2 text-sm text-foreground/60 transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/yahyaahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-foreground/60 transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="mt-24 flex flex-col justify-between gap-4 border-t border-border/20 pt-8 md:flex-row md:items-center">
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/40">
          © {new Date().getFullYear()} Yahya Ahmed
        </p>
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/40">
          Independent Developer
        </p>
      </div>
    </footer>
  )
}
