export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  yearsOfExperience: number;
  category: string;
}

export interface SkillCategory {
  name: string;
  slug: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Web Frontend",
    slug: "web-frontend",
    description: "Modern frontend frameworks and libraries for web applications",
    skills: [
      { name: "React", level: "Expert", yearsOfExperience: 5, category: "web-frontend" },
      { name: "Next.js", level: "Advanced", yearsOfExperience: 3, category: "web-frontend" },
    ]
  },
  {
    name: "Web Backend",
    slug: "web-backend",
    description: "Server-side technologies and frameworks for web applications",
    skills: [
      { name: "Node.js", level: "Expert", yearsOfExperience: 5, category: "web-backend" },
      { name: "Express.js", level: "Advanced", yearsOfExperience: 5, category: "web-backend" },
      { name: "Hono.js", level: "Beginner", yearsOfExperience: 2, category: "web-backend" },
    ]
  },
  {
    name: "Mobile Development",
    slug: "mobile",
    description: "Frameworks for building mobile applications",
    skills: [
      { name: "React Native (Expo)", level: "Advanced", yearsOfExperience: 3, category: "mobile" }
    ]
  },
  {
    name: "Desktop Development",
    slug: "desktop",
    description: "Frameworks for building desktop applications",
    skills: [
      { name: ".NET (C#) WinForms", level: "Advanced", yearsOfExperience: 4, category: "desktop" }
    ]
  },
  {
    name: "Databases & Authentication",
    slug: "databases-auth",
    description: "Database technologies, authentication services, and data storage solutions",
    skills: [
      { name: "PostgreSQL", level: "Advanced", yearsOfExperience: 5, category: "databases-auth" },
      { name: "MySQL", level: "Advanced", yearsOfExperience: 5, category: "databases-auth" },
      { name: "Firebase", level: "Intermediate", yearsOfExperience: 3, category: "databases-auth" },
      { name: "Supabase", level: "Intermediate", yearsOfExperience: 2, category: "databases-auth" },
      { name: "Better Auth", level: "Beginner", yearsOfExperience: 2, category: "databases-auth" },
      { name: "Redis", level: "Intermediate", yearsOfExperience: 3, category: "databases-auth" }
    ]
  },
  {
    name: "Infrastructure & Deployment",
    slug: "infra-devops",
    description: "Cloud platforms, DevOps tools, and deployment services",
    skills: [
      { name: "Vercel", level: "Advanced", yearsOfExperience: 3, category: "infra-devops" },
      { name: "Railway", level: "Intermediate", yearsOfExperience: 2, category: "infra-devops" },
      { name: "Render.com", level: "Intermediate", yearsOfExperience: 2, category: "infra-devops" },
      { name: "Dokploy (Self-hosted)", level: "Intermediate", yearsOfExperience: 2, category: "infra-devops" },
    ]
  },
  {
    name: "Programming Languages",
    slug: "languages",
    description: "Core programming languages and their ecosystems",
    skills: [
      { name: "JavaScript", level: "Expert", yearsOfExperience: 6, category: "languages" },
      { name: "TypeScript", level: "Advanced", yearsOfExperience: 5, category: "languages" },
      { name: "C#", level: "Advanced", yearsOfExperience: 5, category: "languages" },
      { name: "SQL", level: "Advanced", yearsOfExperience: 5, category: "languages" }
    ]
  },
  {
    name: "Tools & Others",
    slug: "tools",
    description: "Development tools and methodologies",
    skills: [
      { name: "Git", level: "Expert", yearsOfExperience: 6, category: "tools" },
      { name: "VS Code", level: "Expert", yearsOfExperience: 6, category: "tools" },
      { name: "Figma", level: "Intermediate", yearsOfExperience: 3, category: "tools" },
      { name: "Agile/Scrum", level: "Advanced", yearsOfExperience: 5, category: "tools" }
    ]
  }
];

export const getAllSkills = (): Skill[] => {
  return skillCategories.flatMap(category => category.skills);
};

export const getSkillsByCategory = (categorySlug: string): Skill[] => {
  const category = skillCategories.find(cat => cat.slug === categorySlug);
  return category ? category.skills : [];
};

export const getSkillCategory = (categorySlug: string): SkillCategory | undefined => {
  return skillCategories.find(cat => cat.slug === categorySlug);
};
