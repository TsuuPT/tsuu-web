<template>
	<nav :class="{ open: !isClosed }">
		<!-- Home -->
		<NuxtLink to="/" title="Home" :class="{ active: $nuxt.$route.path === '/' }">
			<div class="icon icon-primary"><Logo class="icon-primary logo" /></div>
			<div class="name">Novidades</div>
		</NuxtLink>

		<!-- Fansubs -->
		<NuxtLink to="/fansubs" title="Fansubs" :class="{ active: $nuxt.$route.path.startsWith('/fansub') }">
			<div class="icon"><v-icon dark large color="icon-secondary">{{ iconFansubs }}</v-icon></div>
			<div class="name">Fansubs</div>
		</NuxtLink>

		<!-- Media -->
		<NuxtLink to="/media" title="Media" :class="{ active: $nuxt.$route.path.startsWith('/media') }">
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
		toggle() {
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
	background-color: #00b377;
	background-color: var(--v-primary-base);

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
				color: #fff;
				width: 55%;
				height: 100%;
			}

			.theme--dark.v-icon {
				color: #fff;
			}
		}
	}

	> a {
		&.active,
		&:hover {
			background-color: #00985e;
			background-color: var(--v-primary-darken1);
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
