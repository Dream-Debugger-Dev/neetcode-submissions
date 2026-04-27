class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // counting how many time each number appearing
        let countMap =  new Map();
        for (let num of nums) {
            countMap.set(num, (countMap.get(num) || 0) +1);
        }

        // Sort number by their frequency (most popular first)
        let sortedNums = Array.from(countMap.keys()).sort((a, b) => {
            return countMap.get(b) - countMap.get(a); //b - a for descendiong order
        });

        //Take the first K numbers  (most popular ones)
        return sortedNums.slice(0, k);

    }
}

