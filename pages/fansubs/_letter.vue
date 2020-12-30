<template>
	<div class="content">
		<Header title="Fansubs" />

		<main>
			<div class="alphabet">
				<NuxtLink v-for="char in alphabet" :key="char" :to="`/fansubs/${encodeURIComponent(char.toLowerCase())}`" :class="{ active: char === selected }">
					{{ char }}
				</NuxtLink>
			</div>

			<div class="results">
				<div v-if="$apollo.queries.fansubs.loading">
					<v-skeleton-loader class="mx-auto" type="card" />
					<v-skeleton-loader class="mx-auto" type="card" />
					<v-skeleton-loader class="mx-auto" type="card" />
				</div>
				<div v-else>
					<ul style="font-size: 1.5em">
						<li v-for="fansub in fansubs" :key="fansub.id">
							<NuxtLink :to="`/fansub/${fansub.slug}`">
								{{ fansub.name }}
							</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
		</main>

		<Footer />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

import queryFansubs from '~/apollo/queries/queryFansubs.graphql'

export default Vue.extend({
	components: { Header, Footer },
	apollo: {
		fansubs: {
			prefetch: true,
			query: queryFansubs
		}
	},
	data: () => ({
		alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#'],
		selected: ''
	}),
	created () {
		this.selected = this.getSelected()
	},
	methods: {
		getSelected (): string {
			let val = decodeURIComponent(this.$route.params.letter?.toUpperCase())

			if (!val || !this.alphabet.includes(val)) {
				val = this.alphabet[0]
			}

			return val
		}
	},
	head: {
		title: 'Fansubs • Tsuu'
	}
})
</script>

<style lang="scss">
.alphabet {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;

	> * {
		font-size: 1.5em;
		text-align: center;
		width: 2em;
		height: 2em;
		line-height: 2em;

		text-decoration: none;
		color: #282828;
		cursor: pointer;

		&.active {
			color: #000;
			background-color: #f2f2f2;
		}
	}
}

.results {
	margin-top: 2em;

	.v-skeleton-loader {
		width: 33%;
		display: inline-block;

		.v-skeleton-loader__image {
			height: 100px;
		}
	}
}

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
