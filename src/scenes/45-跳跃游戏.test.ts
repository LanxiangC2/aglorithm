import { canJump } from "./55-跳跃游戏"

describe('55-轮转数组', () => {
  it('成功测试用例1', () => {

    expect(canJump([2,3,1,1,4])).toEqual(true)

  })

  it('失败测试用例1', () => {

    expect(canJump([3,2,1,0,4])).toEqual(false)

  })

})