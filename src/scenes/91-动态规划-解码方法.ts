/**
 * 
 * leetcode 91. 解码方法
一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：

"1" -> 'A'

"2" -> 'B'

...

"25" -> 'Y'

"26" -> 'Z'

然而，在 解码 已编码的消息时，你意识到有许多不同的方式来解码，因为有些编码被包含在其它编码当中（"2" 和 "5" 与 "25"）。

例如，"11106" 可以映射为：

"AAJF" ，将消息分组为 (1, 1, 10, 6)
"KJF" ，将消息分组为 (11, 10, 6)
消息不能分组为  (1, 11, 06) ，因为 "06" 不是一个合法编码（只有 "6" 是合法的）。
注意，可能存在无法解码的字符串。

给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。如果没有合法的方式解码整个字符串，返回 0。

题目数据保证答案肯定是一个 32 位 的整数。

 

示例 1：

输入：s = "12"
输出：2
解释：它可以解码为 "AB"（1 2）或者 "L"（12）。
示例 2：

输入：s = "226"
输出：3
解释：它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
示例 3：

输入：s = "06"
输出：0
解释："06" 无法映射到 "F" ，因为存在前导零（"6" 和 "06" 并不等价）。
 */

function numDecodings(s: string): number {
    // 爬楼梯特殊版，只是爬楼梯时增加了条件。
    // 当 nums[i] 在 [1,9] 区间爬一次，当 nums[i-1,i] 两组成的数在 [10,26] 时，爬两次，其它不爬。

    const _isBe1To9 = (n: string): boolean => {
        return 1 <= parseInt(n) && parseInt(n) <= 9
    }

    const _isBe10To26 = (n: string): boolean => {
        return 10 <= parseInt(n) && parseInt(n) <= 26
    }

    const n = s.length;
    const dp = new Array(n+1).fill(0);
    
    dp[0] = 1;
    dp[1] = s[0] === '0' ? 0 : 1;

    let i = 2;
    while (i <= n) {
        // 需要注意dp数组中的下标和s字符串中下标的对应关系
        if (_isBe1To9(s[i-1])) {
            dp[i] += dp[i-1]
        }

        if (_isBe10To26(`${s[i-2]}${s[i-1]}`)) {
            dp[i] += dp[i-2]
        }

        i++;
    }
    return dp[n]
};

export { numDecodings }