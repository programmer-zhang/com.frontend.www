<template>
	<div class="changData">
		<div class="changeData-item" 
			v-if="dataList && dataList.length>0"
			v-for="(item, index) in dataList"
			:style="{'backgroundColor': item.color}">
			<span>{{item.text}}</span>
		</div>
		<button @click="changeData()">换一换</button>
	</div>
</template>
<script>
	export default{
		data: function(){
			return {
				dataList:[{
					color: 'red',
					text:'这是dataList的第一个'
				},{
					color: 'green',
					text:'这是dataList的第二个'
				},{
					color: 'blue',
					text:'这是dataList的第三个'
				},{
					color: 'white',
					text:'这是dataList的第四个'
				},{
					color: 'black',
					text:'这是dataList的第五个'
				},{
					color: 'orange',
					text:'这是dataList的第六个'
				}],
			}
		},
		methods: {
			changeData() {

			}
		}
	}
</script>
<style lang="scss">
.changData {
	font-size: 14px;
	color: #ff556e;
	.changeData-item{
		width: 200px;
		height: 50px;

	}
}
</style>