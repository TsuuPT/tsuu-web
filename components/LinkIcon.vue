<template>
	<a :href="link" target="_blank" class="link-icon" :title="info.name">
		<v-icon>
			{{ info.icon }}
		</v-icon>
	</a>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiEarth, mdiAt, mdiFacebook, mdiTwitter, mdiInstagram, mdiDiscord, mdiLinkVariant, mdiSkypeBusiness, mdiYoutube } from '@mdi/js'

type Link = {
	link: string,
	type: string
}

type Info = {
	name: string,
	icon: string
}

export default Vue.extend({
	props: {
		data: {
			type: Object as () => Link,
			required: true
		}
	},
	computed: {
		link (this: any): string {
			if (this.data.type === 'EMAIL') {
				return 'mailto:' + this.data.link
			}

			return this.data.link
		},
		info (this: any): Info {
			switch (this.data.type) {
			case 'WEBSITE':
				return { name: 'Sítio web', icon: mdiEarth }
			case 'EMAIL':
				return { name: 'Email', icon: mdiAt }
			case 'FACEBOOK':
				return { name: 'Facebook', icon: mdiFacebook }
			case 'TWITTER':
				return { name: 'Twitter', icon: mdiTwitter }
			case 'INSTAGRAM':
				return { name: 'Instagram', icon: mdiInstagram }
			case 'DISCORD':
				return { name: 'Discord', icon: mdiDiscord }
			case 'SKYPE':
				return { name: 'Skype', icon: mdiSkypeBusiness }
			case 'YOUTUBE':
				return { name: 'YouTube', icon: mdiYoutube }
			default:
				return { name: 'Desconhecido', icon: mdiLinkVariant }
			}
		}
	}
})
</script>

<style lang="scss">
.link-icon {
	margin: 0.5em;
	color: #425b78;
}
</style>
