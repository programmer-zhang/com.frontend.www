<template>
	<div class="csstest">
		<div class="border-image">
			<div class="border-content"></div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		mounted() {

		},
		methods: {

		}
	}
</script>
<style lang="scss">
.csstest {
	.border-image {
		width: 100%;
		border-bottom: 3px solid #000;
		.border-content {
			height: 100px;
			width: 800px;
			border: 30px solid transparent;
			border-image: url(../../static/images/border.png)  30 30 round;
			-moz-border-image:url(../../static/images/border.png) 30 30 round;	/* Old Firefox */
			-webkit-border-image:url(../../static/images/border.png) 30 30 round;	/* Safari and Chrome */
			-o-border-image:url(../../static/images/border.png) 30 30 round;		/* Opera */
		}
	}
}
</style>