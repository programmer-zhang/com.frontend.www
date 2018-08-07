<template>
	<div class="high-light" id="highLight">
		<div>{{testData}}</div>
		<button @click="searchHighLight('highLight','旅')">点击查看高亮</button>
	</div>
</template>
<script>
	export default {
		data: function(){
			return {
				testData: '旅游,旅行,飞机票,火车票,五星级,酒店,住宿,小时房,民宿,客栈,公寓,便宜,打折,查询,预定,预订,助手,app,软件,平台,网站,携程,去哪儿,同程,艺龙,美团,小猪短租,驴妈妈,比特币,以太坊',
			}
		},
		methods: {
			searchHighLight:function(idVal, keyword) {
				var pucl = document.getElementById(idVal);
	            if ("" == keyword) return;
	            var temp = pucl.innerHTML;
	            var htmlReg = new RegExp("\<.*?\>", "i");
	            var arrA = new Array();
	            //替换HTML标签
	            for (var i = 0; true; i++) {
	                var m = htmlReg.exec(temp);
	                if (m) {
	                    arrA[i] = m;
	                }
	                else {
	                    break;
	                }
	                temp = temp.replace(m, "{[(" + i + ")]}");
	            }
	            debugger
	            words = decodeURIComponent(keyword.replace(/\+/g, ' ')).split(/\s+/);
	            //替换关键字
	            for (w = 0; w < words.length; w++) {
	                var r = new RegExp("(" + words[w].replace(/[(){}.+*?^$|\\\[\]]/g, "\\$&") + ")", "ig");
	                temp = temp.replace(r, "<b style='color:Red;'>$1</b>");
	            }
	            //恢复HTML标签
	            for (var i = 0; i < arrA.length; i++) {
	                temp = temp.replace("{[(" + i + ")]}", arrA[i]);
	            }
	            pucl.innerHTML = temp;
	            //写入iframe
	            /*
	            var iframe = document.getElementById('iframe1');
	            iframe.contentDocument.body.innerHTML = temp;
	            */
			}
		}
	}
</script>
<style lang="scss">
.high-light {
	color: #000;
	button {
		display: block;
		height: 50px;
		line-height: 50px;
		padding: 0 10px;
		margin: 0 auto;
		border-radius: 4px;
		background-color: #dfdfdf;
	}
}
</style>