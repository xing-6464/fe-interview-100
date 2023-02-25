/**
 * @description 快速排序
 * @author 星光
 */

/**
 * 快速排序（使用splice）
 * @param arr number arr
 */
export function quickSort1(arr: number[]): number[] {
    const length = arr.length
    if (length === 0) return arr

    const midIndex = Math.floor(length / 2)
    const midValue = arr.splice(midIndex, 1)[0]

    const left: number[] = []
    const right: number[] = []

    for (let i = 0; i < arr.length; i++) {
        const n = arr[i]
        if (n < midValue) {
            // 小于midValue，则放在 left
            left.push(n)
        } else {
            // 大于midValue，则放在 right
            right.push(n)
        }
    }

    return quickSort1(left).concat([midValue], quickSort1(right))
}

/**
 * 快速排序（使用slice）
 * @param arr number arr
 */
export function quickSort2(arr: number[]): number[] {
    const length = arr.length
    if (length === 0) return arr

    const midIndex = Math.floor(length / 2)
    const midValue = arr.slice(midIndex, midIndex + 1)[0]

    const left: number[] = []
    const right: number[] = []

    for (let i = 0; i < length; i++) {
        if (i !== midIndex) {
            const n = arr[i]
            if (n < midValue) {
                // 小于midValue，则放在 left
                left.push(n)
            } else {
                // 大于midValue，则放在 right
                right.push(n)
            }
        }
    }

    return quickSort2(left).concat([midValue], quickSort2(right))
}

// 功能测试
// const arr1 = [1, 6, 2, 7, 8, 4, 9, 5]
// console.info(quickSort2(arr1))
