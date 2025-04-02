class Solution {
public:
    string longestPalindrome(string s) {
        size_t maxLen = 0;
        string ret = "";

        for (int i = 0; i < s.size(); i++) {
            int left = i, right = i;
            while (left >= 0 && right < s.size() && s[left] == s[right]) {
                if (right - left + 1 > maxLen) {
                    maxLen = right - left + 1;
                    ret = s.substr(left, maxLen);
                }
                left--;
                right++;
            }

            left = i;
            right = i + 1;
            while (left >= 0 && right < s.size() && s[left] == s[right]) {
                if (right - left + 1 > maxLen) {
                    maxLen = right - left + 1;
                    ret = s.substr(left, maxLen);
                }
                left--;
                right++;
            }
        }

        return ret;
    }
};
