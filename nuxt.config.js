export default {
	// Target (https://go.nuxtjs.dev/config-target)
	target: 'static',

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'Tsuu',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Tsuu, o hub das fansubs portuguesas' },

			// Favicons - https://realfavicongenerator.net
			{ hid: 'app-name-apple',  name: 'apple-mobile-web-app-title', content: 'Tsuu' },
			{ hid: 'app-name',        name: 'application-name',           content: 'Tsuu' },
			{ hid: 'app-ms-color',    name: 'msapplication-TileColor',    content: '#00adb5' },
			{ hid: 'app-theme-color', name: 'theme-color',                content: '#ff0000' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

			// Favicons - https://realfavicongenerator.net
			{ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
			{ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
			{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
			{ rel: 'manifest', href: '/site.webmanifest' },
			{ rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#00adb5' }
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

	vuetify: {
		theme: {
			options: {
				customProperties: true  // https://vuetifyjs.com/en/features/theme/#custom-properties | TODO: add polyfills for IE11?
			},
			themes: {
				light: {
					primary: '#00b377',
					background: {
						base: '#fff',
						darken1: '#f2f2f2',
						darken2: '#e2e2e2',
						darken3: '#c6c6c6',
						darken4: '#ababab',
						darken5: '#919191'
					},
					contrast: {
						base: '#000'
					}
				},
				dark: {
					primary: '#00b377',
					background: {
						base: '#121212',
						darken1: '#272727',
						darken2: '#3c3c3c',
						darken3: '#535353',
						darken4: '#6c6c6c',
						darken5: '#858585'
					},
					contrast: {
						base: '#fff'
					}
				}
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
