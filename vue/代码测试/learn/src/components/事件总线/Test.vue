<template>
	<div>
		<FirstCom></FirstCom>
		<SecondCom></SecondCom>
	</div>
</template>
<script>
import FirstCom from "@/components/事件总线/FirstCom";
import SecondCom from "@/components/事件总线/secondCom";
export default {
  components: {
	  FirstCom,
	  SecondCom
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="less">

</style>
