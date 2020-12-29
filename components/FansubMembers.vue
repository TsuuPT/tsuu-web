<template>
	<v-simple-table class="members">
		<template v-slot:default>
			<thead>
			<tr>
				<th class="text-left">
					Nome
				</th>
				<th class="text-left">
					Cargo
				</th>
				<th class="text-left">
					Contacto
				</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="member in fansub.members" :key="member.name">
				<td>{{ member.name }}</td>
				<td>{{ member.role }}</td>
				<td>{{ member.contact }} {{ member.contactType ? ('/ ' + member.contactType) : '' }}</td>
			</tr>
			</tbody>
		</template>
	</v-simple-table>
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
	.members table {
		width: auto !important;
	}
}
</style>
