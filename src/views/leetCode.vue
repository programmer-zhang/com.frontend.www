<template>
    <div class="leetcode-container"></div>
</template>
<script>
/**
 * @desc 523 中等
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
let checkSubarraySum = function(nums, k) {
    if(!nums || !nums.length) {
        return;
    }
    let total = 0;
    for(let i = 0, len = nums.length; i < len; i++) {
        total = total + nums[i];
    }
    console.log(total)
};
// checkSubarraySum([23,2,4,6,7], 6);

/**
 * @desc 删除排序数组中的重复项
 * @answer 一个快指针i，一个慢指针j,是有序数组，所以nums[i] !== nums[j] 的中间都是相同的，将快指针的值指给慢指针+1的位置即可
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
    let j = 0;
    for(let i = 1, len = nums.length; i < len; i++) {
        if (nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }
    return j+1;
};
// removeDuplicates([1, 1, 2]);

/**
 * @desc 买股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
    if (!prices || !prices.length || prices.length < 2) {
        return 0;
    }
    let hold = -prices[0];  // 持有股票
    let nohold = 0;     // 未持有股票
    for(let i = 0, len = prices.length; i<len; i++) {
        console.log('当日', prices[i]);
        nohold = Math.max(nohold, hold+prices[i]);
        hold = Math.max(hold, nohold-prices[i]);
        console.log('nohold', nohold);
        console.log('hold', hold);
    }
    return nohold;
};
// maxProfit([7,1,5,3,6,4]);

/**
 * @desc 旋转数组
 * @answer1 利用反转数组，先反转全部的，然后反转前K个，再反转K个之后的
 * @answer2 使用临时数组，将原数组放在临时数组中，然后按照(i + k) % length的新下标进行重新赋值
 * @answer3 类似约瑟夫环，将数组进行环形赋值
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let rotate = function(nums, k) {
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
    }
    k = k%nums.length;
    reverseNums(nums, 0, nums.length - 1);
    reverseNums(nums, 0, k - 1);
    reverseNums(nums, k, nums.length - 1);
};
// rotate([1,2,3,4,5,6,7], 3);

</script>