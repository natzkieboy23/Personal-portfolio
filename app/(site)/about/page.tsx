import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";

import { getAllSkills } from "@/data/skills";

export const metadata: Metadata = {
  title: "About Me",
  description: `Learn more about ${personalInfo.name}, a ${personalInfo.title} with 6+ years of experience in software development.`,
};

export default function AboutPage() {
  const allSkills = getAllSkills();
  const topSkills = allSkills
    .sort((a, b) => b.yearsOfExperience - a.yearsOfExperience)
    .slice(0, 12);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    About Me
                  </h1>
                  <p className="mt-4 text-xl text-muted-foreground">
                    {personalInfo.title}
                  </p>
                </div>
                
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>{personalInfo.about}</p>
                  <p>
                    Throughout my career, I've had the privilege of working with diverse teams 
                    and technologies, constantly learning and adapting to new challenges. 
                    I believe in writing clean, maintainable code and creating solutions 
                    that not only meet requirements but exceed expectations.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, 
                    contributing to open source projects, or mentoring aspiring developers. 
                    I'm passionate about the intersection of technology and user experience, 
                    always striving to create digital products that make a real difference.
                  </p>
                </div>

                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button asChild>
                    <Link href="/contact">
                      Get In Touch
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href={personalInfo.resume} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src="/images/profile-about.jpg"
                    alt={`${personalInfo.name} - Professional photo`}
                    width={500}
                    height={625}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Career Highlights
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Key achievements and milestones
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {personalInfo.highlights.map((highlight, index) => (
                <Card key={index} className="transition-all hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground">{highlight}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Core Expertise
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                My most experienced technologies
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {topSkills.map((skill) => (
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
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Proficiency</span>
                        <span>{skill.level}</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary transition-all"
                          style={{
                            width: skill.level === 'Expert' ? '100%' : 
                                   skill.level === 'Advanced' ? '80%' : 
                                   skill.level === 'Intermediate' ? '60%' : '40%'
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild>
                <Link href="/skills">
                  View All Skills
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Let's Connect
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Ready to discuss your next project?
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Card className="text-center transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <Mail className="mx-auto h-8 w-8 text-primary" />
                  <h3 className="mt-4 font-semibold">Email</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <Link 
                      href={`mailto:${personalInfo.email}`}
                      className="hover:text-foreground transition-colors"
                    >
                      {personalInfo.email}
                    </Link>
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
