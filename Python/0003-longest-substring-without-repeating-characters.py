class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        m = {}
        left = 0
        ret = 0

        for index,c in enumerate(s):
            if c in m and m[c]>=left:
                left = m[c]+1
            m[c] = index
            
            ret = max(index - left+1,ret)

        return ret