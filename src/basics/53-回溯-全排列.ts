/**
 * 
 * @param nums 给定一个不含重复数字的数组 nums ，
 * 返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]

 * @returns 
 */

function permute(nums: number[]): number[][] {

    const path = []
    const used = new Array(nums.length).fill(false)
    const res = []

    const backtrack = () => {
        if (path.length === nums.length) {
            res.push([...path])
        }
        for (let i = 0; i < nums.length; i++) {
            if (!used[i]) {
                path.push(nums[i]);
                used[i] = true;
                backtrack();
                used[i] = false;
                path.pop();
            }
        }
    }

    backtrack()

    return res


};
export { permute }