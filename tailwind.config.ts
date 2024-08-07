import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/assets/home/desktop/bg-pattern-hero-home.svg')",
        "footer-pattern":
          "url('/assets/shared/desktop/bg-pattern-call-to-action.svg')",
      },
      colors: {
        orange: "#E7816B",
      },
    },
  },
  plugins: [],
};
export default config;
