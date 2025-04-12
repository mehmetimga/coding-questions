class Solution:
    def letterCombinations(self, digits: str) -> list[str]:
        # Handle empty input
        if not digits:
            return []
        
        # Phone keypad mapping
        phone_map = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }
        
        # Get letter mappings for each digit
        letter_mappings = [phone_map[digit] for digit in digits]
        result = []
        
        def generate_combinations(index: int, current_string: str) -> None:
            # Base case: if we've processed all digits
            if index == len(letter_mappings):
                result.append(current_string)
                return
            
            # Try each letter for the current digit
            for letter in letter_mappings[index]:
                # Add current letter to combination and move to next digit
                generate_combinations(index + 1, current_string + letter)
        
        # Start recursive backtracking
        generate_combinations(0, "")
        
        return result