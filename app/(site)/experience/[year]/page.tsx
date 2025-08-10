import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, MapPin, Calendar, Building } from "lucide-react";
import { getAllYears, getExperiencesByYear } from "@/data/experience";

interface ExperienceYearPageProps {
  params: Promise<{ year: string }>;
}

export async function generateStaticParams() {
  const years = getAllYears();
  return years.map((year) => ({
    year: year.toString(),
  }));
}

export async function generateMetadata({ params }: ExperienceYearPageProps): Promise<Metadata> {
  const { year } = await params;
  const yearNum = parseInt(year);
  const experiences = getExperiencesByYear(yearNum);

  if (experiences.length === 0) {
    return {
      title: "Year Not Found",
    };
  }

  return {
    title: `${year} Experience`,
    description: `My professional experience and achievements in ${year}. ${experiences.length} role${experiences.length !== 1 ? 's' : ''} during this year.`,
  };
}

export default async function ExperienceYearPage({ params }: ExperienceYearPageProps) {
  const { year } = await params;
  const yearNum = parseInt(year);
  const experiences = getExperiencesByYear(yearNum);

  if (experiences.length === 0) {
    notFound();
  }

  // Calculate total achievements for the year
  const totalAchievements = experiences.reduce((sum, exp) => sum + exp.achievements.length, 0);
  const totalTechnologies = [...new Set(experiences.flatMap(exp => exp.technologies))];

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <section className="border-b bg-muted/50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/experience" className="hover:text-foreground transition-colors">
              Experience
            </Link>
            <span>/</span>
            <span className="text-foreground">{year}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/experience">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Experience
              </Link>
            </Button>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {year} Experience
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                {experiences.length} role{experiences.length !== 1 ? 's' : ''} during this year
              </p>
            </div>

            {/* Year Stats */}
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary">
                    {experiences.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Role{experiences.length !== 1 ? 's' : ''}
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary">
                    {totalAchievements}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Key Achievements
                  </div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary">
                    {totalTechnologies.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Technologies Used
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Details */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl space-y-12">
            {experiences.map((experience) => (
              <Card key={experience.id} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant={experience.endDate ? "outline" : "default"}>
                          {experience.type}
                        </Badge>
                        {!experience.endDate && (
                          <Badge variant="secondary">Current</Badge>
                        )}
                      </div>
                      <CardTitle className="text-2xl">{experience.position}</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-lg">
                        <Building className="h-5 w-5" />
                        {experience.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
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
                  <div className="space-y-8">
                    {/* Description */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Role Overview</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                    
                    {/* Achievements */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Key Achievements</h3>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {experience.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold mt-0.5">
                              {index + 1}
                            </div>
                            <p className="text-sm text-muted-foreground flex-1">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Technologies */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Technologies & Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Summary */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Technologies Used in {year}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                All technologies I worked with during this year
              </p>
            </div>
            <div className="mt-12">
              <Card>
                <CardContent className="p-8">
                  <div className="flex flex-wrap gap-3 justify-center">
                    {totalTechnologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-sm py-2 px-3">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Explore Other Years
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                View my experience from different time periods
              </p>
            </div>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild>
                <Link href="/experience">
                  View All Experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/projects">
                  View Related Projects
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/skills">
                  Explore My Skills
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
