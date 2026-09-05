export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "C++ & Systems" | "Backend Systems" | "API & Performance";
  problem: string;
  system: string;
  technologies: string[];
  results: string[];
  featured: boolean;
  githubUrl?: string;
  codeSnippet?: string;
}

export const projectsData: Project[] = [
  {
    id: "my_stl",
    title: "my_stl — Custom C++ Standard Template Library",
    subtitle: "Re-implementing core C++ STL containers and algorithms from scratch",
    category: "C++ & Systems",
    problem:
      "Understanding memory allocation, pointer mechanics, and dynamic data structure internals at the CPU and memory hierarchy level.",
    system:
      "Designed custom implementations of dynamic vectors, linked lists, binary search trees, and custom memory management routines in C++20 with strict exception safety guarantees.",
    technologies: ["C++", "Memory Management", "Pointers", "Data Structures", "Templates"],
    results: [
      "Built custom Vector, LinkedList, and BinaryTree implementations with zero memory leaks.",
      "Applied RAII design patterns and custom template metaprogramming for type flexibility.",
      "Verified correctness using unit test assertions and Valgrind memory audits.",
    ],
    featured: true,
    githubUrl: "https://github.com/Hassan5737/my_stl",
  },
  {
    id: "go-blockchain-core",
    title: "Go Distributed Ledger & Smart Contract Engine",
    subtitle: "High-concurrency blockchain backend built during DEPI Traineeship",
    category: "Backend Systems",
    problem:
      "Legacy transaction verification frameworks lack concurrent block validation, creating throughput bottlenecks during high-density block synchronization.",
    system:
      "Engineered a distributed blockchain protocol in Go using custom goroutine worker pools, SHA-256 block hashing, proof-of-work consensus mechanism, and gRPC peer-to-peer communication.",
    technologies: ["Go (Golang)", "gRPC", "Docker", "Protocol Buffers", "PostgreSQL"],
    results: [
      "Achieved sub-millisecond block verification latency using concurrent channel pipelines.",
      "Designed atomic state transitions and cryptographic transaction signing routines.",
      "Implemented automated containerized integration testing with Docker Compose.",
    ],
    featured: true,
    githubUrl: "https://github.com/Hassan5737",
    codeSnippet: `package main

type Block struct {
    Index     int
    Timestamp int64
    Data      []Transaction
    Hash      string
    PrevHash  string
    Nonce     int
}

func (b *Block) Mine(ctx context.Context, difficulty int) error {
    target := strings.Repeat("0", difficulty)
    for {
        select {
        case <-ctx.Done():
            return ctx.Err()
        default:
            b.Hash = b.calculateHash()
            if strings.HasPrefix(b.Hash, target) {
                return nil
            }
            b.Nonce++
        }
    }
}`,
  },
  {
    id: "cpp-dsa-journey",
    title: "cpp-dsa-journey — Data Structures & Algorithms",
    subtitle: "Mastering DSA in C++ through rigorous problem solving and engineering fundamentals",
    category: "C++ & Systems",
    problem:
      "Solving complex algorithmic challenges requiring optimal time and space complexity trade-offs under competitive constraints.",
    system:
      "Built a structured repository of 100+ algorithm solutions spanning Graphs, Dynamic Programming, Trees, Heap, Segment Trees, and Disjoint Set Union (DSU).",
    technologies: ["C++", "Algorithms", "Graph Theory", "Dynamic Programming", "Trees"],
    results: [
      "Implemented optimized graph traversal algorithms (Dijkstra, BFS/DFS, Topological Sort).",
      "Achieved O(log N) query speeds for dynamic range queries using Segment Trees.",
      "Structured comprehensive documentation for continuous technical review.",
    ],
    featured: false,
    githubUrl: "https://github.com/Hassan5737/cpp-dsa-journey",
  },
  {
    id: "cpp-oop-journey",
    title: "cpp-oop-journey — Object-Oriented Design in C++",
    subtitle: "Object-Oriented Design patterns, inheritance, polymorphism, and mini-projects",
    category: "C++ & Systems",
    problem:
      "Translating complex real-world requirements into clean, modular, and maintainable object-oriented software architectures.",
    system:
      "Developed mini-projects applying SOLID design principles, virtual dispatch, abstract interface definitions, and creational/structural design patterns in C++.",
    technologies: ["C++", "OOP", "Design Patterns", "UML", "Software Architecture"],
    results: [
      "Implemented modular class hierarchies demonstrating run-time polymorphism.",
      "Ensured encapsulation and strict interface isolation across multi-file codebases.",
    ],
    featured: false,
    githubUrl: "https://github.com/Hassan5737/cpp-oop-journey",
  },
  {
    id: "educational-platform-testing",
    title: "Multi-Layer Educational Backend & QA Engine",
    subtitle: "Automated test suite, API validation, and K6 stress testing strategy",
    category: "API & Performance",
    problem:
      "High peak concurrent user traffic during automated assessment submissions was causing undetected database write locks and API response latency degradation.",
    system:
      "Designed a complete multi-layer QA & test automation strategy covering RESTful API response validation (Postman/Newman), load/stress scenarios using K6, and backend SQL data integrity verification.",
    technologies: ["K6", "Postman / Newman", "Java", "Selenium WebDriver", "REST APIs", "SQL"],
    results: [
      "Identified critical SQL query bottlenecks under simulated loads of 1,000+ concurrent users.",
      "Automated smoke & regression test suites running in CI/CD pipeline.",
      "Ensured zero data corruption across multi-step student assessment workflows.",
    ],
    featured: false,
  },
];
