/**
 * @description 反转单向链表
 * @author  星光
 */

export interface ILinkListNode {
    value: number
    next?: ILinkListNode
}

/**
 * 反转单向链表，并返回反转之后的 head node
 * @param listNode ILinkListNode
 */
export function reverseLinkList(listNode: ILinkListNode): ILinkListNode {
    if (listNode.next == undefined) return listNode

    // 定义三个指针
    let prenNode: ILinkListNode | undefined = undefined
    let curNode: ILinkListNode | undefined = undefined
    let nextNode: ILinkListNode | undefined = listNode

    // 以nextNode为主，遍历链表
    while (nextNode) {
        // 第一个元素，删掉 next，防止循环引用
        if (curNode && !prenNode) {
            delete curNode.next
        }

        // 反转指针
        if (curNode && prenNode) {
            curNode.next = prenNode
        }

        // 整体指针移动
        prenNode = curNode
        curNode = nextNode
        nextNode = nextNode?.next
    }

    curNode!.next = prenNode

    return curNode!
}

/**
 * 根据数组创建单向链表
 * @param arr number[]
 * @returns ILinkListNode
 */
export function createLinkList(arr: number[]): ILinkListNode {
    const length = arr.length
    if (length === 0) throw new Error('arr is empty')

    let curNode: ILinkListNode = {
        value: arr[length - 1],
    }

    if (length === 1) return curNode

    for (let i = length - 2; i >= 0; i--) {
        curNode = {
            value: arr[i],
            next: curNode,
        }
    }

    return curNode
}

// const arr = [100, 200, 300, 400, 500]
// let list = createLinkList(arr)
// console.info('list', list)

// const list1 = reverseLinkList(list)
// console.info('list1', list1)
