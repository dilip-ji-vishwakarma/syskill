/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function Theme() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const current = resolvedTheme ?? theme;

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(current === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      aria-pressed={current === "dark"}
      className="
        relative flex h-10 w-10 items-center justify-center 
        rounded-full border bg-background 
        shadow-sm transition-all
        hover:bg-accent hover:text-accent-foreground
      "
    >
      <Sun
        className={`
          absolute h-5 w-5 transition-all 
          ${current === "light" ? "rotate-0 opacity-100" : "rotate-90 opacity-0"}
        `}
      />
      <Moon
        className={`
          absolute h-5 w-5 transition-all 
          ${current === "dark" ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}
        `}
      />
    </button>
  );
}
