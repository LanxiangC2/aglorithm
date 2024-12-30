/**
 * leetcode No.121 
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 */

function maxProfit(prices: number[]): number {
  // 解法1 暴力 数据量大 会有超时的报错，时间复杂度 O(n2), 空间复杂度 O(1) =================
  // let maxProfit = 0;
  // for (let i = 0; i < prices.length; i++) {
  //     for (let j = i + 1; j < prices.length; j++) {
  //         maxProfit = Math.max(maxProfit, prices[j] - prices[i])
  //     }
  // }
  // return maxProfit;

  // 解法2 贪心 时间复杂度 O(n1) 空间复杂度 O(1) =================
  // if (prices.length === 0) return 0;
  // let min = prices[0];
  // let max = 0; // 最大收入

  // for (const price of prices) {
  //     min = Math.min(min, price)
  //     max = Math.max(max, price - min)
  // }
  // return max

  // 解法3 动态规划 空间复杂度O(n) 时间复杂度O(n) =================
  // 1. 确定 dp 数组
  // 2. 确定递推公式
  // 3. 如何初始化 dp 数组

  // dp 用来表示手里的利润情况
  // const n = prices.length
  // const dp = new Array(n).fill(0).map(arr => new Array(2).fill(0))
  
  // // 0 表示当前卖出股票， 1 表示当前持有股票
  // dp[0][0] = 0
  // dp[0][1] = -prices[0]
  // for (let i = 1; i < n; i++) {
  //     dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])
  //     dp[i][1] = Math.max(dp[i-1][1], - prices[i])
  // }

  // return dp[n-1][0]


  // 解法 4 动态规划+状态压缩 空间复杂度O(n) 时间复杂度O(1) =================

  const n = prices.length
  const dp = new Array(2).fill(0)
  
  // 0 表示当前卖出股票， 1 表示当前持有股票, dp 数组存的是前一天的利润情况
  dp[0] = 0
  dp[1] = -prices[0]
  for (let i = 1; i < n; i++) {
      dp[0] = Math.max(dp[0], dp[1] + prices[i])
      dp[1] = Math.max(-prices[i], dp[1])
  }

  return dp[0]

};

export {  maxProfit }