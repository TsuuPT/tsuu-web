import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'


import Navbar from '~/components/Navbar.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let wrapper

beforeEach(() => {
	let vuetify = new Vuetify()

	wrapper = mount(Navbar, {
		store: new Vuex.Store({
			state: { products: [] }
		}),
		localVue,
		vuetify,
		stubs: {
			NuxtLink: RouterLinkStub
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
