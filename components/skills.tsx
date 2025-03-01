import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Palette, Server } from "lucide-react"

export function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern frameworks",
      icon: <Layout className="h-8 w-8 text-primary" />,
      technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications and APIs",
      icon: <Server className="h-8 w-8 text-primary" />,
      technologies: ["Node.js", "Express", "Python", "Django", "RESTful APIs"],
    },
    {
      title: "Database Management",
      description: "Designing and optimizing database structures",
      icon: <Database className="h-8 w-8 text-primary" />,
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user experiences",
      icon: <Palette className="h-8 w-8 text-primary" />,
      technologies: ["Figma", "Adobe XD", "Sketch", "User Research", "Prototyping"],
    },
    {
      title: "Web Performance",
      description: "Optimizing websites for speed and efficiency",
      icon: <Globe className="h-8 w-8 text-primary" />,
      technologies: ["Lighthouse", "Web Vitals", "Performance Optimization", "SEO"],
    },
    {
      title: "Version Control",
      description: "Managing code changes and collaborating with teams",
      icon: <Code className="h-8 w-8 text-primary" />,
      technologies: ["Git", "GitHub", "GitLab", "CI/CD", "Agile Methodologies"],
    },
  ]

  return (
    <section id="skills" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-muted rounded-md text-sm">
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

