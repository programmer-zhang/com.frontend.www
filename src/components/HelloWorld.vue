<template>
    <div class="hello">
        <div class="hello-item" v-for="(item, index) in routerListData">
            <a :href="item.path">{{item.showInfo||item.name}}</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            routerListData: []
        }
    },
    mounted() {
        if (this.$router
            && this.$router.options
            && this.$router.options.routes
            && this.$router.options.routes.length) {
            this.routerListData = this.$router.options.routes;
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
