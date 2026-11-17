import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FFF8EC",
        surface: "#FBE9C6",
        text: "#2A1A12",
        primary: {
          DEFAULT: "#8C1C13",
          hover: "#72150E",
          light: "#A5281E",
        },
        accent: {
          DEFAULT: "#E8A317",
          hover: "#D1910F",
          light: "#F7BE47",
        },
        green: {
          veg: "#2F5D3A",
          vegHover: "#254B2E",
          vegLight: "#417A50",
        },
      },
      fontFamily: {
        heading: ["var(--font-rozha)", "serif"],
        body: ["var(--font-mukta)", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        btn: "999px",
      },
      boxShadow: {
        subtle: "0 10px 30px -10px rgba(140, 28, 19, 0.08)",
        elevated: "0 14px 40px -12px rgba(140, 28, 19, 0.12)",
      },
      transitionTimingFunction: {
        boutique: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
