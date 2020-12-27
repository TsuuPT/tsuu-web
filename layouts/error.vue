<template>
	<div>
		<h1 v-if="error.statusCode === 404">Page not found</h1>
		<h1 v-else>An error occurred</h1>
		<NuxtLink to="./" v-if="error.statusCode === 404">Go back</NuxtLink>
		<NuxtLink to="/" v-else>Go to home</NuxtLink>
	</div>
</template>

<script>
export default {
	props: ['error'],
	layout: 'error' // you can set a custom layout for the error page
}
</script>

<style lang="scss">
</style>
