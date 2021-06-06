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
 * 解题思路: 一个快指针i，一个慢指针j,是有序数组，所以nums[i] !== nums[j] 的中间都是相同的，将快指针的值指给慢指针+1的位置即可
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
    console.log(nohold);
    return nohold;
};
// maxProfit([7,1,5,3,6,4]);
</script>