class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // Clean the string (keep only letters and numbers, make lowercase)
        let cleaned = "";
        for (let char of s) {
            if ((char >= 'a' && char <= 'z') ||
                (char >= 'A' && char <= 'Z') ||
                (char >= '0' && char <= '9')) {
                cleaned += char.toLowerCase();
            }
        }

        // Check if cleanned string equals its reverse
        let reversed = cleaned.split('').reverse().join('');
        return cleaned === reversed;
    }
}
