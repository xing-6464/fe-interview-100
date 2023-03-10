/**
 * @description 斐波那契数列
 * @author 星光
 */

// /**
//  * 斐波那契数列（递归）
//  * @param n n
//  */
// function fibonacci(n: number): number {
//     if (n === 0) return 0
//     if (n === 1) return 1

//     return fibonacci(n - 1) + fibonacci(n - 2)
// }

/**
 * 斐波那契数列（循环）
 * @param n n
 */
function fibonacci(n: number): number {
    if (n <= 0) return 0
    if (n === 1) return 1

    let n1 = 1 // 记录 n-1
    let n2 = 0 // 记录 n-2
    let res = 0

    for (let i = 0; i <= n; i++) {
        res = n1 + n2

        // 记录中间结果
        n2 = n1
        n1 = res
    }

    return res
}
