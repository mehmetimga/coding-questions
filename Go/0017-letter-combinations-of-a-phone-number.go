func letterCombinations(digits string) []string {
	if len(digits) == 0 {
		return []string{}
	}

	// Map digits to their corresponding letters
	phoneMap := map[byte]string{
		'2': "abc",
		'3': "def",
		'4': "ghi",
		'5': "jkl",
		'6': "mno",
		'7': "pqrs",
		'8': "tuv",
		'9': "wxyz",
	}

	var letterMappings []string
	var result []string

	// Store the letter mappings for each digit
	for i := 0; i < len(digits); i++ {
		letterMappings = append(letterMappings, phoneMap[digits[i]])
	}

	// Helper function for backtracking
	var generateCombinations func(index int, currentString string)
	generateCombinations = func(index int, currentString string) {
		// Base case: if we've processed all digits
		if index == len(letterMappings) {
			result = append(result, currentString)
			return
		}

		// Get all letters for the current digit
		letters := letterMappings[index]

		// Try each letter
		for i := 0; i < len(letters); i++ {
			// Add current letter to the combination and move to next digit
			generateCombinations(index+1, currentString+string(letters[i]))
		}
	}

	// Start recursive backtracking
	generateCombinations(0, "")

	return result
}