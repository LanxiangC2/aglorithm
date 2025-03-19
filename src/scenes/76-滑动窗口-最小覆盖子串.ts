

/**
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * 示例 1：

输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
示例 2：

输入：s = "a", t = "a"
输出："a"
解释：整个字符串 s 是最小覆盖子串。
示例 3:

输入: s = "a", t = "aa"
输出: ""
解释: t 中两个字符 'a' 均应包含在 s 的子串中，
因此没有符合条件的子字符串，返回空字符串。
 */

function minWindow(s: string, t: string): string {

    // 动态的滑动窗口
    if (s.length < t.length) return ""
    
    const map = new Map()
    let res = ""

    // 统计t的次数
    for (let i = 0; i < t.length; i++) {
        map.set(t[i], (map.get(t[i]) || 0) + 1)
    }

    // 初始化这个窗口，长度为 t.length
    for (let i = 0; i < t.length; i++) {
        map.has(s[i]) && map.set(s[i], map.get(s[i]) - 1)
    }
    
    // 初始化 指针
    let i = 0;
    let j = i + t.length - 1

    while (j < s.length) {


        let flag = false // 表示找到符合要求的子串
        if ([...map.values()].every(v => v <= 0)) {

            if (!res || res.length > (j - i + 1) ) {
                // 子串更短，更新内容
                res = s.slice(i, j + 1)
            }
            flag = true
        }
        // console.log(i, j)
        // console.log(map.values())
        // console.log('flag', flag)
        // console.log('窗口内的值', s.slice(i, j + 1))
        // 滑动窗口的原则，先移动右边界，直到找到满足条件的子串
        // 然后收缩窗口，移动左边界，直到找到满足条件的子串

        if (flag) {
            // 符合要求左边界左移
            map.has(s[i]) && map.set(s[i], map.get(s[i]) + 1);
            i++;
        } else {
           // 不符合要求右边界右移
            j++;
            map.has(s[j]) && map.set(s[j], map.get(s[j]) - 1);
        }


    }

    return res
};

export {
    minWindow
}