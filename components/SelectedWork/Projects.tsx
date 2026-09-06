"use client";

import React from "react";
import { projectsData } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-4 max-w-4xl mx-auto py-6">
      <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800/60 pb-3">
        <h2 className="font-medium text-[15px] text-zinc-900 dark:text-white">
          Selected Work
        </h2>
        <span className="text-xs font-mono text-zinc-500 dark:text-zinc-500">
          Systems & Backend
        </span>
      </div>

      <div className="space-y-4">
        {projectsData.slice(0, 3).map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-2 pb-4 border-b border-zinc-200 dark:border-zinc-800/60 last:border-0"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                {project.title}
                <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 font-normal">
                  ({project.category})
                </span>
              </h3>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  <FaGithub className="text-xs" />
                  <span>Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.subtitle}
            </p>

            <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 space-y-1">
              <p><strong className="text-zinc-900 dark:text-zinc-300">Challenge:</strong> {project.problem}</p>
              <p><strong className="text-zinc-900 dark:text-zinc-300">Approach:</strong> {project.system}</p>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] font-mono text-zinc-500">
              <span>Stack:</span>
              {project.technologies.map((tech, idx) => (
                <span key={tech} className="text-zinc-700 dark:text-zinc-300">
                  {tech}{idx < project.technologies.length - 1 ? " • " : ""}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

