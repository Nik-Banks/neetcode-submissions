class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hash = new Map()

        for(const n of nums){
            hash.set(n, (hash.get(n) || 0) + 1)
        }

        for(const [key, val] of hash){
            if(val >= 2){
                return true
            }
        }
        return false
    }
}
