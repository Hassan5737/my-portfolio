export interface ProfileData {
  name: string;
  githubUsername: string;
  avatarUrl: string;
  role: string;
  subRole: string;
  location: string;
  status: string;
  email: string;
  phone: string;
  bio: string;
  summary: string[];
  socials: {
    github: string;
    linkedin: string;
    letterboxd: string;
    x: string;
    youtube: string;
  };
  highlights: string[];
}

export const profileData: ProfileData = {
  name: "Hassan Ahmed",
  githubUsername: "Hassan5737",
  avatarUrl: "https://github.com/Hassan5737.png",
  role: "Backend Engineer",
  subRole: "Go, C++, Systems & Quality Engineering Practitioner",
  location: "Cairo, Egypt",
  status: "open to backend roles",
  email: "hasanhazem2016@gmail.com",
  phone: "+20 120 573 7666",
  bio: "Building software, solving problems, and learning every day.",
  summary: [
    "Software Engineer focused on Backend Engineering, Go distributed microservices, C++ system performance, and automated quality assurance.",
    "Graduated from Digital Egypt Pioneers Initiative (DEPI) in Go Blockchain Development & Software Testing.",
    "Passionate about system architecture, data structures, backend reliability, and cinema culture."
  ],
  socials: {
    github: "https://github.com/Hassan5737",
    linkedin: "https://www.linkedin.com/in/hassan-ahmed-assad/",
    letterboxd: "https://letterboxd.com/hassan57/",
    x: "https://x.com/aaaaaaa72834619",
    youtube: "https://www.youtube.com/@8a3ha",
  },
  highlights: [
    "Go Blockchain Developer Trainee — DEPI MCIT",
    "Software Testing Practitioner — DEPI MCIT",
    "Internship Trainee — Information Technology Institute (ITI)",
    "B.Ed in STEM Department — Zagazig University",
  ],
};
