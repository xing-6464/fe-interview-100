/**
 * @description 两数之和
 * @author 星光
 */

export function findTowNumbers1(arr: number[], n: number): number[] {
    const res: number[] = []

    const length = arr.length
    if (length === 0) return res

    // O(n^2)
    for (let i = 0; i < length; i++) {
        const n1 = arr[1]
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

const arr = [10, 20, 30, 40, 50, 60]
const n = 50
console.info(findTowNumbers1(arr, n))
