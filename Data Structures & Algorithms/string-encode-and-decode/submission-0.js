class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (let str of strs) {
            // format : length + "#" + string
            result += str.length + "#" + str;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;

        while (i < str.length) {
            // Find the "#" delimiter
            let delimiterPos = str.indexOf("#", i);

            // Get the length
            let length = parseInt(str.substring(i, delimiterPos));

            // Extra the String using the length 
            let start = delimiterPos +1;
            let extractedStr = str.substring(start, start + length);

            result.push(extractedStr);

            // Move to next encoded string
            i = start + length
        }

        return result;
    }
}
