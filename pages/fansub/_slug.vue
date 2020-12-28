<template>
	<div class="content">
		<Header :title="fansub ? fansub.name : ''" />

		<main>
			<div v-if="fansub">
				<h1 class="title">
					Equipa
				</h1>
				<p>
					{{ fansub.members }}
				</p>
			</div>
		</main>

		<Footer />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

import queryFansub from '~/apollo/queries/fansub.graphql'

interface QueryVariables {
	slug: string
}

export default Vue.extend({
	components: { Header, Footer },
	apollo: {
		fansub: {
			query: queryFansub,
			prefetch: ({ route }) => ({ slug: route.params.slug }),
			variables () {
				return { slug: this.$route.params.slug }
			}
		}
	},
	data: () => ({
	}),
	computed: {
	},
	methods: {
	},
	head (this: any) {
		return {
			title: this.fansub?.name || ''
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
