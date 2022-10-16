<template>
	<div>
		<FirstCom></FirstCom>
		<SecondCom></SecondCom>
		<third-com></third-com>
	</div>
</template>
<script>
import FirstCom from "@/components/事件总线/FirstCom";
import SecondCom from "@/components/事件总线/secondCom";
import thirdCom from "@/components/事件总线/thirdCom";
export default {
  components: {
	  FirstCom,
	  SecondCom,
	  thirdCom
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="less">

</style>
