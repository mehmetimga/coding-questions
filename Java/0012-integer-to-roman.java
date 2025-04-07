class Solution {
    public String intToRoman(int num) {
        // Define value-symbol pairs in descending order
        int[] values = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
        String[] symbols = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
        
        StringBuilder result = new StringBuilder();
        
        // Build the Roman numeral string
        for (int i = 0; i < values.length; i++) {
            while (num >= values[i]) {
                num -= values[i];
                result.append(symbols[i]);
            }
        }
        
        return result.toString();
    }
}

// Test class
class IntToRomanTest {
    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] testCases = {3, 4, 9, 58, 1994, 3999};
        
        for (int num : testCases) {
            System.out.printf("%d -> %s%n", num, solution.intToRoman(num));
        }
    }
}