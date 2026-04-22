class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // check every number against every other number
        for (let i = 0; i <nums.length; i++) {
            for(let j = i + 1; j <nums.length; j++) {
                if (nums[i] === nums[j]) {
                    return true; //Found a duplicate
                }
            }
        }
        return false; //No duplicates found
    }
}
  
