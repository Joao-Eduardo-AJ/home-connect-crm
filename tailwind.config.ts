import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        esm: "450px"
      },
      colors: {
        "background-light": "#F2F6FF",
        "background-dark": "#0e0f0f",

        "primary-100": "#F2F6FF",
        "primary-200": "#D9E4FF",
        "primary-300": "#A6C1FF",
        "primary-400": "#598BFF",
        "primary-500": "#2E64FF",
        "primary-600": "#004BFF",
        "primary-700": "#003BC2",
        "primary-800": "#002E97",
        "primary-900": "#001E65",
        "primary-950": "#001852",
        "primary-1000": "#00123b",

        "secondary-100": "#FFF6E0",
        "secondary-200": "#FFE0A8",
        "secondary-300": "#FFCD7A",
        "secondary-400": "#FFB946",
        "secondary-500": "#FFA523",
        "secondary-600": "#E18807",
        "secondary-700": "#B76C00",
        "secondary-800": "#8E5100",
        "secondary-900": "#5F3200",

        "gray-100": "#F5F6FA",
        "gray-200": "#DFE1E8",
        "gray-300": "#C0C3CC",
        "gray-400": "#ABAFBA",
        "gray-500": "#979BA6",
        "gray-600": "#787C87",
        "gray-700": "#5C5F69",
        "gray-800": "#393B42",
        "gray-850": "#232529",
        "gray-900": "#0A0B0D",
        "gray-950": "#030009"
      }
    }
  },

  plugins: []
};
export default config;
