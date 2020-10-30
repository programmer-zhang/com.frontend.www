<template>
    <div class="copy">
        <div class="copy-panel">
            <label for="clipboard">请输入要粘贴的文字</label>
            <input type="text" id="clipboard"
                v-model="copyData"
                placeholder="请输入文字"
            >
            <button type="primary" @click="copy()">复制文字</button>
        </div>
        <div class="copy-panel">
            <label for="copytext">请点击鼠标右键或者Ctrl+V粘贴</label>
            <input type="text" placeholder="请粘贴" id="copytext">
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                copyData: ''
            };
        },
        methods: {
            copy() {
                if (this.copyData) {
                    let spanSelect = document.querySelector('#clipboard');
                    spanSelect.select();
                    if (document.execCommand('copy')) {
                        document.execCommand('copy');
                        alert('复制成功');
                    }
                    else {
                        alert('复制失败');
                    }
                }
                else {
                    alert('复制失败');
                }
            }
        }
    };
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