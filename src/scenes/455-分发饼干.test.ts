import { findContentChildren } from "./455-分发饼干"

describe('455-分发饼干', () => {
    it('测试用例', () => {
        expect(findContentChildren([1,2,3],[1,1])).toBe(1)
    })
    it('测试用例2', () => {
        expect(findContentChildren([1,2],[1,2,3])).toBe(2)
    })
})