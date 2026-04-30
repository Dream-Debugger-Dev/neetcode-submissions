class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length ===0) return 0;

        // put all numbers in a set for fast lookup
        let numSet = new Set(nums);
        let maxLength = 0;

        for (let num of numSet) {
            // Check if this number is the start of a sequence
            // (if num-1 doesn't exist, then num is a start)
            if (!numSet.has(num - 1)) {
                let currentNum = num;
                let currentLength = 1;

                // Count how long this sequence goes
                while (numSet.has(currentNum +1)) {
                    currentNum++;
                    currentLength++;
                }

                // Update max length
                maxLength = Math.max(maxLength, currentLength);
            }
        }

        return maxLength;
    }
}
