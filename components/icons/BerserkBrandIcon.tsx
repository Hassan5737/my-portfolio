import React from "react";

export function BerserkBrandIcon({
  className = "w-5 h-5",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 130"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Central Vertical Spine */}
      <path d="M50 8 V122" />

      {/* Top Head Loop Diamond */}
      <path d="M50 8 L24 42 L50 64 L76 42 Z" fill="currentColor" fillOpacity="0.15" />

      {/* Upper Left & Right Outward Spikes */}
      <path d="M50 32 L8 18" />
      <path d="M50 32 L92 18" />

      {/* Lower Diagonal Prongs */}
      <path d="M50 64 L16 102" />
      <path d="M50 64 L84 102" />

      {/* Lower Outer Hooks */}
      <path d="M26 88 L12 118" />
      <path d="M74 88 L88 118" />
    </svg>
  );
}

export default BerserkBrandIcon;
