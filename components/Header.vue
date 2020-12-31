<template>
	<header :class="{ flush: flush }">
		<HeaderActions />

		<h1 v-if="title !== undefined" class="header-title">
			{{ title }}
		</h1>

		<slot />
	</header>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiBellOutline, mdiDotsGrid, mdiAccountOutline, mdiMagnify } from '@mdi/js'

import HeaderActions from '~/components/HeaderActions.vue'

export default Vue.extend({
	components: { HeaderActions },
	props: {
		title: {
			type: String,
			default: undefined
		},
		flush: {
			type: Boolean
		}
	},
	data: () => ({
		isAdmin: true,
		notificationsOpened: false,

		// icons
		iconSearch: mdiMagnify,
		iconNotifications: mdiBellOutline,
		iconDashboard: mdiDotsGrid,
		iconProfile: mdiAccountOutline
	}),
	methods: {
		toggleNotifications() {
			this.notificationsOpened = !this.notificationsOpened
		}
	}
})
</script>

<style lang="scss">
$actions-height: 3em;

header {
	flex: 0 0 auto;
	padding: 1em 1em 2em 2em;
	background-color: #f2f2f2;
	background-color: var(--v-background-darken1);

	&.flush {
		padding-bottom: 0;
	}

	.header-title {
		font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
		display: block;
		font-weight: 300;
		font-size: 3em;
		letter-spacing: 1px;
		margin-top: 0.5em;

		color: #000;
		color: var(--v-contrast-base);

		height: 4rem;
	}

	.subtitle {
		font-weight: 300;
		font-size: 42px;
		color: #526488;
		word-spacing: 5px;
		padding-bottom: 15px;
	}

}
</style>
