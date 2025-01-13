import { fibonacciIteractor } from './01-斐波那契数'

describe('01-斐波那契数的测试用例', () => {
    it('测试用例1', () => {
        expect(fibonacciIteractor(8)).toEqual(13)
    })

    it('测试用例2', () => {
        expect(fibonacciIteractor(7)).toEqual(8)
    })

    it('测试用例3', () => {
        expect(fibonacciIteractor(1)).toEqual(0)
    })

    it('测试用例4', () => {
        expect(fibonacciIteractor(2)).toEqual(1)
    })
})