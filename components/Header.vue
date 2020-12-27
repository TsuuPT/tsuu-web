<template>
	<header>
		<div class="actions">
			<!-- Search -->
			<a href="#" class="action-icon" title="Search">
				<v-icon>{{ iconSearch }}</v-icon>
			</a>

			<span class="spacer"></span>

			<!-- Notifications -->
			<a href="#" class="action-icon" title="Notifications" @click="toggleNotifications">
				<v-icon>{{ iconNotifications }}</v-icon>
			</a>

			<!-- Dahsboard -->
			<NuxtLink to="/dahsboard" class="action-icon" title="Dashboard" v-if="isAdmin">
				<v-icon>{{ iconDashboard }}</v-icon>
			</NuxtLink>

			<!-- Profile -->
			<NuxtLink to="/profile" class="action-icon" title="Profile">
				<v-icon>{{ iconProfile }}</v-icon>
			</NuxtLink>
		</div>

		<h1 class="title">{{ title }}</h1>

		<slot></slot>
	</header>
</template>

<script>
import { mdiBellOutline, mdiDotsGrid, mdiAccountOutline, mdiMagnify } from '@mdi/js'

export default {
	data: () => ({
		title: 'Novidades',
		isAdmin: true,
		notificationsOpened: false,

		// icons
		iconSearch: mdiMagnify,
		iconNotifications: mdiBellOutline,
		iconDashboard: mdiDotsGrid,
		iconProfile: mdiAccountOutline,
	}),
	methods: {
		toggleNotifications() {
			this.notificationsOpened = !this.notificationsOpened;
		}

	},
}
</script>

<style lang="scss">
$actions-height: 3.5em;

header {
	flex: 0 0 auto;
	padding: 2em;
	background-color: #f2f2f2;

	.actions {
		display: flex;
		height: $actions-height;

		> * {
			height: $actions-height;
			flex: 0 0 auto;

			color: #000;

			&.action-icon {
				text-align: center;
				width: $actions-height;
				line-height: $actions-height;
			}

			&.spacer {
				flex: 1 1 auto;
			}
		}
	}

	.title {
		font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
		display: block;
		font-weight: 300;
		font-size: 3em;
		color: #35495e;
		letter-spacing: 1px;
		margin-top: 0.5em;
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
