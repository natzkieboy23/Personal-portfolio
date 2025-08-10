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
    id: "comptrolla-cto",
    company: "Comptrolla",
    position: "Chief Technology Officer",
    startDate: "2023-01",
    endDate: null,
    location: "2F Unit 203-204, Tomasca Building, 273 Boni Serrano Ave., San Roque, Quezon City 1109",
    type: "Full-time",
    description: "As Chief Technology Officer, led the end-to-end development of Outsourcee.app, a one-stop service solution platform. Oversaw the creation of three distinct application ends: the Customer/Client app, the Expert/Service Provider app, and the Partner Onboarding portal.",
    achievements: [
      "Spearheaded the entire product lifecycle of the Outsourcee platform, from concept and architecture to deployment and scaling.",
      "Successfully launched and managed separate applications for customers (Next.js, React Native) and service providers (React Native), ensuring a seamless user experience for both sides of the marketplace.",
      "Engineered a robust backend system using Express, PostgreSQL, Firebase, and Supabase to handle user management, service bookings, and payments.",
      "Established key strategic partnerships by developing an onboarding portal, integrating with government and industry organizations like DMW, DTI, and TESDA."
    ],
    technologies: ["Next.js", "Express", "React Native Expo", "Firebase", "Supabase", "PostgreSQL", "Vercel", "Render.com", ".NET (C#)"],
    year: 2023
  },
  {
    id: "full-stack-dev-2019-2023",
    company: "Saint Paul Consulting Group",
    position: "Junior Full Stack Developer",
    startDate: "2019-01",
    endDate: "2023-01",
    location: "3JC6+MR3, 2nd Floor Aldevinco Shopping Center Roxas Ave, Poblacion District, Davao City, Davao del Sur",
    type: "Full-time",
    description: "As the sole developer, single-handedly designed, developed, and deployed comprehensive business solutions tailored to the specific operational needs of major distribution corporations. Key clients included Davao North Allied Distributors Corp. (a San Miguel Corporation distributor for the Davao Region) and Diamond Millenium Corporation (Limketkai, Cagayan De Oro), delivering systems to manage their core processes.",
    achievements: [
      "Successfully delivered end-to-end software solutions for major distribution companies, handling everything from requirements gathering to deployment and support.",
      "Engineered a custom ERP-like system using Delphi Pascal and C# .NET for Davao North Allied Distributors Corp., streamlining their inventory and sales processes.",
      "Developed and integrated a financial management module with the QuickBooks API for Diamond Millenium Corporation, automating key accounting workflows.",
      "Designed and managed complex MySQL databases to support the core operations of all developed business applications, ensuring data integrity and performance."
    ],
    technologies: ["Delphi Pascal", "C# .NET Winforms", "MySQL", "Quickbooks API Integration"],
    year: 2019
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