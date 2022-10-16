<template>
	<div>
		<p>
			{{ str }}
		</p>
		<p>{{ parentStr }}</p>
	</div>
</template>

<script>
export default {
	name: "Child",
	data() {
		return {
			str: "I am Child!"
		}
	},
	methods: {
		say() {
			alert("hello world!")
		}
	},
	computed: {
		parentStr() {
			return this.$parent.str
		}
	}
}
</script>

<style scoped>

</style>