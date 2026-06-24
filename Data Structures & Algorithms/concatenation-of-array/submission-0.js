class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = []
        let loop = 0
        
        while (loop != 2){
            for(const n of nums){
                ans.push(n)
            }
            loop++
        }
        return ans
    }
}
