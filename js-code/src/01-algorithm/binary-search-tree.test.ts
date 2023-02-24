/**
 * @description 二叉搜索树 test
 * @author 星光
 */

import {
    ITreeNode,
    inOrderTraverse,
    nextOrderTraverse,
    preOrderTraverse,
    getKthValue,
} from './binary-search-tree'

describe('二叉搜索寻找第k个最小值', () => {
    const bst: ITreeNode = {
        value: 5,
        left: {
            value: 3,
            left: {
                value: 2,
                left: null,
                right: null,
            },
            right: {
                value: 4,
                left: null,
                right: null,
            },
        },
        right: {
            value: 7,
            left: {
                value: 6,
                left: null,
                right: null,
            },
            right: {
                value: 8,
                left: null,
                right: null,
            },
        },
    }

    it('正常情况', () => {
        const res = getKthValue(bst, 3)
        expect(res).toBe(4)
    })

    it('k 不在正常范围之内', () => {
        const res1 = getKthValue(bst, 0)
        expect(res1).toBeNull()

        const res2 = getKthValue(bst, 1000)
        expect(res2).toBeNull()
    })
})

describe('二叉树前序遍历', () => {
    const bst: ITreeNode = {
        value: 5,
        left: {
            value: 3,
            left: {
                value: 2,
                left: null,
                right: null,
            },
            right: {
                value: 4,
                left: null,
                right: null,
            },
        },
        right: {
            value: 7,
            left: {
                value: 6,
                left: null,
                right: null,
            },
            right: {
                value: 8,
                left: null,
                right: null,
            },
        },
    }

    it('正常情况', () => {
        const arr: number[] = []
        preOrderTraverse(bst, arr)
        expect(arr).toEqual([5, 3, 2, 4, 7, 6, 8])
    })
})

describe('中序遍历', () => {
    const bst: ITreeNode = {
        value: 5,
        left: {
            value: 3,
            left: {
                value: 2,
                left: null,
                right: null,
            },
            right: {
                value: 4,
                left: null,
                right: null,
            },
        },
        right: {
            value: 7,
            left: {
                value: 6,
                left: null,
                right: null,
            },
            right: {
                value: 8,
                left: null,
                right: null,
            },
        },
    }

    it('正常情况', () => {
        const arr: number[] = []
        inOrderTraverse(bst, arr)
        expect(arr).toEqual([2, 3, 4, 5, 6, 7, 8])
    })
})

describe('二叉树后序遍历', () => {
    const bst: ITreeNode = {
        value: 5,
        left: {
            value: 3,
            left: {
                value: 2,
                left: null,
                right: null,
            },
            right: {
                value: 4,
                left: null,
                right: null,
            },
        },
        right: {
            value: 7,
            left: {
                value: 6,
                left: null,
                right: null,
            },
            right: {
                value: 8,
                left: null,
                right: null,
            },
        },
    }

    it('正常情况', () => {
        const arr: number[] = []
        nextOrderTraverse(bst, arr)
        expect(arr).toEqual([2, 4, 3, 6, 8, 7, 5])
    })
})
