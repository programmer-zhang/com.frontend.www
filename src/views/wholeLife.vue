<template>
	<div class="whole-life">
		<div class="logo-panel">
			<div class="center-side">
				<div class="item-panel" v-for="(item, index) in 3"></div>
			</div>
			<div class="logo-content"></div>
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
		height: 540px;
		width: 820px;
		background-color: rgb(249,84,31);
		.logo-content {
			position: absolute;
			left: 50%;
			top: 50%;
			margin-top: -150px;
			margin-left: -100px;
			width: 200px;
			height: 300px;
			background-color: #fff;
		}
		.center-side {
			position: absolute;
			left: -150px;
			height: 210px;
			width: 200%;
			background-color: #000;
			transform:rotate(-33deg);
			.item-panel {
				height: 70px;
				background-color: #fff;
				&:first-of-type {
					background-color: #000;
				}
				&:nth-of-type(2n) {
					background-color: rgb(249,84,31);
				}				
				&:last-of-type {
					background-color: #fff;
				}				
			}
		}
	}
}
</style>