class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = {} # Sorting box

        for word in strs:
            # Sort letters to make a "key" (like organizing toys)
            sorted_word = ''.join(sorted(word))

            # if haven't seen this pattern before, make new group
            if sorted_word not in groups:
                groups[sorted_word] = []

            # Add word to its group
            groups[sorted_word].append(word)

        # Return all groups as lists
        return list(groups.values())
        