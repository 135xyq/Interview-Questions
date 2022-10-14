<template>
	<div>
		<button @click="add">加法</button>
	</div>
</template>

<script>
import {EventBus} from './eventBus.js' // 引入事件中心

export default {
	data(){
		return{
			num:0
		}
	},
	methods:{
		add(){
			EventBus.$emit('addition', {
				num:this.num++
			})
		}
	}
}
</script>
