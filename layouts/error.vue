<template>
	<div class="content">
		<Header title="Oops!" />

		<main>
			<p>
				{{ message }}
			</p>

			<NuxtLink v-if="error.statusCode === 404" to="./">
				Voltar
			</NuxtLink>
			<NuxtLink v-else to="/">
				Ir para o início
			</NuxtLink>
		</main>

		<Footer />
	</div>
</template>

<script>
import Vue from 'vue'

import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
	components: { Header, Footer },
	props: ['error'],
	layout: 'error',
	computed: {
		message () {
			return this.error.statusCode === 404 ? 'Oops, não encontrámos esta página' : 'Oops, ocorreu um erro'
		}
	}
})
</script>

<style lang="scss">
// default template - don't modify
.content {
	display: flex;
	flex-direction: column;
	min-height: 100vh;

	> main {
		flex: 1 1 auto;
		padding: 1em 2em;
	}
}
</style>
