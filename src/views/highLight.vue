<template>
    <div class="high-light">
        <div id="highLight">{{testData}}</div>
        <button type="button" @click="searchHighLight('highLight','a')">点击查看高亮</button>
        <button type="button" @click="searchHighLight2('highLight','sb')">点击查看高亮2</button>
        <!-- <button @click="highlight('highLight','sb')">点击查看高亮2</button> -->
        <div>{{highlight(testData, 'sb')}}</div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                testData: '旅游,旅行,飞机票,火车票,酒店,住宿,小时房,民宿,客栈,公寓,便宜,打折,查询,预定,预订,助手,app,软件,平台,网站,携程,去哪儿,同程,艺龙,美团,小猪短租,驴妈妈,比特币,以太坊,a,ba,asdf,sbhjfab,sbajaquw,asbckbi'
            };
        },
        methods: {
            searchHighLight(idVal, keyword) {
                let pucl = document.getElementById(idVal);
                if ('' == keyword) {
                    return;
                }

                let temp = pucl.innerHTML;
                let htmlReg = new RegExp('\<.*?\>', 'i');
                let arrA = new Array();
                // 替换HTML标签
                for (let i = 0; true; i++) {
                    let m = htmlReg.exec(temp);
                    if (m) {
                        arrA[i] = m;
                    }
                    else {
                        break;
                    }
                    temp = temp.replace(m, '{[(' + i + ')]}');
                }
                let words = decodeURIComponent(keyword.replace(/\+/g, ' ')).split(/\s+/);
                // 替换关键字
                for (let w = 0; w < words.length; w++) {
                    let r = new RegExp('(' + words[w].replace(/[(){}.+*?^$|\\\[\]]/g, '\\$&') + ')', 'ig');
                    temp = temp.replace(r, '<b style=\'color:Red;\'>$1</b>');
                }
                // 恢复HTML标签
                for (let i = 0; i < arrA.length; i++) {
                    temp = temp.replace('{[(' + i + ')]}', arrA[i]);
                }
                pucl.innerHTML = temp;
            },
            searchHighLight2(idVal, keyword) {
                var content = document.getElementById(idVal).innerHTML;
                var s = keyword;
                var reg = new RegExp('(' + s + ')', 'g');
                var str = content;
                var newstr = str.replace(reg, '<font color=red>$1</font>');
                document.getElementById(idVal).innerHTML = newstr;
            },
            highlight(b, keyword) {
                if (!b) {
                    return '';
                }

                let reg = new RegExp('(?![^&;]+;)(?!<[^<>]*)(' + keyword.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, '\\$1') + ')(?![^<>]*>)(?![^&;]+;)', 'gi');
                return b.replace(reg, '<font color=red>$1</font>');
            }
        }
    };
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