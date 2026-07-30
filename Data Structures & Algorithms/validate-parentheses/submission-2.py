class Solution:
    def isValid(self, s: str) -> bool:
        stack = list()
        openings = ["(", "[", "{"]
        closings = [")", "]", "}"]

        for p in s:
            if p in openings:
                stack.append(p)
            if p in closings and len(stack) == 0:
                return False
            elif p in closings and len(stack) != 0:
                op = stack.pop()
                if openings.index(op) != closings.index(p):
                    return False


        return len(stack) == 0