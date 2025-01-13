/**
 * leetcode 459 重复的子字符串
 */

function repeatedSubstringPattern(s: string): boolean {
    // 正则匹配法
    // const reg = /^(\w+)\1+$/g
    // return reg.test(s)
    // 暴力枚举法
    // 移动匹配法
    // KMP 法
        // 生成next数组逻辑：
        // 1. i代表子串的最后一位，从位置1开始每轮循环右移一位；
        // 2. j代表最长相等前缀的后一位，因为数组下标从0开始，故j的值也能代表最长相等前后缀的长度值，每当substr【j】=substr【i】时，长度+1，即j++；
        // 3. 如此可以知道substr【0, j-1】与substr【i-j+1, i】总是相等的；
        // 4. 所以若substr【j】!=substr【i】时，j要根据其之前确定的next【】数组值往前回溯，并不断比较substr【j】和substr【i】（因为前后缀要相等，最后一位必须要相等），以确定新的最长相等前后缀长度。
        // function getNext(next, s) {
        //     let j = 0;
        //     next[0] = j;
        //     for (let i = 1; i < s.length; i++) {
        //         while (j >= 0 && s[i]!== s[j]) {
        //             j = next[j - 1];
        //         }
        //         if (s[i] === s[j]) {
        //             j++;
        //         }
        //         next[i] = j;
        //     }
        //     return next;
        // }

     /**
            a   s   d   a   s   d   a   s   d
            0   0   0   1   2   3   4   5   6       next数组

        我们可以看出如果s是由子串重复构成的话，会从第二个重复子串开始有最长相等前后缀，
        并且len - 6 就是第一个字串的长度 a s d，因为第一个子串都是0
        如果这个长度可以被整除，就说明整个字符串就是这个周期的循环。
    */

        let len = s.length;
        const next = new Array(len).fill(0)

         /**
            i：当前子串的后缀末尾
            j：上一项子串最长相等前后缀的下一项 或者 0 ，并且也是 上一项子串最长相等前后缀的长度

            i从1开始，j从0开始。因为 i 和 j都是0的话只有一个，肯定是0，相当于上面例子中的 a
        */

        
        for (let j = 0, i = 1; i < len; i++) {
            // 如果不同，我们要从未匹配好的地方开始继续匹配。
            // 未匹配好的位置在那里呢？👇
            // 我们知道 next 数组的值就代表每一次子串匹配好的长度，
            // 因为数组是从0开始的，所以该值就指向了未匹配好的位置。
            // 当j === 0时，说明要从头开始重新匹配了

            while (j > 0 && s[j] !== s[i]) {
                j = next[j-1]
            }

            if (s[j] === s[i]) {
                j++
            }

            next[i] = j
        }

        return next[len - 1] !== 0 && len % (len - next[len-1]) === 0

};

export  { repeatedSubstringPattern }