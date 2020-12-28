<template>
	<div class="content">
		<Header title="Fansubs" />

		<main>
			<div class="alphabet">
				<NuxtLink v-for="char in alphabet" :key="char" :to="`/fansubs/${encodeURIComponent(char.toLowerCase())}`" :class="{ active: char === letter }">
					{{ char }}
				</NuxtLink>
			</div>

			<ul style="margin-top: 2em; font-size: 1.5em">
				<li v-for="fansub in fansubs" :key="fansub.id">
					<NuxtLink :to="`/fansub/${fansub.slug}`">
						{{ fansub.name }}
					</NuxtLink>
				</li>
			</ul>
		</main>

		<Footer />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

import queryFansubs from '~/apollo/queries/fansubs.graphql'

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
		letter: ''
	}),
	created () {
		this.letter = decodeURIComponent(this.$route.params.letter?.toUpperCase())

		if (!this.letter || this.alphabet.includes(this.letter)) {
			this.letter = this.alphabet[0]
		}
	},
	methods: {
	},
	head: {
		title: 'Fansubs'
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
