<template>
	<div class="home">
		{{msg}}
	</div>
</template>
<script>
	export default{
		data: function(){
			return {
				msg: '这是home文件',
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