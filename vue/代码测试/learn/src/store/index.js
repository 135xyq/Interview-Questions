import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		number:0
	},
	mutations: {
		addNumber(state,payload){
			state.number+=payload;
		},
		reduceNumber(state,payload){
			this.state.number-=payload
		}
	},
	getters:{
		numberMax(state){
			return Math.pow(state.number,2)
		}
	},
	actions: {
		addNumber({commit},payload){
			commit("addNumber",payload)
		},
		reduceNumber({commit},payload){
			commit("reduceNumber",payload)
		}
	},
	modules: {
	}
})
