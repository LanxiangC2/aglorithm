import { closestThreeSum } from './06-双指针-最接近的三数之和'


describe('06-双指针问题-最接近的三数之和', () => {

    it('测试用例1', () => {
        expect(closestThreeSum([-1,2,1,-4], 1)).toEqual(2)
    })

    it('测试用例2', () => {
        expect(closestThreeSum([0,0,0], 1)).toEqual(0)
    })

    it('测试用例3', () => {
        expect(closestThreeSum([1,2,7,13], 12)).toEqual(10)
    })
})