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
      colors: {
        background: "#FFFCF1",

        "primary-100": "#FFFCF1",
        "primary-200": "#FEECC7",
        "primary-300": "#FDCF6E",
        "primary-400": "#FDBD4C",
        "primary-500": "#FCA523",

        "seccondary-100": "#00897E",
        "seccondary-200": "#0C766F",
        "seccondary-300": "#036C65",
        "seccondary-400": "#095F59",
        "seccondary-500": "#003735",

        "text-100": "#F5F6FA",
        "text-200": "#DFE1E8",
        "text-300": "#C0C3CC",
        "text-400": "#ABAFBA",
        "text-500": "#979BA6",
        "text-600": "#787C87",
        "text-700": "#5C5F69",
        "text-800": "#393B42",
        "text-850": "#232529",
        "text-900": "#0A0B0D",
        "text-950": "#030009"
      }
    }
  },

  plugins: []
};
export default config;
