"use client";

import React from "react";
import { motion } from "framer-motion";
import { stackData } from "@/data/stack";
import { Cpu, Check } from "lucide-react";

export default function TechnicalMap() {
  return (
    <motion.section
      id="stack"
      className="py-8 sm:py-12 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <Cpu className="w-5 h-5 text-amber-400" /> Engineering Stack & Skills
        </h2>
        <span className="text-xs font-mono text-zinc-500">
          Taxonomy Map
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {stackData.map((cat, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-[#0d0d12]/70 border border-white/[0.08] hover:border-white/20 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <h3 className="text-xs font-mono tracking-wider text-amber-400 font-bold uppercase">
                  {cat.title}
                </h3>
                <span className="text-[10px] font-mono text-zinc-500">
                  0{idx + 1} / 04
                </span>
              </div>

              <div className="space-y-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start justify-between gap-3 text-xs"
                  >
                    <div>
                      <span className="font-bold text-white block">
                        {skill.name}
                      </span>
                      {skill.note && (
                        <span className="text-[11px] font-mono text-zinc-400 block mt-0.5">
                          {skill.note}
                        </span>
                      )}
                    </div>
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
