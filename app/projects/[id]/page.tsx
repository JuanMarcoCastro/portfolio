"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Github, Calendar, Target, CheckCircle2 } from "lucide-react"
import { useEffect } from "react"

const projectsData = {
  "freight-marketplace": {
    title: "Full-Stack B2B Freight Marketplace (Stealth)",
    description: "Scalable, serverless B2B freight marketplace platform",
    fullDescription: "Architecting and building a scalable, serverless B2B freight marketplace using Next.js and React Native (Expo) in a monorepo architecture, with a Supabase (PostgreSQL) backend enforcing Row Level Security (RLS), geospatial-based matching, and AI-assisted development workflows.",
    tags: ["TypeScript", "Next.js", "React Native", "Supabase", "PostgreSQL", "Tailwind CSS"],
    date: "2026",
    objectives: [
      "Build a scalable B2B marketplace for freight transportation",
      "Implement geospatial-based matching for carriers and shippers",
      "Ensure secure data access with Row Level Security",
      "Create seamless mobile and web experiences"
    ],
    methodology: [
      "Set up monorepo architecture with Next.js and React Native (Expo)",
      "Design and implement PostgreSQL database with Supabase",
      "Implement Row Level Security (RLS) for data protection",
      "Develop geospatial matching algorithms for freight optimization",
      "Integrate Stripe API for payment processing",
      "Implement Maps APIs for route visualization and tracking"
    ],
    results: [
      "Fully functional serverless architecture",
      "Secure multi-tenant data isolation",
      "Real-time geospatial matching system",
      "Integrated payment processing system"
    ],
    technologies: ["TypeScript", "Next.js", "React", "React Native", "Expo", "Supabase", "PostgreSQL", "Tailwind CSS", "Stripe API", "Maps APIs"],
    githubUrl: "https://github.com/JuanMarcoCastro"
  },
  "financial-pattern-detection": {
    title: "Financial Market Pattern Detection and Trend Analysis",
    description: "Stock market analysis with statistical methods and pattern detection",
    fullDescription: "Developed a comprehensive program to analyze stock market data, applying statistical methods, time-series analysis, and pattern detection to identify market trends and anomalies for 10+ financial instruments. Built with Python and Streamlit for interactive visualization.",
    tags: ["Python", "Streamlit", "Refinitiv LSEG", "Time Series", "Statistical Analysis"],
    date: "2025",
    objectives: [
      "Analyze stock market data for multiple financial instruments",
      "Identify patterns and trends in market behavior",
      "Apply statistical methods for anomaly detection",
      "Create interactive dashboards for data visualization"
    ],
    methodology: [
      "Data acquisition from Refinitiv LSEG WorkSpace",
      "Time-series decomposition and trend analysis",
      "Statistical pattern recognition algorithms",
      "Anomaly detection using statistical thresholds",
      "Interactive dashboard development with Streamlit",
      "Backtesting and validation of identified patterns"
    ],
    results: [
      "Successfully analyzed 10+ financial instruments",
      "Identified key market trends and patterns",
      "Built interactive visualization dashboard",
      "Academic recognition for methodology and results"
    ],
    technologies: ["Python", "Streamlit", "Pandas", "NumPy", "Matplotlib", "Refinitiv LSEG WorkSpace", "Statistical Analysis"],
    githubUrl: "https://github.com/JuanMarcoCastro"
  },
  "demographic-analysis-inegi": {
    title: "Demographic and Economic Analysis using INEGI Data",
    description: "Large-scale analysis of Mexican demographic and economic data",
    fullDescription: "Analyzed large-scale demographic and economic datasets covering over 1 million Mexican citizens from INEGI (National Institute of Statistics and Geography), applying data cleaning, statistical analysis, and trend identification to generate actionable insights and comprehensive reports.",
    tags: ["Python", "Excel", "R Studio", "Statistical Analysis", "Data Cleaning"],
    date: "2024",
    objectives: [
      "Process and clean large-scale demographic datasets",
      "Identify economic and demographic trends",
      "Generate actionable insights for policy recommendations",
      "Create comprehensive analytical reports"
    ],
    methodology: [
      "Data extraction from INEGI databases (1M+ records)",
      "Comprehensive data cleaning and preprocessing",
      "Exploratory data analysis (EDA) in Python and R",
      "Statistical analysis and hypothesis testing",
      "Trend identification and correlation analysis",
      "Report generation with visualizations in Excel"
    ],
    results: [
      "Processed 1+ million citizen records",
      "Identified key demographic trends",
      "Generated actionable economic insights",
      "Delivered comprehensive analytical reports"
    ],
    technologies: ["Python", "R Studio", "Excel", "Pandas", "dplyr", "ggplot2", "Statistical Modeling"],
    githubUrl: "https://github.com/JuanMarcoCastro"
  }
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projectsData[params.id as keyof typeof projectsData]

  useEffect(() => {
    if (project) {
      document.title = `${project.title} - Juan Marco Castro Trinidad`
    }
  }, [project])

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Button variant="ghost" asChild>
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">{project.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {project.fullDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <Button asChild className="shadow-md hover:shadow-lg transition-shadow">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Objetivos */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Target className="h-6 w-6 text-primary" />
                  Project Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Metodología */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Methodology</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {project.methodology.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Resultados */}
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-blue-600/5">
              <CardHeader>
                <CardTitle className="text-2xl">Key Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.results.map((result, index) => (
                    <div key={index} className="p-4 bg-background rounded-lg border border-primary/20">
                      <CheckCircle2 className="h-5 w-5 text-primary mb-2" />
                      <p className="text-sm font-medium">{result}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tecnologías */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-muted text-foreground rounded-lg text-sm font-medium border border-primary/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-t from-primary/5 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in this project?</h2>
            <p className="text-muted-foreground mb-6">
              If you want to know more or discuss similar projects, feel free to contact me
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/#contact">Contact Me</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/#projects">View Other Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
