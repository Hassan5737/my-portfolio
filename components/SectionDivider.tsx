import React from "react";

export default function SectionDivider() {
  return (
    <div className="relative py-4 my-2 w-full max-w-4xl mx-auto pointer-events-none select-none overflow-hidden opacity-50">
      <svg className="w-full h-8" viewBox="0 0 1000 40" preserveAspectRatio="none">
        <defs>
          <linearGradient id="section-divider-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="30%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 0,5 Q 500,35 1000,5"
          fill="none"
          stroke="url(#section-divider-grad)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
