/**
 * @description 括号匹配 test
 * @author 星光
 */

import { matchBracket } from './match-bracket'

describe('括号匹配', () => {
    it('正常情况', () => {
        const str = '{a(b[c]d)e}'
        const res = matchBracket(str)
        expect(res).toBeTruthy()
    })

    it('不匹配', () => {
        const str = '{a(b[(c]d)e}'
        const res = matchBracket(str)
        expect(res).toBeFalsy()
    })

    it('顺序不一样', () => {
        const str = '{a(b]c[d)e}'
        const res = matchBracket(str)
        expect(res).toBeFalsy()
    })

    it('空字符串', () => {
        const res = matchBracket('')
        expect(res).toBeTruthy()
    })
})
