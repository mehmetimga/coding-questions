class Solution {
public:
    unordered_map<char, string> m = {
        {'2', "abc"}, {'3', "def"}, {'4', "ghi"}, {'5', "jkl"},
        {'6', "mno"}, {'7', "pqrs"}, {'8', "tuv"}, {'9', "wxyz"}
    };
    vector<string> dm;
    vector<string> ret1;

    void permutations(int index, string str) {
        if (index == dm.size()) {
            ret1.push_back(str);
            return;
        }
        
        for (char c : dm[index]) {
            permutations(index + 1, str + c);
        }
    }
    vector<string> letterCombinations(string digits) {
        if (digits.empty()) {
            return {};
        }

        dm.clear();
        ret1.clear();

        for (char digit : digits) {
            dm.push_back(m[digit]);
        }
        permutations(0, "");
        return ret1;
    }
};