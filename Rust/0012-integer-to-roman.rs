struct Solution;

impl Solution {
    pub fn int_to_roman(mut num: i32) -> String {
        // Define value-symbol pairs in descending order
        let value_symbols = [
            (1000, "M"), (900, "CM"), (500, "D"), (400, "CD"),
            (100, "C"), (90, "XC"), (50, "L"), (40, "XL"),
            (10, "X"), (9, "IX"), (5, "V"), (4, "IV"), (1, "I"),
        ];
        
        let mut result = String::new();
        
        // Build the Roman numeral string
        for &(value, symbol) in value_symbols.iter() {
            while num >= value {
                num -= value;
                result.push_str(symbol);
            }
        }
        
        result
    }
}

fn main() {
    // Test cases
    let test_cases = [3, 4, 9, 58, 1994, 3999];
    
    for &num in test_cases.iter() {
        println!("{} -> {}", num, Solution::int_to_roman(num));
    }
}