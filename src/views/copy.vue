<template>
	<div class="copy">
		<div class="copy-panel">
			<span>请输入要粘贴的文字</span>
			<input type="text" id="clipboard" v-model="copyData" placeholder="请输入文字">
			<button @click="copy()">复制文字</button>
		</div>
		<div class="copy-panel">
			<span>请点击鼠标右键或者Ctrl+V粘贴</span>
			<input type="text" placeholder="请粘贴">
		</div>
	</div>
</template>
<script>
	export default {
		data:function() {
			return {
				copyData: '',
			}
		},
		methods: {
			copy:function() {
				let data = '';
				if(this.copyData) {
					let spanSelect = document.querySelector('#clipboard');
					spanSelect.select();
					if(document.execCommand('copy')) {
						document.execCommand('copy');
						alert('复制成功');
					} else {
						alert('复制失败');
					}
				} else {
					alert('复制失败');
				}
			}
		}
	}
</script>
<style lang="scss">
.copy {
	.copy-panel {
		margin: 10px 0px;
		font-size: 14px;
		span {
			color: #333;
			font-weight: bold;
		}
		input {
			height: 30px;
			width: 200px;
			line-height: 30px;
			border: 1px solid #dfdfdf;
		}
		button {
			height: 30px;
			width: 200px;
			color: #fff;
			font-weight: bold;
			background-color: #ff556e;
			border: none;
		}
	}
}
</style>