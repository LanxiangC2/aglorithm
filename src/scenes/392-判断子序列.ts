/**
给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

进阶：

如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？
 */


function isSubsequence(s: string, t: string): boolean {
    // 双指针 时间复杂度 O(m+n) 空间复杂度O(1), 进阶版本可以考虑使用动态规划
    // let i = 0;
    // let j = 0;

    // const n = s.length;
    // const m = t.length;

    // // 边界情况
    // if (!s.length) {
    //   return true
    // }

    // while (i < n && j < m) {

    //     if (s[i] === t[j]) {
    //         i++
    //     }
    //     j++

    //     if (i === n) {
    //         return true
    //     } 
    // }

    // return false

    // 动态规划，二维数据中 跳跃式的匹配，数据量大的时候大幅度，提升效率
    // 预处理出对于 t 的每一个位置，从该位置开始往后每一个字符第一次出现的位置

    // 动态规划，当有多个 s 的时候，有更好的效率，因为可以复用 dp 数组
    // 也可以用 charCodeAt 和 fromCharCode 来做映射
    const chars = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]
    // t 的长度
    const m = t.length
    const dp = new Array(m+1).fill('#').map(() => new Array(26).fill('#'))
    // 初始化 dp 数组
    for (let i = m - 1; i >= 0; i--) {
        for(let j = 0; j < 26; j++) {
            if (t[i] === chars[j]) {
                dp[i][j] = i
            } else {
                dp[i][j] = dp[i+1][j]
            }
        }

    }

    // 搜索子序列
    const n = s.length;
    let path = 0; // 表示 t 字符串中遍历的下标
    for (let i = 0; i < n; i++) {
        const char = s[i]
        const idx = chars.findIndex((item) => item == char)
        if (dp[path][idx] === '#') {
            return false
        }
        // 从这里可以看到 t 长度如果很长，这里的 path 是跳跃式的
        path = dp[path][idx] + 1
    }

    return true
    
};


export { isSubsequence }