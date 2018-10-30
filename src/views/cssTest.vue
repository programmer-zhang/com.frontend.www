<template>
	<div class="csstest">
		<div class="border-image">
			<div class="border-content border-round">在这里，图片铺满整个边框。</div>
			<div class="border-content border-stretch">在这里，图片被拉伸以填充该区域。</div>
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
			line-height: 100px;
			border: 30px solid transparent;
		}
		.border-round {
			border-image: url(../../static/images/border.png)  30 30 round;
			-moz-border-image:url(../../static/images/border.png) 30 30 round;	/* Old Firefox */
			-webkit-border-image:url(../../static/images/border.png) 30 30 round;	/* Safari and Chrome */
			-o-border-image:url(../../static/images/border.png) 30 30 round;		/* Opera */
		}
		.border-stretch {
			border-image: url(../../static/images/border.png)  30 30 stretch;
			-moz-border-image:url(../../static/images/border.png) 30 30 stretch;	/* Old Firefox */
			-webkit-border-image:url(../../static/images/border.png) 30 30 stretch;	/* Safari and Chrome */
			-o-border-image:url(../../static/images/border.png) 30 30 stretch;		/* Opera */
		}
	}
}
</style>