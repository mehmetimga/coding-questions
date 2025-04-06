impl Solution {
    pub fn is_match(text: String, pattern: String) -> bool {
        let m = text.len();
        let n = pattern.len();
        let mut dp = vec![vec![false; n + 1]; m + 1];

        // Base case: empty text and empty pattern match
        dp[0][0] = true;

        // Handle patterns like a*, a*b*, etc., that can match an empty string
        for j in 2..=n {
            if pattern.chars().nth(j - 1).unwrap() == '*' {
                dp[0][j] = dp[0][j - 2];
            }
        }

        // Fill the DP table
        for i in 1..=m {
            for j in 1..=n {
                if pattern.chars().nth(j - 1).unwrap() == text.chars().nth(i - 1).unwrap_or('\0') || pattern.chars().nth(j - 1).unwrap() == '.' {
                    // Characters match or pattern has '.'
                    dp[i][j] = dp[i - 1][j - 1];
                } else if pattern.chars().nth(j - 1).unwrap() == '*' {
                    // '*' can match zero or more of the preceding element
                    dp[i][j] = dp[i][j - 2] || 
                               ((pattern.chars().nth(j - 2).unwrap() == text.chars().nth(i - 1).unwrap_or('\0') || pattern.chars().nth(j - 2).unwrap() == '.') && dp[i - 1][j]);
                }
            }
        }

        dp[m][n]
    }
}