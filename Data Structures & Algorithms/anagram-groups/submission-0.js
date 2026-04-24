class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = new Map(); // sorting box

        for (let word of strs) {
            // Sort letters to make a "key" (like organizing toys)
            let sortedWord = word.split('').sort().join('');

            //If haven't seen this pattern before, make new group
            if (!groups.has(sortedWord)) {
                groups.set(sortedWord, []);
            }

            // Add word to its group
            groups.get(sortedWord).push(word);
        }

        // Return all groups as arraus
        return Array.from(groups.values());
    }
}
