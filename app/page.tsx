import Hero from "@/components/Hero/Hero";
import GitHubStats from "@/components/GitHubStats";
import Projects from "@/components/SelectedWork/Projects";
import ExperienceSection from "@/components/Experience/Experience";
import Connect from "@/components/Connect";
import FloatingDock from "@/components/FloatingDock";

export default function Home() {
  return (
    <>
      {/* Floating Bottom Dock */}
      <FloatingDock />

      {/* Main Open Streamlined Container — max-w-4xl mx-auto matching maxkatz.me */}
      <main className="relative z-10 min-h-screen px-5 sm:px-8 pt-8 sm:pt-14 pb-36 sm:pb-44 max-w-4xl mx-auto space-y-10">
        {/* 1. Hero Header & Intro Bio */}
        <Hero />

        {/* 2. Experience & Training */}
        <ExperienceSection />

        {/* 3. Selected Engineering Work */}
        <Projects />

        {/* 4. Performance & GitHub Activity */}
        <GitHubStats />

        {/* 5. Direct Connect Links */}
        <Connect />
      </main>
    </>
  );
}
