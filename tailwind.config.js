/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#5E60CE',
				secondary: '#4EA8DE',
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
