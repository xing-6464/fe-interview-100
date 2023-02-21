/**
 * @description 用链表实现队列
 * @author  星光
 */

export interface IListNode {
    value: number
    next: IListNode | null
}

export class MyQueue {
    private head: IListNode | null = null
    private tail: IListNode | null = null
    private len: number = 0

    /**
     * 入队，在tail位置
     * @param n number
     */
    add(n: number) {
        const newNode: IListNode = {
            value: n,
            next: null,
        }

        // 处理head
        if (this.head == null) {
            this.head = newNode
        }

        // 处理 tail
        const tailNode = this.tail
        if (tailNode) {
            tailNode.next = newNode
        }
        this.tail = newNode

        // 处理 len
        this.len++
    }

    /**
     * 出队，在 head 出队
     */
    delete(): number | null {
        const headNode = this.head
        if (headNode == null) return null
        if (this.len <= 0) return null

        if (this.len === 1) {
            this.head = null
            this.tail = null
            return headNode.value
        }

        // 取值
        const value = headNode.value

        // 处理 head
        this.head = headNode.next

        // 处理 len
        this.len--

        return value
    }

    get length(): number {
        // len 要单独存储，不能遍历链表来获取 （否则时间复杂度太高）
        return this.len
    }
}

// const q = new MyQueue()
// q.add(100)
// q.add(200)
// q.add(300)
// console.info('length1', q.length)
// console.log(q.delete())
// console.info('length1', q.length)
// console.log(q.delete())
// console.info('length1', q.length)

// 性能测试
const q1 = new MyQueue()
console.time('queue with list')
for (let i = 0; i < 10 * 10000; i++) {
    q1.add(i)
}
for (let i = 0; i < 10 * 10000; i++) {
    q1.delete()
}
console.timeEnd('queue with list') // 4ms

const q2 = []
console.time('queue with array')
for (let i = 0; i < 10 * 10000; i++) {
    q2.push(i)
}
for (let i = 0; i < 10 * 10000; i++) {
    q2.shift()
}
console.timeEnd('queue with array') // 400ms
