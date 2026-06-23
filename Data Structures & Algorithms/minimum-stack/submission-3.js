class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        let v = 0
        if(this.minStack.length == 0){
            v = val
        } else {
            v = Math.min(val, this.minStack[this.minStack.length - 1])
        }
        this.minStack.push(v)
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.stack.length == 0){
            throw new Error("Stack is empty")
        } else {
            this.stack.pop()
            this.minStack.pop()
        }
    }

    /**
     * @return {number}
     */
    top() {
        if(this.stack.length == 0){
            throw new Error("Stack is empty")
        } else {
            return this.stack[this.stack.length - 1]
        }
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}
