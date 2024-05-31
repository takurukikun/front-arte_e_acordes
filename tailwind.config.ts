import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      "4xs": "340px",
      "3xs": "380px",
      "2xs": "400px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      mdlg: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1680px",
      "4xl": "1920px",
      "5xl": "2320px",
      "6xl": "2560px",
    },
  },
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: true,
      layout: {},
    })
  ],
};
export default config;
