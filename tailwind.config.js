/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				red: '#D00000',
				yellow: '#FFBA08',
			},
			fontFamily: {
				kanit: ['Kanit', 'sans-serif'],
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				md: '3rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '5rem',
			},
		},
	},
	plugins: [require('daisyui')],
};
