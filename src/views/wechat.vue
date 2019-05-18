<template>
	<div class="wechat-content">
		<!-- <img src="static/images/qrCode.png"> -->
		<button @click="showQrcode()">生成二维码</button>
		<div id="qrcode"></div>
	</div>
</template>
<script>
	// import qrCode from 'qrcodejs2'
	export default {
		data() {
			return {

			}
		},
		mounted() {

		},
		methods: {
			showQrcode() {
				var qrcode = new QRCode(document.getElementById("qrcode"), {
					text: "https://www.qingyidai.com",
					width: 160,
					height: 160,
					render: 'canvas',
					// colorDark : "#000000",
					// colorLight : "#ffffff",
					// correctLevel : QRCode.CorrectLevel.H
				});
				qrcode.makeCode("https://www.qingyidai.com?did=123456&id=123&userid=456")
				var canvas=document.getElementsByTagName('canvas')[0];
			    var img = this.convertCanvasToImage(canvas);
			    console.log(canvas)
			    console.log(img)
			    document.getElementById("qrcode").append(img);
			},
			dataURLtoBlob(dataurl) {
			    let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
			        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
			    while(n--){
			        u8arr[n] = bstr.charCodeAt(n);
			    }
			    return new Blob([u8arr], {type:mime});
			},
			convertCanvasToImage(canvas) {
				//新建Image对象
				var image = new Image();  
				// canvas.toDataURL 返回的是一串Base64编码的URL
				image.src = canvas.toDataURL("image/png");  
				return image;  
		    },
		    utf16to8(str) {
		        var out, i, len, c;
		        out = "";
		        len = str.length;
		        for (i = 0; i < len; i++) {
		            c = str.charCodeAt(i);
		            if ((c >= 0x0001) && (c <= 0x007F)) {
		                out += str.charAt(i);
		            } else if (c > 0x07FF) {
		                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
		                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
		                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
		            } else {
		                out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
		                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
		            }
		        }
		        return out;
		    }
		}
	}
</script>
<style lang="scss">
.wechat-content {
	canvas {
		/*display: block!important;*/
	}
	img {
		/*display: none!important;*/
	}
}
</style>