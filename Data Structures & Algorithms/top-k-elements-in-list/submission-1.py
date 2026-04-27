class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        from collections import Counter

        # Count and get K most common

        count = Counter(nums)
        return [num for num, freq in count.most_common(k)]