<template>
    <div class="tabindex-content">
        <div class="tabindex-title">HTML tabindex的使用</div>
        <button type="button">未设置tabindex</button>
        <button type="button" tabindex="-1">tabindex === -1</button>
        <button type="button" tabindex="0">tabindex === 0</button>
        <button type="button" tabindex="1">tabindex === 1</button>
        <button type="button" tabindex="999">tabindex === 999</button>
        <button type="button" tabindex="0">tabindex === 0</button>
        <button type="button" tabindex="0" @click="clickBtn()">点击让DIV聚焦</button>
        <div id="FocusDiv" ref="FocusDiv" tabindex="-1">这是一个div</div>
    </div>
</template>
<script>
export default {
    methods: {
        clickBtn: function() {
            document.getElementById('FocusDiv').focus();
        }
    }
}
</script>
<style lang="scss">
.tabindex-content {
    .tabindex-title {
        font-weight: bold;
        margin: 20px 0;
    }
    button {
        display: block;
        height: 28px;
        padding: 0 10px;
        margin: 20px auto;
        border: 1px solid #2d8cf0;
        background-color: #fff;
        color: #2d8cf0;
        border-radius: 6px;
        &:focus {
            background-color: #2d8cf0;
            color: #fff;
            outline-color: red;
        }
    }
}
#FocusDiv {
    display: inline-block;
    height: 28px;
    line-height: 28px;
    padding: 0 10px;
    &:focus {
        border: 1px solid #2d8cf0;
        background-color: #2d8cf0;
        color: #fff;
        outline-color: none;
    }
}
</style>