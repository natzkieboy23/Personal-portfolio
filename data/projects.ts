export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'Web App' | 'Mobile App' | 'API' | 'Library' | 'Tool';
  status: 'Completed' | 'In Progress' | 'Maintenance';
  featured: boolean;
  startDate: string;
  endDate: string | null;
  demoUrl?: string;
  githubUrl?: string;
  imageUrl: string;
  screenshots: string[];
  challenges: string[];
  solutions: string[];
  impact: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A modern, scalable e-commerce platform with real-time inventory management and advanced analytics.",
    longDescription: "Built a comprehensive e-commerce solution from the ground up, featuring a React-based storefront, Node.js backend with microservices architecture, and integrated payment processing. The platform handles high-traffic scenarios and provides real-time inventory updates across multiple sales channels.",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Stripe", "AWS", "Docker"],
    category: "Web App",
    status: "Completed",
    featured: true,
    startDate: "2023-01",
    endDate: "2023-08",
    demoUrl: "https://demo-ecommerce.alexjohnson.dev",
    githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
    imageUrl: "/images/projects/ecommerce-hero.jpg",
    screenshots: [
      "/images/projects/ecommerce-1.jpg",
      "/images/projects/ecommerce-2.jpg",
      "/images/projects/ecommerce-3.jpg"
    ],
    challenges: [
      "Handling concurrent inventory updates across multiple sales channels",
      "Implementing real-time notifications for order status changes",
      "Optimizing database queries for product search and filtering"
    ],
    solutions: [
      "Implemented event-driven architecture with Redis pub/sub for inventory sync",
      "Used WebSocket connections for real-time order updates",
      "Created optimized database indexes and implemented caching strategies"
    ],
    impact: "Increased client's online sales by 150% and reduced inventory discrepancies by 90%"
  },
  {
    id: "task-management-app",
    title: "Collaborative Task Manager",
    description: "A real-time collaborative task management application with team workspaces and advanced project tracking.",
    longDescription: "Developed a comprehensive task management solution that enables teams to collaborate effectively. Features include real-time updates, drag-and-drop task boards, time tracking, file attachments, and detailed project analytics. The application supports multiple team workspaces and role-based access control.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io", "Tailwind CSS", "Vercel"],
    category: "Web App",
    status: "In Progress",
    featured: true,
    startDate: "2023-09",
    endDate: null,
    demoUrl: "https://taskmaster.alexjohnson.dev",
    githubUrl: "https://github.com/alexjohnson/task-manager",
    imageUrl: "/images/projects/taskmanager-hero.jpg",
    screenshots: [
      "/images/projects/taskmanager-1.jpg",
      "/images/projects/taskmanager-2.jpg",
      "/images/projects/taskmanager-3.jpg"
    ],
    challenges: [
      "Implementing real-time collaboration without conflicts",
      "Creating an intuitive drag-and-drop interface",
      "Designing scalable database schema for complex relationships"
    ],
    solutions: [
      "Implemented operational transformation for conflict-free collaborative editing",
      "Used React DnD library with custom conflict resolution",
      "Designed normalized database schema with efficient indexing"
    ],
    impact: "Currently used by 500+ users across 50+ teams with 99.9% uptime"
  },
  {
    id: "weather-api",
    title: "Weather Analytics API",
    description: "A high-performance REST API providing weather data with analytics and forecasting capabilities.",
    longDescription: "Built a robust weather API that aggregates data from multiple sources and provides comprehensive weather information with analytics. The API includes historical data analysis, weather pattern predictions, and customizable alert systems. Designed to handle millions of requests per day with sub-100ms response times.",
    technologies: ["Go", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Prometheus", "Grafana"],
    category: "API",
    status: "Completed",
    featured: true,
    startDate: "2022-10",
    endDate: "2023-02",
    demoUrl: "https://api-docs.weather-analytics.dev",
    githubUrl: "https://github.com/alexjohnson/weather-api",
    imageUrl: "/images/projects/weather-api-hero.jpg",
    screenshots: [
      "/images/projects/weather-api-1.jpg",
      "/images/projects/weather-api-2.jpg"
    ],
    challenges: [
      "Aggregating data from multiple weather service providers",
      "Achieving sub-100ms response times at scale",
      "Implementing accurate weather prediction algorithms"
    ],
    solutions: [
      "Built data pipeline with concurrent API calls and intelligent caching",
      "Implemented Redis caching with geographic clustering",
      "Used machine learning models for weather pattern analysis"
    ],
    impact: "Serves 2M+ requests daily with 99.95% uptime and powers 20+ client applications"
  },
  {
    id: "react-component-library",
    title: "React Component Library",
    description: "A comprehensive, accessible React component library with TypeScript support and Storybook documentation.",
    longDescription: "Created a production-ready component library used across multiple projects. Features include full TypeScript support, comprehensive accessibility features, extensive Storybook documentation, and automated testing. The library follows design system principles and includes theming capabilities.",
    technologies: ["React", "TypeScript", "Storybook", "Jest", "Testing Library", "Rollup", "Sass"],
    category: "Library",
    status: "Maintenance",
    featured: false,
    startDate: "2022-03",
    endDate: "2022-09",
    githubUrl: "https://github.com/alexjohnson/react-ui-lib",
    demoUrl: "https://storybook.ui-lib.alexjohnson.dev",
    imageUrl: "/images/projects/component-lib-hero.jpg",
    screenshots: [
      "/images/projects/component-lib-1.jpg",
      "/images/projects/component-lib-2.jpg"
    ],
    challenges: [
      "Ensuring consistent design across all components",
      "Implementing comprehensive accessibility features",
      "Creating efficient build and distribution pipeline"
    ],
    solutions: [
      "Established design tokens and theming system",
      "Implemented ARIA patterns and automated accessibility testing",
      "Used Rollup for optimized bundling and tree-shaking"
    ],
    impact: "Used in 15+ production applications with 10k+ weekly downloads on npm"
  },
  {
    id: "mobile-fitness-app",
    title: "Fitness Tracking Mobile App",
    description: "A cross-platform mobile app for fitness tracking with social features and personalized workout plans.",
    longDescription: "Developed a comprehensive fitness tracking application using React Native. The app includes workout logging, progress tracking, social features for sharing achievements, and AI-powered personalized workout recommendations. Integrated with wearable devices and health platforms for comprehensive fitness monitoring.",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux", "Expo", "Node.js", "MongoDB"],
    category: "Mobile App",
    status: "Completed",
    featured: false,
    startDate: "2021-06",
    endDate: "2022-01",
    demoUrl: "https://apps.apple.com/app/fittrack-pro",
    githubUrl: "https://github.com/alexjohnson/fitness-app",
    imageUrl: "/images/projects/fitness-app-hero.jpg",
    screenshots: [
      "/images/projects/fitness-app-1.jpg",
      "/images/projects/fitness-app-2.jpg",
      "/images/projects/fitness-app-3.jpg"
    ],
    challenges: [
      "Creating smooth animations and gestures on mobile",
      "Integrating with multiple health and fitness APIs",
      "Implementing offline functionality for workout tracking"
    ],
    solutions: [
      "Used React Native Reanimated for 60fps animations",
      "Built unified API layer to handle multiple health platform integrations",
      "Implemented local SQLite database with sync capabilities"
    ],
    impact: "Downloaded by 25k+ users with 4.8-star rating on app stores"
  }
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projects.filter(project => project.category === category);
};

export const getAllCategories = (): Project['category'][] => {
  const categories = projects.map(project => project.category);
  return [...new Set(categories)];
};
