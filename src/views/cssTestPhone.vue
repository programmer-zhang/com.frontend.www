<template>
    <div class="css-test-phone">
        <div class="css-overflow">
            <div class="demo">
                <div class="text">
                    这是一段较长的文字一二三四五六七八九十这是一段较长的文字一二三四五六七八九十
                    这是一段较长的文字一二三四五六七八九十这是一段较长的文字一二三四五六七八九十
                    这是一段较长的文字一二三四五六七八九十这是一段较长的文字一二三四五六七八九十
                    这是一段较长的文字一二三四五六七八九十这是一段较长的文字一二三四五六七八九十
                    这是一段较长的文字一二三四五六七八九十这是一段较长的文字一二三四五六七八九十
                </div>
            </div>
        </div>    
    </div>
</template>
<style lang="scss">
.css-test-phone {
    .css-overflow {
        .demo {
            max-height: 80px;
            line-height: 20px;
            text-align: left;
            background-color: #099;
            overflow: hidden;
        }
        .demo::before{
            float: left;
            content:'';
            width: 20px;
            height: 80px;
        }
        .demo .text {
            float: right;
            width: 100%;
            margin-left: -20px;
            word-break: break-all;
        }
        .demo::after{
            float:right;
            content:'...';
            width: 20px;
            height: 20px;
            position: relative;
            left:100%;
            background-color: red;
            transform: translate(-100%,-100%);
        }
    }
}
</style>
<script>
</script>