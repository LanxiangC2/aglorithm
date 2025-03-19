import { numDecodings } from "./91-动态规划-解码方法";

describe("91-动态规划-解码方法", () => {

    it("测试用例1", () => {
        expect(numDecodings("12")).toBe(2)
    })

    it("测试用例2", () => {
        expect(numDecodings("226")).toBe(3)
    })
})