export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  organizationShort: string;
  programType: string;
  location: string;
  period: string;
  current: boolean;
  summary: string;
  achievements: string[];
  skills: string[];
  certificateRef?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "altarooti-coding-instructor",
    role: "Coding Instructor",
    organization: "Al-Tarooti Center",
    organizationShort: "Tarooti",
    programType: "Instruction & Mentorship",
    location: "Egypt · On-site",
    period: "May 2026 – Present",
    current: true,
    summary:
      "Instructing and mentoring students in software programming, algorithms, problem solving, and modern computer science practices.",
    achievements: [
      "Taught fundamental programming concepts, data structures, and algorithmic logic.",
      "Guided hands-on coding sessions and mentored aspiring software developers through practical projects.",
      "Formulated code challenges and evaluated student software implementations.",
    ],
    skills: ["Coding Instruction", "Algorithms", "Data Structures", "Code Mentorship", "Problem Solving"],
  },
  {
    id: "depi-go-blockchain",
    role: "Go Blockchain Developer Trainee",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    organizationShort: "DEPI",
    programType: "Ministry Internship & Professional Training",
    location: "Cairo, Egypt · Hybrid",
    period: "Jul 2026 – Present",
    current: true,
    summary:
      "Participating in intensive professional backend development focused on Go (Golang), distributed systems architecture, and blockchain software engineering.",
    achievements: [
      "Engineered high-concurrency Go microservices utilizing goroutines and channels.",
      "Implemented gRPC peer-to-peer data distribution and SHA-256 cryptographic proof systems.",
      "Applied modern backend software engineering principles, system design patterns, and clean code practices.",
    ],
    skills: ["Go (Golang)", "Blockchain", "Distributed Systems", "gRPC", "Docker", "PostgreSQL"],
  },
  {
    id: "depi-software-testing",
    role: "Software Testing Practitioner",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    organizationShort: "DEPI",
    programType: "Ministry Professional Track",
    location: "Cairo, Egypt · Hybrid",
    period: "Jul 2025 – Jan 2026",
    current: false,
    summary:
      "Completed hands-on software testing practitioner scholarship with official MCIT certificate of completion across manual, automation, API, and performance tracks.",
    achievements: [
      "Designed and executed structured test scenarios, comprehensive test suites, and reproducible bug reports.",
      "Developed automated Java/Selenium scripts for smoke and regression testing.",
      "Executed K6 load testing routines to identify system bottlenecks under peak traffic.",
    ],
    skills: [
      "Test Case Design",
      "API Testing",
      "K6 Performance",
      "Selenium Automation",
      "Jira",
      "Software Documentation",
    ],
    certificateRef: "Official Certificate of Completion — DEPI Software Testing Track",
  },
  {
    id: "iti-internship",
    role: "Internship Trainee",
    organization: "Information Technology Institute (ITI)",
    organizationShort: "ITI",
    programType: "Ministry Training Internship",
    location: "Az Zaqaziq, Sharkia, Egypt · Hybrid",
    period: "Sep 2024 – Dec 2024",
    current: false,
    summary:
      "Trained in backend fundamentals, database integrity validation, and web software lifecycle at ITI's Zagazig branch.",
    achievements: [
      "Validated SQL database integrity against frontend user interactions.",
      "Collaborated in cross-functional team agile sprints to diagnose and fix backend defects.",
      "Analyzed system requirements to derive comprehensive functional validation boundaries.",
    ],
    skills: ["SQL", "Database Integrity", "Software Engineering", "Agile Workflow"],
  },
];
