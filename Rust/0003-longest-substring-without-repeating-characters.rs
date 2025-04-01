use std::collections::HashMap;

fn length_of_longest_substring(s: String) -> usize {
    let mut map: HashMap<char, usize> = HashMap::new();
    let mut left = 0;
    let mut max_len = 0;

    for (right, c) in s.chars().enumerate() {
        if let Some(&prev_index) = map.get(&c) {
            if prev_index >= left {
                left = prev_index + 1;
            }
        }

        map.insert(c, right);
        max_len = max_len.max(right - left + 1);
    }

    max_len
}

fn main() {
    let input = String::from("abcabcbb");
    let result = length_of_longest_substring(input);
    println!(
        "Length of longest substring without repeating characters: {}",
        result
    );
}
