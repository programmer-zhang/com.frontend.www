<template>
    <div class="leetcode-container"></div>
</template>
<script>
/**
 * 523 中等
 *
 * @param {number[]} nums 原始数组
 * @param {number} k 位数
 * @return {boolean}
 */
let checkSubarraySum = function (nums, k) {
    if (!nums || !nums.length) {
        return;
    }
    let total = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        total = total + nums[i];
    }
    console.log(total);
    return total;
};
// checkSubarraySum([23,2,4,6,7], 6);

/**
 * 7 整数反转
 *
 * @param {number} x 反转位数
 * @return {number} res
 */
let reverse = function (x) {
    if (isNaN(x)) {
        return 0;
    }
    let resSymbol = '';
    let resArr = x.toString().split('');
    if (resArr.length && isNaN(+resArr[0])) {
        resSymbol = resArr.splice(0, 1);
    }
    let resStr = resArr.reverse().join('');
    let res = parseInt((resSymbol + parseInt(resStr, 10)), 10);
    if ((-Math.pow(2, 31) >= res) || (res >= Math.pow(2, 31) - 1)) {
        return 0;
    }
    return res;
};


/**
 * 26 删除排序数组中的重复项
 *
 * @answer 一个快指针i，一个慢指针j,是有序数组，所以nums[i] !== nums[j] 的中间都是相同的，将快指针的值指给慢指针+1的位置即可
 * @param {number[]} nums 原始数组
 * @return {number}
 */
let removeDuplicates = function (nums) {
    let j = 0;
    for (let i = 1, len = nums.length; i < len; i++) {
        if (nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }
    return j + 1;
};
// removeDuplicates([1, 1, 2]);

/**
 * 122 买股票的最佳时机
 *
 * @param {number[]} prices 价格数组
 * @return {number}
 */
let maxProfit = function (prices) {
    if (!prices || !prices.length || prices.length < 2) {
        return 0;
    }
    let hold = -prices[0];      // 持有股票
    let nohold = 0;             // 未持有股票
    for (let i = 0, len = prices.length; i < len; i++) {
        console.log('当日', prices[i]);
        nohold = Math.max(nohold, hold + prices[i]);
        hold = Math.max(hold, nohold - prices[i]);
        console.log('nohold', nohold);
        console.log('hold', hold);
    }
    return nohold;
};
// maxProfit([7,1,5,3,6,4]);

/**
 * 189 旋转数组
 *
 * @answer1 利用反转数组，先反转全部的，然后反转前K个，再反转K个之后的
 * @answer2 使用临时数组，将原数组放在临时数组中，然后按照(i + k) % length的新下标进行重新赋值
 * @answer3 类似约瑟夫环，将数组进行环形赋值
 * @param {number[]} nums 原始数组
 * @param {number} k 旋转位置
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let rotate = function (nums, k) {
    if (!nums || !nums.length || k < 0) {
        return nums;
    }
    let reverseNums = function (nums, startIndex, endIndex) {
        while (startIndex < endIndex) {
            let tmp = nums[startIndex];
            nums[startIndex++] = nums[endIndex];
            nums[endIndex--] = tmp;
        }
        console.log('doing', nums);
    };
    k = k % nums.length;
    reverseNums(nums, 0, nums.length - 1);
    reverseNums(nums, 0, k - 1);
    reverseNums(nums, k, nums.length - 1);
};
// rotate([1,2,3,4,5,6,7], 3);

/**
 * 217 存在重复元素
 *
 * @answer1 使用创建对象，根据数组值，判断有无添加过
 * @answer2 使用排序，再判断相邻是否重复
 * @answer3 使用 new Set
 * @param {number[]} nums 原始数组
 * @return {boolean}
 */
let containsDuplicate = function (nums) {
    if (!nums || !nums.length) {
        return false;
    }
    let mapNums = {};
    for (let i in nums) {
        if (mapNums && mapNums[nums[i]]) {
            return true;
        }
        mapNums[nums[i]] = true;
    }
    return false;
};
let containsDuplicate2 = function (nums) {
    if (!nums || !nums.length) {
        return false;
    }
    nums.sort((a, b) => a - b);
    for (let i = 0, len = nums.length - 1; i < len; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
};
// console.log(containsDuplicate2([1,2,3,1]));

/**
 * 136 只出现一次的数字
 *
 * @answer 要求具有线性时间复杂度，不能使用排序，可以使用的情况下可以先排序，再处理就很容易。本题使用异或运算，经过异或运算之后，就剩下了不相同的自己
 * @param {number[]} nums 原始数组
 * @return {number}
 */
let singleNumber = function (nums) {
    if (!nums || !nums.length) {
        return false;
    }
    let res = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        res = res ^ nums[i];
    }
    return res;
};
// singleNumber([4,1,2,1,2]);

/**
 * 9 回文数
 *
 * @answer 回文数正反一致，reverse之后是相同的
 * @param {number} x 数字
 * @return {boolean} 是回文数
 */
let isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    let xReverse = x.toString().split('').reverse().join('');
    return xReverse === x.toString();

};
// console.log(isPalindrome(0));

/**
 * 两个数组的交集②
 * 
 * @answer1 使用排序+双指针
 * @answer2 使用哈希表
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersect = function(nums1, nums2) {
    // 定义双指针
    let i = 0;
    let j = 0;
    // 定义结果数组
    let res = [];
    // 两数组排序处理
    nums1.sort((a, b) => {
        return a - b;
    });
    nums2.sort((a, b) => {
        return a - b;
    });
    while(i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            res.push(nums1[i]);
            i++;
            j++;
        }
        else {
            nums1[i] > nums2[j] ? j++ : i++;
        }
    }
    return res;
};

let intersect2 = function(nums1, nums2) {
    let map = {};
    let arr = [];
    // 先将nums1map化，并得到nums1中数据的个数
    for(let i of nums1) {
        map[i] ? map[i]++ : map[i] = 1;
    }
    console.log(map);
    for(let j of nums2) {
        if (map[j]) {
            // 如果命中map中的数字说明相同，压入结果数组的同时出现次数--;
            arr.push(j);
            map[j]--;
        }
    }
    return arr;
}
// console.log(intersect2([1,2,2,1], [2,2]));
</script>