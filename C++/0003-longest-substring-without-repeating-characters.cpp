class Solution {
public:
int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> m;
        int left = 0;
        int ret = 0;

        for (int index = 0; index < s.length(); ++index) {
            char c = s[index];
            if (m.count(c) && m[c] >= left) {
                left = m[c] + 1;
            }
            m[c] = index;
            ret = max(ret, index - left + 1);
        }

        return ret;
    }
};