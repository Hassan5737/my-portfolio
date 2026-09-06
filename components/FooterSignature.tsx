"use client";

import React from "react";
import { profileData } from "@/data/profile";

export default function FooterSignature() {
  return (
    <footer className="py-8 pb-24 text-center max-w-4xl mx-auto border-t border-white/5">
      <p className="text-xs font-mono text-zinc-500">
        <span className="text-zinc-300 font-semibold">{profileData.name}</span> — Backend Engineer • {profileData.location}
      </p>
      <p className="text-[10px] font-mono text-zinc-600 mt-1">
        Built with Next.js, TypeScript, Tailwind CSS, & Framer Motion.
      </p>
    </footer>
  );
}
