<template>
	<div class="wg-scroll">
		<div class="mask"></div>
		<div class="scroll-content">
			<div class="scroll-button">
				<span class="cancel" @click="cancel()">取消</span>
				<span class="confirm" @click="confirm()">确定</span>
			</div>
			<template v-if="swiperData && swiperData.length">
				<div class="scroll-panel" 
					v-for="item in swiperData"
					:key="item"
					:index="index"
					:class="{'swiper-half': swiperData.length == 2, 'swiper-whole': swiperData.length == 1, 'swiper-right' :index == 1, 'swiper-left' :index == 0}">
					<div class="swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide" v-for="subItem in item" :key="subItem">
								<span class="swiper-title">{{subItem}}</span>
							</div>
						</div>
					</div>	
				</div>
			</template>
		</div>
	</div>
</template>
<script>
	import swiper from './swiper/index.js';
	export default {
		// 传参：为数组类型，单项选择滑动就传入length=1的数组，双项选择滑动就传入length=2的数组。
		// 返回数据：hideScrollPanel：关闭窗口； scrollPanelData: 选择数据； 
		// 最多支持双项滑动
		// 单项滑动传参示例
		// swiperData: [
		// 	['今天', '明天', '后天', '第四天', '第五天', '第六天']
		// ]
		// 双项滑动传参示例
		// swiperData: [
		// 	['今天', '明天', '后天', '第四天', '第五天', '第六天'],
		// 	['全天(00:00-24:00)', '下午(12:00-18:00)', '晚上(18:00-24:00)', '测试数据', '测试数据']
		// ]
		props: ['swiperData'],
		data() {
			return {
				swiperClassNameMap: ['swiper-left', 'swiper-right'],
				scrollPanelData: [],
				firstSwiperIndex: 0,
				secondSwiperIndex: 0,
			}
		},
		mounted() {
			this.handleData();
		},
		methods: {
			handleData() {
				if (this.swiperData && this.swiperData.length>0) {
					this.initFirstSwiper(0)
					this.initSecondSwiper(1)
				}
			},
			initFirstSwiper(index) {
				let self = this;
				setTimeout(function(){
				    var firstSwiper = new Swiper(`.${self.swiperClassNameMap[index]} .swiper-container`, {
						loop: false,
						direction : 'vertical',
		                effect : 'coverflow',
		                grabCursor: true,
				        centeredSlides: true,
				        slidesPerView: 'auto',
						coverflow: {  
				            rotate: 50,// 旋转的角度  
				            stretch: 20,// 拉伸   图片间左右的间距和密集度  
				            depth: 300,// 深度   切换图片间上下的间距和密集度  
				            modifier: 1,// 修正值 该值越大前面的效果越明显  
				            slideShadows : false// 页面阴影效果  
				        },
						onTransitionEnd:function(firstSwiper){
					    	// console.log('第一个',firstSwiper.realIndex)
					     	self.firstSwiperIndex = firstSwiper.realIndex;
					 	},		        
				    });
			 	},200)
			},
			initSecondSwiper(index) {
				let self = this;
				setTimeout(function(){
				    var secondSwiper = new Swiper(`.${self.swiperClassNameMap[index]} .swiper-container`, {
						loop: false,
						direction : 'vertical',
		                effect : 'coverflow',
		                grabCursor: true,
				        centeredSlides: true,
				        slidesPerView: 'auto',
						coverflow: {  
				            rotate: 50,// 旋转的角度  
				            stretch: 20,// 拉伸   图片间左右的间距和密集度  
				            depth: 300,// 深度   切换图片间上下的间距和密集度  
				            modifier: 1,// 修正值 该值越大前面的效果越明显  
				            slideShadows : false// 页面阴影效果  
				        },
						onTransitionEnd:function(secondSwiper){
					    	// console.log('第二个',secondSwiper.realIndex)
					     	self.secondSwiperIndex = secondSwiper.realIndex;
					 	},				        
				    });
			 	},200)				
			},
			cancel() {
				let data = {
					showScrollPanel: false,
				};				
				this.$emit('scrollPanelData', data);
			},
			confirm() {
				let data = {
					showScrollPanel: false,
					firstPanel: this.swiperData[0][this.firstSwiperIndex],
					lastPanel: this.swiperData[1]?this.swiperData[1][this.secondSwiperIndex]:''
				};
				// console.log(data)
				this.$emit('scrollPanelData', data);
			}
		},
		watch: {
			swiperData() {
				this.handleData();
			}
		}
	}
</script>
<style lang="sass">
@import './swiper/swiper.css';
.wg-scroll {
	.mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.4);
	}
	.scroll-content {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 200px;
		background-color: #fff;
		.scroll-button {
			width: 100%;
			padding: 0 10px;
			box-sizing: border-box;
			span {
				display: inline-block;
				width: 50%;
				height: 30px;
				line-height: 30px;
				font-size: 16px;
			}
			.cancel {
				color: #666;
			}
			.confirm {
				text-align: right;
				color: red;
			}
		}
	}
	.swiper-whole {
		width: 100%;
	}
	.swiper-half {
		width: 50%;
		float: left;
	}
	.swiper-right {
		.swiper-wrapper {
		}		
	}
	.scroll-panel {
		height: 160px;
		overflow: hidden;
		.swiper-container {
			width: 100%;
			text-align: center;
			.swiper-wrapper {
				min-height: 200px;
				max-height: 200px;
				touch-action: none;
			}
			.swiper-title {
				display: inline-block;
				width: 85%;
				height: 40px;
				line-height: 40px;
				background-color: #fff;
				text-align: center;
				font-size: 14px;
				border-top: 1px solid #666;
				border-bottom: 1px solid #666;
			}
		}
	}
}
</style>