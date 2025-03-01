import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary">
              <Image src="/placeholder.svg?height=256&width=256" alt="Your Name" fill className="object-cover" />
            </div>
          </div>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-4">
                Hello! I'm a passionate web developer with expertise in building modern, responsive websites and
                applications. With a strong foundation in both frontend and backend technologies, I create seamless
                digital experiences that solve real-world problems.
              </p>
              <p className="mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying outdoor activities. I believe in continuous learning and staying updated with the latest
                industry trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <a href="#" download>
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

