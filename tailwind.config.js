/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
      fontFamily: {
        body: 'Poppins, sans-serif', 
        sans: 'Poppins, sans-serif', 
        heading :'Merriweather, serif',
      },
			colors: {
				primary: {
					50: "#fff0f0",
					100: "#ffdddd",
					200: "#ffc1c1",
					300: "#ff9696",
					400: "#ff5a5a",
					500: "#ff2727",
					600: "#fb0707",
					700: "#d40101",
					800: "#ae0606",
					900: "#900c0c",
					950: "#620000",
				},
				neutral: {
					50: "#f6f6f6",
					100: "#e7e7e7",
					200: "#d1d1d1",
					300: "#b0b0b0",
					400: "#888888",
					500: "#6d6d6d",
					600: "#5d5d5d",
					700: "#4f4f4f",
					800: "#454545",
					900: "#3d3d3d",
					950: "#000000",
				},
			},
		},
	},
	plugins: [],
};
