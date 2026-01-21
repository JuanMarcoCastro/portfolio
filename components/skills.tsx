import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Palette, Server } from "lucide-react"

export function Skills() {
  const skills = [
    {
      title: "Programming Languages",
      description: "Proficient in data analysis and development languages",
      icon: <Code className="h-8 w-8 text-primary" />,
      technologies: ["Python (Advanced)", "R (Intermediate)", "SQL (Basic)", "TypeScript", "JavaScript"],
    },
    {
      title: "Data & Analytics Tools",
      description: "Visualization and analysis platforms",
      icon: <Layout className="h-8 w-8 text-primary" />,
      technologies: ["Tableau (Advanced)", "Power BI (Intermediate)", "Excel (Advanced)", "PostgreSQL (Basic)"],
    },
    {
      title: "Development & Deployment",
      description: "Modern development and cloud tools",
      icon: <Globe className="h-8 w-8 text-primary" />,
      technologies: ["Git", "GitHub", "Supabase", "Vercel", "Next.js", "React"],
    },
    {
      title: "Data Science & ML",
      description: "Machine learning and statistical analysis",
      icon: <Database className="h-8 w-8 text-primary" />,
      technologies: ["Machine Learning", "Statistical Modeling", "Time Series Analysis", "Pattern Detection"],
    },
    {
      title: "Full-Stack Development",
      description: "Building scalable web applications",
      icon: <Server className="h-8 w-8 text-primary" />,
      technologies: ["Next.js", "React Native", "Supabase", "Tailwind CSS", "Stripe API", "Maps APIs"],
    },
    {
      title: "Finance & Economics",
      description: "Quantitative finance and risk management",
      icon: <Palette className="h-8 w-8 text-primary" />,
      technologies: ["Risk Management", "Portfolio Theory", "Financial Mathematics", "Economic Analysis"],
    },
  ]

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4">My Skills</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Technical expertise in Data Science, Finance, and Full-Stack Development
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium hover:bg-primary/20 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

