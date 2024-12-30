/**
 * leetCode No.122
 * 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
 * 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
 * 返回 你能获得的 最大 利润 。
 */

function maxProfit(prices: number[]): number {
  // 解法1 动态规划 空间复杂度O(n) 时间复杂度O(n) =========
  // const n = prices.length
  // const free = 0, hold = 1
  // const dp = new Array(n).fill(0).map((_) => new Array(2).fill(0))

  // dp[0][free] = 0
  // dp[0][hold] = -prices[0]

  // for (let i = 1; i < n; i++) {
  //     dp[i][free] = Math.max(dp[i-1][free], dp[i-1][hold]+prices[i])
  //     dp[i][hold] = Math.max(dp[i-1][free] - prices[i], dp[i-1][hold])
  // }
  // return dp[n-1][0]

  // 解法2 动态规划 + 空间压缩 空间复杂度降为 O(1) =========

  // const n = prices.length;
  // const dp = new Array(2).fill(0)
  // dp[0] = 0;
  // dp[1] = -prices[0];

  // for (let i = 1; i < n; i++) {
  //     dp[0] = Math.max(dp[0], dp[1] + prices[i]) 
  //     dp[1] = Math.max(dp[0] - prices[i], dp[1])
  // }

  // return dp[0]

  // 解法3 贪心 =========
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
      profit += Math.max(0, prices[i] - prices[i-1])
  }

  return profit
};

export { maxProfit }