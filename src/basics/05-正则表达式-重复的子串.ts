/**
 * leetcode 459 重复的子字符串
 */

function repeatedSubstringPattern(s: string): boolean {
    // 正则匹配法
    const reg = /^(\w+)\1+$/g
    return reg.test(s)
    // 暴力枚举法
    // 移动匹配法
    // KMP 法
        // 生成next数组逻辑：
        // 1. i代表子串的最后一位，从位置1开始每轮循环右移一位；
        // 2. j代表最长相等前缀的后一位，因为数组下标从0开始，故j的值也能代表最长相等前后缀的长度值，每当substr【j】=substr【i】时，长度+1，即j++；
        // 3. 如此可以知道substr【0, j-1】与substr【i-j+1, i】总是相等的；
        // 4. 所以若substr【j】!=substr【i】时，j要根据其之前确定的next【】数组值往前回溯，并不断比较substr【j】和substr【i】（因为前后缀要相等，最后一位必须要相等），以确定新的最长相等前后缀长度。
        function getNext(next, s) {
            let j = 0;
            next[0] = j;
            for (let i = 1; i < s.length; i++) {
                while (j >= 0 && s[i]!== s[j]) {
                    j = next[j - 1];
                }
                if (s[i] === s[j]) {
                    j++;
                }
                next[i] = j;
            }
            return next;
        }

        

};

export  { repeatedSubstringPattern }