"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { Github, Linkedin, Film, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-4 sm:px-8 border-t border-white/10 bg-[#030303] text-foreground">
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[300px]">
        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Heading */}
          <div>
            <span className="text-xs font-mono tracking-widest text-accent uppercase block mb-3">
              06 — INITIATE CONTACT
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-sans text-foreground tracking-tight mb-4">
              Let's build reliable systems.
            </h2>
            <p className="text-xs sm:text-sm font-mono text-foreground-secondary max-w-md leading-relaxed">
              Available for Backend Engineering opportunities, system design collaborations, and quality engineering initiatives.
            </p>
          </div>

          {/* Right Direct Links */}
          <div className="flex flex-col justify-center space-y-4 font-mono text-sm">
            <a
              href={`mailto:${profileData.email}`}
              className="p-4 rounded-2xl glass-panel border border-white/10 hover:border-white/30 text-foreground transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span>{profileData.email}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-foreground-muted group-hover:text-white transition-colors" />
            </a>

            <a
              href={`tel:${profileData.phone}`}
              className="p-4 rounded-2xl glass-panel border border-white/10 hover:border-white/30 text-foreground-secondary hover:text-foreground transition-all flex items-center justify-between group text-xs sm:text-sm"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-foreground-muted" />
                <span>{profileData.phone}</span>
              </div>
              <span className="text-[10px] text-foreground-muted uppercase">DIRECT CALL</span>
            </a>
          </div>
        </div>

        {/* Bottom Metadata & Social Links Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-foreground-muted">
          <div>
            <span className="text-foreground font-semibold">{profileData.name}</span> — Backend Engineer
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>GITHUB</span>
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4" />
              <span>LINKEDIN</span>
            </a>
            <a
              href={profileData.socials.letterboxd}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1.5 text-accent"
            >
              <Film className="w-4 h-4" />
              <span>LETTERBOXD</span>
            </a>
          </div>

          <div className="text-[10px] text-foreground-muted">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
}
