/**
 * leetcode 53
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

子数组
是数组中的一个连续部分。

示例 1：

输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
输出：6
解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
示例 2：

输入：nums = [1]
输出：1
示例 3：

输入：nums = [5,4,-1,7,8]
输出：23
 */

function maxSubArray(nums: number[]): number {
    // 解法1 动态规划
    // dp[i] 表示 i 结尾的“连续子数组的最大和”
    // const dp = new Array(nums.length).fill(0)

    // dp[0] = nums[0]

    // for (let i = 1; i < dp.length; i++) {
    //     dp[i] = Math.max(
    //         dp[i-1] + nums[i],
    //         nums[i]
    //     )
    // }
    // return Math.max(...dp)

    // 解法2 贪心


    let maxV = nums[0]; // 最大和
    let preSum = nums[0]; // 之前的和
    let curSum = null;
    for (let i = 1; i < nums.length; i++) {
        const cur = nums[i];

        if (preSum < 0) { curSum = cur } // 之前的和 < 零，直接丢弃结果
        if (preSum >= 0) { curSum = preSum + cur } // 之前的和 >= 零，贪心地觉得后边会有更多正数匹配上
        
        maxV = Math.max(curSum, maxV)
        preSum = curSum

    }

    return maxV
};

export { maxSubArray }

