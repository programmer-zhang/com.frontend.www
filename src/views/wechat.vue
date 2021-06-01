<template>
    <div class="wechat-content">
        <!-- <img src="static/images/qrCode.png"> -->
        <label class="qrcode-label">二维码内容:</label>
        <input type="text" class="qrcode-input" v-model="qrcodeInfo">
        <button type="button" @click="showQrcode()">生成二维码</button>
        <div class="show-qrcode-panel" v-show="showImg">
            <div class="mask"></div>
            <span class="close-btn" @click="closeQrcode()">X</span>
            <div class="qrcode-panel" id="qrcode">
                <span class="qrcode-info">长按识别图中的二维码</span>
            </div>
        </div>
        <div class="canvas-content">
            <label>生成canvas区域</label>
            <div class="html2canvas-conetent" ref="canvasContent">
                <img src="/static/images/canvas.jpg">
                <span>测试Title</span>
            </div>
            <button type="button" @click="showCanvas()">生成canvas图片</button>
        </div>
        <div class="show-canvas-panel" v-if="showCanvasImg">
            <div class="mask"></div>
            <span class="close-btn" @click="closeCanvas()">X</span>
            <div class="canvas-panel">
                <span>长按保存图片</span>
                <img :src="imgUrl" v-if="showCanvasImg">
            </div>
        </div>
    </div>
</template>
<script>
    // import qrCode from 'qrcodejs2'
    import html2canvas from 'html2canvas';
    export default {
        data() {
            return {
                showImg: false,
                qrcodeInfo: '',
                imgUrl: '',
                showCanvasImg: false
            };
        },
        mounted() {},
        methods: {
            showQrcode() {
                this.showImg = true;
                var qrcode = new QRCode(document.getElementById('qrcode'), {
                    text: this.qrcodeInfo,
                    width: 160,
                    height: 160,
                    render: 'canvas',
                    // colorDark : "#000000",
                    // colorLight : "#ffffff",
                    // correctLevel : QRCode.CorrectLevel.H
                });
                // QRCode.makeCode("https://www.xxx.com?did=123456&id=123&userid=456")
                let canvas = document.getElementsByTagName('canvas')[0];
                let img = this.convertCanvasToImage(canvas);
                document.getElementById('qrcode').append(img);
            },
            closeQrcode() {
                // 先清除图片
                let canvas = document.getElementsByTagName('canvas')[0];
                let image = document.getElementsByTagName('img');
                canvas.parentNode.removeChild(canvas);
                for (let item of image) {
                    item.parentNode.removeChild(item);
                }
                this.showImg = false;
            },
            convertCanvasToImage(canvas) {
                // 新建Image对象
                var image = new Image();
                // canvas.toDataURL 返回的是一串Base64编码的URL
                image.src = canvas.toDataURL('image/png');
                image.id = 'qrcodeImg';
                return image;
            },
            showCanvas() {
                let self = this;
                html2canvas(self.$refs.canvasContent).then(function (canvas) {
                    self.imgUrl = canvas.toDataURL();
                    self.showCanvasImg = true;
                });
            },
            closeCanvas() {
                this.showCanvasImg = false;
            },
            dataURLtoBlob(dataurl) {
                let arr = dataurl.split(','),
                    mime = arr[0].match(/:(.*?);/)[1],
                    bstr = atob(arr[1]),
                    n = bstr.length,
                    u8arr = new Uint8Array(n);
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n);
                }
                return new Blob([u8arr], {
                    type: mime
                });
            },
            utf16to8(str) {
                var out,
                    i,
                    len,
                    c;
                out = '';
                len = str.length;
                for (i = 0; i < len; i++) {
                    c = str.charCodeAt(i);
                    if ((c >= 0x0001) && (c <= 0x007F)) {
                        out += str.charAt(i);
                    }
                    else if (c > 0x07FF) {
                        out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                        out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                    }
                    else {
                        out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                    }
                }
                return out;
            }
        }
    };
</script>
<style lang="scss">
.wechat-content {
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    .qrcode-label {
        margin-right: 10px;
        font-size: 16px;
        color: #333;
    }
    .qrcode-input {
        height: 30px;
        line-height: 20px;
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid #e8e8e8;
        border-radius: 5px;
    }
    button {
        width: 100%;
        height: 30px;
        line-height: 30px;
        margin-top: 20px;
        background-color: #11EEEE;
        border-radius: 5px;
        border: none;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
    }
    #qrcodeImg {
        z-index: 10;
    }
    .show-qrcode-panel {
        position: fixed;
        top: 50px;
        left: 0;
        width: 100%;
        .mask {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0, .5);
        }
        .close-btn {
            position: absolute;
            right: 20px;
            width: 30px;
            height: 30px;
            line-height: 30px;
            border-radius: 50%;
            color: #000;
            font-weight: bold;
            font-size: 20px;
            background-color: #fff;
        }
        .qrcode-panel {
            position: absolute;
            left: 50%;
            width: 250px;
            height: 300px;
            margin-left: -125px;
            margin-top: 50px;
            padding-top: 80px;
            background-color: #fff;
            box-sizing: border-box;
            border-radius: 5px;
            .qrcode-info {
                position: absolute;
                top: 20px;
                left: 50%;
                display: block;
                margin-left: -80px;
                height: 30px;
                line-height: 30px;
                font-weight: bold;
                color: #333;
            }
            img {
                position: absolute;
                top: 80px;
                left: 50%;
                margin-left: -80px;
            }
        }
    }
    .canvas-content {
        margin-top: 30px;
    }
    .html2canvas-conetent {
        position: relative;
        margin-top: 30px;
        span {
            display: inline-block;
            position: absolute;
            top: 10px;
            left: 80px;
            color: #fff;
            font-weight: bold;
            font-size: 16px;
        }
        img {
            display: inline-block;
            width: 70%;
        }
    }
    .show-canvas-panel {
        position: fixed;
        top: 50px;
        left: 0;
        width: 100%;
        .canvas-panel {
            position: absolute;
            top: 50px;
            left: 50%;
            margin-left: -45%;
            width: 90%;
            padding: 20px;
            box-sizing: border-box;
            background-color: #fff;
            border-radius: 5px;
            img {
                width: 80%;
            }
        }
        .mask {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0, .5);
        }
        .close-btn {
            position: absolute;
            right: 20px;
            width: 30px;
            height: 30px;
            line-height: 30px;
            border-radius: 50%;
            color: #000;
            font-weight: bold;
            font-size: 20px;
            background-color: #fff;
        }

    }	
}
</style>