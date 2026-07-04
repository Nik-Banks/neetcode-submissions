class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length
        let missingNumber = 0

        while(n != 0){
            if(!nums.includes(n)){
                return n
            }
            n--
        }
        return missingNumber
    }
}
