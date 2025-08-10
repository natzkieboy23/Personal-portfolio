export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';
  description: string;
  achievements: string[];
  technologies: string[];
  year: number;
}

export const experiences: Experience[] = [
  {
    id: "techcorp-senior",
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    startDate: "2022-03",
    endDate: null,
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Leading development of enterprise-grade web applications serving 100k+ users. Architecting scalable microservices and mentoring junior developers.",
    achievements: [
      "Led migration from monolith to microservices, reducing deployment time by 70%",
      "Implemented real-time collaboration features increasing user engagement by 45%",
      "Mentored 5 junior developers, with 3 receiving promotions",
      "Reduced application bundle size by 40% through code splitting and optimization"
    ],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker", "GraphQL"],
    year: 2022
  },
  {
    id: "innovate-mid",
    company: "Innovate Labs",
    position: "Full Stack Developer",
    startDate: "2020-06",
    endDate: "2022-02",
    location: "Remote",
    type: "Full-time",
    description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams to deliver pixel-perfect implementations.",
    achievements: [
      "Built 8 client projects from concept to production",
      "Implemented automated testing reducing bug reports by 60%",
      "Optimized database queries improving response times by 50%",
      "Established code review process improving code quality metrics"
    ],
    technologies: ["Vue.js", "Python", "Django", "MongoDB", "Redis", "GitHub Actions"],
    year: 2020
  },
  {
    id: "startup-junior",
    company: "StartupXYZ",
    position: "Junior Developer",
    startDate: "2019-01",
    endDate: "2020-05",
    location: "Austin, TX",
    type: "Full-time",
    description: "Contributed to rapid product development in a fast-paced startup environment. Worked across the full stack building features for a SaaS platform.",
    achievements: [
      "Developed user authentication and authorization system",
      "Built responsive dashboard with real-time data visualization",
      "Contributed to API design and documentation",
      "Participated in daily standups and sprint planning"
    ],
    technologies: ["JavaScript", "React", "Express.js", "MySQL", "Bootstrap"],
    year: 2019
  },
  {
    id: "freelance-web",
    company: "Freelance",
    position: "Web Developer",
    startDate: "2018-03",
    endDate: "2018-12",
    location: "Remote",
    type: "Freelance",
    description: "Provided web development services to small businesses and entrepreneurs. Specialized in creating modern, responsive websites and e-commerce solutions.",
    achievements: [
      "Completed 12 client projects with 100% satisfaction rate",
      "Built custom e-commerce solutions increasing client sales by 30%",
      "Established long-term relationships with 5 recurring clients",
      "Learned project management and client communication skills"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP", "MySQL"],
    year: 2018
  }
];

export const getExperiencesByYear = (year: number): Experience[] => {
  return experiences.filter(exp => exp.year === year);
};

export const getExperienceById = (id: string): Experience | undefined => {
  return experiences.find(exp => exp.id === id);
};

export const getAllYears = (): number[] => {
  const years = experiences.map(exp => exp.year);
  return [...new Set(years)].sort((a, b) => b - a);
};
