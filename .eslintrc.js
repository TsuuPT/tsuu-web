module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'plugin:nuxt/recommended'
	],
	plugins: [],
	// add your custom rules here
	rules: {
		quotes: ['error', 'single'],
		indent: ['error', 'tab'],
		'vue/html-indent': ['error', 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }]
	}
}
