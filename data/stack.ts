export interface TechCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    note?: string;
  }[];
}

export const stackData: TechCategory[] = [
  {
    title: "BACKEND & LANGUAGES",
    description: "Systems programming, concurrent microservices, and core languages",
    skills: [
      { name: "Go (Golang)", note: "Primary concurrency & blockchain language" },
      { name: "Python", note: "FastAPI / Django backend logic" },
      { name: "Java", note: "Object-oriented development & automation" },
      { name: "Node.js", note: "RESTful web services & runtime" },
    ],
  },
  {
    title: "DATABASES & DATA INTEGRITY",
    description: "Relational storage, query validation, and state consistency",
    skills: [
      { name: "PostgreSQL", note: "Relational state & atomic transactions" },
      { name: "MySQL", note: "Database schema design & queries" },
      { name: "Redis", note: "In-memory caching & session management" },
      { name: "SQL Integrity", note: "Database query verification & assertions" },
    ],
  },
  {
    title: "TESTING & QUALITY ASSURANCE",
    description: "Multi-layer verification, performance load tests, and security",
    skills: [
      { name: "Postman / REST APIs", note: "API automation & endpoint suites" },
      { name: "K6", note: "Load & stress performance testing" },
      { name: "Selenium WebDriver", note: "UI & regression test scripts in Java" },
      { name: "OWASP ZAP & Burp", note: "Security scanning & vulnerability checks" },
      { name: "Katalon Studio", note: "Automated test workflow execution" },
    ],
  },
  {
    title: "DEVOPS & WORKFLOW",
    description: "Containerization, version control, and test tracking systems",
    skills: [
      { name: "Docker", note: "Containerized service deployment" },
      { name: "Git / GitHub", note: "Version control & collaborative codebases" },
      { name: "Linux Environment", note: "Shell scripting & server management" },
      { name: "gRPC & Protobuf", note: "High-performance inter-service RPC" },
      { name: "Jira / TestLink", note: "Defect tracking & requirement mapping" },
    ],
  },
];
