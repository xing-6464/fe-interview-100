/**
 * @description 数组旋转k步
 * @author 星光
 */

/**
 * 数组旋转 k 步 - 使用 pop 和 unshift
 * @param arr arr
 * @param k k
 * @returns arr
 */
export function rotate1(arr: number[], k: number): number[] {
    const length = arr.length
    if (!k || length === 0) return arr
    const step = Math.abs(k % length) // abs 取绝对值

    //  O(n^2)
    for (let i = 0; i < step; i++) {
        const n = arr.pop()
        if (n) {
            arr.unshift(n) // 数组是有序结构，unshift操作非常慢
        }
    }

    return arr
}

/**
 * 旋转数组 k 步 - 使用 concat
 * @param arr arr
 * @param k k
 * @returns arr
 */
export function rotate2(arr: number[], k: number): number[] {
    const length = arr.length
    if (!k || length === 0) return arr
    const step = Math.abs(k % length) // abs 取绝对值

    // 时间复杂度 O(1)
    const part1 = arr.slice(-step)
    const part2 = arr.slice(0, length - step)
    const part3 = part1.concat(part2)

    return part3
}

// 性能测试
const arr1 = []
for (let i = 0; i < 100000; i++) {
    arr1.push(1)
}

console.time('rotate1')
rotate1(arr1, 9 * 10000) // 711 ms
console.timeEnd('rotate1')

const arr2 = []
for (let i = 0; i < 100000; i++) {
    arr2.push(1)
}

console.time('rotate2')
rotate2(arr2, 9 * 10000) // 0.27 ms
console.timeEnd('rotate2')
