import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
		transitionDuration: {
			'250': '250ms',
			'350': '350ms',
			'400': '400ms',
			'450': '450ms',
			'600': '600ms',
			'800': '800ms',
			'900': '900ms'
		}
	},
  },
  darkMode: 'selector',
  plugins: [
	require("tailwindcss-animate"),
],
} satisfies Config;
