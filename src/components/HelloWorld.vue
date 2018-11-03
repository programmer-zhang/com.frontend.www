<template>
    <div class="hello">
        <div class="hello-item">
            <a href="/home.html">Home</a>
        </div>
        <a href="/highLight.html">HighLight</a>
        <a href="/pure.html">Pure</a>
        <a href="/pure-model.html">PureModel</a>
        <a href="/js-test.html">JsTest</a>
        <a href="/count-down.html">countDown</a>
        <a href="/copy.html">copy&paste</a>
        <a href="/changeDatas.html">changeDatas</a>
        <a href="/cssTest.html">cssTest</a>
    </div>
</template>

<script>
export default {
    data() {
        return {

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
        line-height: 30px;
        margin: 0 auto;
    }
    .hello-item {
        height: 200px;
        width: 100px;
        
    }
}
</style>
