"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  MotionValue,
} from "framer-motion";
import { Home, Activity, Sun, Moon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import LetterboxdIcon from "@/components/icons/LetterboxdIcon";
import { profileData } from "@/data/profile";

interface DockItemData {
  id: string;
  label: string;
  icon: React.ElementType;
  href?: string;
  external?: boolean;
}

const dockItems: DockItemData[] = [
  { id: "about", label: "Home", icon: Home, href: "#about" },
  { id: "performance", label: "Performance", icon: Activity, href: "#performance" },
  { id: "letterboxd", label: "Letterboxd", icon: LetterboxdIcon, href: profileData.socials.letterboxd, external: true },
  { id: "github", label: "GitHub", icon: FaGithub, href: profileData.socials.github, external: true },
  { id: "linkedin", label: "LinkedIn", icon: FaLinkedin, href: profileData.socials.linkedin, external: true },
];

export default function FloatingDock() {
  const mouseX = useMotionValue(Infinity);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const isLightSystem = window.matchMedia("(prefers-color-scheme: light)").matches;

    if (savedTheme === "light" || (!savedTheme && isLightSystem)) {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  const isLight = theme === "light";

  return (
    <div className="fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none px-2 sm:px-3 select-none max-w-[calc(100vw-1rem)] pb-[env(safe-area-inset-bottom,0px)]">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        onTouchStart={(e) => {
          if (e.touches[0]) mouseX.set(e.touches[0].pageX);
        }}
        onTouchMove={(e) => {
          if (e.touches[0]) mouseX.set(e.touches[0].pageX);
        }}
        onTouchEnd={() => mouseX.set(Infinity)}
        className={`pointer-events-auto flex h-12 sm:h-14 items-center gap-1.5 sm:gap-2.5 rounded-full px-2.5 sm:px-3.5 backdrop-blur-2xl transition-colors duration-300 border ${
          isLight
            ? "bg-white/95 border-black/15 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            : "bg-[#0d0d12]/95 border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.2)]"
        }`}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {/* Top ambient highlight glow */}
        <div
          className={`absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent ${
            isLight ? "via-black/20" : "via-white/40"
          } to-transparent pointer-events-none`}
        />

        {/* Regular Dock Items */}
        {dockItems.map((item) => (
          <React.Fragment key={item.id}>
            {item.id === "letterboxd" && (
              <div
                className={`h-4 sm:h-5 w-[1px] ${isLight ? "bg-black/15" : "bg-white/15"} mx-0.5`}
                aria-hidden="true"
              />
            )}
            <DockIcon mouseX={mouseX} item={item} isLight={isLight} />
          </React.Fragment>
        ))}

        {/* Vertical Divider before Theme Switch */}
        <div
          className={`h-4 sm:h-5 w-[1px] ${isLight ? "bg-black/15" : "bg-white/15"} mx-0.5`}
          aria-hidden="true"
        />

        {/* Dark/Light Mode Theme Switch Button */}
        <DockThemeToggle
          mouseX={mouseX}
          theme={theme}
          toggleTheme={toggleTheme}
          mounted={mounted}
          isLight={isLight}
        />
      </motion.div>
    </div>
  );
}

function DockIcon({
  mouseX,
  item,
  isLight,
}: {
  mouseX: MotionValue;
  item: DockItemData;
  isLight: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-100, 0, 100], [32, 44, 32]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 180, damping: 12 });

  const iconSizeSync = useTransform(distance, [-100, 0, 100], [15, 20, 15]);
  const iconSize = useSpring(iconSizeSync, { mass: 0.1, stiffness: 180, damping: 12 });

  const IconComponent = item.icon;

  const handleScrollTo = (href?: string) => {
    if (!href) return;
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const content = (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => {
        setIsHovered(true);
        setTimeout(() => setIsHovered(false), 900);
      }}
      className={`relative flex items-center justify-center rounded-full border transition-all cursor-pointer shadow-sm active:scale-90 ${
        isLight
          ? "bg-black/[0.05] border-black/10 text-zinc-800 hover:text-black hover:bg-black/10"
          : "bg-white/[0.06] border-white/10 text-zinc-300 hover:text-white hover:bg-white/[0.14]"
      }`}
    >
      <motion.div style={{ width: iconSize, height: iconSize }} className="flex items-center justify-center">
        <IconComponent className="w-full h-full stroke-[1.8]" />
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.85 }}
            animate={{ opacity: 1, y: -38, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.85 }}
            transition={{ duration: 0.15 }}
            className={`absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-1 text-[11px] font-mono font-medium rounded-lg shadow-xl backdrop-blur-xl whitespace-nowrap pointer-events-none border ${
              isLight
                ? "text-zinc-900 bg-white border-black/15 shadow-md"
                : "text-white bg-[#141418] border-white/20"
            }`}
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  if (item.external && item.href) {
    return (
      <Link href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={() => handleScrollTo(item.href)} aria-label={item.label}>
      {content}
    </button>
  );
}

function DockThemeToggle({
  mouseX,
  theme,
  toggleTheme,
  mounted,
  isLight,
}: {
  mouseX: MotionValue;
  theme: "dark" | "light";
  toggleTheme: () => void;
  mounted: boolean;
  isLight: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-100, 0, 100], [32, 44, 32]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 180, damping: 12 });

  const iconSizeSync = useTransform(distance, [-100, 0, 100], [15, 20, 15]);
  const iconSize = useSpring(iconSizeSync, { mass: 0.1, stiffness: 180, damping: 12 });

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        ref={ref}
        style={{ width, height: width }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => {
          setIsHovered(true);
          setTimeout(() => setIsHovered(false), 900);
        }}
        className={`relative flex items-center justify-center rounded-full border transition-all cursor-pointer shadow-sm active:scale-90 ${
          isLight
            ? "bg-black/[0.08] border-black/15 text-zinc-900 hover:bg-black/15"
            : "bg-white/[0.08] border-white/15 text-zinc-200 hover:bg-white/[0.18] hover:text-white"
        }`}
      >
        <motion.div style={{ width: iconSize, height: iconSize }} className="flex items-center justify-center">
          {mounted ? (
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full flex items-center justify-center"
              >
                {theme === "dark" ? (
                  <Sun className="w-full h-full stroke-[1.8] text-amber-300" />
                ) : (
                  <Moon className="w-full h-full stroke-[1.8] text-indigo-600" />
                )}
              </motion.div>
            </AnimatePresence>
          ) : (
            <Sun className="w-full h-full stroke-[1.8]" />
          )}
        </motion.div>

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.85 }}
              animate={{ opacity: 1, y: -38, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.85 }}
              transition={{ duration: 0.15 }}
              className={`absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-1 text-[11px] font-mono font-medium rounded-lg shadow-xl backdrop-blur-xl whitespace-nowrap pointer-events-none border ${
                isLight
                  ? "text-zinc-900 bg-white border-black/15 shadow-md"
                  : "text-white bg-[#141418] border-white/20"
              }`}
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </button>
  );
}

