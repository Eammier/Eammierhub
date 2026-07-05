"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Determine active theme on load
    const savedTheme = localStorage.getItem("theme");
    // Default to light mode for the premium clean look unless dark is explicitly saved
    const activeTheme = savedTheme || "light";
    
    setTheme(activeTheme as "light" | "dark");
    if (activeTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl glass-card text-slate-750 dark:text-slate-355 hover:text-[#00D053] dark:hover:text-[#00D053] hover:border-[#00D053]/50 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm hover:scale-105 active:scale-95"
      aria-label="Toggle dark mode"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 transition-transform duration-500 rotate-0" />
      ) : (
        <Sun className="w-5 h-5 transition-transform duration-500 rotate-180 text-yellow-400" />
      )}
    </button>
  );
}
