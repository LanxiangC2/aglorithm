import { findJudge } from './997-图的出入度-找到小镇的法官'

describe('997-图的出入度-找到小镇的法官', () => {
    it('测试用例1', () => {
        expect(findJudge(2, [[1, 2]])).toBe(2)
    })
    it ('测试用例2', () => {
        expect(findJudge(3, [[1, 3], [2, 3]])).toBe(3)
    })
    it ('测试用例3', () => {
        expect(findJudge(3, [[1, 3], [2, 3], [3, 1]])).toBe(-1)
    })
})