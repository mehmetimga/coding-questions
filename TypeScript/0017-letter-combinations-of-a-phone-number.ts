function letterCombinations(digits: string): string[] {
    // Handle empty input
    if (digits.length === 0) {
        return [];
    }
    
    // Phone keypad mapping
    const phoneMap: Record<string, string> = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    // Get letter mappings for each digit
    const letterMappings: string[] = [];
    for (const digit of digits) {
        letterMappings.push(phoneMap[digit]);
    }
    
    const result: string[] = [];
    
    // Helper function for backtracking
    function generateCombinations(index: number, currentString: string): void {
        // Base case: if we've processed all digits
        if (index === letterMappings.length) {
            result.push(currentString);
            return;
        }
        
        // Try each letter for the current digit
        for (const letter of letterMappings[index]) {
            // Add current letter to combination and move to next digit
            generateCombinations(index + 1, currentString + letter);
        }
    }
    
    // Start recursive backtracking
    generateCombinations(0, "");
    
    return result;
}