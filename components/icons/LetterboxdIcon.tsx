import React from "react";
import { SiLetterboxd } from "react-icons/si";

export function LetterboxdIcon({ className = "w-4 h-4", ...props }: React.ComponentProps<typeof SiLetterboxd>) {
  return <SiLetterboxd className={className} {...props} />;
}

export default LetterboxdIcon;
