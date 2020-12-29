<template>
	<nav :class="{ open: !isClosed }">
		<!-- Home -->
		<NuxtLink to="/" title="Home">
			<div class="icon"><Logo class="logo" /></div>
			<div class="name">Novidades</div>
		</NuxtLink>

		<!-- Fansubs -->
		<NuxtLink to="/fansubs" title="Fansubs">
			<div class="icon"><v-icon dark large>{{ iconFansubs }}</v-icon></div>
			<div class="name">Fansubs</div>
		</NuxtLink>

		<!-- Media -->
		<NuxtLink to="/media" title="Media">
			<div class="icon"><v-icon dark large>{{ iconMedia }}</v-icon></div>
			<div class="name">Media</div>
		</NuxtLink>

		<span class="spacer" />

		<!-- Expand sidebar -->
		<a href="#" @click="toggle">
			<div class="icon"><v-icon dark large>{{ isClosed ? iconOpen : iconClose }}</v-icon></div>
			<div class="name">Fechar</div>
		</a>
	</nav>
</template>

<script lang="ts">
import Vue from 'vue'

import { mdiAccountGroupOutline, mdiMovieOpen, mdiChevronRight, mdiChevronLeft } from '@mdi/js'
import Logo from '~/assets/images/logo.svg?inline'

export default Vue.extend({
	components: { Logo },
	data: () => ({
		isClosed: true,

		// icons
		iconFansubs: mdiAccountGroupOutline,
		iconMedia: mdiMovieOpen,
		iconOpen: mdiChevronRight,
		iconClose: mdiChevronLeft
	}),
	methods: {
		toggle () {
			this.isClosed = !this.isClosed
		}
	}
})
</script>

<style lang="scss">
$nav-size: 4em;

nav {
	width: $nav-size;
	height: 100vh;
	position: fixed;
	background-color: #4f4f4f; // TODO: use theme variables - https://vuetifyjs.com/en/features/theme/#theme-generator

	display: flex;
	flex-direction: column;

	> * {
		width: $nav-size;
		height: $nav-size;
		flex: 0 0 auto;

		color: #fff;
		text-align: center;
		line-height: $nav-size;

		&.spacer {
			flex: 1 1 auto;
		}

		> .icon {
			width: 100%;
			height: 100%;

			> .logo {
				width: 55%;
				height: 100%;
			}
		}
	}

	> a {
		&:hover {
			background-color: #526488;
		}
	}

	.name {
		display: none;
	}

	&.open {
		width: $nav-size + 10em;
		> * {
			width: $nav-size + 10em;
		}

		.title {
			display: block;
		}
	}
}
</style>
