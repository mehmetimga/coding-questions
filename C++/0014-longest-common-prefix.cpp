class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        if (strs.empty()) return "";
        string ret;

        for (int j = 0; j < strs[0].length(); ++j) {
            char c = strs[0][j];
            for (int i = 1; i < strs.size(); ++i) {
                if (j >= strs[i].length() || strs[i][j] != c) {
                    return ret;
                }
            }
            ret += c;
        }
        return ret;
    }
};
