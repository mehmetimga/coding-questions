class Solution {
    public int romanToInt(String s) {
        // Define the value of each Roman numeral
        java.util.Map<Character, Integer> romanValues = new java.util.HashMap<>();
        romanValues.put('I', 1);
        romanValues.put('V', 5);
        romanValues.put('X', 10);
        romanValues.put('L', 50);
        romanValues.put('C', 100);
        romanValues.put('D', 500);
        romanValues.put('M', 1000);
        
        int result = 0;
        int prevValue = 0;
        
        // Traverse the string from right to left
        for (int i = s.length() - 1; i >= 0; i--) {
            int currentValue = romanValues.get(s.charAt(i));
            
            // If current value is greater than or equal to the previous value,
            // add the current value
            if (currentValue >= prevValue) {
                result += currentValue;
            } else {
                // If current value is less than the previous value,
                // subtract the current value (for cases like IV, IX, etc.)
                result -= currentValue;
            }
            
            prevValue = currentValue;
        }
        
        return result;
    }
}

// Test class
class RomanToIntTest {
    public static void main(String[] args) {
        Solution solution = new Solution();
        String[] testCases = {"III", "IV", "IX", "LVIII", "MCMXCIV"};
        
        for (String roman : testCases) {
            System.out.printf("%s -> %d%n", roman, solution.romanToInt(roman));
        }
    }
}