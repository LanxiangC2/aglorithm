
/** leetcode 207 课程表
 * 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。

例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

 

示例 1：

输入：numCourses = 2, prerequisites = [[1,0]]
输出：true
解释：总共有 2 门课程。学习课程 1 之前，你需要完成课程 0 。这是可能的。
示例 2：

输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
输出：false
解释：总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1 。这是不可能的。
 */

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    // 边界
    if(!prerequisites.length) return true

    // 解法一：出度为0 开始 深度优先 栈 先入后出

    // 解法二：入度为0 开始 广度优先 队列 先入先出
    // 1. 统计入度
    const mapNodeRelations = new Map() // 记录节点之间的关系, 记录子节点
    const inDegrees = new Array(numCourses).fill(0) // 记录入度

    prerequisites.forEach((item) => {
        const [child, parent] = item
        // 入度统计
        inDegrees[child]++
        // 节点管理维护 map({ parent: [child1, child2]})
        mapNodeRelations.has(parent)
            ? mapNodeRelations.set(parent, [...mapNodeRelations.get(parent), child])
            : mapNodeRelations.set(parent, [child])
    })
    // 维护一个队列
    const queue: number[] = []
    let res: number = 0 // 表示已经学习的课程

    // 初始化队列
    inDegrees.forEach((item, idx) => {
        // 头部是入度为0的课程，表示可以进行学习
        if (item === 0) {
            queue.push(idx)
        }

    })
    // 接下来不断的弹出队列头部，更新入度表，同时将入度为0的节点不断加入到队列中
    while (queue.length > 0) {
        // console.log('当前的queue', queue)
        // console.log('当前的map, relationsMap', inDegrees, mapNodeRelations)
        const nodeName = queue.shift();
        res++;

        // 根据节点关系表，更新入度表
        const cNames = mapNodeRelations.get(nodeName)
        cNames && cNames.forEach((cName) => {
            // 弹出父节点后，找到子节点，所有子节点对应的入度需要 - 1
            inDegrees[cName]--;
            inDegrees[cName] === 0 && queue.push(cName) 
        })

    }

    return res === numCourses
};

export {
    canFinish
}