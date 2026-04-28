class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let result = new Array(n);

        // Fill with left products
        result[0] = 1; // Nothing to the left of first element
        for (let i = 1; i <n; i++) {
            result[i] = result [i - 1] * nums [i - 1];

        }

        //Multiply by right products
        let rightProduct = 1;
        for (let i = n - 1; i >= 0; i--) {
            result[i] = result [i] * rightProduct;
            rightProduct = rightProduct * nums[i];
        }

        return result;
    }
}
