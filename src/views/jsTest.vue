<template>
    <div class="js-test">
        <button @click="filterFalse()">filterFalse</button>
        <button @click="addTen()">addTen</button>
        <div class="time-out">
            <span>剩余时间为：</span>
            <span>{{timer}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timer:'',
            timeOut: '1830268800000',
        }
    },
    mounted() {
        this.setTimer(this.timeOut);
        // setInterval("this.setTimer()",1000); 
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
    	},
        setTimer(time) { 
            if (time < new Date().getTime()) {
                return;
            }
            let timeCount = setInterval(() => {
                let ts = time - new Date().getTime();//计算剩余的毫秒数  
                let dd = parseInt(ts / 1000 / 60 / 60 / 24, 10);//计算剩余的天数  
                let hh = parseInt(ts / 1000 / 60 / 60 % 24, 10);//计算剩余的小时数  
                let mm = parseInt(ts / 1000 / 60 % 60, 10);//计算剩余的分钟数  
                let ss = parseInt(ts / 1000 % 60, 10);//计算剩余的秒数  
                dd = this.checkTime(dd);  
                hh = this.checkTime(hh);  
                mm = this.checkTime(mm);  
                ss = this.checkTime(ss);
                this.timer = `${dd}天${hh}时${mm}分${ss}秒`
            }, 1000) 
             
        },
        checkTime(i) {   
           if (i < 10) {    
               i = "0" + i;    
            }    
           return i;    
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
    .time-out {
        color: #000;
        font-size: 16px;
    }
}
</style>
