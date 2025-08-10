import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, Zap, Target, Lightbulb, CheckCircle, TrendingUp } from "lucide-react";
import { projects, getProjectById } from "@/data/projects";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.imageUrl],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  // Get related projects (same category, excluding current)
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <section className="border-b bg-muted/50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/projects" className="hover:text-foreground transition-colors">
              Projects
            </Link>
            <span>/</span>
            <span className="text-foreground">{project.title}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge variant="outline">{project.category}</Badge>
                    <Badge 
                      variant={project.status === "Completed" ? "default" : project.status === "In Progress" ? "secondary" : "outline"}
                    >
                      {project.status}
                    </Badge>
                    {project.featured && (
                      <Badge variant="destructive">
                        <Zap className="mr-1 h-3 w-3" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    {project.title}
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.startDate} - {project.endDate || "Present"}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.demoUrl && (
                    <Button asChild>
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Demo
                      </Link>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Link>
                    </Button>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video overflow-hidden rounded-2xl bg-muted shadow-2xl">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Project Overview</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>{project.longDescription}</p>
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid gap-8 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-destructive" />
                      <CardTitle>Challenges</CardTitle>
                    </div>
                    <CardDescription>
                      Key technical and business challenges faced
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/10 text-destructive text-xs font-semibold mt-0.5">
                            {index + 1}
                          </div>
                          <span className="text-sm text-muted-foreground flex-1">
                            {challenge}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-yellow-500" />
                      <CardTitle>Solutions</CardTitle>
                    </div>
                    <CardDescription>
                      How I addressed each challenge
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground flex-1">
                            {solution}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Impact */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <CardTitle>Impact & Results</CardTitle>
                  </div>
                  <CardDescription>
                    The measurable impact of this project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.impact}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Screenshots
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Visual showcase of the project
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="aspect-video overflow-hidden rounded-lg bg-muted shadow-lg">
                    <Image
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
                  <section className="bg-muted/50 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-7xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Related Projects
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Other {project.category.toLowerCase()} projects you might find interesting
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map((relatedProject) => (
                  <Card key={relatedProject.id} className="group transition-all hover:shadow-lg">
                    <div className="aspect-video overflow-hidden rounded-t-lg bg-muted">
                      <Image
                        src={relatedProject.imageUrl}
                        alt={relatedProject.title}
                        width={400}
                        height={250}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{relatedProject.category}</Badge>
                        <Badge 
                          variant={relatedProject.status === "Completed" ? "default" : "secondary"}
                        >
                          {relatedProject.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {relatedProject.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-1">
                          {relatedProject.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <Button variant="ghost" size="sm" asChild className="w-full">
                          <Link href={`/projects/${relatedProject.id}`}>
                            View Project
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Interested in working together?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how I can help bring your next project to life.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">
                  View More Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
