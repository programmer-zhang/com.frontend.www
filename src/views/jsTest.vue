<template>
    <div class="js-test">
        <button @click="filterFalse()">filterFalse</button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
    },
    methods: {
    	filterFalse() {
    		let array = [3, 4, 5, 2, 3, undefined, null, 0, ""];
    		let returnData = array.filter(Boolean);
    		return returnData;
    		console.log(returnData);
    	}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.js-test {
    button {
    	width: auto;
    	height: 30px;
    	line-height: 30px;
    	margin: 20px;
    	border-radius: 4px;
    }
}
</style>
