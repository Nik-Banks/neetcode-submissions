class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = nums
        let len = nums.length

        for(let i = 0; i < len; i++){
            ans.push(nums[i])
        }
        return ans
    }
}
