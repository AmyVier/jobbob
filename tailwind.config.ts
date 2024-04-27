import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "beige": "#FFF6EC",
        "pink": "#FFC1C3",
        "yellow": "#FFB500",
        "orange": "#FF7900",
        "seafoam": "#B2D7C0",
        "teal": "#006866",
      },
      fontFamily: {
        sans: ['Space_Mono', 'sans-serif'],
        normal: ['Fraunces', 'normal'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
