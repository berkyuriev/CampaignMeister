module.exports = {
	theme: {
		colors: {
			primary: "#FFCF02",
			secondary: "#173158",
			"indigo-lighter": "#b3bcf5",
			indigo: "#5c6ac4",
			"indigo-dark": "#202e78",
		},
	},
};
/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		extend: {
			// ...
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
