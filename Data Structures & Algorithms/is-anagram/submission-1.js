class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        s = String(s);
        t = String(t);

        return s.split('').sort().join('') == t.split('').sort().join('');
    }
}
