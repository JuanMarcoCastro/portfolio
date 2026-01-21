import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-8 bg-gradient-to-t from-primary/5 to-background">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left text-muted-foreground">
              © {new Date().getFullYear()} Juan Marco Castro Trinidad. Todos los derechos reservados.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="https://github.com/JuanMarcoCastro" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/jm-castro-t" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:juanmarco.ct@gmail.com" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

