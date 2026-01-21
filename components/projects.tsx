import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      id: "freight-marketplace",
      title: "Full-Stack B2B Freight Marketplace (Stealth)",
      description: "Building a scalable, serverless B2B freight marketplace using Next.js and React Native in a monorepo architecture with Supabase backend.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["TypeScript", "Next.js", "React Native", "Supabase", "PostgreSQL", "Stripe API"],
      githubUrl: "https://github.com/JuanMarcoCastro",
    },
    {
      id: "financial-pattern-detection",
      title: "Financial Market Pattern Detection and Trend Analysis",
      description: "Program to analyze stock market data, applying statistical methods, time-series analysis, and pattern detection for 10+ financial instruments.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "Streamlit", "Refinitiv LSEG", "Time Series", "Statistical Analysis"],
      githubUrl: "https://github.com/JuanMarcoCastro",
    },
    {
      id: "demographic-analysis-inegi",
      title: "Demographic and Economic Analysis using INEGI Data",
      description: "Analyzed large-scale datasets covering over 1 million Mexican citizens, applying data cleaning, statistical analysis, and trend identification.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "Excel", "R Studio", "Statistical Analysis", "Data Cleaning"],
      githubUrl: "https://github.com/JuanMarcoCastro",
    },
  ]

  return (
    <section id="projects" className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">My Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Data Science, Financial Analysis, and Full-Stack Development Projects
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl hover:shadow-primary/10 transition-all border-primary/10">
              <div className="relative h-48 w-full bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary/20">DS</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild className="border-primary/50 hover:bg-primary/5">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  <Button size="sm" asChild className="shadow-md hover:shadow-lg transition-shadow">
                    <a href={`/projects/${project.id}`}>
                      <ExternalLink className="mr-2 h-4 w-4" /> See More
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

