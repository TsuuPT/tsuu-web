<template>
	<div class="dashboard">
		<Header :title="Dashboard" flush>
			<div v-if="fansub" class="links">
				<LinkIcon v-for="item in fansub.links" :key="item.link" :data="item" />
			</div>

			<v-tabs v-model="tab" class="tabs">
				<v-tab>Sobre Nós</v-tab>
				<v-tab>Equipa</v-tab>
				<v-tab>Lançamentos</v-tab>
				<v-tab>Jobs</v-tab>
			</v-tabs>
		</Header>

		<main>
			<div v-if="fansub">
				<v-tabs-items v-model="tab">
					<!-- Sobre Nós -->
					<v-tab-item :transition="false" :reverse-transition="false">
						<FansubAbout :fansub="fansub" />
					</v-tab-item>

					<!-- Equipa -->
					<v-tab-item :transition="false" :reverse-transition="false">
						<FansubMembers :fansub="fansub" />
					</v-tab-item>

					<!-- Lançamentos -->
					<v-tab-item :transition="false" :reverse-transition="false">
						<FansubReleases :fansub="fansub" />
					</v-tab-item>

					<!-- Jobs -->
					<v-tab-item :transition="false" :reverse-transition="false">
						<v-btn outlined rounded text>
							Executar
							<v-icon right>
								mdi-play-outline
							</v-icon>
						</v-btn>

						<v-btn outlined rounded text>
							Configurar
							<v-icon right>
								mdi-wrench-outline
							</v-icon>
						</v-btn>

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
import FansubAbout from '~/components/FansubAbout.vue'
import FansubMembers from '~/components/FansubMembers.vue'
import FansubReleases from '~/components/FansubReleases.vue'

import queryFansub from '~/apollo/queries/queryFansub.graphql'

interface QueryVariables {
	slug: string
}

export default Vue.extend({
	components: { Header, Footer, LinkIcon, FansubAbout, FansubMembers, FansubReleases },
	apollo: {
		fansub: {
			query: queryFansub,
			prefetch: ({ route }) => ({ slug: route.params.slug }),
			variables() {
				return { slug: this.$route.params.slug }
			}
		}
	},
	data: () => ({
		tab: null
	}),
	head(this: any) {
		return {
			title: (this.fansub ? (this.fansub.name + ' • ') : '') + 'Tsuu'
		}
	}
})
</script>

<style lang="scss">
.dashboard {

}
</style>
