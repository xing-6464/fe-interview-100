/**
 * @description 反转单向链表
 * @author  星光
 */

interface ILinkListNode {
    value: number
    next?: ILinkListNode
}

function createLinkList(arr: number[]): ILinkListNode {
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

const arr = [100, 200, 300, 400, 500]
console.log(createLinkList(arr))
