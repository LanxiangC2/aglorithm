
/**
 *  leetcode LCR 007. 三数之和
 *  给定一个包含 n 个整数的数组 nums，
 *  判断 nums 中是否存在三个元素 a ，b ，c ，使得 a + b + c = 0 ？
 *  请找出所有和为 0 且 不重复 的三元组。
 * @param nums
 */

function threeSum(nums: number[]): number[][] {

    nums.sort((a, b) => a - b)
    // [-4, -1, -1, 0, 1, 2]

    const res: number[][] = []

    for (let i = 0; i < nums.length - 2; i++) {

        // 去重
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        const remainSum = 0 - nums[i]

        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            if (getSum(nums[l], nums[r]) < remainSum) {
                l++;
                continue;
            }
            if (getSum(nums[l], nums[r]) > remainSum) {
                r--;
                continue;
            }
            res.push([nums[i], nums[l], nums[r]])
            l++;
            r--;
            // 去重
            while (nums[l] === nums[l - 1]) l++;
            while (nums[r] === nums[r + 1]) r--;
            
            

        }
    }

    return res
};

function getSum(a: number, b: number): number {
    return a + b;
}

export {
    threeSum
};