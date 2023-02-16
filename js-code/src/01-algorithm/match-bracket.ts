/**
 * @description 括号
 * @author 星光
 */

/**
 * 判断是否括号匹配
 * @param s1 左括号
 * @param s2 右括号
 */
function isMatch(s1: string, s2: string): boolean {
    if (s1 === '(' && s2 === ')') return true
    if (s1 === '[' && s2 === ']') return true
    if (s1 === '{' && s2 === '}') return true
    return false
}

/**
 * 判断是否括号匹配
 * @param str str
 *
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
export function matchBracket(str: string): boolean {
    const length = str.length
    if (length === 0) return true

    const stack = []

    const leftSybols = '{[('
    const rightSybols = ')]}'

    for (let i = 0; i < length; i++) {
        const s = str[i]

        if (leftSybols.includes(s)) {
            stack.push(s)
        } else if (rightSybols.includes(s)) {
            const top = stack[stack.length - 1]
            if (isMatch(top, s)) {
                stack.pop()
            } else {
                return false
            }
        }
    }

    return stack.length === 0
}

//功能测试
const str = '{a(b[c]d)e}'
console.info(matchBracket(str))
