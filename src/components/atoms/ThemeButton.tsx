"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "@/assets/icons/icons";
import { useEffect, useState } from "react";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`relative flex h-11 w-21 cursor-pointer items-center rounded-full p-1 transition-colors duration-500 md:h-9 md:w-18 ${theme === "dark" ? "bg-gray-500" : "bg-gray-200"} shadow-md hover:scale-105`}
      aria-label="Toggle Theme"
    >
      <span
        className={`top-2.4 absolute left-1.5 h-8 w-8 transform rounded-full bg-white transition-transform duration-500 md:left-1 md:h-7 md:w-7 ${theme === "dark" ? "translate-x-9 bg-gray-900" : "bg-light translate-x-0"} `}
      />
      {/* Optional icons */}
      <span
        className={`md: absolute left-2 transform text-xs text-gray-200 transition-transform duration-500 md:left-1 ${theme === "dark" ? "translate-x-10 md:translate-x-10" : "bg-light translate-x-1 md:translate-x-0"} `}
      >
        {theme === "dark" ? (
          <Moon className="text-gray-900" />
        ) : (
          <Sun className="ml-0 text-yellow-600 md:ml-1" size={16} />
        )}
      </span>
    </button>
  );
}
