/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
			},
		},
	},
	plugins: [],
};

