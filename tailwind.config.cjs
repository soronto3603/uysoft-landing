/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				bg: '#101010',
				gray: {
					400: '#A1A1A1',
					500: '#B4B4B4',
					600: '#737373'
				},
				pink: '#F760A9'
			}
		}
	},
	plugins: []
};
