package main

func isMatch(text string, pattern string) bool {
    m, n := len(text), len(pattern)
    dp := make([][]bool, m+1)
    for i := range dp {
        dp[i] = make([]bool, n+1)
    }

    // Base case: empty text and empty pattern match
    dp[0][0] = true

    // Handle patterns like a*, a*b*, etc., that can match an empty string
    for j := 2; j <= n; j++ {
        if pattern[j-1] == '*' {
            dp[0][j] = dp[0][j-2]
        }
    }

    // Fill the DP table
    for i := 1; i <= m; i++ {
        for j := 1; j <= n; j++ {
            if pattern[j-1] == text[i-1] || pattern[j-1] == '.' {
                // Characters match or pattern has '.'
                dp[i][j] = dp[i-1][j-1]
            } else if pattern[j-1] == '*' {
                // '*' can match zero or more of the preceding element
                dp[i][j] = dp[i][j-2] || 
                           ((pattern[j-2] == text[i-1] || pattern[j-2] == '.') && dp[i-1][j])
            }
        }
    }

    return dp[m][n]
}