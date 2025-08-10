import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Github, Calendar, Zap } from "lucide-react";
import { projects, getFeaturedProjects, getAllCategories } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects & Portfolio",
  description: "Explore my portfolio of projects including web applications, mobile apps, APIs, and open-source libraries. See the technologies I've used and the impact I've created.",
};

export default function ProjectsPage() {
  const featuredProjects = getFeaturedProjects();
  const allCategories = getAllCategories();
  const completedProjects = projects.filter(p => p.status === "Completed");
  const inProgressProjects = projects.filter(p => p.status === "In Progress");

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Projects & Portfolio
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              A showcase of my work and technical expertise
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              From web applications to mobile apps, here are some of the projects 
              I've built that demonstrate my skills and passion for creating 
              innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary">
                    {projects.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Total Projects
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary">
                    {completedProjects.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Completed
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary">
                    {allCategories.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Categories
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary">
                    {featuredProjects.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Featured
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Featured Projects
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Highlighting my best and most impactful work
              </p>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="group overflow-hidden transition-all hover:shadow-xl">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{project.category}</Badge>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={project.status === "Completed" ? "default" : project.status === "In Progress" ? "secondary" : "outline"}
                        >
                          {project.status}
                        </Badge>
                        {project.featured && (
                          <Badge variant="destructive" className="text-xs">
                            <Zap className="mr-1 h-3 w-3" />
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {project.startDate} - {project.endDate || "Present"}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" asChild>
                          <Link href={`/projects/${project.id}`}>
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        {project.demoUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </Link>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Projects by Category */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                All Projects
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Browse all projects by category
              </p>
            </div>
            
            <div className="mt-12 space-y-16">
              {allCategories.map((category) => {
                const categoryProjects = projects.filter(p => p.category === category);
                return (
                  <div key={category} className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold">{category}</h3>
                      <p className="text-muted-foreground">
                        {categoryProjects.length} project{categoryProjects.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                    
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {categoryProjects.map((project) => (
                        <Card key={project.id} className="group transition-all hover:shadow-lg">
                          <div className="aspect-video overflow-hidden rounded-t-lg bg-muted">
                            <Image
                              src={project.imageUrl}
                              alt={project.title}
                              width={400}
                              height={250}
                              className="h-full w-full object-cover transition-transform group-hover:scale-105"
                            />
                          </div>
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <Badge 
                                variant={project.status === "Completed" ? "default" : project.status === "In Progress" ? "secondary" : "outline"}
                              >
                                {project.status}
                              </Badge>
                              {project.featured && (
                                <Badge variant="destructive" className="text-xs">
                                  <Zap className="mr-1 h-3 w-3" />
                                  Featured
                                </Badge>
                              )}
                            </div>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                              {project.title}
                            </CardTitle>
                            <CardDescription className="line-clamp-2 text-sm">
                              {project.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="flex flex-wrap gap-1">
                                {project.technologies.slice(0, 3).map((tech) => (
                                  <Badge key={tech} variant="secondary" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                                {project.technologies.length > 3 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{project.technologies.length - 3}
                                  </Badge>
                                )}
                              </div>
                              
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm" asChild className="flex-1">
                                  <Link href={`/projects/${project.id}`}>
                                    Details
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                  </Link>
                                </Button>
                                {project.demoUrl && (
                                  <Button variant="ghost" size="sm" asChild>
                                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                      <ExternalLink className="h-4 w-4" />
                                    </Link>
                                  </Button>
                                )}
                                {project.githubUrl && (
                                  <Button variant="ghost" size="sm" asChild>
                                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                      <Github className="h-4 w-4" />
                                    </Link>
                                  </Button>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      {inProgressProjects.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Current Projects
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  What I'm working on right now
                </p>
              </div>
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {inProgressProjects.map((project) => (
                  <Card key={project.id} className="transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{project.category}</Badge>
                        <Badge variant="secondary">In Progress</Badge>
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="ghost" asChild>
                          <Link href={`/projects/${project.id}`}>
                            View Progress
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Like what you see?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how I can help bring your next project to life.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">
                  Learn More About Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
