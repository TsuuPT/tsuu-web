<template>
	<div>
		<v-btn outlined rounded text>
			Ligar Notificações
			<v-icon right>mdi-bell-outline</v-icon>
		</v-btn>

		<NuxtLink :to="`/fansub/${$route.params.slug}/edit`">
			<v-btn outlined rounded text>
				Editar
				<v-icon right>mdi-pencil-outline</v-icon>
			</v-btn>
		</NuxtLink>

		<v-btn outlined rounded text>
			Revisões
			<v-icon right>mdi-history</v-icon>
		</v-btn>

		<div class="description" v-html="fansub.description" />
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
.fansub {
	.description {
		position: relative;
		max-height: 500px;
		overflow-x: hidden;
		overflow-y: auto;
	}
}
</style>
