import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Code, Database, Cloud, Wrench, Globe } from "lucide-react";
import { skillCategories, getSkillCategory, getSkillsByCategory } from "@/data/skills";

interface SkillCategoryPageProps {
  params: Promise<{ category: string }>;
}

const categoryIcons = {
  languages: Code,
  frontend: Globe,
  backend: Database,
  databases: Database,
  cloud: Cloud,
  tools: Wrench,
} as const;

export async function generateStaticParams() {
  return skillCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: SkillCategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getSkillCategory(categorySlug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} Skills`,
    description: `Explore my expertise in ${category.name.toLowerCase()}. ${category.description}`,
  };
}

export default async function SkillCategoryPage({ params }: SkillCategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getSkillCategory(categorySlug);
  const skills = getSkillsByCategory(categorySlug);

  if (!category || skills.length === 0) {
    notFound();
  }

  const IconComponent = categoryIcons[categorySlug as keyof typeof categoryIcons] || Code;
  
  // Group skills by level
  const skillsByLevel = {
    Expert: skills.filter(skill => skill.level === 'Expert'),
    Advanced: skills.filter(skill => skill.level === 'Advanced'),
    Intermediate: skills.filter(skill => skill.level === 'Intermediate'),
    Beginner: skills.filter(skill => skill.level === 'Beginner'),
  };

  // Calculate average experience
  const avgExperience = skills.reduce((sum, skill) => sum + skill.yearsOfExperience, 0) / skills.length;

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <section className="border-b bg-muted/50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/skills" className="hover:text-foreground transition-colors">
              Skills
            </Link>
            <span>/</span>
            <span className="text-foreground">{category.name}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/skills">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Skills
              </Link>
            </Button>
            
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <IconComponent className="h-10 w-10 text-primary" />
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                {category.name}
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                {category.description}
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary">
                    {skills.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Total Skills
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary">
                    {avgExperience.toFixed(1)}y
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Avg Experience
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary">
                    {skillsByLevel.Expert.length + skillsByLevel.Advanced.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Expert/Advanced
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills by Level */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-16">
            {Object.entries(skillsByLevel).map(([level, levelSkills]) => {
              if (levelSkills.length === 0) return null;
              
              return (
                <div key={level} className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <h2 className="text-2xl font-bold tracking-tight">
                      {level} Level
                    </h2>
                    <Badge variant="outline">
                      {levelSkills.length} skill{levelSkills.length !== 1 ? 's' : ''}
                    </Badge>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {levelSkills.map((skill) => (
                      <Card key={skill.name} className="transition-all hover:shadow-md">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{skill.name}</CardTitle>
                            <Badge 
                              variant={
                                skill.level === 'Expert' ? 'default' :
                                skill.level === 'Advanced' ? 'secondary' :
                                'outline'
                              }
                            >
                              {skill.yearsOfExperience}y
                            </Badge>
                          </div>
                          <CardDescription>
                            {skill.level} proficiency
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                              <span>Experience</span>
                              <span className="font-medium">
                                {skill.yearsOfExperience} year{skill.yearsOfExperience !== 1 ? 's' : ''}
                              </span>
                            </div>
                            <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary transition-all duration-700"
                                style={{
                                  width: skill.level === 'Expert' ? '100%' : 
                                         skill.level === 'Advanced' ? '80%' : 
                                         skill.level === 'Intermediate' ? '60%' : '40%'
                                }}
                              />
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Proficiency: {skill.level}
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
      </section>

      {/* Related Categories */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Explore Other Categories
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Discover more of my technical expertise
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {skillCategories
                .filter(cat => cat.slug !== categorySlug)
                .map((relatedCategory) => {
                  const RelatedIcon = categoryIcons[relatedCategory.slug as keyof typeof categoryIcons] || Code;
                  return (
                    <Card key={relatedCategory.slug} className="transition-all hover:shadow-md">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                            <RelatedIcon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{relatedCategory.name}</CardTitle>
                            <CardDescription className="text-sm">
                              {relatedCategory.skills.length} skills
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          {relatedCategory.description}
                        </p>
                        <Button variant="ghost" size="sm" asChild className="w-full">
                          <Link href={`/skills/${relatedCategory.slug}`}>
                            View Skills
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
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
              Interested in my {category.name.toLowerCase()} expertise?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let's discuss how these skills can help with your project.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/projects">
                  See Projects Using These Skills
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
