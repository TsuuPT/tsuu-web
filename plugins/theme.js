const SCHEMES = ['light', 'dark']
const DEFAULT_SCHEME = 'light'

export default function ({ $vuetify }) {
	if (process.browser) {
		const preference = window.localStorage.getItem('theme') || 'auto'
		let value = preference === 'auto' ? getColorScheme() : preference

		console.debug('[Theme] Selected scheme:', value)
		$vuetify.theme.dark = value === 'dark'
	}
}

function prefersColorScheme(suffix) {
	return window.matchMedia('(prefers-color-scheme' + suffix + ')')
}

function getColorScheme() {
	if (window.matchMedia && prefersColorScheme('').media !== 'not all') {
		for (const colorScheme of SCHEMES) {
			if (prefersColorScheme(':' + colorScheme).matches) {
				return colorScheme
			}
		}
	}

	return DEFAULT_SCHEME
}
