/**
 * @description 二叉搜索树
 * @author 星光
 */

interface ITreeNode {
    value: number
    left: ITreeNode | null
    right: ITreeNode | null
}

/**
 * 二叉树前序遍历
 * @param node ITreeNode
 */
function preOrderTraverse(node: ITreeNode | null) {
    if (node == null) return
    console.info(node.value)
    preOrderTraverse(node.left)
    preOrderTraverse(node.right)
}

/**
 * 二叉树中序遍历
 * @param node ITreeNode | null
 */
function inOrderTraverse(node: ITreeNode | null) {
    if (node == null) return
    inOrderTraverse(node.left)
    console.info(node.value)
    inOrderTraverse(node.right)
}

/**
 * 二叉树后序遍历
 * @param node ITreeNode | null
 */
function nextOrderTraverse(node: ITreeNode | null) {
    if (node == null) return
    nextOrderTraverse(node.left)
    nextOrderTraverse(node.right)
    console.info(node.value)
}

const tree: ITreeNode = {
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

preOrderTraverse(tree)
console.info('---------------------')
inOrderTraverse(tree)
console.info('---------------------')
nextOrderTraverse(tree)
