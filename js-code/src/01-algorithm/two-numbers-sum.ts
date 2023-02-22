/**
 * @description 两数之和
 * @author 星光
 */

export function findTwoNumbers1(arr: number[], n: number): number[] {
    const res: number[] = []

    const length = arr.length
    if (length === 0) return res

    // O(n^2)
    for (let i = 0; i < length; i++) {
        const n1 = arr[i]
        let flag = false // 是否得到了结果

        for (let j = i + 1; j < length; j++) {
            const n2 = arr[j]

            if (n1 + n2 === n) {
                res.push(n1)
                res.push(n2)
                flag = true
                break
            }
        }

        if (flag) break
    }

    return res
}

/**
 * 查找和为 n 的两个数（双指针）
 * @param arr arr
 * @param n n
 */
export function findTwoNumbers2(arr: number[], n: number): number[] {
    const res: number[] = []

    const length = arr.length
    if (length === 0) return res

    // 头指针
    let i = 0
    // 尾指针
    let j = length - 1

    while (i < j) {
        const n1 = arr[i]
        const n2 = arr[j]
        const sum = n1 + n2

        if (sum > n) {
            // sum 大于 n，则 j 要向前移动
            j--
        } else if (sum < n) {
            // sum 小于 n，则 i 向后移动
            i++
        } else {
            // 相等
            res.push(n1)
            res.push(n2)
            break
        }
    }

    return res
}

// const arr = [10, 20, 30, 40, 50, 60]
// const n = 50
// console.info(findTowNumbers2(arr, n))
