

import { minWindow } from './76-滑动窗口-最小覆盖子串'

describe('76-滑动窗口-最小覆盖子串', () => {

    it('测试用例1', () => {
        expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC")
    })

    it('测试用例2', () => {
        expect(minWindow("a", "aa")).toBe("")
    })

    it('测试用例3', () => {
        expect(minWindow("a", "a")).toBe("a")
    })
})