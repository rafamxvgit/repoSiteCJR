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
      },
      colors: {
        customButton: '#00ff88',
        customBackground1: '#2f244d',
        customBackground2: '#09618e',
        customBackground3: '#1e6b92',
        customText1: '#00FF7F',
        customText2: '#40f6ff',
        customText3: '#263238',
        customBorder: '#455a64',
        customWhite: '#f1f1f1',
        customPurple: '#4B0082',
        customGray: '#455A64',
        customBlue: '#294E85',
      }
    },
  },
  plugins: [],
};
export default config;
