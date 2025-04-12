 impl Solution {
    pub fn letter_combinations(digits: String) -> Vec<String> {
        // Handle empty input
        if digits.is_empty() {
            return vec![];
        }
        
        // Define phone keypad mapping
        let phone_map: std::collections::HashMap<char, &str> = [
            ('2', "abc"),
            ('3', "def"),
            ('4', "ghi"),
            ('5', "jkl"),
            ('6', "mno"),
            ('7', "pqrs"),
            ('8', "tuv"),
            ('9', "wxyz"),
        ].iter().cloned().collect();
        
        // Get letter mappings for each digit
        let letter_mappings: Vec<&str> = digits.chars()
            .filter_map(|digit| phone_map.get(&digit))
            .copied()
            .collect();
        
        let mut result: Vec<String> = Vec::new();
        
        // Helper function for backtracking (using closure)
        fn generate_combinations(
            index: usize,
            current_string: String,
            letter_mappings: &[&str],
            result: &mut Vec<String>
        ) {
            // Base case: if we've processed all digits
            if index == letter_mappings.len() {
                result.push(current_string);
                return;
            }
            
            // Try each letter for the current digit
            for letter in letter_mappings[index].chars() {
                let mut new_string = current_string.clone();
                new_string.push(letter);
                
                // Add current letter to combination and move to next digit
                generate_combinations(index + 1, new_string, letter_mappings, result);
            }
        }
        
        // Start recursive backtracking
        generate_combinations(0, String::new(), &letter_mappings, &mut result);
        
        result
    }
}