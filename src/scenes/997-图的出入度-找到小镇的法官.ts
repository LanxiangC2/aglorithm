/**
 * 小镇里有 n 个人，按从 1 到 n 的顺序编号。传言称，这些人中有一个暗地里是小镇法官。

如果小镇法官真的存在，那么：

小镇法官不会信任任何人。
每个人（除了小镇法官）都信任这位小镇法官。
只有一个人同时满足属性 1 和属性 2 。
给你一个数组 trust ，其中 trust[i] = [ai, bi] 表示编号为 ai 的人信任编号为 bi 的人。

如果小镇法官存在并且可以确定他的身份，请返回该法官的编号；否则，返回 -1 。

示例 1：

输入：n = 2, trust = [[1,2]]
输出：2
示例 2：

输入：n = 3, trust = [[1,3],[2,3]]
输出：3
示例 3：

输入：n = 3, trust = [[1,3],[2,3],[3,1]]
输出：-1
 */

function findJudge(n: number, trust: number[][]): number {
    // 计算出入度
    if (!trust.length) {
        return n === 1 ? 1 : -1
    }
    
    const graph = Array.from({ length: n + 1 }, () => ({ inDegree: 0, outDegree: 0 }));

    trust.forEach((t, i) => {
        const [outD, inD] = t;
        graph[inD].inDegree++;
        graph[outD].outDegree++;

    })

    // console.log(graph)

    const res = graph.findIndex((item) => {
        return item.inDegree === n - 1 && item.outDegree === 0
    })

    return res
};

export { findJudge }