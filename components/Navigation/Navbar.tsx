"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profileData } from "@/data/profile";
import { Menu, X, Terminal, Film, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "WORK", href: "#work" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "STACK", href: "#stack" },
  { label: "CINEMA", href: "#cinema" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-6 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Monogram / Brand Identity */}
        <a
          href="#"
          className="group flex items-center gap-3 glass-panel px-4 py-2.5 rounded-full border border-white/10 hover:border-white/25 transition-all"
        >
          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-foreground group-hover:bg-white/20 transition-colors">
            HA
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-mono font-semibold tracking-wider text-foreground">
              {profileData.name}
            </span>
            <span className="text-[10px] font-mono text-foreground-muted tracking-tight">
              BACKEND ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Glass Dock */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 glass-panel px-3 py-1.5 rounded-full border border-white/10 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-[11px] font-mono tracking-widest text-foreground-secondary hover:text-foreground hover:bg-white/5 rounded-full transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Status Indicator & Social Link */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={profileData.socials.letterboxd}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel px-3.5 py-2 rounded-full border border-white/10 hover:border-white/25 transition-all flex items-center gap-2 text-[11px] font-mono text-foreground-secondary hover:text-foreground"
          >
            <Film className="w-3.5 h-3.5 text-accent" />
            <span>LETTERBOXD</span>
            <ArrowUpRight className="w-3 h-3 text-foreground-muted" />
          </a>

          <div className="glass-panel px-3.5 py-2 rounded-full border border-white/10 flex items-center gap-2 text-[11px] font-mono text-emerald-400/90">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>OPEN FOR ROLES</span>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden glass-panel p-2.5 rounded-full border border-white/10 text-foreground hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden pointer-events-auto mt-3 mx-4 glass-panel rounded-2xl p-6 border border-white/15 shadow-2xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-xs font-mono tracking-widest text-foreground-secondary hover:text-foreground hover:bg-white/5 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={profileData.socials.letterboxd}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-xs font-mono text-foreground-secondary hover:text-foreground"
              >
                <span className="flex items-center gap-2">
                  <Film className="w-4 h-4 text-accent" />
                  LETTERBOXD PROFILE
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
