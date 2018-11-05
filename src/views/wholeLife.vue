<template>
	<div class="whole-life">
		<div class="logo-panel">
			<div class="left-side"></div>
			<!-- <div class="logo-content"></div> -->
			<div class="right-side"></div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>
<style lang="scss">
.whole-life {
	overflow: hidden;
	background-color: black;
	.logo-panel {
		position: relative;
		margin: 0 auto;
		height: 600px;
		width: 900px;
		background-color: #fff;
		.logo-content {
			position: absolute;
			left: 50%;
			top: 50%;
			margin-top: -150px;
			margin-left: -150px;
			width: 300px;
			height: 300px;
			background-color: rgb(249,84,31);
			border-radius: 50%;
		}
		.left-side, .right-side {
			
		}
	}
}
</style>