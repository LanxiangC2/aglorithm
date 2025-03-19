
/**
 * *** 如何维护单调队列 ****
 * 科技馆内有一台虚拟观景望远镜，它可以用来观测特定纬度地区的地形情况。
 * 该纬度的海拔数据记于数组 heights ，其中 heights[i] 表示对应位置的海拔高度。
 * 请找出并返回望远镜视野范围 limit 内，可以观测到的最高海拔值。
 * 
 * 示例 1：

输入：heights = [14,2,27,-5,28,13,39], limit = 3
输出：[27,27,28,28,39]
解释：
  滑动窗口的位置                最大值        *单调队列       模拟过程如下*
---------------               -----
[14 2 27] -5 28 13 39          27          [27]          getMaxValue() = 27
14 [2 27 -5] 28 13 39          27          [27, -5]      getMaxValue() = 27
14 2 [27 -5 28] 13 39          28          [28]          getMaxValue() = 28
14 2 27 [-5 28 13] 39          28          [28, 13]      getMaxValue() = 28
14 2 27 -5 [28 13 39]          39          [39]          getMaxValue() = 39


[7, 2], 4                      7          [7]          getMaxValue() = 7
7, [2, 4]                      4          [4]          getMaxValue() = 4
 * @param heights 
 * @param limit 
 * @returns 
 */

function maxAltitude(heights: number[], limit: number): number[] {
    if (limit === 1) return heights
    const deQueue = []
    const res = []
    for (let i = 0; i < heights.length; i++) {

        // 我们维护一个队列，目的是啥？方便每次滑动窗口变化时，拿到最大值
        while (deQueue.length && deQueue[deQueue.length - 1] < heights[i]) {
            deQueue.pop()
        }
        deQueue.push(heights[i])

        // 滑动窗口满了没？
        let left = i - limit + 1
        // 如果窗口满了，你每次加一个值进来，也就意味着有一个值需要被弹出
        // 而这个值如果是单调队列中的最大值，那就把这个值加入结果；
        // 如果不是，我们不需要关心

        // 换一个角度，滑动窗口的左边界，每更新一次，我们都去读最大值
        // 这个值是啥，不就是我们队列中维护的值吗？

        if (left >= 0) {
            res.push(deQueue[0])

            // 维护的最大值不在窗口里了，那么要判断
            // 如果这个值是单调队列中的最大值，我们就需要把它弹出队列
            if (deQueue[0] === heights[left]) {
                deQueue.shift()
            }

        }

    }

    return res
};

export { 
    maxAltitude
}