class Solution:

    def encode(self, strs: List[str]) -> str:
        result = ""
        for s in strs:
            # format : length + "#" + String
            result += str(len(s)) + "#" + s
        return result

    def decode(self, s: str) -> List[str]:
        result = []
        i = 0

        while i < len(s):
            # Find the "#" delimiter
            delimiter_pos = s.find("#", i)

            #Get the length
            length = int(s[i:delimiter_pos])

            #Extract the string using the length
            start = delimiter_pos + 1
            extracted_str = s[start:start + length]

            result.append(extracted_str)

            # Move to next encoded string
            i = start + length 

        return result

