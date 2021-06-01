<template>
	<div class="changData" v-if="showList && showList.length">
		<div class="changeData-item" 
			v-for="item in showList"
			:key="item.color"
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
				showList: []
			}
		},
		mounted() {
			this.getRandomArray(this.dataList, 3)
		},
		methods: {
			getRandomArray(arr,num){
				var newArr = [];
				for(var item in arr){
					newArr.push(arr[item]);
				}
				var randomArray=[];
				for(var i = 0;i < num;i++){
					if(newArr.length>0){
						var arrIndex = Math.floor(Math.random()*newArr.length);
						randomArray[i]= newArr[arrIndex];
						newArr.splice(arrIndex,1);
					}else{
						break;
					}
				}
				this.showList = randomArray;
			},					
			changeData() {
				this.getRandomArray(this.dataList, 3)
			}
		}
	}
</script>
<style lang="scss">
.changData {
	display: flex;
	width: 1100px;
	margin: 0 auto;
	justify-content: space-between;
	font-size: 14px;
	color: #ff556e;
	.changeData-item{
		width: 200px;
		height: 50px;
		line-height: 50px;
		border: 1px solid #000;
	}
}
</style>