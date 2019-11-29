<template>
    <div class="hello">
        <div class="hello-item" v-for="(item, index) in listData">
            <a :href="item.href">{{item.text}}</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listData: [
            {
                href: '/home.html',
                text: 'Home'
            },
            {
                href: '/highLight.html',
                text: 'HighLight'
            },
            {
                href: '/pure.html',
                text: 'Pure'
            },
            {
                href: '/pureModel.html',
                text: 'PureModel'
            },
            {
                href: '/jsTest.html',
                text: 'JsTest'
            },
            {
                href: '/countDown.html',
                text: 'CountDown'
            },
            {
                href: '/copy.html',
                text: 'Copy & Paste'
            },
            {
                href: '/changeDatas.html',
                text: 'ChangeDatas'
            },
            {
                href: '/cssTest.html',
                text: 'CssTest'
            },
            {
                href: '/cssTestPhone.html',
                text: 'CssTestPhone'
            },
            {
                href: '/expendCard.html',
                text: 'ExpendCard'
            },
            {
                href: '/quillEditor.html',
                text: 'QuillEditor'
            },
            {
                href: '/wechat.html',
                text: 'WechatQrCode'
            },
            {
                href: '/tree.html',
                text: 'iView Tree'
            }
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello {
    margin-top: 50px;
    a {
        display: block;
        height: 30px;
        /*line-height: 30px;*/
        margin: 0 auto;
    }
    .hello-item {
        height: 30px;
        line-height: 30px;
        width: 100%;
        text-align: center;
    }
}
</style>
