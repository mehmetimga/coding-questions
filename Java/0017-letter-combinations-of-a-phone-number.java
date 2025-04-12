import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    private Map<Character, String> phoneMap = new HashMap<>() {{
        put('2', "abc");
        put('3', "def");
        put('4', "ghi");
        put('5', "jkl");
        put('6', "mno");
        put('7', "pqrs");
        put('8', "tuv");
        put('9', "wxyz");
    }};
    
    private List<String> letterMappings = new ArrayList<>();
    private List<String> result = new ArrayList<>();
    
    public List<String> letterCombinations(String digits) {
        if (digits.isEmpty()) {
            return result;
        }
        
        // Clear lists in case the method is called multiple times
        letterMappings.clear();
        result.clear();
        
        // Store the letter mappings for each digit
        for (char digit : digits.toCharArray()) {
            letterMappings.add(phoneMap.get(digit));
        }
        
        // Start recursive backtracking
        generateCombinations(0, "");
        
        return result;
    }
    
    private void generateCombinations(int index, String currentString) {
        // Base case: if we've processed all digits
        if (index == letterMappings.size()) {
            result.add(currentString);
            return;
        }
        
        // Get all letters for the current digit
        String letters = letterMappings.get(index);
        
        // Try each letter
        for (char letter : letters.toCharArray()) {
            // Add current letter to the combination and move to next digit
            generateCombinations(index + 1, currentString + letter);
        }
    }
}