/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"fira-sans": ["fira-sans", "sans-serif"],
				signika: ["signika", "sans-serif"],
			},
		},
	},
	plugins: [],
};
