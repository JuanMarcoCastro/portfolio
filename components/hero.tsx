import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <div className="relative">
      <Navbar />
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 text-center">
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Data Science & Mathematics Engineer | Full-Stack Developer
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I'm <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Juan Marco Castro Trinidad</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Data Science and Mathematics Engineer with a strong focus on economics and finance. 
          Full-stack developer building data-driven web applications and scalable platforms.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button asChild size="lg" className="shadow-lg shadow-primary/20 hover:shadow-primary/30">
            <a href="#projects">View My Projects</a>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-primary/50 hover:bg-primary/5">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>
    </div>
  )
}

