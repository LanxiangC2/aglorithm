import { grayCode } from "./04-数组类-格雷编码";

describe('04-数组类-格雷编码', () => {
    it ('测试用例1', () => {
        // 使用expect.arrayContaining来检查结果是否包含预期的两种可能情况中的元素
        const result = grayCode(2);
        // 先判断结果数组长度是否为4
        expect(result.length).toBe(4);
        // 再使用expect.arrayContaining来检查结果是否包含预期的两种可能情况中的元素
        expect(result).toEqual(expect.arrayContaining([0, 1, 3, 2]));
        expect(result).toEqual(expect.arrayContaining([0, 2, 3, 1]));
    })

    it ('测试用例2', () => {

        expect(grayCode(1)).toEqual([0,1])
    })
})