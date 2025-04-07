class Solution:
    def intToRoman(self, num: int) -> str:
        # Define value-symbol pairs in descending order
        value_symbols = [
            (1000, "M"), (900, "CM"), (500, "D"), (400, "CD"),
            (100, "C"), (90, "XC"), (50, "L"), (40, "XL"),
            (10, "X"), (9, "IX"), (5, "V"), (4, "IV"), (1, "I")
        ]
        
        result = ""
        
        # Build the Roman numeral string
        for value, symbol in value_symbols:
            while num >= value:
                num -= value
                result += symbol
        
        return result


# Test cases
if __name__ == "__main__":
    solution = Solution()
    test_cases = [3, 4, 9, 58, 1994, 3999]
    
    for num in test_cases:
        print(f"{num} -> {solution.intToRoman(num)}")