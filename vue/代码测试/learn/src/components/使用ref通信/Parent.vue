<template>
	<div>
		<Child ref="child"></Child>
		<p>child:{{ str }}</p>
		<button @click="say">say</button>
	</div>
</template>

<script>
import Child from "@/components/使用ref通信/Child";

export default {
	name: "Parent",
	components: {
		Child
	},
	data() {
		return {
			str: ''
		}
	},
	mounted() {
		console.log(this.$refs.child, this.$children)
		this.str = this.$refs.child.str + " I am Parent!"
	},
	methods: {
		say() {
			this.$refs.child.say();
		}
	}
}
</script>

<style scoped>

</style>