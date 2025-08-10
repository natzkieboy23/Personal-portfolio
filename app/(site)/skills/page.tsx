import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Database, Cloud, Wrench, Globe } from "lucide-react";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills & Technologies",
  description: "Explore my technical skills and expertise across different categories including programming languages, frameworks, databases, and tools.",
};

const categoryIcons = {
  languages: Code,
  frontend: Globe,
  backend: Database,
  databases: Database,
  cloud: Cloud,
  tools: Wrench,
} as const;

export default function SkillsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Skills & Technologies
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              My technical expertise across different domains
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Over the years, I've worked with a wide range of technologies and tools. 
              Here's an overview of my skills, organized by category and experience level.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-16">
            {skillCategories.map((category) => {
              const IconComponent = categoryIcons[category.slug as keyof typeof categoryIcons] || Code;
              
              return (
                <div key={category.slug} className="space-y-8">
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight">
                      {category.name}
                    </h2>
                    <p className="mt-2 text-lg text-muted-foreground">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.skills.map((skill) => (
                      <Card key={skill.name} className="transition-all hover:shadow-md">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{skill.name}</CardTitle>
                            <Badge variant="outline">
                              {skill.yearsOfExperience}y
                            </Badge>
                          </div>
                          <CardDescription>
                            {skill.level} level
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                              <span>Proficiency</span>
                              <span className="font-medium">{skill.level}</span>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary transition-all duration-500"
                                style={{
                                  width: skill.level === 'Expert' ? '100%' : 
                                         skill.level === 'Advanced' ? '80%' : 
                                         skill.level === 'Intermediate' ? '60%' : '40%'
                                }}
                              />
                            </div>
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>Experience</span>
                              <span>{skill.yearsOfExperience} years</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="text-center">
                    <Button variant="outline" asChild>
                      <Link href={`/skills/${category.slug}`}>
                        View {category.name} Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Skills Summary
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A quick overview of my expertise
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {skillCategories.map((category) => {
                const expertSkills = category.skills.filter(skill => skill.level === 'Expert').length;
                const advancedSkills = category.skills.filter(skill => skill.level === 'Advanced').length;
                const totalSkills = category.skills.length;
                
                return (
                  <Card key={category.slug} className="text-center transition-all hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-3xl font-bold text-primary">
                          {totalSkills}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Total Skills
                        </div>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span>Expert</span>
                            <span className="font-medium">{expertSkills}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Advanced</span>
                            <span className="font-medium">{advancedSkills}</span>
                          </div>
                        </div>
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to work together?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how my skills can help bring your project to life.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/projects">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
