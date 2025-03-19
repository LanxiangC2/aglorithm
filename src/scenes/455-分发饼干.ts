/**
 * 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。

对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。
如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是满足尽可能多的孩子，并输出这个最大数值。
 */

function findContentChildren(g: number[], s: number[]): number {
    // 贪心？让最容易满足的先吃？

    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)

    let res = 0;
    const n = g.length;
    const m = s.length;

    let cookieIdx = 0;
    let childIdx = 0;


    // 7, 8, 9, 10
    // 5, 6, 7, 8
    while (cookieIdx < n && childIdx < m) {
        // 不满足孩子的需求，找下一个孩子，目的是先消耗完一个饼干再说
        if(g[cookieIdx] <= s[childIdx]) {
            res++;
            cookieIdx++;
        }
        childIdx++;
    }

    return res;
};

export {
    findContentChildren,    
}