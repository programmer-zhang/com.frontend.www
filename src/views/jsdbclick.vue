<template>
    <div class="js-bind-dbclick">
        <button id="eventTarget" class="btn">同时绑定单击双击事件</button>
        <div class="num">事件触发次数:&nbsp;&nbsp;{{num}}</div>
    </div>
</template>
<script>
    let clickTimer = null;
    export default {
        data() {
            return {
                num: 0
            }
        },
        mounted() {
            document.getElementById('eventTarget').addEventListener('click', this.singleClick);
            document.getElementById('eventTarget').addEventListener('dblclick', this.doubleClick);
        },
        methods: {
            singleClick() {
                clearTimeout(clickTimer);
                clickTimer = setTimeout(() => {
                    console.log('执行单击事件');
                    this.num++;
                }, 300);
            },
            doubleClick() {
                console.log('执行双击事件');
                clearTimeout(clickTimer);
                this.num++;
            }
        }
    }
</script>
<style lang="scss">
.js-bind-dbclick {
    margin-top: 30px;
    .btn {
        width: 300px;
        background-color: #666;
        color: #fff;
        padding: 5px 10px;
    }
    .num {
        margin-top: 20px;
    }
}
</style>