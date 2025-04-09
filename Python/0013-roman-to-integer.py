class Solution:
    def romanToInt(self, s: str) -> int:
        # Define the value of each Roman numeral
        roman_values = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        
        result = 0
        prev_value = 0
        
        # Traverse the string from right to left
        for char in reversed(s):
            current_value = roman_values[char]
            
            # If current value is greater than or equal to the previous value,
            # add the current value
            if current_value >= prev_value:
                result += current_value
            else:
                # If current value is less than the previous value,
                # subtract the current value (for cases like IV, IX, etc.)
                result -= current_value
            
            prev_value = current_value
        
        return result


# Test cases
if __name__ == "__main__":
    solution = Solution()
    test_cases = ["III", "IV", "IX", "LVIII", "MCMXCIV"]
    
    for roman in test_cases:
        print(f"{roman} -> {solution.romanToInt(roman)}")