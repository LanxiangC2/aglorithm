import { maxSubArray } from './53-最大子序和'

describe('53-最大子序和', () => {
  it('测试用例1', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
  })
  it('测试用例2', () => {
    expect(maxSubArray([1])).toBe(1)
  })
  it('测试用例3', () => {
    expect(maxSubArray([0])).toBe(0)
  })
})