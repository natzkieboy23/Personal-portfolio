import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, MapPin, Calendar, Building } from "lucide-react";
import { experiences, getAllYears } from "@/data/experience";

export const metadata: Metadata = {
  title: "Professional Experience",
  description: "Explore my professional journey and work experience across different companies and roles in software development.",
};

export default function ExperiencePage() {
  const years = getAllYears();
  const totalYears = new Date().getFullYear() - 2018; // Started in 2018

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Professional Experience
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              My journey through {totalYears}+ years of software development
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              From junior developer to senior engineer, here's my professional journey 
              and the impact I've made at each step along the way.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border lg:left-1/2 lg:-translate-x-0.5" />
              
              <div className="space-y-12">
                {experiences.map((experience, index) => (
                  <div key={experience.id} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background lg:left-1/2 lg:-translate-x-1/2" />
                    
                    {/* Content */}
                    <div className={`ml-16 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8'} lg:w-1/2 ${index % 2 !== 0 ? 'lg:ml-auto' : ''}`}>
                      <Card className="transition-all hover:shadow-lg">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className={`space-y-2 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                              <div className="flex items-center gap-2 flex-wrap">
                                <Badge variant={experience.endDate ? "outline" : "default"}>
                                  {experience.type}
                                </Badge>
                                {!experience.endDate && (
                                  <Badge variant="secondary">Current</Badge>
                                )}
                              </div>
                              <CardTitle className="text-xl">{experience.position}</CardTitle>
                              <CardDescription className="flex items-center gap-2">
                                <Building className="h-4 w-4" />
                                {experience.company}
                              </CardDescription>
                            </div>
                          </div>
                          <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {experience.startDate} - {experience.endDate || "Present"}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {experience.location}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <p className="text-muted-foreground">
                              {experience.description}
                            </p>
                            
                            <div className="space-y-4">
                              <h4 className="font-semibold">Key Achievements</h4>
                              <ul className="space-y-2">
                                {experience.achievements.map((achievement, achievementIndex) => (
                                  <li key={achievementIndex} className="flex items-start gap-2">
                                    <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="space-y-3">
                              <h4 className="font-semibold">Technologies Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech) => (
                                  <Badge key={tech} variant="secondary" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="pt-4">
                              <Button variant="ghost" size="sm" asChild>
                                <Link href={`/experience/${experience.year}`}>
                                  View {experience.year} Details
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Summary */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Experience Summary
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Key metrics and highlights from my career
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary">
                    {totalYears}+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary">
                    {experiences.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Companies
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Projects Delivered
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary">
                    10+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Developers Mentored
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Year */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Browse by Year
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Explore my experience by specific years
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {years.map((year) => {
                const yearExperiences = experiences.filter(exp => exp.year === year);
                return (
                  <Card key={year} className="transition-all hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="text-center text-2xl">{year}</CardTitle>
                      <CardDescription className="text-center">
                        {yearExperiences.length} role{yearExperiences.length !== 1 ? 's' : ''}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {yearExperiences.map((exp) => (
                          <div key={exp.id} className="text-sm">
                            <div className="font-medium">{exp.position}</div>
                            <div className="text-muted-foreground">{exp.company}</div>
                          </div>
                        ))}
                        <Separator />
                        <Button variant="ghost" size="sm" asChild className="w-full">
                          <Link href={`/experience/${year}`}>
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to add to this timeline?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how I can contribute to your team's success.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">
                  View My Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
