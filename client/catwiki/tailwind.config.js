/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#291507',
				textTrans: '#29150799',
				secondary: '#E3E1DC',
				white: '#ffffff',
				black: '#000000',
				background: '#333333',
				stats: '#544439',
				shadow: '#dec689',
			},

			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
			},
			screens: {
				xs: '320px',
				sm: '640px',
				md: '764px',
				lg: '1024px',
				xl: '1280px',
			},
		},
	},
	plugins: [],
};
