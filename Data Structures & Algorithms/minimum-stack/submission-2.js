class MinStack {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.stack.length == 0){
            throw new Error("Stack is empty")
        } else {
            this.stack.pop()
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
        return Math.min(...this.stack)
    }
}
