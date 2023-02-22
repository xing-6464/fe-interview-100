/**
 * @description 两数之和 test
 * @author 星光
 */

import { findTowNumbers1 } from './tow-numbers-sum'

describe('两数之和（循环）', () => {
    it('正常情况', () => {
        const arr = [10, 20, 30, 40, 50, 60]
        const res = findTowNumbers1(arr, 50)
        expect(res).toEqual([20, 30])
    })

    it('空数组', () => {
        const res = findTowNumbers1([], 20)
        expect(res).toEqual([])
    })

    it('找不到结果', () => {
        const arr = [10, 20, 30, 40, 50, 60]
        const res = findTowNumbers1(arr, 100)
        expect(res).toEqual([])
    })
})
