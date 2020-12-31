<template>
	<div class="content">
		<Header :title="fansub ? fansub.name : ''" flush>
			<v-tabs v-model="tab" class="tabs">
				<v-tab>Sobre Nós</v-tab>
				<v-tab>Equipa</v-tab>
				<v-tab>Imagens</v-tab>
				<v-tab>Links</v-tab>
				<v-tab>Jobs</v-tab>
			</v-tabs>
		</Header>

		<main>
			<div v-if="fansub">
				<v-btn outlined rounded text @click="save">
					Guardar
					<v-icon right>mdi-pencil-outline</v-icon>
				</v-btn>

				<NuxtLink :to="`/fansub/${$route.params.slug}`">
					<v-btn outlined rounded text>
						Cancelar
						<v-icon right>mdi-close</v-icon>
					</v-btn>
				</NuxtLink>

				<v-bottom-sheet v-model="temp">
					<v-sheet max-height="800px" style="overflow: scroll">
						<pre class="pa-6" style="height: 100%">{{ JSON.stringify(fansub, null, 4) }}</pre>
					</v-sheet>
				</v-bottom-sheet>

				<v-tabs-items v-model="tab">
					<!-- Sobre Nós -->
					<v-tab-item :transition="false" :reverse-transition="false">
						<v-text-field v-model="fansub.description" />
					</v-tab-item>

					<!-- Equipa -->
					<v-tab-item :transition="false" :reverse-transition="false">
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
										<th colspan="3" />
									</tr>
								</thead>
								<tbody>
									<tr v-for="(member, index) in fansub.members">
										<td>
											<v-text-field v-model="member.name" dense />
										</td>
										<td>
											<v-text-field v-model="member.role" dense />
										</td>
										<td>
											<v-text-field v-model="member.contact" dense :clearable="true" class="d-inline-block" @click:clear="clearMemberContact(index)" />
											<span v-if="member.contact">
												<v-select v-model="member.contactType" :items="contactTypes" dense item-text="name" item-value="key" class="d-inline-block" />
											</span>
										</td>
										<td style="padding-right: 0">
											<v-icon v-if="index > 0" right @click="moveMemberUp(index)">mdi-chevron-up</v-icon>
										</td>
										<td style="padding-left: 0">
											<v-icon v-if="index < fansub.members.length - 1" right @click="moveMemberDown(index)">mdi-chevron-down</v-icon>
										</td>
										<td>
											<v-icon right @click="removeMember(index)">mdi-close</v-icon>

										</td>
									</tr>
									<tr>
										<td colspan="7">
											<v-btn outlined rounded text small @click="newMember">
												Adicionar membro
												<v-icon right>mdi-plus</v-icon>
											</v-btn>
										</td>
									</tr>
								</tbody>
							</template>
						</v-simple-table>
					</v-tab-item>

					<!-- Imagens -->
					<v-tab-item :transition="false" :reverse-transition="false">
						ICON<br>
						Atual | Novo<br><br>

						BANNER<br>
						Atual | Novo<br><br>

						COLOR<br>
						Atual | Novo
					</v-tab-item>

					<!-- Links -->
					<v-tab-item :transition="false" :reverse-transition="false">
						<v-simple-table class="members">
							<template v-slot:default>
								<thead>
									<tr>
										<th class="text-left">
											Link
										</th>
										<th colspan="3" />
									</tr>
								</thead>
								<tbody>
									<tr v-for="(item, index) in fansub.links">
										<td>
											<v-text-field v-model="item.link" dense :clearable="true" class="d-inline-block" @click:clear="clearLink(index)" />
											<span v-if="item.link">
												<v-select v-model="item.type" :items="contactTypes" dense item-text="name" item-value="key" class="d-inline-block" />
											</span>
										</td>
										<td style="padding-right: 0">
											<v-icon v-if="index > 0" right @click="moveLinkUp(index)">mdi-chevron-up</v-icon>
										</td>
										<td style="padding-left: 0">
											<v-icon v-if="index < fansub.links.length - 1" right @click="moveLinkDown(index)">mdi-chevron-down</v-icon>
										</td>
										<td>
											<v-icon right @click="removeLink(index)">mdi-close</v-icon>

										</td>
									</tr>
									<tr>
										<td colspan="7">
											<v-btn outlined rounded text small @click="newLink">
												Adicionar link
												<v-icon right>mdi-plus</v-icon>
											</v-btn>
										</td>
									</tr>
								</tbody>
							</template>
						</v-simple-table>
					</v-tab-item>

					<!-- Jobs -->
					<v-tab-item :transition="false" :reverse-transition="false">
						JOBS
					</v-tab-item>
				</v-tabs-items>
			</div>
		</main>

		<Footer />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiEarth, mdiAt, mdiFacebook, mdiTwitter, mdiInstagram, mdiDiscord, mdiSkypeBusiness, mdiYoutube } from '@mdi/js'
import { FansubInput, FansubLink, FansubMember } from '~/types/Fansub'

import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

import queryFansubEdit from '~/apollo/queries/queryFansubEdit.graphql'
import mutationSaveFansubRevision from '~/apollo/queries/saveFansubRevision.graphql'

export default Vue.extend({
	components: { Header, Footer },
	apollo: {
		fansub: {
			query: queryFansubEdit,
			prefetch: ({ route }) => ({ slug: route.params.slug }),
			variables() {
				return { slug: this.$route.params.slug }
			}
		}
	},
	data: () => ({
		tab: null,
		temp: false,

		contactTypes: [
			{ key: 'WEBSITE',   name: 'Sítio web', icon: mdiEarth },
			{ key: 'EMAIL',     name: 'Email', icon: mdiAt },
			{ key: 'FACEBOOK',  name: 'Facebook', icon: mdiFacebook },
			{ key: 'TWITTER',   name: 'Twitter', icon: mdiTwitter },
			{ key: 'INSTAGRAM', name: 'Instagram', icon: mdiInstagram },
			{ key: 'DISCORD',   name: 'Discord', icon: mdiDiscord },
			{ key: 'SKYPE',     name: 'Skype', icon: mdiSkypeBusiness },
			{ key: 'YOUTUBE',   name: 'YouTube', icon: mdiYoutube }
		]
	}),
	methods: {
		save(this: any) {
			this.temp = true

			const links: FansubLink[] = []
			this.fansub.links.forEach((link: FansubLink) => links.push({
				link: link.link,
				type: link.type
			}))

			const members: FansubMember[] = []
			this.fansub.members.forEach((member: FansubMember) => members.push({
				name: member.name,
				role: member.role,
				contact: member.contact,
				contactType: member.contactType
			}))

			const fansub = {
				id: this.fansub.id,
				name: this.fansub.name,
				description: this.fansub.description,
				links,
				members
			}

			const variables = {
				revisionId: undefined,
				fansub
			}

			this.$apollo.mutate({ mutation: mutationSaveFansubRevision, variables })
				.then((data: any) => console.log(data))
				.catch((reason: any) => console.error(reason))
		},

		newMember(this: any) {
			this.fansub.members.push({
				name: '',
				role: '',
				contact: '',
				contactType: 'WEBSITE'
			})
		},
		removeMember(this: any, index: number) {
			this.fansub.members.splice(index, 1)
		},
		moveMemberUp(this: any, index: number) {
			const temp = this.fansub.members[index - 1]
			Vue.set(this.fansub.members, index - 1, this.fansub.members[index])
			Vue.set(this.fansub.members, index, temp)
		},
		moveMemberDown(this: any, index: number) {
			const temp = this.fansub.members[index]
			Vue.set(this.fansub.members, index, this.fansub.members[index + 1])
			Vue.set(this.fansub.members, index + 1, temp)
		},
		clearMemberContact(this: any, index: number) {
			this.fansub.members[index].contact = ''
			this.fansub.members[index].contactType = 'WEBSITE'
		},

		newLink(this: any) {
			this.fansub.links.push({
				link: 'https://',
				contactType: 'WEBSITE'
			})
		},
		removeLink(this: any, index: number) {
			this.fansub.links.splice(index, 1)
		},
		moveLinkUp(this: any, index: number) {
			const temp = this.fansub.links[index - 1]
			Vue.set(this.fansub.links, index - 1, this.fansub.links[index])
			Vue.set(this.fansub.links, index, temp)
		},
		moveLinkDown(this: any, index: number) {
			const temp = this.fansub.links[index]
			Vue.set(this.fansub.links, index, this.fansub.links[index + 1])
			Vue.set(this.fansub.links, index + 1, temp)
		},
		clearLink(this: any, index: number) {
			this.fansub.links[index].link = ''
			this.fansub.links[index].type = 'WEBSITE'
		}
	},
	head(this: any) {
		return {
			title: (this.fansub ? ('Editar ' + this.fansub.name + ' • ') : '') + 'Tsuu'
		}
	}
})
</script>

<style lang="scss">
// default template - don't modify
.content {
	display: flex;
	flex-direction: column;
	min-height: 100vh;

	> main {
		flex: 1 1 auto;
		padding: 1em 2em;
	}
}

.links {
	margin-top: 1em;
}

.description {
	position: relative;
	max-height: 500px;
	overflow-x: hidden;
	overflow-y: auto;
}

// TODO: move to 'equipa' component
.members table {
	width: auto !important;

	tbody {
		tr:hover {
			background-color: transparent !important;
		}
	}
}

// TODO: move to 'header tabs' component
.v-tabs {
	margin-top: 1em;

	> .v-tabs-bar {
		height: 2.5em;
		background-color: transparent !important;
	}
}
</style>
