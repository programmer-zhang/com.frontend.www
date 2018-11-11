<template>
	<div class="csstest">
		<div class="border-image">
			<div class="border-content border-round">在这里，图片铺满整个边框。</div>
			<div class="border-content border-stretch">在这里，图片被拉伸以填充该区域。</div>
		</div>
		<div class="css-border"></div>
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
		<div class="css-border"></div>
		<div class="triangle-content">
			<div class="square">
				<p>一个正儿八经的正方形</p>
				<span></span>
			</div>
			<div class="left-triangle">
				<p>一个朝左的三jio</p>
				<span></span>
			</div>
			<div class="top-triangle">
				<p>一个朝上的三jio</p>
				<span></span>
			</div>
			<div class="bottom-triangle">
				<p>一个朝下的三jio</p>
				<span></span>
			</div>
			<div class="right-triangle">
				<p>一个朝右的三jio</p>
				<span></span>
			</div>
			<div class="circle">
				<p>一个圆不拉几的圆</p>
				<span></span>
			</div>
			<div class="left-top-circle">
				<p>一个左上的圆</p>
				<span></span>
			</div>
			<div class="right-top-circle">
				<p>一个右上的圆</p>
				<span></span>
			</div>
			<div class="right-bottom-circle">
				<p>一个左下的圆</p>
				<span></span>
			</div>								
		</div>

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
	.css-border {
		width: 100%;
		border-bottom: 3px solid #000;
	}
	.border-image {
		width: 100%;
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
	.triangle-content {
		display: flex;
		div {
			width: 200px;
			margin-left: 15px;
			text-align: center;
			span {
				display: inline-block;
			}
		}
		.square {
			span {
				width: 50px;
				height: 50px;
				background-color: red;
			}
		}
		.left-triangle {
			span {
				width: 0;
				height: 0;
				border-top: 50px solid transparent;
				border-bottom: 50px solid transparent;
				border-right: 50px solid red;
			}
		}
		.top-triangle {
			span {
				width: 0;
				height: 0;
				border-left: 50px solid transparent;
				border-bottom: 50px solid red;
				border-right: 50px solid transparent;
			}
		}	
		.right-triangle {
			span {
				width: 0;
				height: 0;
				border-top: 50px solid transparent;
				border-bottom: 50px solid transparent;
				border-left: 50px solid red;
			}
		}	
		.bottom-triangle {
			span {
				width: 0;
				height: 0;
				border-right: 50px solid transparent;
				border-left: 50px solid transparent;
				border-top: 50px solid red;
			}
		}	
		.circle {
			span {
				width: 50px;
				height: 50px;
				border-radius: 50%;
				background-color: red;
			}
		}
		.left-top-circle {
			span {
				width: 50px;
				height: 50px;
				border-radius: 50px 0 0 0;
				background-color: red;
			}
		}
		.right-top-circle {
			span {
				width: 50px;
				height: 50px;
				border-radius: 0 50px 0 0;
				background-color: red;
			}
		}
		.right-bottom-circle {
			span {
				width: 50px;
				height: 50px;
				border-radius: 0 0 50px 0;
				background-color: red;
			}
		}
	}
}
</style>