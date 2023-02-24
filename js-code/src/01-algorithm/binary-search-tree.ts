/**
 * @description 二叉搜索树
 * @author 星光
 */

export interface ITreeNode {
    value: number
    left: ITreeNode | null
    right: ITreeNode | null
}

/**
 * 二叉树前序遍历
 * @param node ITreeNode
 */
export function preOrderTraverse(node: ITreeNode | null, arr: number[]) {
    if (node == null) return
    arr.push(node.value)
    preOrderTraverse(node.left, arr)
    preOrderTraverse(node.right, arr)
}

/**
 * 二叉树中序遍历
 * @param node ITreeNode | null
 */
export function inOrderTraverse(node: ITreeNode | null, arr: number[]) {
    if (node == null) return
    inOrderTraverse(node.left, arr)
    // console.info(node.value)
    arr.push(node.value)
    inOrderTraverse(node.right, arr)
}

/**
 * 二叉树后序遍历
 * @param node ITreeNode | null
 */
export function nextOrderTraverse(node: ITreeNode | null, arr: number[]) {
    if (node == null) return
    nextOrderTraverse(node.left, arr)
    nextOrderTraverse(node.right, arr)
    arr.push(node.value)
}

/**
 * 寻找 BST 里的第 k 小值
 * @param node tree node
 * @param k 第几个值
 */
export function getKthValue(node: ITreeNode, k: number): number | null {
    const arr: number[] = []
    inOrderTraverse(node, arr)

    return arr[k - 1] || null
}

// const bst: ITreeNode = {
//     value: 5,
//     left: {
//         value: 3,
//         left: {
//             value: 2,
//             left: null,
//             right: null,
//         },
//         right: {
//             value: 4,
//             left: null,
//             right: null,
//         },
//     },
//     right: {
//         value: 7,
//         left: {
//             value: 6,
//             left: null,
//             right: null,
//         },
//         right: {
//             value: 8,
//             left: null,
//             right: null,
//         },
//     },
// }

// const res = getKthValue(bst, 3)
// console.info(res)
