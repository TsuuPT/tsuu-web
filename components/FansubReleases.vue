<template>
	<div>
		LANÇAMENTOS
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Fansub } from '~/types/Fansub'

export default Vue.extend({
	props: {
		fansub: {
			type: Object as () => Fansub,
			required: true
		}
	}
})
</script>

<style lang="scss">
</style>
