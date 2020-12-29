declare module '*.svg' {
	const content: any
	export default content
}

declare module '*.svg?inline' {
	import { VueConstructor } from 'vue'
	const content: VueConstructor
	export default content
}
