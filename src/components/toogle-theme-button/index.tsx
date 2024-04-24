"use client";

import { useEffect, useState } from "react";

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

  return <button onClick={toogleTheme}>Toggle theme</button>;
}

export default ToogleThemeButton;
