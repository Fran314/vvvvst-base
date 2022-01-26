<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
		}
	},
});
</script>

<template>
	<div class="display">
		<img alt="Vue logo" src="/vuejs.png" />
		<img alt="Vite logo" src="/vitejs.svg" />
		<img alt="Sass logo" src="/sass.svg" />
		<img alt="Typescript logo" src="/typescript.svg" />
	</div>
	<h1>
		<a href="https://v3.vuejs.org/" target="_blank">Vue3.js</a>
		+
		<a href="https://vitejs.dev/" target="_blank">Vite.js</a>
		+
		<a href="https://next.vuex.vuejs.org/" target="_blank">Vuex4</a>
		+
		<a href="https://router.vuejs.org/" target="_blank">Vue-Router</a>
		+
		<a href="https://sass-lang.com/" target="_blank">Sass</a>
		+
		<a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>
	</h1>

	<p>
		See how the store value
		<code>count</code> changes on
		<router-link to="/count">this</router-link>
		page with these buttons
	</p>
	<button type="button" @click="$store.commit('increase')">Increase</button>
	<button type="button" @click="$store.commit('decrease')">Decrease</button>
</template>

<style lang="scss">
.display {
	margin: 0 auto;
	width: fit-content;
	display: grid;
	grid-template-columns: repeat(4, 12rem);
	align-items: center;

	img {
		width: 10rem;
		justify-self: center;
	}
}
</style>