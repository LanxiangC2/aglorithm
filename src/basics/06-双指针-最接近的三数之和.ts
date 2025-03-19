
/**
 *  leetcode 16. 最接近的三数之和
 *  
给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

返回这三个数的和。
 * @param nums
 */

function closestThreeSum(nums: number[], target: number): number {

    nums.sort((a, b) => a - b);

    const n = nums.length;
    let minDiff = Infinity;
    let res = Infinity;;
    
    for (let i = 0; i < n - 2; i++) {
        
        let l = i + 1;
        let r = n - 1;

        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];

            const diff = Math.abs(sum - target);
            // 更新最小差值和结果
            if (diff < minDiff) {
                minDiff = diff;
                res = sum;
            }

            if (sum < target) {
                l++;
            }
            if (sum > target) {
                r--;
            }

            if (sum === target) {
                return res;
            }
        }
    }
    return res;
};


export {
    closestThreeSum
};