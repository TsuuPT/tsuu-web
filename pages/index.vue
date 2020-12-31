<template>
	<div class="content">
		<Header title="Tsuu" />

		<main>
			<p>Olá</p>

			<button @click="expand">
				CLICK ME!
			</button>
			<div v-if="expanded">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra odio nec sem accumsan
					commodo. Ut sodales ultricies auctor. Duis ultrices nisl non erat pulvinar, nec tristique orci
					blandit. Pellentesque vel nibh vel enim mollis tincidunt. In semper dapibus augue vel aliquet. Morbi
					eleifend nunc viverra ante fringilla, ut venenatis est efficitur. Etiam in neque molestie, porta
					lacus mattis, tincidunt tortor.
				</p>
				<p>
					Proin in urna a nunc rutrum accumsan. Vivamus sodales sapien sed euismod commodo. Nulla lobortis
					tortor a sapien luctus euismod. Orci varius natoque penatibus et magnis dis parturient montes,
					nascetur ridiculus mus. Nam efficitur nibh nisi, vitae accumsan purus pretium a. Donec quis ipsum
					imperdiet, pulvinar eros eu, porttitor tortor. Pellentesque tincidunt nisi et eros sagittis, ut
					euismod augue tristique. Etiam lacus risus, finibus eget cursus in, ornare a augue. Nullam non
					faucibus sem. In luctus sagittis tristique. Nam efficitur nibh quis lorem tempor egestas. Nam a elit
					sed mi aliquet dapibus. Pellentesque eget purus eros. Sed eu auctor eros, eget bibendum tortor. Ut
					consequat nisi eu mi ultrices luctus. Vivamus eleifend dolor a lectus vestibulum suscipit.
				</p>
				<p>
					Sed interdum massa eu dictum congue. Nullam ut pharetra ante. Aenean posuere massa sit amet
					ultricies
					aliquet. Phasellus libero diam, luctus at eleifend auctor, volutpat sit amet arcu. Sed gravida ex
					vel
					nulla tincidunt, sed maximus sem luctus. Mauris pellentesque urna mollis vehicula semper. Maecenas
					varius massa sit amet lorem eleifend sagittis. Aenean augue quam, porta quis lectus ac, aliquet
					varius leo. Nam porta ante felis, at lacinia ligula tempor non. Proin eleifend est eu ipsum pharetra
					commodo. Nulla quis metus nec orci dapibus hendrerit. Cras facilisis vel enim eget condimentum. Nunc
					varius purus nec dolor pulvinar volutpat. Cras a nunc pellentesque, tincidunt eros id, finibus
					velit.
					Nam vitae hendrerit mauris, in placerat metus. Curabitur dictum ornare felis in interdum.
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

export default Vue.extend({
	components: { Header, Footer },
	data: () => ({
		expanded: false
	}),
	methods: {
		expand() {
			this.expanded = !this.expanded
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
