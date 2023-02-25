/**
 * @description 快速排序 test
 * @author 星光
 */

import { quickSort1, quickSort2 } from './quick-sort'

describe('快速排序 quickSort1', () => {
    it('正常情况', () => {
        const arr = [1, 6, 2, 7, 3, 8, 4, 9, 5]
        const res = quickSort1(arr)
        expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })

    it('有负数', () => {
        const arr = [-2, 2, -3, 3, 1]
        const res = quickSort1(arr)
        expect(res).toEqual([-3, -2, 1, 2, 3])
    })

    it('数组元素都一样', () => {
        const arr: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        const res = quickSort1(arr)
        expect(res).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
    })

    it('空数组', () => {
        const arr: number[] = []
        const res = quickSort1(arr)
        expect(res).toEqual([])
    })
})

describe('快速排序 quickSort2', () => {
    it('正常情况', () => {
        const arr = [1, 6, 2, 7, 3, 8, 4, 9, 5]
        const res = quickSort2(arr)
        expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })

    it('有负数', () => {
        const arr = [-2, 2, -3, 3, 1]
        const res = quickSort2(arr)
        expect(res).toEqual([-3, -2, 1, 2, 3])
    })

    it('数组元素都一样', () => {
        const arr: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        const res = quickSort2(arr)
        expect(res).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
    })

    it('空数组', () => {
        const arr: number[] = []
        const res = quickSort2(arr)
        expect(res).toEqual([])
    })
})
