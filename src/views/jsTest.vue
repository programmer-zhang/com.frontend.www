<template>
    <div class="js-test">
        <button @click="filterFalse()">filterFalse</button>
        <button @click="addTen()">addTen</button>
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
    		console.log(returnData);
    		return returnData;
    	},
    	addTen() {
    		let users = [
			    { username: "Kelly", isVIP: true, balance: 20 },
			    { username: "Tom", isVIP: false, balance: 19 },
			    { username: "Stephanie", isVIP: true, balance: 30 }
			];
			let returnData = users.map(
			    user => (user.isVIP ? { ...user, balance: user.balance + 10 } : user)
			);
			console.log(returnData)
    	}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.js-test {
    button {
    	display: block;
    	width: auto;
    	height: 30px;
    	line-height: 30px;
    	margin: 20px;
    	border-radius: 4px;
    }
}
</style>
