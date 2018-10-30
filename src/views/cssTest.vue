<template>
	<div class="csstest">
		<div class="border-image">
			<div class="border-content border-round">在这里，图片铺满整个边框。</div>
			<div class="border-content border-stretch">在这里，图片被拉伸以填充该区域。</div>
		</div>
		<table>
			<thead>
				<tr>
					<td>值</td>
					<td>描述</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in explainData">
					<td>{{item.name}}</td>
					<td>{{item.desc}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				explainData: [{
					name: 'border-image-source',
					desc: '用在边框的图片的路径。'
				},{
					name: 'border-image-slice',
					desc: '图片边框向内偏移。'
				},{
					name: 'border-image-width',
					desc: '图片边框的宽度。'
				},{
					name: 'border-image-outset',
					desc: '边框图像区域超出边框的量。'
				},{
					name: 'border-image-repeat',
					desc: '图像边框是否应平铺(repeated)、铺满(rounded)或拉伸(stretched)。'
				},]
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
			margin: 0 auto;
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
	table {
		margin: 0 auto;
		tbody {

		}
		tr, td {
			padding: 10px 20px;
			text-align: left;
			border: 1px solid #dfdfdf;
		}
	}
}
</style>