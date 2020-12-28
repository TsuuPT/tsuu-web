<template>
	<div>
		<Navbar />
		<div class="wrapper">
			<Nuxt />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

import Navbar from '~/components/Navbar.vue'

export default Vue.extend({
	components: {
		Navbar
	}
})
</script>

<style lang="scss">
html {
	font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;

	// https://aykevl.nl/2014/09/fix-jumping-scrollbar
	overflow-y: auto;
	width: 100vw;
	overflow-x: hidden;
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

.wrapper {
	margin: 0 0 0 4em; // TODO: use nav-size variable
	padding: 0;
}

</style>
