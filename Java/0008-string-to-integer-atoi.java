class Solution {
    public int myAtoi(String s) {
        int i = 0, n = s.length(), sign = 1, num = 0;

        // 1. Skip leading whitespaces
        while (i < n && s.charAt(i) == ' ') {
            i++;
        }

        // 2. Handle optional sign
        if (i < n && (s.charAt(i) == '+' || s.charAt(i) == '-')) {
            sign = s.charAt(i) == '-' ? -1 : 1;
            i++;
        }

        // 3. Convert digits and handle overflow
        while (i < n && Character.isDigit(s.charAt(i))) {
            int digit = s.charAt(i) - '0';

            // Check overflow
            if (num > (Integer.MAX_VALUE - digit) / 10) {
                return sign == 1 ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            }

            num = num * 10 + digit;
            i++;
        }

        return sign * num;
    }
}
