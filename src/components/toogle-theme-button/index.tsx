"use client";

import { useEffect, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function ToogleThemeButton() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toogleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const classList = document.documentElement.classList;

    if (theme === "dark") {
      classList.remove("light");
    } else {
      classList.remove("dark");
    }

    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <button
      onClick={toogleTheme}
      className="flex items-center gap-1 text-gray-600 hover:underline"
    >
      <DarkModeIcon
        fontSize="small"
        className={`transition-transform duration-300 ${theme === "dark" ? "rotate-180" : "rotate-0"}`}
      />
      {theme === "dark" ? "light" : "dark"} mode
    </button>
  );
}

export default ToogleThemeButton;
