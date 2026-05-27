import { Mail, Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer id="footer" className="border-t border-border/50 px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              Get in touch
            </p>
            <a 
              href="mailto:yahyaahmed1357@icloud.com"
              className="mt-2 block text-foreground transition-colors hover:text-foreground/70"
            >
              yahyaahmed1357@icloud.com
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="mailto:yahyaahmed1357@icloud.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <p className="mt-12 text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Yahya Ahmed
        </p>
      </div>
    </footer>
  )
}
