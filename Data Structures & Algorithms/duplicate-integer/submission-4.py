class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        s = {}
        for n in nums:
            if n not in s:
                s[n] = s.get(n, 1)
            else:
                return True
        return False