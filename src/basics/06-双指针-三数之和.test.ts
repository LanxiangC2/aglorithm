import { threeSum } from './06-双指针-三数之和'


describe('06-双指针问题-三数之和', () => {

    it('测试用例1', () => {
        expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2], [-1, 0, 1]])
    })
})