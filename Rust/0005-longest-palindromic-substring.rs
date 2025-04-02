fn longest_palindrome(s: String) -> String {
    if s.len() < 1 {
        return String::new();
    }

    let s_chars: Vec<char> = s.chars().collect();
    let mut start = 0;
    let mut end = 0;

    for i in 0..s.len() {
        let len1 = expand_around_center(&s_chars, i, i);       // Odd-length
        let len2 = expand_around_center(&s_chars, i, i + 1);   // Even-length
        let len = len1.max(len2);

        if len > end - start {
            start = i.saturating_sub((len - 1) / 2);
            end = i + len / 2;
        }
    }

    s_chars[start..=end].iter().collect()
}

fn expand_around_center(s: &[char], mut left: usize, mut right: usize) -> usize {
    let len = s.len();
    while left <= right && right < len && s[left] == s[right] {
        if left == 0 { break; }
        left -= 1;
        right += 1;
    }

    // If the loop exited due to a mismatch or bounds, correct left
    if s[left] != s[right] || right >= len {
        right -= 1;
        left += 1;
    }

    if right >= left {
        right - left + 1
    } else {
        0
    }
}

fn main() {
    println!("{}", longest_palindrome("babad".to_string())); // "bab" or "aba"
    println!("{}", longest_palindrome("cbbd".to_string()));  // "bb"
}
