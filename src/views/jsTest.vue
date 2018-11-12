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
        // this.setTimer(this.timeOut);
        this.compareVersion('1.2.3','1.3.1');
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
        },
        compare() {
            let compareIndex = 0;
            let a = '1.3.2.a3';
            let b = '1.2.a3';
            let aarr = a.split('.');
            let barr = b.split('.');
            console.log(aarr)
            aarr.reduce((prev,next) => {
                console.log('prev', prev);
                console.log('next', next);
            })
            // var ps = [{'p':1,'num':1},{'p':2,'num':2},{'p':3,'num':3},{'p':4,'num':4}];
            // ps.reduce((prev,next)=>{
            //     console.log('prevValue', prev)
            //     console.log('nextValue', next)
            //     console.log( 'prev' + next.p*next.num );
            // },0)
        },
        compareVersion(a,b){
            let aList = a.split('.');
            let bList = b.split('.');
            if(aList.length !== bList.length){
                return '版本号长度有误'
            }
            let length = aList.length;
            let index = 0;
            while(index < length){
                if(aList[index] === bList[index]){
                    index++;
                }else{
                    let aListIndex = parseInt(aList[index]);
                    let bListIndex = parseInt(bList[index]);
                    if(aListIndex === aListIndex && bListIndex === bListIndex) {
                        // 证明数字字符串
                        if (aList[index] > bList[index]) {
                            return `${a}的版本号较大`
                        } else if(aList[index] < bList[index]){
                            return `${b}的版本号较大`
                        }else{
                            const length = aList[index].length;
                            let aCode = aList[index].substring(length).charCodeAt();
                            let bCode = aList[index].substring(length).charCodeAt();
                            if (aCode > bCode) {
                                return `${a}的版本号较大`
                            } else {
                                return `${b}的版本号较大`
                            }
                        }
                    }else{
                        let aListIndexCode = aList[index].charCodeAt();
                        let bListIndexCode = bList[index].charCodeAt();
                        if (aListIndexCode > bListIndexCode) {
                            return `${a}的版本号较大`
                        } else {
                            return `${b}的版本号较大`
                        }
                    }
                }
            }
            return '版本号相同'
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
