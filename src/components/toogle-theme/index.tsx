"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";
import { type VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "flex items-center gap-1 hover:underline",
  variants: {
    type: {
      login: "text-gray-600",
      default: "text-primary-1000 dark:text-gray-100"
    }
  },
  defaultVariants: {
    type: "default"
  }
});

interface IButton {
  variant?: VariantProps<typeof button>;
}

export function ToogleThemeButton({ variant }: IButton) {
  const [darkTheme, setDarkTheme] = useState(false);

  const toogleTheme = () => {
    const classList = document.documentElement.classList;
    classList.toggle("dark");
    setDarkTheme((prev) => !prev);
  };

  return (
    <button onClick={toogleTheme} className={button(variant)}>
      <DarkModeIcon
        fontSize="small"
        className={`${darkTheme ? "rotate-180" : "rotate-0"} transition-all duration-100`}
      />
      {darkTheme ? "dark" : "light"} mode
    </button>
  );
}
