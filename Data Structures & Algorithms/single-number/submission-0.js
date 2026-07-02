class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let hash = new Map()
        for(const n of nums){
            hash.set(n, (hash.get(n) || 0) + 1)
        }
        for(const [key, val] of hash){
            if(val == 1){
                return key
            }
        }
    }
}
