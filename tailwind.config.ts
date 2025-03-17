/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"node_modules/flowbite-react/lib/esm/**/*.js",
	],
	theme: {
		extend: {
			fontFamily: {
				jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
			},
			colors: {
				primary: {
					gradient: {
						from: "#0B9DCA",
						to: "#00B7BC",
					},
				},
			},
			animation: {
				slide: "slide 90s linear infinite alternate-reverse",
			},
			keyframes: {
				slide: {
					"0%": { backgroundPosition: "0 0" },
					"100%": { backgroundPosition: "100% 0" },
				},
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
