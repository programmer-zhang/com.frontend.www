<template>
	<div class="bottom-tip">
		<div class="recommand-float" ref="floatConetnt" @click="spread()">
			<div class="float-image" style="background-image: url(../../static/images/TSBJ.png)"></div>
			<span class="float-triangle"></span>
		</div>
		<div class="recommand-content" ref="recommandContent">
			<div class="container">
				<div class="recommand-image" style="background-image: url(../../static/images/largesolgan.jpeg)"></div>
				<div class="qrcode-panel">
					<span class="qrcode-triangle"></span>
					<span class="qrcode-title">扫一扫</span>
					<span class="qrcode-image" style="background-image: url(../../static/images/GitHub.png)" @mouseover="showTip()" @mouseleave="showTip()"></span>
					<div class="tip-content" v-if="showBigImage">
						<div class="tip-image" style="background-image: url(../../static/images/GitHub.png)"></div>
					</div>
				</div>
				<div class="close" @click="close()"></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data:function() {
			return {
				showBigImage:false,
			}
		},
		mounted:function() {
		},
		methods: {
			showTip:function() {
				this.showBigImage = !this.showBigImage
			},
			close:function() {
				let self = this;
				this.$refs.recommandContent.style.left = '-100%';
				this.$refs.recommandContent.addEventListener("transitionend", self.transformContent(self.$refs.floatConetnt));
			},
			spread:function() {
				let self = this;
				this.$refs.floatConetnt.style.left = '-100%';
				this.$refs.floatConetnt.addEventListener("transitionend", self.transformContent(self.$refs.recommandContent));
			},
			transformContent:function(handler) {
				handler.style.left = '0px';
			},
		}
	}
</script>
<style lang="scss">
.bottom-tip {
	position: fixed;
	bottom: 0;
	left: 0;
	height: 100px;
	width: 100%;
	z-index: 3;
	.recommand-float {
		position: relative;
		left: -100%;
		bottom: 50px;
		width: 140px;
		height: 100px;
		background-color: rgba(0,0,0,.8);
		border-top-right-radius: 140px;
		border-bottom-right-radius: 140px;
		transition: left 0.5s ease-out;
		.float-image {
			position: absolute;
			top: 5px;
			left: 10px;
			width: 90px;
			height: 90px;
			border-radius: 50%;
			background-color: #fff;
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
		}
		.float-triangle {
			position: absolute;
			right: 10px;
			top: 50%;
			margin-top: -13px;
			width: 0;
			height: 0;
			border-bottom: 13px solid transparent;
			border-top: 13px solid transparent;
			border-left: 10px solid #F2DCAD;
			cursor: pointer;
		}
	}
	.recommand-content {
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 100px;
		background-color: rgba(0,0,0,.8);
		transition: left 0.5s ease-in;
	}
	.recommand-image {
		position: absolute;
		left: 0px;
		bottom: -100px;
		height: 140px;
		width: 80%;
		border-radius: 8px;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
	.qrcode-panel {
		position: absolute;
		top: -20px;
		right: 70px;
		height: 120px;
		width: 110px;
		background-color: #575D5F;
		text-align: center;
		.tip-content {
			position: absolute;
			top: -270px;
			left: -70px;
			width: 260px;
			height: 260px;
			padding: 10px;
			box-sizing: border-box;
			background-color: #fff;
			border-radius: 10px;
			.tip-image {
				width: 100%;
				height: 100%;
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;
			}
		}
		.qrcode-title {
			font-size: 14px;
			color: #FCF2D6;
			line-height: 30px;
		}
		.qrcode-image {
			display: inline-block;
			width: 80px;
			height: 80px;
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
		}
		.qrcode-triangle {
			position: absolute;
			right: -15px;
			top: 5px;
			width: 0;
			height: 0;
			border-left: 20px solid #ff5a5f;
			border-bottom: 10px solid transparent;
			transform: rotate(270deg);
			-ms-transform:rotate(270deg); 	/* IE 9 */
			-moz-transform:rotate(270deg); 	/* Firefox */
			-webkit-transform:rotate(270deg); /* Safari 和 Chrome */
			-o-transform:rotate(270deg); 	/* Opera */
		}
	}
	.close {
		float: right;
		margin-top: 35px;
		height: 35px;
		width: 35px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		background-image: url('https://webimg.baichanghui.com/%E5%85%B3%E9%97%AD@3x.png');
		cursor: pointer;
	}
}
</style>