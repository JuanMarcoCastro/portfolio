import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Learn more about my background and experience
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div className="relative w-72 h-72 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl shadow-primary/20">
              <div className="w-full h-full bg-gradient-to-br from-primary/30 via-blue-500/30 to-blue-600/30 flex items-center justify-center">
                <div className="text-8xl font-bold text-primary/40">JM</div>
              </div>
            </div>
          </div>
          <Card className="border-primary/20 shadow-lg">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-primary mb-4">About Me</h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Data Science and Mathematics Engineer with a strong focus on economics and finance, applying statistical 
                modeling and data analysis to real-world decision-making. Full-stack developer experienced in building 
                data-driven web applications and scalable platforms.
              </p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Currently studying at Tecnológico de Monterrey (Aug 2022 – Jun 2026), pursuing a Bachelor in Data Science 
                and Mathematics Engineering with a Minor in Economics and Finance. My coursework includes Machine Learning, 
                AI, Cybersecurity, Optimization, Risk Management, Portfolio Theory, and Financial Mathematics.
              </p>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Creative and curious, with interests in drawing and fitness. I combine analytical rigor with creativity 
                to solve complex problems and build innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="shadow-md hover:shadow-lg transition-shadow">
                  <a href="/CV_Juan_Marco_Castro_Trinidad.pdf" download>
                    <Download className="mr-2 h-4 w-4" /> Download CV
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

