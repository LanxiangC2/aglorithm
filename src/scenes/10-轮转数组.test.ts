import { rotate } from "./10-轮转数组";

describe('10-轮转数组', () => {
  it('测试用例1', () => {
    const nums = [-1,-100,3,99], k = 2
    const rawNums = [...nums]
    const expectArr = [3,99,-1,-100]

    rotate(rawNums, k)

    expect(rawNums).toEqual(expectArr)

  })

  it('测试用例2', () => {
    const nums = [1,2,3,4,5,6,7], k = 3
    const rawNums = [...nums]
    const expectArr = [5,6,7,1,2,3,4]

    rotate(rawNums, k)

    expect(rawNums).toEqual(expectArr)

  })
})