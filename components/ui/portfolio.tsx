"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Mail, ExternalLink, Download, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const skills = [
    "C",
    "C++",
    "java",
    "Python",
    "Typescript",
    "GDscript",
    "PHP",
    "HTML",
    "Tailwind CSS",
    "Bootstrap",
    "React",
    "NestJS",
    "Next.js",
    "Django",
    "MySql",
    "Git"
  ]

  const projects = [
    {
      title: "DailyBean: Coffee Subscription E-Commerce Service",
      description:
        "A collaborative full-stack e-commerce solution with mock payment integration, inventory management, and admin dashboard.",
      tech: ["Python", "Django", "MySql"],
      github: "https://github.com/Modarku/CSIT327-TheDailyBean",
      demo: "#",
      image: "/dailybean.png",
    },
    {
      title: "Mushroom Classifier App",
      description:
        "A mobile-friendly deep learning application that identifies common mushroom genera from images.",
      tech: ["Streamlit", "Tensorflow", "Python"],
      github: "https://github.com/Modarku/mushroom-classifier-alagad",
      demo: "https://mushroom-classifier-alagad.streamlit.app/",
      image: "/mushroom-alagad.png",
    },
    {
      title: "Corazones: Simple Platformer",
      description: "An experimental minimalistic 2D platformer where the player wanders around the home of a hermit next to the ruins.",
      tech: ["GDscript"],
      github: "https://github.com/Modarku/Olamit-Corazones",
      demo: "https://modarku.itch.io/corazones",
      image: "/corazones.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">Portfolio</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <Link
                href="#about"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#skills"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/profile.png"
              alt="Profie"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-border"
            />
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hai, I&apos;m <span className="text-primary">Jian Lev</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Aspiring Game Developer, currently Full-Stack Developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://drive.google.com/file/d/1pUn0F8DVPqPOJBUKVVIwXul-SsOFZfbk/view?usp=drive_link" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Resume
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I&apos;m a full-stack developer with over 3 years of experience building web applications. I aspire to be a game developer and love
                turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                When I&apos;m not coding, I have hobbies such as digital art, video editing, and photo editing.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com/Modarku/" aria-label="GitHub">
                    <Github />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Experience</h3>
                <p className="text-muted-foreground">3+ years in web development</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">BS Computer Science, Cebu Institute of Technology - University</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">Cebu City</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm py-2 px-4">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.github} className="flex items-center gap-1">
                        <Github />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      {project.demo !== "#" && (
                        <Link href={project.demo} className="flex items-center gap-1">
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </Link>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting projects. Let&apos;s discuss how we can bring your ideas
            to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="mailto:jianlevolamit@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get In Touch
              </Link>
            </Button>
            <Button size="lg" asChild>
              <Link href="https://github.com/Modarku/" className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                Check my works
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Jian Lev Olamit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
