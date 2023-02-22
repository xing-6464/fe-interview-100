/**
 * @description 两数之和 test
 * @author 星光
 */

import { findTwoNumbers1, findTwoNumbers2 } from './two-numbers-sum'

describe('两数之和（循环）', () => {
    it('正常情况', () => {
        const arr = [10, 20, 30, 40, 50, 60]
        const res = findTwoNumbers1(arr, 100)
        expect(res).toEqual([40, 60])
    })

    it('空数组', () => {
        const res = findTwoNumbers1([], 20)
        expect(res).toEqual([])
    })

    it('找不到结果', () => {
        const arr = [10, 20, 30, 40, 50, 60]
        const res = findTwoNumbers1(arr, 200)
        expect(res).toEqual([])
    })
})

describe('两数之和（双指针）', () => {
    it('正常情况', () => {
        const arr = [10, 20, 30, 40, 50, 60]
        const res = findTwoNumbers2(arr, 100)
        expect(res).toEqual([40, 60])
    })

    it('空数组', () => {
        const res = findTwoNumbers2([], 20)
        expect(res).toEqual([])
    })

    it('找不到结果', () => {
        const arr = [10, 20, 30, 40, 50, 60]
        const res = findTwoNumbers2(arr, 200)
        expect(res).toEqual([])
    })
})
