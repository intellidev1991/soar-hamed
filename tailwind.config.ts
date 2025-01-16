import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F6F7FA",
        midBlue: "#343C6A",
        skyBlue: "#718EBF",
        lightBlue: "#DFEAF2",
        darkBlue: "#232323",
      },
    },
  },
  plugins: [],
} satisfies Config;
