"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronsUpDown, X, Award, Briefcase } from "lucide-react";
import { experienceData } from "@/data/experience";

export default function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.section
      id="experience"
      className="py-6 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Section Header Row */}
      <div className="flex items-center justify-between mb-6 border-b border-zinc-200 dark:border-zinc-800/60 pb-3">
        <h2 className="font-medium text-[15px] text-zinc-900 dark:text-white">
          Experience & Programs
        </h2>

        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-white/[0.05] border border-zinc-300 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/25 hover:text-zinc-900 dark:hover:text-white rounded-lg transition-all duration-200 cursor-pointer active:scale-95 shadow-sm"
        >
          {isExpanded ? (
            <>
              <span>Collapse details</span>
              <X className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              <span>Full timeline</span>
              <ChevronsUpDown className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {!isExpanded ? (
          /* ======================================================== */
          /* 1. COMPACT TIMELINE VIEW (Distinct Layout)               */
          /* ======================================================== */
          <motion.div
            key="compact-timeline"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full overflow-x-auto pb-3 pt-2 no-scrollbar"
          >
            <div className="relative min-w-[620px] sm:min-w-full px-2">
              {/* Connecting Track Line */}
              <div
                className="absolute top-[7px] left-6 right-6 h-[1.5px] bg-zinc-300 dark:bg-zinc-800/80 -z-10"
                aria-hidden="true"
              />

              {/* Horizontal Timeline Items Grid */}
              <div className="grid grid-cols-4 gap-4 text-left">
                {experienceData.map((exp) => {
                  const shortPeriod = exp.period.split("–")[0].trim();

                  return (
                    <button
                      key={exp.id}
                      onClick={() => setIsExpanded(true)}
                      type="button"
                      className="flex flex-col items-start group text-left cursor-pointer transition-all duration-200"
                    >
                      {/* Track Dot */}
                      <div className="relative flex items-center justify-center mb-3">
                        <span
                          className={`w-3.5 h-3.5 rounded-full border-2 border-white dark:border-[#050505] transition-all duration-200 ${
                            exp.current
                              ? "bg-zinc-900 dark:bg-white shadow-[0_0_8px_rgba(0,0,0,0.25)] dark:shadow-[0_0_12px_rgba(255,255,255,0.95)]"
                              : "bg-zinc-400 dark:bg-zinc-600 group-hover:bg-zinc-900 dark:group-hover:bg-white"
                          }`}
                        />
                      </div>

                      {/* Organization Pill Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-[#141416] border border-zinc-300 dark:border-white/10 group-hover:border-zinc-400 dark:group-hover:border-white/30 group-hover:-translate-y-0.5 shadow-sm transition-all duration-200 max-w-full">
                        <span className="text-xs font-semibold text-zinc-900 dark:text-white tracking-tight truncate">
                          {exp.organizationShort}
                        </span>
                        {exp.current && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                        )}
                      </div>

                      {/* Role Title */}
                      <span className="text-xs font-bold text-zinc-900 dark:text-white mt-2 tracking-tight group-hover:text-black dark:group-hover:text-zinc-200 transition-colors truncate max-w-full">
                        {exp.role}
                      </span>

                      {/* Date Range */}
                      <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors mt-0.5 truncate max-w-full">
                        {shortPeriod} {exp.current ? "(Present)" : ""}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ) : (
          /* ======================================================== */
          /* 2. EXPANDED DETAILED LIST VIEW                          */
          /* ======================================================== */
          <motion.div
            key="expanded-list"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="divide-y divide-zinc-200 dark:divide-white/[0.06] pt-1"
          >
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="py-5 first:pt-2 last:pb-2 flex items-start gap-3 sm:gap-4 group"
              >
                {/* Organization Logo Badge */}
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/[0.05] border border-zinc-300 dark:border-white/10 flex items-center justify-center p-2 shrink-0 group-hover:border-zinc-400 dark:group-hover:border-white/20 transition-colors shadow-sm mt-0.5">
                  <Briefcase className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
                </div>

                {/* Right Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-zinc-900 dark:text-white tracking-tight group-hover:text-black dark:group-hover:text-zinc-100 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          Present
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                    {exp.organization} • {exp.location}
                  </p>

                  <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed mt-2">
                    {exp.summary}
                  </p>

                  {exp.certificateRef && (
                    <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/15 text-xs font-mono text-zinc-700 dark:text-zinc-300">
                      <Award className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                      <span>{exp.certificateRef}</span>
                    </div>
                  )}

                  {/* Achievements Bullet List */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="mt-3 space-y-1 text-xs text-zinc-700 dark:text-zinc-300/90">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Skills tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-2 border-t border-zinc-200 dark:border-white/5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-[10px] font-mono text-zinc-600 dark:text-zinc-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

