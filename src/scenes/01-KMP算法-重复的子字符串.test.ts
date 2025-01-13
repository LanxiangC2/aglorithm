import { repeatedSubstringPattern } from './01-KMP算法-重复的子字符串'

describe('04-正则表达式-重复的子串', () => {
    it('测试用例1', () => {
        expect(repeatedSubstringPattern('abcabc')).toEqual(true)
    })

    it('测试用例2', () => {
        expect(repeatedSubstringPattern('abcabcaba')).toEqual(false)
    })
})