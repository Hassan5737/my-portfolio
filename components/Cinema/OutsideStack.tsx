"use client";

import React from "react";
import { cinemaData } from "@/data/cinema";
import { ExternalLink } from "lucide-react";
import { FaYoutube } from "react-icons/fa6";

export default function OutsideStack() {
  return (
    <section id="cinema" className="py-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white tracking-tight">
          After Hours & Cinema
        </h2>
        <div className="flex items-center gap-3">
          <a
            href={cinemaData.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono text-red-400 hover:text-white transition-colors"
          >
            <FaYoutube className="text-xs" />
            <span>YouTube @8a3ha</span>
          </a>
          <a
            href={cinemaData.letterboxdUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono text-amber-400 hover:text-white transition-colors"
          >
            <span>Letterboxd @hassan57</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 mb-4">
        <h3 className="text-base font-bold text-white mb-1">
          {cinemaData.statement}
        </h3>
        <p className="text-xs font-mono text-zinc-400 italic mb-3">
          {cinemaData.substatement}
        </p>

        <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 pt-2 border-t border-zinc-800/40">
          <span>Logged: <strong className="text-zinc-300 font-bold">{cinemaData.filmsWatched} films</strong></span>
          <span>•</span>
          <span>Handle: <strong className="text-amber-400">{cinemaData.handle}</strong></span>
        </div>
      </div>

      {/* Real Favorite Films Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {cinemaData.favoriteFilms.map((film, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 hover:border-amber-400/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mb-1.5 pb-1 border-b border-zinc-800/40">
                <span className="text-amber-400 font-semibold">{film.aspectRatio}</span>
                <span>{film.year}</span>
              </div>
              <h4 className="text-xs font-bold text-white mb-0.5">{film.title}</h4>
              <span className="text-[11px] font-mono text-zinc-400 block mb-1.5">Dir. {film.director}</span>
              <p className="text-[10px] font-mono text-zinc-500 italic mb-2">"{film.tagline}"</p>
            </div>
            <div className="pt-1.5 border-t border-zinc-800/40 text-[10px] font-mono text-amber-400 font-medium">
              Rating: {film.rating}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
