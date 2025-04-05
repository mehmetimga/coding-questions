class Solution {
public:
    int myAtoi(string s) {
        int i = 0, n = s.size(), sign = 1, num = 0;

        // 1. Skip leading whitespaces
        while (i < n && s[i] == ' ') i++;

        // 2. Handle optional sign
        if (i < n && (s[i] == '+' || s[i] == '-')) {
            sign = (s[i] == '-') ? -1 : 1;
            i++;
        }

        // 3. Convert digits and handle overflow
        while (i < n && isdigit(s[i])) {
            int digit = s[i] - '0';

            if (num > (INT_MAX - digit) / 10) {
                return sign == 1 ? INT_MAX : INT_MIN;
            }

            num = num * 10 + digit;
            i++;
        }

        return sign * num;
    }
};
