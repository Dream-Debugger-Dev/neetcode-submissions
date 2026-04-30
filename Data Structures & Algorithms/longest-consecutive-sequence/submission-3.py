class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0

        # Put all numbers in a set for fast looup
        num_set = set(nums)
        max_length = 0

        for num in num_set:
            # Check of this number is the start of a sequence
            #(if num-1 doesn't exist, then num is a start)
            if num - 1 not in num_set:
                current_num = num
                current_length = 1

                # Count how long this sequence goes
                while current_num + 1 in num_set:
                    current_num += 1
                    current_length += 1

                # Update max length
                max_length = max(max_length, current_length)

        return max_length
