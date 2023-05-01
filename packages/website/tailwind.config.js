/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		container: {
			center: true
		},
		extend: {
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@ublabs/tailwindcss-brand-colors')(['google', 'github']),
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')(),
	]
}

