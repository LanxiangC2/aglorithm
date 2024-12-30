
import { bubbleSort } from "./01-冒泡排序";

describe('01-冒泡排序 函数测试', () => {
  // 测试用例1 常规正整数数组排序
  it('应该正确对正整数数组进行排序', () => {
    const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const expectedResult = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
    const actualResult = bubbleSort(nums);
    // toBe toEqual toStrictEqual
    expect(actualResult).toStrictEqual(expectedResult);
  });

  // 测试用例2：包含负整数的数组排序
  it('应该正确对包含负整数的数组进行排序', () => {
    const nums = [-3, 1, -4, 1, 5, -9, 2, 6, 5, 3, 5];
    const expectedResult = [-9, -4, -3, 1, 1, 2, 3, 5, 5, 5, 6];
    const actualResult = bubbleSort(nums);
    expect(actualResult).toStrictEqual(expectedResult);
  });

  // 测试用例3：空数组情况
  it('对于空数组应该返回空数组', () => {
    const nums = [];
    const expectedResult = [];
    const actualResult = bubbleSort(nums);
    expect(actualResult).toEqual(expectedResult);
  });

  // 测试用例4：单元素数组情况
  it('对于单元素数组应该返回原数组', () => {
      const nums = [5];
      const expectedResult = [5];
      const actualResult = bubbleSort(nums);
      expect(actualResult).toEqual(expectedResult);
  });
})