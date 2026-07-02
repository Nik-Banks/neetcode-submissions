class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0
        let right = 1
        let lowest = prices[0]
        let maxProfit = 0

        while(right <= prices.length - 1){
            if(prices[right] < lowest){
                lowest = prices[right]
            }
            if(prices[right] >= prices[left]){
                maxProfit = Math.max(maxProfit, (prices[right] - lowest))
                right++
            } else {
                right++
                left++
            }
        }
        return maxProfit
    }
}
