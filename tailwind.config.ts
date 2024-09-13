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
		},
		keyframes: {
			'accordion-down': {
				from: {
					height: '0'
				},
				to: {
					height: 'var(--radix-accordion-content-height)'
				}
			},
			'accordion-up': {
				from: {
					height: 'var(--radix-accordion-content-height)'
				},
				to: {
					height: '0'
				}
			},
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
		}
	},
  },
  darkMode: 'selector',
  plugins: [
	require("tailwindcss-animate"),
],
} satisfies Config;
