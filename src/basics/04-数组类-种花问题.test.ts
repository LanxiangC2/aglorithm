import { canPlaceFlowers } from "./04-数组类-种花问题";

describe("04-数组类-种花问题", () => {
    it('测试用例', () => {
        expect(canPlaceFlowers([0,0,1,0,0,0,1,0,1,0,0,0,1,0,1], 3)).toEqual(true)
    })
})