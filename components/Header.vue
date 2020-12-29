<template>
	<header :class="{ flush: flush }">
		<div class="actions">
			<!-- Search -->
			<a href="#" class="action action-search" title="Search">
				<v-icon>{{ iconSearch }}</v-icon>
			</a>

			<span class="spacer" />

			<!-- Notifications -->
			<a href="#" class="action action-notifications" title="Notificações" @click="toggleNotifications">
				<v-icon>{{ iconNotifications }}</v-icon>
			</a>

			<!-- Dahsboard -->
			<NuxtLink v-if="isAdmin" to="/dahsboard" class="action action-dashboard" title="Dashboard">
				<v-icon>{{ iconDashboard }}</v-icon>
			</NuxtLink>

			<!-- Profile -->
			<NuxtLink to="/profile" class="action action-profile" title="Perfil">
				<v-icon>{{ iconProfile }}</v-icon>
			</NuxtLink>
		</div>

		<h1 v-if="title !== undefined" class="title">
			{{ title }}
		</h1>

		<slot />
	</header>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiBellOutline, mdiDotsGrid, mdiAccountOutline, mdiMagnify } from '@mdi/js'

export default Vue.extend({
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
		toggleNotifications () {
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

	&.flush {
		padding-bottom: 0;
	}

	.actions {
		display: flex;
		height: $actions-height;

		> * {
			flex: 0 0 auto;
			height: $actions-height;
			margin: 0 0.5em;
			border-radius: 50%;

			&:hover {
				background: #dddddd;
			}

			&.action {
				text-align: center;
				width: $actions-height;
				line-height: $actions-height;
			}

			&.action-search {
				margin-left: 0;
			}

			&.spacer {
				flex: 1 1 auto;
				&:hover {
					background: none;
				}
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
