<template>
    <div class="tabindex-content">
        <div class="tabindex-title">HTML tabindex的使用</div>
        <button type="button">未设置tabindex</button>
        <button type="button" tabindex="-1">tabindex === -1</button>
        <button type="button" tabindex="0">tabindex === 0</button>
        <button type="button" tabindex="999">tabindex === 999</button>
        <button type="button" tabindex="1">tabindex === 1</button>
        <button type="button" tabindex="0">tabindex === 0</button>
        <button type="button" tabindex="100">tabindex === 100</button>
        <button type="button" tabindex="90">tabindex === 90</button>
        <button type="button" tabindex="101">tabindex === 101</button>
        <button type="button" tabindex="0" @click="clickBtn()">点击让DIV聚焦</button>
        <div id="FocusDiv" tabindex="-1">这是一个div</div>
        <!-- 后续部分是模拟JS点击使用 -->
        <div class="tabindex-title">JS 模拟点击事件</div>
        <button type="button" id="SimulateClickDom" @click="simulateClick()">一个普通的按钮</button>
        <a href="https://www.baidu.com" id="SimulateADom">这是一个跳转百度首页的a标签</a>
    </div>
</template>
<script>
export default {
    methods: {
        clickBtn() {
            document.getElementById('FocusDiv').focus();
        },
        simulateClick() {
            alert('点击了当前DOM节点');
        }
    }
};
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
        &:hover {
            background-color: #2d8cf0;
            color: #fff;
        }
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