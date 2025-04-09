struct Solution;

impl Solution {
    pub fn roman_to_int(s: String) -> i32 {
        // Define the value of each Roman numeral
        let mut roman_values = std::collections::HashMap::new();
        roman_values.insert('I', 1);
        roman_values.insert('V', 5);
        roman_values.insert('X', 10);
        roman_values.insert('L', 50);
        roman_values.insert('C', 100);
        roman_values.insert('D', 500);
        roman_values.insert('M', 1000);
        
        let mut result = 0;
        let mut prev_value = 0;
        
        // Traverse the string from right to left
        for ch in s.chars().rev() {
            let current_value = roman_values.get(&ch).unwrap();
            
            // If current value is greater than or equal to the previous value,
            // add the current value
            if *current_value >= prev_value {
                result += current_value;
            } else {
                // If current value is less than the previous value,
                // subtract the current value (for cases like IV, IX, etc.)
                result -= current_value;
            }
            
            prev_value = *current_value;
        }
        
        result
    }
}

fn main() {
    // Test cases
    let test_cases = vec!["III", "IV", "IX", "LVIII", "MCMXCIV"];
    
    for roman in test_cases {
        println!("{} -> {}", roman, Solution::roman_to_int(roman.to_string()));
    }
}