/**
 * leetcode 605 种花问题
 * 假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
 * 给你一个整数数组 flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。另有一个数 n ，能否在不打破种植规则的情况下种入 n 朵花？
 * 能则返回 true ，不能则返回 false 。
 * 
示例 1：
输入：flowerbed = [1,0,0,0,1], n = 1
输出：true
示例 2：
输入：flowerbed = [1,0,0,0,1], n = 2
输出：false
 */

enum OPT_TYPE {
    BLANK,
    FLOWERED,
}

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    // 解法1: 统计花的数量, 统计花的个数，然后往中间插入间隔
    // 存在问题，空格在两端，即边界情况问题
    // let curFlowers = 0;
    // let blanks = 0;
    // for(let i = 0; i < flowerbed.length; i++) {
    //     if (flowerbed[i] == 1) { curFlowers++}
    //     if (flowerbed[i] == 0) { blanks++ }
    // }
    // const totalFlowers = curFlowers + n;
    // // 至少需要的间隔数量
    // const minBlanks = totalFlowers - 1;
    // // 1. 间隔数量够不够 2. 是否超出了花台的长度
    // return minBlanks <= blanks && (totalFlowers + minBlanks) <= flowerbed.length

    // 解法2 遍历一次，看前一个位置和后一个位置是否为0，都为0，可以植入，否则继续遍历，但是要考虑边界情况。
    //  const len = flowerbed.length;
    //  let remainFlower = n;
 
    //  if (len === 1) {
    //      return (flowerbed[0] === OPT_TYPE.BLANK && n < 2) ||
    //      (flowerbed[0] === OPT_TYPE.FLOWERED && n < 1)
    //  }
 
    //  for(let i = 0; i < len; i++) {
    //      if (remainFlower < 1) return true
 
    //      if (flowerbed[i] === OPT_TYPE.BLANK) {
 
    //          // 当前是空白，判断是否可以植入
 
    //          // 边界情况
    //          // 左边界
    //          if (i == 0 && flowerbed[i+1] == OPT_TYPE.BLANK) {
    //              flowerbed[i] = OPT_TYPE.FLOWERED
    //              remainFlower--;
    //              continue;
    //          }
    //          // 右边界
    //          if (i == (len - 1) && flowerbed[i-1] == OPT_TYPE.BLANK) {
    //              flowerbed[i] = OPT_TYPE.FLOWERED
    //              remainFlower--;
    //              continue;
    //          }
 
    //          if (flowerbed[i-1] === OPT_TYPE.BLANK && flowerbed[i+1] === OPT_TYPE.BLANK) {
    //              flowerbed[i] = OPT_TYPE.FLOWERED
    //              remainFlower--;
    //          }
    //      }
    //  }
 
    //  return remainFlower < 1;

    // 解法3 优化写法
    const len = flowerbed.length;
    let cnt = 0;

    for(let i = 0; i < len; i++) {

        if (flowerbed[i] === OPT_TYPE.BLANK) {
            // 四个情况两两组合，能覆盖边界情况
            if ((i == 0 || flowerbed[i-1] === OPT_TYPE.BLANK) && (i === (len - 1) || flowerbed[i+1] === OPT_TYPE.BLANK)) {
                cnt++;
                flowerbed[i] = OPT_TYPE.FLOWERED;
            }
        }
    }

    return cnt >= n;
};

export { canPlaceFlowers}