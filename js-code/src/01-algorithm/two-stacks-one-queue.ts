/**
 * @description 两个栈 - 一个队列
 * @author 星光
 */

export class MyQueue {
    private stack1: number[] = []
    private stack2: number[] = []

    /**
     * 入队
     * @param n n
     */
    add(n: number) {
        this.stack1.push(n)
    }

    /**
     * 出队
     */
    delete(): number | null {
        let res

        const stack1 = this.stack1
        const stack2 = this.stack2

        // 将 stack1 所有元素移动到 stack2 中
        while (stack1.length) {
            const n = stack1.pop()
            if (n != null) {
                stack2.push(n)
            }
        }

        // stack2 pop
        res = stack2.pop()

        // 将 stack2 所有元素移动到 stack1 中
        while (stack2.length) {
            const n = stack2.pop()
            if (n != null) {
                stack1.push(n)
            }
        }

        return res || null
    }

    get length(): number {
        return this.stack1.length
    }
}

// 功能测试
const q = new MyQueue()
q.add(1)
q.add(2)
q.add(3)
q.add(4)
console.info(q.length)
console.info(q.delete())
console.info(q.length)
