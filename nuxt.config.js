export default {
	// Target (https://go.nuxtjs.dev/config-target)
	target: 'static',

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'tsuu-web',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Tsuu, o hub das fansubs portuguesas' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [
		'@/assets/style/main.scss'
	],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		'@nuxt/typescript-build', // https://go.nuxtjs.dev/typescript
		'@nuxtjs/vuetify', // https://github.com/nuxt-community/vuetify-module
		'@nuxtjs/svg' // https://npmjs.com/package/@nuxtjs/svg
	],

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		'@nuxtjs/pwa', // https://go.nuxtjs.dev/pwa
		'@nuxtjs/apollo' // https://github.com/nuxt-community/apollo-module
	],

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
		hotMiddleware: {
			client: {
				overlay: false // remove the error overlays
			}
		}
	},

	apollo: {
		clientConfigs: {
			default: {
				httpEndpoint: process.env.NODE_ENV === 'production' ? 'https://tsuu.sandrohc.net/api/graphql' : 'http://localhost:12010/api/graphql'
			}
		}
	}
}
