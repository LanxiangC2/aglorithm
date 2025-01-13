import { repeatedSubstringPattern } from './05-正则表达式-重复的子串'

describe('04-正则表达式-重复的子串', () => {
    it('测试用例1', () => {
        expect(repeatedSubstringPattern('abcabc')).toEqual(true)
    })
})