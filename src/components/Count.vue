<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data() {
		return {
		}
	}
});
</script>

<template>
	<p>
		<code>count</code>
		is: {{ $store.state.count }}
	</p>
	<p>
		<router-link to="/">Go back</router-link>
	</p>
</template>
