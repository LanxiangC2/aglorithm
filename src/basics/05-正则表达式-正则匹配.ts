/**
 * leetcode 第10题 
给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
所谓匹配，是要涵盖 整个 字符串 s 的，而不是部分字符串。

示例 1：
输入：s = "aa", p = "a"
输出：false
解释："a" 无法匹配 "aa" 整个字符串。
示例 2:
输入：s = "aa", p = "a*"
输出：true
解释：因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
示例 3：
输入：s = "ab", p = ".*"
输出：true
解释：".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
 */


function isMatch(s: string, p: string): boolean {
    // 解题1 .递归
    // if (p.length === 0) return s.length === 0

    // // 1. 检查开头是否匹配
    // let match = s.length && (s[0] === p[0] || p[0] === '.')

    // // 2. 匹配，检查第二位是否位 p 模式
    // if (p.length > 1 && p[1] === '*') {
    //     // 2.1 匹配一个字符 or 匹配0个字符
    //     return (match && isMatch(s.slice(1), p)) || isMatch(s, p.slice(2))
    // }


    // // 3. 没有 p 模式
    // return match && isMatch(s.slice(1), p.slice(1))

    // 解题2 动态规划

    // 1. 初始化
    const lenN = s.length;
    const lenP = p.length;
    const dp = new Array(lenN).fill(0).map(_ => new Array(lenP).fill(0)) 

    // dp[0][0] = 

    if (s[0] === p[0]) {
        
    }

    // dp[i][j] = 

};

export { isMatch }