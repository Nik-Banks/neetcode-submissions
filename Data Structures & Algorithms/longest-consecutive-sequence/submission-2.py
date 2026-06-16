class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        hashset = set(nums)
        longest = 0
        for num in nums:
            if (num-1) not in hashset:
                leng = 1
                while (num + leng) in hashset:
                    leng += 1
                longest = max(longest, leng)
        return longest

        


