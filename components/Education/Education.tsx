"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2 } from "lucide-react";

export default function Education() {
  return (
    <motion.section
      id="education"
      className="py-8 sm:py-12 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-amber-400" /> Education & Credentials
        </h2>
        <span className="text-xs font-mono text-zinc-500">
          Zagazig Univ & MCIT
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* University Degree */}
        <div className="p-5 rounded-2xl bg-[#0d0d12]/70 border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10 text-[10px] font-mono">
              <span className="text-amber-400 font-semibold uppercase">ACADEMIC DEGREE</span>
              <span className="text-zinc-500">2022 – 2026</span>
            </div>

            <h3 className="text-lg font-bold text-white mb-1">
              Bachelor of Education — STEM
            </h3>
            <h4 className="text-xs font-mono text-zinc-400 mb-4">
              Zagazig University, Egypt
            </h4>

            <div className="space-y-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>STEM Analytical Problem Solving</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Software Engineering Fundamentals</span>
              </div>
            </div>
          </div>
        </div>

        {/* DEPI & ITI Scholarships */}
        <div className="p-5 rounded-2xl bg-[#0d0d12]/70 border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10 text-[10px] font-mono">
              <span className="text-emerald-400 font-semibold uppercase">MINISTRY SCHOLARSHIPS</span>
              <span className="text-zinc-500">MCIT EGYPT</span>
            </div>

            <h3 className="text-lg font-bold text-white mb-1">
              DEPI & ITI Programs
            </h3>
            <h4 className="text-xs font-mono text-zinc-400 mb-4">
              Digital Egypt Pioneers Initiative & ITI
            </h4>

            <div className="space-y-2 text-xs text-zinc-300 font-mono">
              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <span>Go Blockchain Trainee (DEPI)</span>
                <span className="text-[10px] text-amber-400">2026</span>
              </div>
              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <span>Software Testing Track (DEPI)</span>
                <span className="text-[10px] text-emerald-400">Certified</span>
              </div>
              <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <span>ITI Backend Trainee</span>
                <span className="text-[10px] text-zinc-400">2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
