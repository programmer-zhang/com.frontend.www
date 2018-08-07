<template>
	<div class="home">
		{{msg}}
		<div v-for="(item, index) in days">{{index}}</div>
	</div>
</template>
<script>
	export default{
		data: function(){
			return {
				msg: '这是home文件',
				days: 6
			}
		}
	}
</script>
<style>
.home {
	font-size: 30px;
	color: red;
}
</style>