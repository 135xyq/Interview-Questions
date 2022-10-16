<template>
	<div>
		<p>num: {{data}}</p>
		<p>
			<button @click="add">+</button>
		</p>
	</div>
</template>

<script>
import {EventBus} from "@/components/事件总线/eventBus";

export default {
	name: "thirdCom",
	data() {
		return {
			data: 0
		}
	},
	mounted(){
		EventBus.$on("addition",par=>{
			this.data = par.num;
		})
	},
	methods:{
		add(){
			EventBus.$emit("addition",{
				num:this.data+1
			})
		}
	}
}
</script>

<style scoped>

</style>