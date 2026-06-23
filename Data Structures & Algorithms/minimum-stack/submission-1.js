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
        let min = this.stack[0]
        for(let i = 1; i < this.stack.length; i++){
            min = Math.min(min, this.stack[i])
        }
        return min
    }
}
