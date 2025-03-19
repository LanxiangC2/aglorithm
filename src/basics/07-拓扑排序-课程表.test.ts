import { canFinish } from './07-拓扑排序-课程表'


describe('07-拓扑排序-课程表', () => {
  it('测试用例1', () => {
    expect(canFinish(2, [[1, 0]])).toBeTruthy()
  })
  it('测试用例2', () => {
    expect(canFinish(2, [[1, 0], [0, 1]])).toBeFalsy()
  })
  it('测试用例3', () => {
    expect(canFinish(3, [[1, 0], [2, 0]])).toBeTruthy()
  })
});