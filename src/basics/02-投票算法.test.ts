import { majorityElement } from "./02-投票算法";

describe('02-投票算法 函数测试', () => {
  it('多数元素 测试1', () => {
    const nums = [2,2,1,1,1,2,2]
    const expectRes = 2
    const actualRes = majorityElement(nums)
    expect(actualRes).toEqual(expectRes)
  })

  it('多数元素 测试2', () => {
    const nums = [3,3,4]
    const expectRes = 3
    const actualRes = majorityElement(nums)
    expect(actualRes).toEqual(expectRes)
  })
})