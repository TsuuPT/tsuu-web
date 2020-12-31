import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'

import Navbar from '~/components/Navbar.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let wrapper

beforeEach(() => {
	wrapper = mount(Navbar, {
		store: new Vuex.Store({
			state: { products: [] }
		}),
		localVue,
		vuetify: new Vuetify(),
		stubs: {
			NuxtLink: RouterLinkStub
		},
		mocks: {
			$nuxt: {
				$route: {
					path: '/fansubs/a'
				}
			}
		}
	})
})
afterEach(() => {
	wrapper.destroy()
})

describe('Navbar', () => {
	test('is a Vue instance', () => {
		expect(wrapper.vm).toBeTruthy()
	})
})
