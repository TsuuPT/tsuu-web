<template>
	<div class="actions">
		<!-- Search -->
		<v-text-field
			class="search"
			label="Procurar"
			placeholder="Fansub, anime, manga, ..."
			outlined
			rounded
			dense
			:prepend-inner-icon="iconSearch"
		/>

		<span class="spacer" />

		<slot />

		<!-- Theme -->
		<a href="#" class="action action-theme" title="Aparência" @click="toggleDarkMode">
			<v-icon>{{ iconTheme }}</v-icon>
		</a>

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
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiBellOutline, mdiDotsGrid, mdiAccountOutline, mdiMagnify, mdiWeatherNight } from '@mdi/js'

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
		iconProfile: mdiAccountOutline,
		iconTheme: mdiWeatherNight
	}),
	methods: {
		toggleDarkMode: function (this: any) {
			this.$vuetify.theme.dark = !this.$vuetify.theme.dark
			localStorage.setItem('theme', this.$vuetify.theme.dark ? 'dark' : 'light')
		},
		toggleNotifications() {
			this.notificationsOpened = !this.notificationsOpened
		}
	}
})
</script>

<style lang="scss">
$actions-height: 3em;

header {
	.actions {
		display: flex;
		height: $actions-height;

		> * {
			flex: 0 0 auto;
			height: $actions-height;

			&.spacer {
				flex: 1 1 auto;
			}
		}

		> .action {
			text-align: center;
			width: $actions-height;
			line-height: $actions-height;
			margin: 0 0.5em;
			border-radius: 50%;

			&:hover {
				background-color: #e2e2e2;
				background-color: var(--v-background-darken2);
			}
		}

		> .search {
			margin-top: 4px;
		}
	}
}
</style>
