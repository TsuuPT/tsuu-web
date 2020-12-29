<template>
	<div class="content">
		<Header :title="fansub ? fansub.name : ''" flush>
			<div v-if="fansub" class="links">
				<LinkIcon v-for="item in fansub.links" :key="item.link" :data="item" />

				<LinkIcon :data="{ link: 'sandro123iv@gmail.com', type: 'EMAIL' }" />
				<LinkIcon :data="{ link: 'https://example.com', type: 'YOUTUBE' }" />
				<LinkIcon :data="{ link: 'https://example.com', type: 'FACEBOOK' }" />
				<LinkIcon :data="{ link: 'https://example.com', type: 'TWITTER' }" />
				<LinkIcon :data="{ link: 'https://example.com', type: 'INSTAGRAM' }" />
				<LinkIcon :data="{ link: 'https://example.com', type: 'SKYPE' }" />
				<LinkIcon :data="{ link: 'https://example.com', type: 'UNKNOWN' }" />
			</div>

			<v-tabs v-model="tab" class="tabs">
				<v-tab>Sobre Nós</v-tab>
				<v-tab>Lançamentos</v-tab>
				<v-tab>Jobs</v-tab>
			</v-tabs>
		</Header>

		<main>
			<div v-if="fansub">
				<v-tabs-items v-model="tab">
					<v-tab-item :transition="false" :reverse-transition="false">
						<v-btn outlined rounded text>
							Ligar Notificações
							<v-icon right>
								mdi-bell-outline
							</v-icon>
						</v-btn>

						<v-btn outlined rounded text>
							Editar
							<v-icon right>
								mdi-pencil-outline
							</v-icon>
						</v-btn>

						<v-btn outlined rounded text>
							Revisões
							<v-icon right>
								mdi-history
							</v-icon>
						</v-btn>

						<div class="description" v-html="fansub.description" />

						<v-divider inset />

						<h1 class="title">
							Equipa
						</h1>

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
					</v-tab-item>

					<v-tab-item :transition="false" :reverse-transition="false">
						LANÇAMENTOS
					</v-tab-item>

					<v-tab-item :transition="false" :reverse-transition="false">
						<v-timeline align-top dense class="jobs">
							<v-timeline-item fill-dot icon="mdi-autorenew" color="yellow" small>
								<v-chip class="white--text ml-0" color="purple" label small>
									#4 two hours ago
								</v-chip>
								Processing...
							</v-timeline-item>
							<v-timeline-item fill-dot icon="mdi-check" color="green" small>
								#3 3 new entries
							</v-timeline-item>
							<v-timeline-item fill-dot icon="mdi-close" color="red" small>
								#2
							</v-timeline-item>
							<v-timeline-item fill-dot icon="mdi-close" color="red" small>
								#1
							</v-timeline-item>
						</v-timeline>
					</v-tab-item>
				</v-tabs-items>
			</div>
		</main>

		<Footer />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import LinkIcon from '~/components/LinkIcon.vue'

import queryFansub from '~/apollo/queries/fansub.graphql'

interface QueryVariables {
	slug: string
}

export default Vue.extend({
	components: { Header, Footer, LinkIcon },
	apollo: {
		fansub: {
			query: queryFansub,
			prefetch: ({ route }) => ({ slug: route.params.slug }),
			variables () {
				return { slug: this.$route.params.slug }
			}
		}
	},
	data: () => ({
		tab: null
	}),
	computed: {
	},
	methods: {
	},
	head (this: any) {
		return {
			title: this.fansub?.name || ''
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
.members.members table {
	width: auto;
}

// TODO: move to 'header tabs' component
.tabs.v-tabs {
	margin-top: 1em;

	.v-tabs-bar {
		height: 2.5em;
		background-color: transparent;
	}
}

.jobs {
	.yellow {
		background-color: #e5e600;
	}
	.green {
		background-color: green;
	}
	.red {
		background-color: #e60000;
	}
}
</style>
