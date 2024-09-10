import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: 'selector',
  plugins: [],
} satisfies Config;
