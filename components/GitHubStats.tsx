"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ExternalLink } from "lucide-react";
import { profileData } from "@/data/profile";

const GITHUB_USERNAME = profileData.githubUsername;

interface GitHubData {
  publicRepos: number;
  topLanguages: { name: string; count: number; color: string }[];
}

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

const LANG_COLORS: Record<string, string> = {
  "C++": "#f34b7d",
  Go: "#00ADD8",
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Java: "#b07219",
  SQL: "#e38c00",
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["", "Mon", "", "Wed", "", "Fri", ""];

const DARK_LEVEL_COLORS = [
  "#161b22",
  "#0e4429",
  "#006d32",
  "#26a641",
  "#39d353",
];

const LIGHT_LEVEL_COLORS = [
  "#ebedf0",
  "#9be9a8",
  "#40c463",
  "#30a14e",
  "#216e39",
];

function ContributionGraph({ username }: { username: string }) {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Check initial theme and listen for theme class mutations on html element
    const updateTheme = () => {
      setIsLight(document.documentElement.classList.contains("light"));
    };
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        const data = await res.json();

        if (data.contributions) {
          const days: ContributionDay[] = [];
          let total = 0;

          data.contributions.forEach((day: { date: string; count: number; level: number }) => {
            days.push({ date: day.date, count: day.count, level: day.level });
            total += day.count;
          });

          setContributions(days);
          setTotalContributions(total);
        }
      } catch (err) {
        console.error("Failed to fetch contributions:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, [username]);

  const { weeks, monthLabels } = useMemo(() => {
    if (contributions.length === 0) return { weeks: [], monthLabels: [] };

    const weeksArr: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];

    const firstDate = new Date(contributions[0].date);
    const firstDay = firstDate.getDay();
    for (let i = 0; i < firstDay; i++) {
      currentWeek.push({ date: "", count: -1, level: -1 });
    }

    contributions.forEach((day) => {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        weeksArr.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      weeksArr.push(currentWeek);
    }

    const labels: { label: string; col: number }[] = [];
    let lastMonth = -1;
    weeksArr.forEach((week, weekIdx) => {
      const validDay = week.find((d) => d.date);
      if (validDay && validDay.date) {
        const month = new Date(validDay.date).getMonth();
        if (month !== lastMonth) {
          labels.push({ label: MONTHS[month], col: weekIdx });
          lastMonth = month;
        }
      }
    });

    return { weeks: weeksArr, monthLabels: labels };
  }, [contributions]);

  if (loading) {
    return (
      <div className="py-4 animate-pulse">
        <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-1/3 mb-2" />
        <div className="h-16 bg-zinc-100 dark:bg-zinc-800/40 rounded" />
      </div>
    );
  }

  if (weeks.length === 0) return null;

  const cellSize = 10;
  const cellGap = 3;
  const totalCellSize = cellSize + cellGap;
  const labelWidth = 32;
  const topPadding = 18;
  const svgWidth = labelWidth + weeks.length * totalCellSize + 10;
  const svgHeight = topPadding + 7 * totalCellSize + 5;

  const activeColors = isLight ? LIGHT_LEVEL_COLORS : DARK_LEVEL_COLORS;

  return (
    <div className="pt-2">
      <div className="flex items-center justify-between mb-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
        <span>
          <span className="text-zinc-900 dark:text-white font-bold">{totalContributions.toLocaleString()}</span> contributions in the last year
        </span>

        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          <span>@{username}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="overflow-x-auto pb-1 no-scrollbar">
        <svg width={svgWidth} height={svgHeight} className="block" style={{ minWidth: svgWidth }}>
          {monthLabels.map((m, i) => (
            <text key={i} x={labelWidth + m.col * totalCellSize} y={12} fill="#71717a" fontSize="10" fontFamily="monospace">
              {m.label}
            </text>
          ))}

          {DAYS.map((day, i) => (
            day && (
              <text key={i} x={0} y={topPadding + i * totalCellSize + cellSize - 1} fill="#71717a" fontSize="10" fontFamily="monospace">
                {day}
              </text>
            )
          ))}

          {weeks.map((week, weekIdx) =>
            week.map((day, dayIdx) => {
              if (day.level < 0) return null;
              return (
                <rect
                  key={`${weekIdx}-${dayIdx}`}
                  x={labelWidth + weekIdx * totalCellSize}
                  y={topPadding + dayIdx * totalCellSize}
                  width={cellSize}
                  height={cellSize}
                  rx={2}
                  ry={2}
                  fill={activeColors[day.level] || activeColors[0]}
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <title>{`${day.count} contributions on ${day.date}`}</title>
                </rect>
              );
            })
          )}
        </svg>
      </div>
    </div>
  );
}

export default function GitHubStats() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        const userData = await userRes.json();

        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
        const reposData = await reposRes.json();

        const langMap: Record<string, number> = {};
        if (Array.isArray(reposData)) {
          reposData.forEach((repo: { language: string | null }) => {
            if (repo.language) {
              langMap[repo.language] = (langMap[repo.language] || 0) + 1;
            }
          });
        }

        if (Object.keys(langMap).length === 0) {
          langMap["C++"] = 6;
          langMap["Go"] = 3;
          langMap["Python"] = 2;
          langMap["Java"] = 2;
        }

        const topLanguages = Object.entries(langMap)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5)
          .map(([name, count]) => ({
            name,
            count,
            color: LANG_COLORS[name] || "#8b949e",
          }));

        setData({
          publicRepos: userData.public_repos || 10,
          topLanguages,
        });
      } catch (err) {
        console.error("Failed to fetch GitHub data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  const totalLangs = data?.topLanguages.reduce((acc, l) => acc + l.count, 0) || 1;

  return (
    <section id="performance" className="flex flex-col gap-4 max-w-4xl mx-auto py-4">
      <h2 className="font-medium text-[15px] text-zinc-900 dark:text-white">Performance</h2>

      {loading ? (
        <div className="py-2 animate-pulse">
          <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-1/3 mb-2" />
        </div>
      ) : (
        <div className="space-y-4">
          {/* Languages bar */}
          {data && (
            <div>
              <div className="flex items-center justify-between mb-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                <span>Most Used Languages</span>
                <span>{data.publicRepos} Public Repos</span>
              </div>

              <div className="flex rounded-full overflow-hidden h-2 mb-2 gap-0.5 bg-zinc-200 dark:bg-zinc-900">
                {data.topLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    className="h-full transition-all duration-500"
                    style={{
                      width: `${(lang.count / totalLangs) * 100}%`,
                      backgroundColor: lang.color,
                      minWidth: "4px",
                    }}
                    title={`${lang.name}: ${lang.count} repos`}
                  />
                ))}
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono">
                {data.topLanguages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: lang.color }} />
                    <span className="text-zinc-700 dark:text-zinc-300">{lang.name}</span>
                    <span className="text-zinc-500 dark:text-zinc-500">({((lang.count / totalLangs) * 100).toFixed(0)}%)</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contribution Graph */}
          <ContributionGraph username={GITHUB_USERNAME} />
        </div>
      )}
    </section>
  );
}

