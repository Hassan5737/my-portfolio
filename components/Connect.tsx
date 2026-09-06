"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import LetterboxdIcon from "@/components/icons/LetterboxdIcon";

export default function Connect() {
  return (
    <section id="connect" className="flex flex-col gap-3 max-w-4xl mx-auto pt-2">
      <h2 className="font-medium text-[15px] text-zinc-900 dark:text-white">Connect</h2>
      
      <p className="text-xs sm:text-sm font-mono text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Open for Backend Engineering roles, Go microservices, C++ software engineering, and technical discussions.
      </p>

      <div className="flex flex-wrap items-center gap-2 pt-1">
        <a
          href={`mailto:${profileData.email}`}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-all shadow-sm active:scale-95"
        >
          <Mail className="w-3.5 h-3.5" /> Get in Touch
        </a>

        <a
          href={profileData.socials.x}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 hover:text-[#1DA1F2] dark:hover:text-[#1DA1F2] hover:border-[#1DA1F2]/50 hover:bg-[#1DA1F2]/10 dark:hover:bg-[#1DA1F2]/10 transition-all duration-200"
        >
          <FaXTwitter className="w-3.5 h-3.5" /> Message on X
        </a>

        <a
          href={profileData.socials.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 hover:text-[#2da44e] dark:hover:text-[#2da44e] hover:border-[#2da44e]/50 hover:bg-[#2da44e]/10 dark:hover:bg-[#2da44e]/10 transition-all duration-200"
        >
          <FaGithub className="w-3.5 h-3.5" /> GitHub
        </a>

        <a
          href={profileData.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 dark:hover:bg-[#0A66C2]/10 transition-all duration-200"
        >
          <FaLinkedin className="w-3.5 h-3.5" /> LinkedIn
        </a>

        <a
          href={profileData.socials.letterboxd}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 hover:text-[#00E054] dark:hover:text-[#00E054] hover:border-[#00E054]/50 hover:bg-[#00E054]/10 dark:hover:bg-[#00E054]/10 transition-all duration-200"
        >
          <LetterboxdIcon className="w-3.5 h-3.5" /> Letterboxd
        </a>

        <a
          href={profileData.socials.youtube}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 hover:text-[#FF0000] dark:hover:text-[#FF0000] hover:border-[#FF0000]/50 hover:bg-[#FF0000]/10 dark:hover:bg-[#FF0000]/10 transition-all duration-200"
        >
          <FaYoutube className="w-3.5 h-3.5" /> YouTube
        </a>
      </div>
    </section>
  );
}

