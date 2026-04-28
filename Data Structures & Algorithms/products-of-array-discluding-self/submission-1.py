class Solution:
        def productExceptSelf(self, nums: List[int]) -> List[int]:
            n = len(nums)
            result = [0] * n

            # Fill with left products 
            result[0] = 1 # Nothing to the left of first element
            for i in range(1, n):
                result[i] = result [i - 1] * nums[i - 1]

            # Multiply by right products 
            right_product = 1 
            for i in range(n - 1, -1, -1):
                result[i] = result[i] * right_product
                right_product = right_product * nums[i]

            return result
                