class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        nums.sort()
        if(nums[0] !== 0){
            return 0
        }
        let curr = nums[0]

        for(let i = 1; i < nums.length; i++){
            if(nums[i] != curr + 1){
                return curr + 1
            }
            curr = nums[i]
        }
        return nums[nums.length - 1] + 1
    }
}
