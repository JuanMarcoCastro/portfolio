import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <div className="relative">
      <Navbar />
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-md mx-auto">
          Web Developer & Designer creating modern and responsive web experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button asChild size="lg">
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
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

