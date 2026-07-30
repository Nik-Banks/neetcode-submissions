class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        nums = {"0", "1", "2", "3", "4", "5", "6", "7", "8", "9"}
        ops = {"+", "-", "*", "/"}

        for t in tokens:
            if t == "+":
                stack.append(stack.pop() + stack.pop())
            elif t == "-":
                a,b = stack.pop(), stack.pop()
                stack.append(b-a)
            elif t == "*":
                stack.append(stack.pop() * stack.pop())
            elif t == "/":
                a,b = stack.pop(), stack.pop()
                stack.append(int(b / a))
            else:
                stack.append(int(t))        
            

        return stack.pop()