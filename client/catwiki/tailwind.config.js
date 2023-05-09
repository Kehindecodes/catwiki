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
				divider: '#4D270C',
			},

			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				mystery: ['Mystery Quest', 'cursive'],
			},
			screens: {
				xs: '320px',
				sm: '640px',
				md: '764px',
				lg: '1024px',
				xl: '1280px',
			},
			width: {
				hero: '1248px',
				input: '384.64px',
				breedImg: '220px',
				image2: '233.52px',
				image3: '238.47px',
				image1: '195.49px',
				content: '620px',
			},
			height: {
				hero: '538.19px',
				breedImg: '220px',
				image2: '167.08px',
				image3: '385.87px',
				image1: '293.24px',
			},
			backgroundImage: {
				'hero-image': "url('./src/assets/HeroImagemd.png')",
				'footer-texture': "url('/img/footer-texture.png')",
			},
		},
	},
	plugins: [],
};
