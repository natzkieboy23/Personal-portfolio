import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, ExternalLink, Github } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";
import { skillCategories } from "@/data/skills";
import { getFeaturedProjects } from "@/data/projects";
import { experiences } from "@/data/experience";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const topSkillCategories = skillCategories.slice(0, 3);
  const recentExperience = experiences[0]; // Most recent experience

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {personalInfo.name}
                </h1>
                <p className="text-xl text-muted-foreground lg:text-2xl font-medium">
                  {personalInfo.title}
                </p>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground/90">
                  {personalInfo.tagline}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    Get In Touch
                  </Link>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <Link href={personalInfo.resume} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get to know me better and discover what drives my passion for technology
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {personalInfo.about}
                </p>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Key Highlights</h3>
                  <div className="grid gap-3">
                    {personalInfo.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-card border">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button asChild className="w-fit">
                  <Link href="/about">
                    Learn More About Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted/50 border">
                  <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                    <div className="text-center space-y-2">
                      <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold">{personalInfo.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <p className="text-sm">Profile Image</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Technical Skills
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A showcase of the technologies and tools I use to build exceptional digital experiences
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {topSkillCategories.map((category) => (
                <Card key={category.slug} className="group transition-all hover:shadow-lg hover:shadow-primary/5 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{category.name}</CardTitle>
                    <CardDescription className="text-muted-foreground/80">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.slice(0, 4).map((skill) => (
                        <Badge key={skill.name} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                          {skill.name}
                        </Badge>
                      ))}
                      {category.skills.length > 4 && (
                        <Badge variant="outline" className="border-primary/20 text-primary">
                          +{category.skills.length - 4} more
                        </Badge>
                      )}
                    </div>
                    <Button variant="ghost" size="sm" asChild className="w-full group-hover:bg-primary/10 transition-colors">
                      <Link href={`/skills/${category.slug}`}>
                        Explore {category.name}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href="/skills">
                  View All Skills
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A selection of projects that showcase my technical skills and problem-solving approach
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {featuredProjects.slice(0, 2).map((project) => (
                <Card key={project.id} className="group overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/5 border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="aspect-video overflow-hidden bg-muted/50 border-b">
                    <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                      <div className="text-center space-y-2">
                        <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                          <span className="text-lg font-bold text-primary">{project.category.slice(0, 2)}</span>
                        </div>
                        <p className="text-sm">{project.title}</p>
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="border-primary/20 text-primary">{project.category}</Badge>
                      <Badge 
                        variant={project.status === "Completed" ? "default" : "secondary"}
                        className={project.status === "Completed" ? "bg-primary text-primary-foreground" : ""}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground/80 leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs border-primary/20 text-primary">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" asChild className="bg-primary hover:bg-primary/90">
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
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Current Role
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What I'm working on now and the impact I'm making
              </p>
            </div>
            <Card className="group transition-all hover:shadow-xl hover:shadow-primary/5 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-primary text-primary-foreground">{recentExperience.type}</Badge>
                  <Badge variant="outline" className="border-primary/20 text-primary">
                    {recentExperience.endDate ? "Previous" : "Current"}
                  </Badge>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">{recentExperience.position}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground/80">
                  {recentExperience.company} • {recentExperience.location}
                </CardDescription>
                <p className="text-sm text-muted-foreground">
                  {recentExperience.startDate} - {recentExperience.endDate || "Present"}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{recentExperience.description}</p>
                <div className="space-y-4">
                  <h4 className="font-semibold">Key Achievements:</h4>
                  <div className="grid gap-3">
                    {recentExperience.achievements.slice(0, 3).map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {recentExperience.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button asChild className="w-fit">
                  <Link href="/experience">
                    View Full Experience
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to work together?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I'm always interested in new opportunities, exciting projects, and meaningful collaborations. 
                Let's create something amazing together.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={`mailto:${personalInfo.email}`}>
                  Send Email
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}