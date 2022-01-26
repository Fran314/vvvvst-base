import { createStore } from 'vuex'
import { State } from 'vue'

export default createStore<State>({
	state() {
		return {
			count: 0,
		};
	},
	mutations: {
		increase(state) {
			state.count++
		},
		decrease(state) {
			state.count--;
		}
	}
})