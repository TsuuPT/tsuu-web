<template>
	<div>
		<h1 v-if="error.statusCode === 404">
			Page not found
		</h1>
		<h1 v-else>
			An error occurred
		</h1>

		<NuxtLink v-if="error.statusCode === 404" to="./">
			Go back
		</NuxtLink>
		<NuxtLink v-else to="/">
			Go to home
		</NuxtLink>
	</div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
	props: ['error'],
	layout: 'error' // you can set a custom layout for the error page
})
</script>

<style lang="scss">
</style>
