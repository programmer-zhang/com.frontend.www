<template>
    <div class="js-test">
        <button type="button" @click="filterFalse()">filterFalse</button>
        <button type="button" @click="addTen()">addTen</button>
        <div class="time-out">
            <span>剩余时间为：</span>
            <span>{{timer}}</span>
        </div>
        <div class="time-stay" @click="recordStayTime()">您在本网站已停留{{stayTime}}秒</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timer: '',
            timeOut: '1830268800000',
            specis: '',
            name: '',
            color: '',
            stayTime: 0,
            loginTime: new Date().getTime(),
            logoutTime: new Date().getTime() + 1000
        };
    },
    mounted() {
        // this.setTimer(this.timeOut);
        // this.compareVersion('1.2.3','1.3.1');
        // this.extends();
    },
    methods: {
        // array迭代函数使用
        filterFalse() {
            let array = [3, 4, 5, 2, 3, undefined, null, 0, ''];
            let returnData = array.filter(Boolean);
            console.log(returnData);
            return returnData;
        },
        // array迭代函数使用
        addTen() {
            let users = [
                {username: 'Kelly', isVIP: true, balance: 20},
                {username: 'Tom', isVIP: false, balance: 19},
                {username: 'Stephanie', isVIP: true, balance: 30}
            ];
            let returnData = users.map(
                user => (user.isVIP ? {...user, balance: user.balance + 10} : user)
            );
            console.log(returnData);
        },
        // 倒计时
        setTimer(time) {
            if (time < new Date().getTime()) {
                return;
            }

            let timeCount = setInterval(() => {
                let ts = time - new Date().getTime();               // 计算剩余的毫秒数  
                let dd = parseInt(ts / 1000 / 60 / 60 / 24, 10);    // 计算剩余的天数  
                let hh = parseInt(ts / 1000 / 60 / 60 % 24, 10);    // 计算剩余的小时数  
                let mm = parseInt(ts / 1000 / 60 % 60, 10);         // 计算剩余的分钟数  
                let ss = parseInt(ts / 1000 % 60, 10);              // 计算剩余的秒数  
                dd = this.checkTime(dd);
                hh = this.checkTime(hh);
                mm = this.checkTime(mm);
                ss = this.checkTime(ss);
                this.timer = `${dd}天${hh}时${mm}分${ss}秒`;
            }, 1000);

        },
        checkTime(i) {
            if (i < 10) {
                i = '0' + i;
            }

            return i;
        },
        // 对比版本号的大小
        compareVersion(a, b) {
            let aList = a.split('.');
            let bList = b.split('.');
            if (aList.length !== bList.length) {
                return '版本号长度有误';
            }

            let length = aList.length;
            let index = 0;
            while (index < length) {
                if (aList[index] === bList[index]) {
                    index++;
                }
                else {
                    let aListIndex = parseInt(aList[index], 10);
                    let bListIndex = parseInt(bList[index], 10);
                    if (aListIndex === aListIndex && bListIndex === bListIndex) {
                        // 证明数字字符串
                        if (aList[index] > bList[index]) {
                            return `${a}的版本号较大`;
                        }
                        else if (aList[index] < bList[index]) {
                            return `${b}的版本号较大`;
                        }
                        else {
                            const length = aList[index].length;
                            let aCode = aList[index].substring(length).charCodeAt();
                            let bCode = aList[index].substring(length).charCodeAt();
                            if (aCode > bCode) {
                                return `${a}的版本号较大`;
                            }
                            else {
                                return `${b}的版本号较大`;
                            }
                        }
                    }
                    else {
                        let aListIndexCode = aList[index].charCodeAt();
                        let bListIndexCode = bList[index].charCodeAt();
                        if (aListIndexCode > bListIndexCode) {
                            return `${a}的版本号较大`;
                        }
                        else {
                            return `${b}的版本号较大`;
                        }
                    }
                }
            }
            return '版本号相同';
        },
        // 升降序排序
        sortArray() {
            let arr = [1, 80, 4, 33, 21, 55];
            arr.sort(function (x, y) {
                // x-y是按照从小到大排序，y-x是按照从大到小排序
                return x - y;
            });
            console.log(arr);
        },
        // 根据对象数组的某个属性进行排序
        sortObjectArray() {
            let arr = [
                {name: 'zopp', age: 0},
                {name: 'gpp', age: 18},
                {name: 'yjj', age: 8}
            ];
            arr.sort(compare('age'));
            console.log(arr);
        },
        compare(property) {
            return function (a, b) {
                var value1 = a[property];
                var value2 = b[property];
                return value1 - value2;
            };
        },
        // 深拷贝与浅拷贝
        extends() {
            let obj = {
                name: '张三',
                age: 24,
                data: [1, 2, 3, 4, 5]
            };
            console.log('原始数据', obj);
            // let newObj = obj;
            // let newObj = this.$baseTool.simpleClone(obj);
            let newObj = this.$baseTool.deepCopy(obj);
            newObj.name = '李四';
            console.log('newObj', newObj);
            console.log('obj', obj);
        },
        // 记录用户在网站的停留时间
        recordStayTime() {
            this.logoutTime = new Date().getTime();
            this.stayTime = ((this.logoutTime - this.loginTime) / 1000).toFixed(2);
            console.log(this.stayTime);
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
