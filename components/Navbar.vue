<template>
	<nav :class="{ open: !isClosed }">
		<span>Tsu</span>

		<!-- Home -->
		<NuxtLink to="/">
			<div class="icon"><v-icon dark large>{{ iconHome }}</v-icon></div>
			<div class="name">Novidades</div>
		</NuxtLink>

		<!-- Fansubs -->
		<NuxtLink to="/fansubs">
			<div class="icon"><v-icon dark large>{{ iconFansubs }}</v-icon></div>
			<div class="name">Fansubs</div>
		</NuxtLink>

		<span class="spacer" />

		<!-- Expand sidebar -->
		<a href="#" @click="toggle">
			<div class="icon"><v-icon dark large>{{ isClosed ? iconOpen : iconClose }}</v-icon></div>
			<div class="name">Fechar</div>
		</a>
	</nav>
</template>

<script>
import Vue from 'vue'
import { mdiHome, mdiFan, mdiChevronRight, mdiChevronLeft } from '@mdi/js'

export default Vue.extend({
	data: () => ({
		isClosed: true,

		// icons
		iconHome: mdiHome,
		iconFansubs: mdiFan,
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
	background-color: #4f4f4f;

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
