/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
  // 解法1
  // let rawLen = nums.length
  // const _k = k % rawLen
  // nums.push(...nums)
  // // 新数组开始的索引 = rawLen - k
  // nums.splice(0, rawLen - _k)
  // // 数组改变之后，数组长度更新了
  // nums.splice(rawLen)


    // 解法2 不增加额外的空间
  // 计算轮转 k  个位置后，索引头部位置
    // 解法1可得 newStart = nums.length - k
    const len = nums.length
    const _k = k % len
    const newStartIdx = len - _k

    // [0, newStartIdx] 这个区间，将元素添加到数组的末端
    const fragment = nums.splice(0, newStartIdx)
    nums.push(...fragment)

};

export { rotate }