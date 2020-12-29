import { Release } from '~/types/Release'

export interface Fansub {
	id: string
	slug: string
	name: string
	description: string
	links: [FansubLink]
	members: [FansubMember]
	releases?: [Release]
}

export interface FansubLink {
	link: string
	type: string
}

export interface FansubMember {
	name: string
	role: string
	contact: string
	contactType: string
}
