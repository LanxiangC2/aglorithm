
import { maxAltitude } from './183-望远镜中的最高海拔'

describe('183-望远镜中的最高海拔', () => {
  it('测试用例1', () => {
    expect(maxAltitude([14,2,27,-5,28,13,39], 3)).toBe([27,27,28,28,39])
  })
})