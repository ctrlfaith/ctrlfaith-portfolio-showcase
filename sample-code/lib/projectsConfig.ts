export interface ProjectMetadata {
  repoName: string;
  customDescription?: string;
  highlights?: string[];
  techStack?: string[];
  category?: string;
  isShowcase?: boolean;
}

export const projectsMetadata: Record<string, ProjectMetadata> = {
  "Greenplot-Manager-Showcase": {
    repoName: "Greenplot-Manager-Showcase",
    customDescription:
      "GreenPlot is an agricultural management system developed to help farmers efficiently record, track, analyze, and manage all essential farming activities – including garden information, plant data, planting records, cost management, buyer details, and production reports. It also features automated notifications via the LINE Messaging API to ensure that users never miss important farming tasks or schedules.",
    highlights: [
      "CRUD operations",
      "Cost and profit analysis",
      "Scheduled reminders",
      "Dashboard analytics",
      "PDF report generation",
      "LINE API integration",
    ],
    techStack: [
      "Laravel",
      "PHP",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Alpine.js",
      "MySQL",
      "Chart.js",
      "Laravel DomPDF",
      "LINE Messaging API",
    ],
    category: "Web Application",
    isShowcase: true,
  },

  "georgia-escape-demo": {
    repoName: "georgia-escape-demo",
    customDescription:
      "Georgia Escape is a responsive travel booking website designed to showcase destinations and tour packages for Georgia tourism. The platform features multiple pages including home, tour packages, package details, blog, reservation forms, and contact information, all built with a focus on clean UI design and mobile responsiveness using Bootstrap framework.",
    highlights: [
      "Multi-page layout structure",
      "Responsive UI across devices",
      "Tour package showcases",
      "Booking form integration",
      "Bootstrap grid system",
      "Clean and modern design",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Google Fonts"],
    category: "Frontend",
    isShowcase: true,
  },

  "ctrlfaith-portfolio-showcase": {
    repoName: "ctrlfaith-portfolio-showcase",
    customDescription:
      "A modern personal portfolio website built with Next.js 16 and React 19 to showcase personal information, technical skills, projects, and contact information. Features real-time project data fetched from GitHub API. Designed with Apple-inspired Glass Morphism design system and smooth animations using Framer Motion for an impressive user experience.",
    highlights: [
      "Hero Section with Animated Memoji",
      "About Section with education info",
      "Tech Stack Section with icons",
      "Projects Section with GitHub API",
      "Contact Section with Copy to Clipboard",
      "Resume Download with bilingual support",
      "Glass Morphism Design",
      "Fully Responsive",
      "Smooth Animations",
      "Smooth Navigation with Active Indicator",
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Next.js 16",
      "React 19",
      "Tailwind CSS 4",
      "Framer Motion",
      "Lucide React",
      "GitHub REST API",
    ],
    category: "Web Application",
    isShowcase: true,
  },

  "netflix-eda": {
    repoName: "netflix-eda",
    customDescription:
      "An exploratory data analysis project on Netflix's global content dataset using Python and Pandas. The analysis focuses on discovering trends in content production countries, popular genres, content growth patterns over years, and viewer rating distributions. Developed as a Data Mining coursework project to practice data analysis and visualization skills.",
    highlights: [
      "Data cleaning and preprocessing",
      "Statistical analysis",
      "Data visualization with Matplotlib",
      "Trend discovery and insights",
      "Content growth analysis",
      "Genre and rating patterns",
    ],
    techStack: ["Python", "Pandas", "Matplotlib", "NumPy", "Kaggle Notebook"],
    category: "Data Analysis",
  },

  "Idol-Management-System": {
    repoName: "Idol-Management-System",
    customDescription:
      "A full-stack web application for managing idols and bands with complete CRUD functionality. The system features a Laravel RESTful API backend connected to a Next.js frontend, allowing users to manage detailed information about idols (stage names, profiles, social media) and bands (debut years, agencies, member relationships). Developed as a Web Service Technology midterm project.",
    highlights: [
      "RESTful API architecture",
      "One-to-Many relationships",
      "Complete CRUD operations",
      "Responsive UI with DaisyUI",
      "Social media integration",
      "Comprehensive data management",
    ],
    techStack: ["Laravel 11", "Next.js 14", "Tailwind CSS", "DaisyUI", "MySQL"],
    category: "Web Application",
  },

  "CSIT-NEXT-LARAVEL": {
    repoName: "CSIT-NEXT-LARAVEL",
    customDescription:
      "A tasks management system built with Laravel API and Next.js frontend, created for Web Service Technology coursework. The application demonstrates full-stack workflow with RESTful API development, featuring task CRUD operations with properties like title, description, status, priority, and due dates. Includes comprehensive API testing using REST Client (.http) in Visual Studio Code.",
    highlights: [
      "RESTful API development",
      "Full-stack CRUD workflow",
      "Task management system",
      "API testing with .http files",
      "Status and priority tracking",
      "Real-time data synchronization",
    ],
    techStack: [
      "Laravel 11",
      "Next.js 14",
      "Tailwind CSS",
      "MySQL",
      "REST Client",
    ],
    category: "Web Application",
  },

  "sales-dashboard-system": {
    repoName: "sales-dashboard-system",
    customDescription:
      "A web-based sales management system with integrated data visualization dashboard. The system connects MySQL database through Google Sheets to Looker Studio, creating interactive real-time dashboards embedded via iframe. Features include sales data entry, viewing records, and comprehensive visual analytics for sales performance monitoring.",
    highlights: [
      "Real-time dashboard integration",
      "Looker Studio visualization",
      "MySQL to Google Sheets sync",
      "Interactive data analytics",
      "Sales record management",
      "Embedded dashboard display",
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "MySQL",
      "Google Sheets",
      "Looker Studio",
    ],
    category: "Data Visualization",
  },

  "hogwarts-db": {
    repoName: "hogwarts-db",
    customDescription:
      "A CRUD web application for managing Harry Potter character database, developed as a Web Technology course project. The system features a PHP RESTful API backend connected to a Next.js frontend, managing detailed character information including houses, actors, wands, blood status, and character relationships. Includes comprehensive API testing with Postman for all CRUD operations.",
    highlights: [
      "Complete CRUD functionality",
      "PHP RESTful API",
      "Character database management",
      "API testing with Postman",
      "Detailed character profiles",
      "Next.js frontend integration",
    ],
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "PHP API",
      "MySQL",
      "Postman",
    ],
    category: "Web Application",
  },

  mobile_management_system: {
    repoName: "mobile_management_system",
    customDescription:
      "A Laravel-based CRUD web application for managing mobile phone data, developed for Electronic Business Development coursework. The system manages brands, operating systems, and mobile phone models with detailed specifications including CPU, RAM, and pricing. Features a clean interface built with Blade templates, Tailwind CSS, and daisyUI for an intuitive user experience.",
    highlights: [
      "Three-table relational database",
      "Brand and OS management",
      "Mobile specifications tracking",
      "Blade template system",
      "Modern UI with daisyUI",
      "Complete CRUD operations",
    ],
    techStack: [
      "Laravel",
      "Blade Templates",
      "Tailwind CSS",
      "DaisyUI",
      "MySQL",
    ],
    category: "Web Application",
  },
};
