/**
 * leetcode 240
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

每行的元素从左到右升序排列。
每列的元素从上到下升序排列。

 */


function searchMatrix(matrix: number[][], target: number): boolean {
  // z 字搜索法，从左下角出发，往右的都比它大，往上的都比它小(也可以从右上角出发)

  const n = matrix.length
  const m = matrix[0].length

  // 初始化指针
  let i = n - 1
  let j = 0

  while (i >= 0 && j < m) {
      // 当前节点 


      const val = matrix[i][j]
      if (val > target) {
          i--
      }

      if (val < target) {
          j++
      }

      if (val === target) {
          return true
      }
  }

  return false
  
};


export { searchMatrix }