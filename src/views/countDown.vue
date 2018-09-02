<template>
    <div class="count-down">
        <div class="time-out" v-for="(item, index) in countDownList">
            <span>剩余时间为：</span>
            <span>{{item.time}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        	countDownList: [
        		{ timeOut: '1830268800000' },
        		{ timeOut: '1840268800000' },
        		{ timeOut: '1850268800000' },
        		{ timeOut: '1860268800000' },
        	],
            timer:'',
            
        }
    },
    mounted() {
    	for(let index in this.countDownList){
	        this.setTimer(this.countDownList[index].timeOut, index);
    	}
    },
    methods: {
        setTimer(time, index) { 
            if (time < new Date().getTime()) {
                return;
            }
           
            let self = this;
            let timeCount = setInterval(() => {
                let ts = time - new Date().getTime(); 
                let dd = parseInt(ts / 1000 / 60 / 60 / 24, 10); 
                let hh = parseInt(ts / 1000 / 60 / 60 % 24, 10);
                let mm = parseInt(ts / 1000 / 60 % 60, 10);  
                let ss = parseInt(ts / 1000 % 60, 10);  
                dd = dd < 10 ? `0${dd}` : dd;  
                hh = hh < 10 ? `0${hh}` : hh;  
                mm = mm < 10 ? `0${mm}` : mm;  
                ss = ss < 10 ? `0${ss}` : ss;
                self.$set(self.countDownList[index], 'time', `${dd}天:${hh}小时:${mm}分:${ss}秒`);
            }, 1000) 
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.count-down {
    .time-out {
        color: #000;
        font-size: 16px;
    }
}
</style>
