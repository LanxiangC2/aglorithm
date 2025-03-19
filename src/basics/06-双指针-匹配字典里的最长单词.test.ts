import { findLongestWord} from './06-双指针-匹配字典里的最长单词'


describe('06-双指针-匹配字典里的最长单词', () => {

    it('测试用例1', () => {
        expect(findLongestWord('abpcleed', ['ale','apple','monkey','plead'])).toBe('apple')
    })

    it('测试用例2', () => {
        expect(findLongestWord('abpcleed', ['a','b','c'])).toBe('a')
    })
})