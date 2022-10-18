<template>
	<div>
		<p>
			number: {{ number }}
		</p>
		<p>
			{{numberMax}}
		</p>
		<p>
			<button @click="resume">减</button>
		</p>
		<p>
			<button @click="add">加</button>
		</p>
	</div>

</template>

<script>
import {mapActions} from "vuex"
export default {
	name: "Test",
	computed:{
		number:{
			get(){
				return this.$store.state.number;
			}
		},
		numberMax(){
			return this.$store.getters.numberMax;
		}
	},
	methods: {
		...mapActions({
			addNumber:"addNumber",
			reduceNumber:'reduceNumber'
		}),
		add() {
			this.addNumber(1)
		},
		resume() {
			this.$store.dispatch("reduceNumber",2)
		}
	}
}
</script>

<style scoped>

</style>