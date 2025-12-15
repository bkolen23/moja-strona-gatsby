import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");

    if (stored) {
      root.classList.toggle("dark", stored === "dark");
      setTheme(stored);
    } else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.toggle("dark", systemDark);
      setTheme(systemDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  if (!theme) return null;

  return (

        <div>
          <label htmlFor="checkbox" className="bg-gray-200 dark:bg-gray-900 w-12 h-6 rounded-3xl relative p-1 cursor-pointer flex justify-between items-center">
            <input type="checkbox" id="checkbox" className="peer absolute opacity-0" checked={theme === "dark"} onChange={toggleTheme}/>
            <i className="fas fa-moon dark:text-gray-200"></i>
            <i className="fas fa-sun text-gray-900"></i>
            <span className="bg-gray-900 dark:bg-gray-200 w-5 h-5 absolute left-0.5 top-0.5 rounded-full transition-transform duration-100 ease-linear peer-checked:translate-x-6"></span>
          </label>
        </div>
     
  );
}
