"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import LetterboxdIcon from "@/components/icons/LetterboxdIcon";

export default function Hero() {
  return (
    <section id="about" className="relative flex flex-col gap-6 pt-2 pb-6 max-w-4xl mx-auto">
      {/* Subtle Berserk Brand Artwork Watermark */}
      <div className="absolute top-1 sm:top-2 right-2 sm:right-10 pointer-events-none opacity-10 dark:opacity-[0.06] select-none overflow-hidden" aria-hidden="true">
        <Image
          src="/berserk_brand.png"
          alt="Berserk Artwork Watermark"
          width={100}
          height={210}
          className="object-contain invert dark:invert-0 w-20 sm:w-32 h-auto"
        />
      </div>

      {/* Top Header Row: Profile Avatar + Name & Title on Left, Borderless Social Links on Right */}
      <div className="flex flex-row items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-3.5 sm:gap-4">
          {/* GitHub Scanned Profile Avatar Image */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-zinc-300 dark:border-white/20 shadow-md shrink-0 bg-zinc-100 dark:bg-zinc-800">
            <Image
              src="https://github.com/Hassan5737.png"
              alt={profileData.name}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>

          <div>
            <h1 className="font-medium text-xl sm:text-2xl text-zinc-900 dark:text-white">
              {profileData.name}
            </h1>
            <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400 font-mono">
              {profileData.role}
            </p>
          </div>
        </div>

        {/* Minimal Borderless Social Icons (Max Katz Style) */}
        <nav aria-label="Social links">
          <ul className="flex items-center gap-2 sm:gap-3 text-zinc-500 dark:text-zinc-400">
            <li>
              <Link
                aria-label="X (Twitter)"
                href={profileData.socials.x}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center p-1.5 hover:text-[#1DA1F2] hover:scale-110 transition-all duration-200"
              >
                <FaXTwitter className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link
                aria-label="GitHub"
                href={profileData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center p-1.5 hover:text-[#2da44e] hover:scale-110 transition-all duration-200"
              >
                <FaGithub className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link
                aria-label="LinkedIn"
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center p-1.5 hover:text-[#0A66C2] hover:scale-110 transition-all duration-200"
              >
                <FaLinkedin className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link
                aria-label="Letterboxd"
                href={profileData.socials.letterboxd}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center p-1.5 hover:text-[#00E054] hover:scale-110 transition-all duration-200"
              >
                <LetterboxdIcon className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <a
                aria-label="Email"
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center justify-center p-1.5 hover:text-[#EA4335] hover:scale-110 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Intro Text (Pure open text without rectangular cards) */}
      <div className="space-y-3 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
        <p>
          Hi, I'm Hassan — a software engineer based in{" "}
          <span className="text-zinc-900 dark:text-white underline decoration-zinc-400 dark:decoration-zinc-600 underline-offset-4">
            Cairo, Egypt
          </span>
          , specializing in backend microservices, Go distributed ledgers, C++ algorithm performance, and quality engineering.
        </p>

        <p>
          I've trained through the{" "}
          <a
            href="#experience"
            className="text-zinc-900 dark:text-white underline decoration-zinc-400 dark:decoration-zinc-600 hover:decoration-zinc-900 dark:hover:decoration-white underline-offset-4 transition-colors font-medium"
          >
            Digital Egypt Pioneers Initiative (DEPI)
          </a>{" "}
          in Go Blockchain & Software Testing. Outside engineering, I'm a passionate film enthusiast on{" "}
          <a
            href={profileData.socials.letterboxd}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-900 dark:text-white underline decoration-zinc-400 dark:decoration-zinc-600 hover:decoration-zinc-900 dark:hover:decoration-white underline-offset-4 transition-colors font-medium"
          >
            Letterboxd (870+ films logged)
          </a>{" "}
          and share technical insights on{" "}
          <a
            href={profileData.socials.youtube}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-900 dark:text-white underline decoration-zinc-400 dark:decoration-zinc-600 hover:decoration-zinc-900 dark:hover:decoration-white underline-offset-4 transition-colors font-medium"
          >
            YouTube (@8a3ha)
          </a>
          .
        </p>
      </div>

      {/* Action Row & Handwritten Status Annotation */}
      <div className="relative mt-3 flex flex-wrap items-end gap-3">
        {/* Handwritten Status Annotation with Curved Arrow (Image 1 Style) */}
        <div className="hidden sm:flex flex-col items-end -mb-1 select-none pointer-events-none">
          <span className="font-handwriting text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 font-medium tracking-wide -rotate-6 transform pr-1">
            open to work
          </span>
          <svg
            width="38"
            height="18"
            viewBox="0 0 38 18"
            fill="none"
            className="text-zinc-400 dark:text-zinc-500 stroke-current -mt-1 mr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 2C12 12 24 16 34 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M28 9L34 10L32 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

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
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all"
        >
          <FaXTwitter className="w-3.5 h-3.5" /> Message on X
        </a>
      </div>
    </section>
  );
}

