import { isSubsequence } from "./392-判断子序列"

describe('leetcode 392-判断子序列', () => {
  // it('测试用例1', () => {
  //   expect(isSubsequence("abc", "ahbgdc")).toEqual(true)
  // })

  it('测试用例2', () => {
    expect(isSubsequence("abz", "aazbdz")).toEqual(true)
  })

})