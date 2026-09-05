"use client";

import React from "react";
import { Project } from "@/data/projects";
import { Terminal, CheckCircle2, Cpu, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <div
      className={`glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden border border-white/10 ${
        featured ? "lg:col-span-2 bg-gradient-to-b from-white/[0.04] to-transparent" : ""
      }`}
    >
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div>
        {/* Category Header */}
        <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-white/5 text-accent border border-white/10">
              <Cpu className="w-4 h-4" />
            </span>
            <span className="text-xs font-mono tracking-widest text-accent font-semibold uppercase">
              {project.category}
            </span>
          </div>

          <span className="text-xs font-mono text-foreground-muted">
            SYSTEM ID: #{project.id.toUpperCase()}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl sm:text-3xl font-bold font-sans text-foreground tracking-tight mb-2">
          {project.title}
        </h3>
        <p className="text-sm font-mono text-foreground-secondary mb-8 leading-relaxed">
          {project.subtitle}
        </p>

        {/* Problem & System Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Problem Block */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono tracking-wider text-rose-400/90 font-semibold block mb-2">
                // THE SYSTEM CHALLENGE
              </span>
              <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                {project.problem}
              </p>
            </div>
          </div>

          {/* System Architecture Block */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono tracking-wider text-emerald-400/90 font-semibold block mb-2">
                // BACKEND ARCHITECTURE & SOLUTION
              </span>
              <p className="text-xs sm:text-sm text-foreground-secondary leading-relaxed">
                {project.system}
              </p>
            </div>
          </div>
        </div>

        {/* Optional Code Snippet Feature */}
        {project.codeSnippet && (
          <div className="mb-8 rounded-2xl bg-[#030303] border border-white/10 p-4 font-mono text-xs overflow-x-auto">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-foreground-muted">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-accent" />
                <span>main.go — Core Validation Pipeline</span>
              </div>
              <span className="text-[10px] text-foreground-muted">Golang</span>
            </div>
            <pre className="text-emerald-300/90 leading-relaxed font-mono">
              <code>{project.codeSnippet}</code>
            </pre>
          </div>
        )}

        {/* Key Engineering Results */}
        <div className="mb-8">
          <span className="text-[11px] font-mono tracking-wider text-foreground-muted block mb-3">
            VERIFIED MEASURED IMPACT
          </span>
          <div className="space-y-2">
            {project.results.map((res, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground-secondary">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>{res}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Map & Footer */}
      <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-foreground-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
